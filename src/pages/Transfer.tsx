import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Plus, ArrowUpDown, CheckCircle2, ChevronRight } from 'lucide-react';
import './Transfer.css';

interface FavoriteRecipient {
  id: string;
  name: string;
  country: string;
  destination: string;
  flag: string;
  avatar: string;
}

interface AllRecipient {
  id: string;
  name: string;
  country: string;
  destination: string;
  lastTransfer: string;
  status: string;
  flag: string;
  avatar: string;
  isWallet: boolean;
}

const favoriteRecipients: FavoriteRecipient[] = [
  {
    id: "fav-001",
    name: "Mama",
    country: "Indonesia",
    destination: "DANA Wallet",
    flag: "https://flagcdn.com/w40/id.png",
    avatar: "Mama"
  },
  {
    id: "fav-002",
    name: "Father",
    country: "Indonesia",
    destination: "BCA Bank",
    flag: "https://flagcdn.com/w40/id.png",
    avatar: "Father"
  },
  {
    id: "fav-003",
    name: "Brother",
    country: "Indonesia",
    destination: "OVO Wallet",
    flag: "https://flagcdn.com/w40/id.png",
    avatar: "Brother"
  }
];

const allRecipients: AllRecipient[] = [
  {
    id: "rec-001",
    name: "Talita Vicki",
    country: "Indonesia",
    destination: "DANA Wallet",
    lastTransfer: "Yesterday",
    status: "Verified Recipient",
    flag: "https://flagcdn.com/w40/id.png",
    avatar: "Talita Vicki",
    isWallet: true
  },
  {
    id: "rec-002",
    name: "Juan Dela Cruz",
    country: "Philippines",
    destination: "BDO Bank",
    lastTransfer: "2 days ago",
    status: "Verified Recipient",
    flag: "https://flagcdn.com/w40/ph.png",
    avatar: "Juan Dela Cruz",
    isWallet: false
  },
  {
    id: "rec-003",
    name: "Nur Aisyah",
    country: "Singapore",
    destination: "DBS Bank",
    lastTransfer: "5 days ago",
    status: "Verified Recipient",
    flag: "https://flagcdn.com/w40/sg.png",
    avatar: "Nur Aisyah",
    isWallet: false
  },
  {
    id: "rec-004",
    name: "Minh Tran",
    country: "Vietnam",
    destination: "MoMo Wallet",
    lastTransfer: "1 week ago",
    status: "Verified Recipient",
    flag: "https://flagcdn.com/w40/vn.png",
    avatar: "Minh Tran",
    isWallet: true
  }
];

const Transfer: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering logic for the list of all recipients
  const filteredRecipients = allRecipients.filter((rec) => {
    const query = searchQuery.toLowerCase();
    return (
      rec.name.toLowerCase().includes(query) ||
      rec.country.toLowerCase().includes(query) ||
      rec.destination.toLowerCase().includes(query)
    );
  });

  return (
    <div className="transfer-container">
      {/* Header */}
      <header className="transfer-header animate-fade-in-up stagger-1">
        <button className="back-button" onClick={() => navigate(-1)} aria-label="Go back">
          <ArrowLeft size={24} color="var(--brand-primary)" />
        </button>
        <div className="header-text">
          <h1 className="header-title">Send Money</h1>
          <p className="header-subtitle">Choose a recipient to start your transfer.</p>
        </div>
        <div className="header-right-placeholder" />
      </header>

      {/* Search Bar */}
      <div className="transfer-search-container animate-fade-in-up stagger-2">
        <div className="transfer-search-bar glass-panel">
          <Search size={20} color="var(--text-tertiary)" className="search-icon" />
          <input 
            type="text" 
            className="transfer-search-input" 
            placeholder="Search recipient, bank, or wallet"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Favorite Recipients Section */}
      {searchQuery === '' && (
        <div className="transfer-section animate-fade-in-up stagger-3">
          <div className="section-header">
            <h2 className="section-title">Favorite Recipients</h2>
            <button className="section-link" onClick={() => navigate('/transfers/recipients')}>
              View All
            </button>
          </div>
          
          <div className="favorites-horizontal-scroll">
            {favoriteRecipients.map((fav) => (
              <div 
                key={fav.id} 
                className="fav-item-card glass-panel"
                onClick={() => navigate(`/transfers/new/${fav.id}`)}
              >
                <div className="fav-avatar-container">
                  <img 
                    src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(fav.avatar)}`} 
                    alt={fav.name} 
                    className="fav-avatar" 
                  />
                  <img src={fav.flag} alt={fav.country} className="fav-flag-badge" />
                </div>
                <span className="fav-name">{fav.name}</span>
                <span className="fav-destination">{fav.destination}</span>
              </div>
            ))}

            <div className="fav-item-card add-new-fav glass-panel" onClick={() => navigate('/transfers/recipients')}>
              <div className="fav-avatar-container add-btn">
                <Plus size={20} color="var(--brand-primary)" />
              </div>
              <span className="fav-name" style={{ color: 'var(--brand-primary)' }}>Add</span>
              <span className="fav-destination">Recipient</span>
            </div>
          </div>
        </div>
      )}

      {/* All Recipients Section */}
      <div className="transfer-section animate-fade-in-up stagger-4">
        <div className="section-header">
          <h2 className="section-title">All Recipients</h2>
          <button className="section-sort-btn">
            <span>Sort</span>
            <ArrowUpDown size={14} />
          </button>
        </div>

        <div className="all-recipients-list">
          {filteredRecipients.length > 0 ? (
            filteredRecipients.map((rec) => (
              <div key={rec.id} className="recipient-row-card glass-panel">
                <div className="recipient-row-left">
                  <div className="recipient-avatar-container">
                    <img 
                      src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(rec.avatar)}`} 
                      alt={rec.name} 
                      className="recipient-avatar" 
                    />
                    <img src={rec.flag} alt={rec.country} className="recipient-flag-badge" />
                  </div>
                  
                  <div className="recipient-details-col">
                    <div className="recipient-name-row">
                      <span className="recipient-fullname">{rec.name}</span>
                      <span className="verified-badge">
                        <CheckCircle2 size={11} className="verified-icon" />
                        <span>Verified</span>
                      </span>
                    </div>
                    
                    <span className="recipient-destination-info">
                      {rec.country} • {rec.destination}
                    </span>
                    
                    <div className="last-transfer-info">
                      <span className="last-transfer-lbl">Last transfer: </span>
                      <span className="last-transfer-val">{rec.lastTransfer}</span>
                    </div>
                  </div>
                </div>

                <button 
                  className="continue-btn"
                  onClick={() => navigate(`/transfers/new/${rec.id}`)}
                >
                  <span>Continue</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            ))
          ) : (
            <div className="empty-state-container glass-panel">
              <p className="empty-title">No recipients found</p>
              <p className="empty-subtitle">Try another name, bank, or wallet.</p>
              <button className="empty-add-btn" onClick={() => navigate('/transfers/recipients')}>
                <Plus size={16} />
                <span>Add New Recipient</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add New Recipient CTA */}
      {filteredRecipients.length > 0 && (
        <div className="add-recipient-cta-container animate-fade-in-up stagger-5">
          <button className="dashed-add-btn" onClick={() => navigate('/transfers/recipients')}>
            <Plus size={20} />
            <span>Add New Recipient</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Transfer;
