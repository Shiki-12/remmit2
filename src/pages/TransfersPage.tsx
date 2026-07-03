import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, Calendar, ChevronDown, ChevronRight, Send } from 'lucide-react';
import './TransfersPage.css';

interface Transaction {
  id: string;
  name: string;
  country: string;
  wallet: string;
  amount: string;
  convertedAmount: string;
  date: string;
  status: 'Completed' | 'In Progress' | 'Failed';
  avatar: string;
}

const mockTransactions: Transaction[] = [
  {
    id: "TRX-001",
    name: "Talita Vicki",
    country: "Indonesia",
    wallet: "DANA Wallet",
    amount: "S$500.00",
    convertedAmount: "Rp5,921,000",
    date: "Today, 10:45 AM",
    status: "Completed",
    avatar: "Talita Vicki"
  },
  {
    id: "TRX-002",
    name: "John Dela Cruz",
    country: "Philippines",
    wallet: "GCash Wallet",
    amount: "S$300.00",
    convertedAmount: "₱12,500",
    date: "Yesterday, 2:30 PM",
    status: "Completed",
    avatar: "John Dela Cruz"
  },
  {
    id: "TRX-003",
    name: "Aisyah Rahman",
    country: "Malaysia",
    wallet: "Bank Account",
    amount: "S$250.00",
    convertedAmount: "RM875.40",
    date: "19 July 2026, 11:20 AM",
    status: "In Progress",
    avatar: "Aisyah Rahman"
  },
  {
    id: "TRX-004",
    name: "Minh Nguyen",
    country: "Vietnam",
    wallet: "MoMo Wallet",
    amount: "S$150.00",
    convertedAmount: "₫2,640,000",
    date: "18 July 2026, 5:15 PM",
    status: "Failed",
    avatar: "Minh Nguyen"
  },
  {
    id: "TRX-005",
    name: "Natcha K.",
    country: "Thailand",
    wallet: "Bank Account",
    amount: "S$400.00",
    convertedAmount: "฿10,120.00",
    date: "17 July 2026, 8:05 PM",
    status: "Completed",
    avatar: "Natcha K."
  }
];

const countryFlags: { [key: string]: string } = {
  Indonesia: "https://flagcdn.com/w40/id.png",
  Philippines: "https://flagcdn.com/w40/ph.png",
  Malaysia: "https://flagcdn.com/w40/my.png",
  Vietnam: "https://flagcdn.com/w40/vn.png",
  Thailand: "https://flagcdn.com/w40/th.png"
};

const TransfersPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'In Progress' | 'Completed' | 'Failed'>('All');

  // Filter logic based on search queries and selected status chip
  const filteredTransactions = mockTransactions.filter((tx) => {
    const matchesSearch = 
      tx.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tx.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = 
      statusFilter === 'All' || 
      tx.status === statusFilter;
      
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="transfers-page-container">
      {/* Header */}
      <header className="transfers-header animate-fade-in-up stagger-1">
        <div className="header-info">
          <h1 className="transfers-title">Transfers</h1>
          <p className="transfers-subtitle">Track and manage your money transfers.</p>
        </div>
        <button className="header-filter-btn" aria-label="Filters">
          <SlidersHorizontal size={20} color="var(--brand-primary)" />
        </button>
      </header>

      {/* Search Bar */}
      <div className="transfers-search-section animate-fade-in-up stagger-2">
        <div className="search-bar glass-panel">
          <Search size={18} color="var(--text-tertiary)" className="search-icon" />
          <input
            type="text"
            placeholder="Search by recipient or transaction ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Filter Chips & Month selector */}
      <div className="filters-row animate-fade-in-up stagger-3">
        <div className="chips-container">
          {(['All', 'In Progress', 'Completed', 'Failed'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`filter-chip ${statusFilter === status ? 'active' : ''}`}
            >
              {status}
            </button>
          ))}
        </div>
        
        <button className="month-selector-btn">
          <Calendar size={14} />
          <span>This Month</span>
          <ChevronDown size={14} />
        </button>
      </div>

      {/* Transaction List */}
      <div className="transfers-list animate-fade-in-up stagger-4">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((tx) => (
            <div 
              key={tx.id} 
              className="transaction-card glass-panel"
              onClick={() => navigate(`/transfers/${tx.id}`)}
            >
              <div className="card-left">
                <div className="avatar-container">
                  <img
                    src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(tx.avatar)}`}
                    alt={tx.name}
                    className="avatar-img"
                  />
                  {countryFlags[tx.country] && (
                    <img
                      src={countryFlags[tx.country]}
                      alt={tx.country}
                      className="flag-img"
                    />
                  )}
                </div>
                <div className="transaction-details">
                  <div className="recipient-name">{tx.name}</div>
                  <div className="recipient-meta">
                    {tx.country} • {tx.wallet}
                  </div>
                  <div className="transaction-date">{tx.date}</div>
                </div>
              </div>
              
              <div className="card-right">
                <div className="amount-info">
                  <div className="sgd-amount">{tx.amount}</div>
                  <div className="converted-amount">{tx.convertedAmount}</div>
                </div>
                <div className="status-chevron-row">
                  <span className={`status-badge ${tx.status.toLowerCase().replace(' ', '-')}`}>
                    {tx.status}
                  </span>
                  <ChevronRight size={16} color="var(--text-tertiary)" className="chevron-icon" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>No transfers match your filters.</p>
          </div>
        )}
      </div>

      {/* Bottom CTA Card */}
      <div className="no-transfers-cta glass-panel animate-fade-in-up stagger-5">
        <div className="cta-content">
          <h3 className="cta-title">No transfers yet?</h3>
          <p className="cta-subtitle">Send money to your family and track it here.</p>
        </div>
        <button className="cta-send-btn primary-btn" onClick={() => navigate('/transfers/new')}>
          <Send size={16} />
          <span>Send Money</span>
        </button>
      </div>
    </div>
  );
};

export default TransfersPage;
