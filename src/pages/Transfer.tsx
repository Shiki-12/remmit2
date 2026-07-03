import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Plus, Wallet, Building, CheckCircle2, ArrowUpDown } from 'lucide-react';
import './Transfer.css';

const Transfer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="transfer-container">
      {/* Header */}
      <div className="top-header animate-fade-in-up stagger-1">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} color="#0f766e" />
        </button>
        <h1 className="header-title">Send Money</h1>
        <div className="header-right-placeholder" />
      </div>

      {/* Search Bar */}
      <div className="transfer-search-container animate-fade-in-up stagger-2">
        <div className="transfer-search-bar">
          <Search size={20} color="var(--text-tertiary)" />
          <input 
            type="text" 
            className="transfer-search-input" 
            placeholder="Search recipient, bank, or wallet"
          />
        </div>
      </div>

      {/* Favorite Recipients */}
      <div className="transfer-section animate-fade-in-up stagger-3">
        <div className="section-header">
          <h2 className="section-title">Favorite Recipients</h2>
          <button className="section-link">View All</button>
        </div>
        
        <div className="favorites-list">
          <div className="fav-item">
            <div className="fav-avatar-wrapper">
              <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Mama" alt="Mama" className="fav-avatar" />
              <img src="https://flagcdn.com/w40/id.png" alt="ID" className="fav-flag" />
            </div>
            <span className="fav-name">Mama</span>
            <span className="fav-country">Indonesia</span>
            <span className="fav-wallet">DANA Wallet</span>
          </div>

          <div className="fav-item">
            <div className="fav-avatar-wrapper">
              <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Father" alt="Father" className="fav-avatar" />
              <img src="https://flagcdn.com/w40/id.png" alt="ID" className="fav-flag" />
            </div>
            <span className="fav-name">Father</span>
            <span className="fav-country">Indonesia</span>
            <span className="fav-wallet">BCA Bank</span>
          </div>

          <div className="fav-item">
            <div className="fav-avatar-wrapper">
              <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Brother" alt="Brother" className="fav-avatar" />
              <img src="https://flagcdn.com/w40/id.png" alt="ID" className="fav-flag" />
            </div>
            <span className="fav-name">Brother</span>
            <span className="fav-country">Indonesia</span>
            <span className="fav-wallet">OVO Wallet</span>
          </div>

          <div className="fav-item">
            <button className="fav-add-btn">
              <Plus size={24} />
            </button>
            <span className="fav-name" style={{ color: 'var(--brand-primary)' }}>Add Recipient</span>
          </div>
        </div>
      </div>

      {/* All Recipients */}
      <div className="transfer-section animate-fade-in-up stagger-4">
        <div className="section-header">
          <h2 className="section-title">All Recipients</h2>
          <button className="section-link" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Sort <ArrowUpDown size={16} />
          </button>
        </div>

        <div className="all-recipients-list">
          <div className="tr-recipient-card glass-panel">
            <div className="rc-left">
              <div className="rc-avatar-wrapper">
                <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Vicki" alt="Talita Vicki" className="rc-avatar" />
                <img src="https://flagcdn.com/w40/id.png" alt="ID" className="rc-flag" />
              </div>
              <div className="rc-info">
                <span className="rc-name">Talita Vicki</span>
                <span className="rc-country">Indonesia</span>
                <div className="rc-wallet">
                  <Wallet size={14} /> DANA Wallet
                </div>
                <div className="rc-verified">
                  <CheckCircle2 size={12} /> Verified Recipient
                </div>
              </div>
            </div>
            <div className="rc-right">
              <div className="rc-last-transfer">
                <span className="rc-lt-label">Last transfer</span>
                <span className="rc-lt-value">Yesterday</span>
              </div>
              <button className="rc-continue-btn">Continue</button>
            </div>
          </div>

          <div className="tr-recipient-card glass-panel">
            <div className="rc-left">
              <div className="rc-avatar-wrapper">
                <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Juan" alt="Juan Dela Cruz" className="rc-avatar" />
                <img src="https://flagcdn.com/w40/ph.png" alt="PH" className="rc-flag" />
              </div>
              <div className="rc-info">
                <span className="rc-name">Juan Dela Cruz</span>
                <span className="rc-country">Philippines</span>
                <div className="rc-wallet">
                  <Building size={14} /> BDO Bank
                </div>
                <div className="rc-verified">
                  <CheckCircle2 size={12} /> Verified Recipient
                </div>
              </div>
            </div>
            <div className="rc-right">
              <div className="rc-last-transfer">
                <span className="rc-lt-label">Last transfer</span>
                <span className="rc-lt-value">2 days ago</span>
              </div>
              <button className="rc-continue-btn">Continue</button>
            </div>
          </div>

          <div className="tr-recipient-card glass-panel">
            <div className="rc-left">
              <div className="rc-avatar-wrapper">
                <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Aisyah" alt="Nur Aisyah" className="rc-avatar" />
                <img src="https://flagcdn.com/w40/sg.png" alt="SG" className="rc-flag" />
              </div>
              <div className="rc-info">
                <span className="rc-name">Nur Aisyah</span>
                <span className="rc-country">Singapore</span>
                <div className="rc-wallet">
                  <Building size={14} /> DBS Bank
                </div>
                <div className="rc-verified">
                  <CheckCircle2 size={12} /> Verified Recipient
                </div>
              </div>
            </div>
            <div className="rc-right">
              <div className="rc-last-transfer">
                <span className="rc-lt-label">Last transfer</span>
                <span className="rc-lt-value">5 days ago</span>
              </div>
              <button className="rc-continue-btn">Continue</button>
            </div>
          </div>

          <div className="tr-recipient-card glass-panel">
            <div className="rc-left">
              <div className="rc-avatar-wrapper">
                <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Minh" alt="Minh Tran" className="rc-avatar" />
                <img src="https://flagcdn.com/w40/vn.png" alt="VN" className="rc-flag" />
              </div>
              <div className="rc-info">
                <span className="rc-name">Minh Tran</span>
                <span className="rc-country">Vietnam</span>
                <div className="rc-wallet">
                  <Wallet size={14} /> MoMo Wallet
                </div>
                <div className="rc-verified">
                  <CheckCircle2 size={12} /> Verified Recipient
                </div>
              </div>
            </div>
            <div className="rc-right">
              <div className="rc-last-transfer">
                <span className="rc-lt-label">Last transfer</span>
                <span className="rc-lt-value">1 week ago</span>
              </div>
              <button className="rc-continue-btn">Continue</button>
            </div>
          </div>
        </div>
      </div>

      <div className="add-new-container animate-fade-in-up stagger-5">
        <button className="btn-dashed-large">
          <Plus size={20} /> Add New Recipient
        </button>
      </div>

    </div>
  );
};

export default Transfer;
