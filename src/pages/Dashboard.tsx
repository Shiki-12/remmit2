import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Plus, Users, Eye, ChevronRight, ArrowUp, Send, Receipt } from 'lucide-react';
import ContactAvatar from '../components/ContactAvatar';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header animate-fade-in-up stagger-1">
        <div className="user-info">
          <img 
            className="user-avatar" 
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=Aneka" 
            alt="User Avatar" 
          />
          <div className="greeting">
            <span className="greeting-time">Good Morning</span>
            <span className="greeting-name">Hello, User</span>
          </div>
        </div>
        <button className="notification-btn">
          <Bell size={20} color="var(--brand-primary)" />
        </button>
      </header>

      {/* Balance Card */}
      <div className="balance-card animate-fade-in-up stagger-2">
        <div className="balance-card-bg" />
        <div className="balance-content-wrapper">
          <div className="balance-top">
            <span className="balance-title">Total Balance <Eye size={16} /></span>
            <button className="details-btn">Details <ChevronRight size={16} /></button>
          </div>
          
          <div className="balance-amount-wrapper">
            <div className="balance-amount">S$12,450.00</div>
            <div className="balance-trend">
              <span className="trend-badge"><ArrowUp size={12} /> +2.4%</span>
              <span className="trend-text">vs last week</span>
            </div>
          </div>

          <div className="balance-divider" />

          <div className="balance-bottom">
            <div className="balance-stats">
              <div className="stat-box">
                <span className="stat-label">Available <div className="dot green" /></span>
                <span className="stat-value">S$9,250.00</span>
              </div>
            </div>
            
            <button className="crypto-btn" style={{ marginRight: '4px' }}>
              <div className="crypto-btn-icon"><span className="usd-sign" style={{ fontSize: '13px', fontWeight: 'bold' }}>$</span></div>
              <div className="crypto-btn-info">
                <span className="crypto-btn-code">USDC</span>
                <span className="crypto-btn-amount">9,250.00</span>
              </div>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions-wrapper animate-fade-in-up stagger-3">
        <button className="quick-action-item" onClick={() => navigate('/transfers/new')}>
          <div className="action-icon-square primary">
            <Send size={24} />
          </div>
          <span className="action-label">Send</span>
        </button>
        
        <button className="quick-action-item" onClick={() => navigate('/wallet/add-funds')}>
          <div className="action-icon-square">
            <Plus size={24} />
          </div>
          <span className="action-label">Add Funds</span>
        </button>
        
        <button className="quick-action-item" onClick={() => navigate('/transfers/recipients')}>
          <div className="action-icon-square">
            <Users size={24} />
          </div>
          <span className="action-label">Recepients</span>
        </button>
        
        <button className="quick-action-item" onClick={() => navigate('/smart-split')}>
          <div className="action-icon-square">
            <Receipt size={24} />
          </div>
          <span className="action-label">Smart Split</span>
        </button>
      </div>

      {/* Exchange Rate Banner */}
      <div className="exchange-banner animate-fade-in-up stagger-4">
        <div className="flags">
          <img className="flag-circle" src="https://flagcdn.com/w80/id.png" alt="IDR flag" />
          <img className="flag-circle" src="https://flagcdn.com/w80/sg.png" alt="SGD flag" />
        </div>
        <div className="rate-info">
          <span className="rate-text">1 SGD = 11,842 IDR</span>
          <span className="arrival-time" style={{ color: 'var(--brand-success)' }}>
            <div className="arrival-dot" style={{ backgroundColor: 'var(--brand-success)' }} /> ARRIVAL &lt; 30S
          </span>
        </div>
        <div className="low-fees-badge" style={{ backgroundColor: '#ebf5f4', color: 'var(--brand-primary)' }}>Low Fees</div>
      </div>

      {/* Favorites */}
      <div className="animate-fade-in-up stagger-5">
        <div className="section-header">
          <h2 className="section-title">Favorites</h2>
          <button className="section-link" onClick={() => navigate('/transfers/recipients')}>View All</button>
        </div>
        <div className="favorites-list">
          <ContactAvatar name="Mama" isActive />
          <ContactAvatar name="Father" />
          <ContactAvatar name="Brother" />
          <ContactAvatar name="Add" isAdd />
        </div>
      </div>

      {/* Recent Activities */}
      <div className="animate-fade-in-up stagger-5" style={{ paddingBottom: '32px' }}>
        <div className="section-header">
          <h2 className="section-title">Recent Activities</h2>
          <button className="section-link" onClick={() => navigate('/transfers')}>See History</button>
        </div>
        <div className="activities-list">
          <a href="#" className="activity-item glass-panel">
            <div className="activity-left">
              <img className="activity-icon" src="https://api.dicebear.com/7.x/adventurer/svg?seed=Lily" alt="Mama" />
              <div className="activity-details">
                <span className="activity-name">Mama</span>
                <span className="activity-meta">Today <div className="meta-dot" /> Remittance</span>
              </div>
            </div>
            <div className="activity-right">
              <span className="activity-amount">-S$500.00</span>
              <span className="activity-status success">COMPLETED</span>
            </div>
          </a>
          <a href="#" className="activity-item glass-panel">
            <div className="activity-left">
              <img className="activity-icon" src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix" alt="Father" />
              <div className="activity-details">
                <span className="activity-name">Father</span>
                <span className="activity-meta">Yesterday <div className="meta-dot" /> Remittance</span>
              </div>
            </div>
            <div className="activity-right">
              <span className="activity-amount">-S$200.00</span>
              <span className="activity-status success">COMPLETED</span>
            </div>
          </a>
          <a href="#" className="activity-item glass-panel">
            <div className="activity-left">
              <img className="activity-icon" src="https://api.dicebear.com/7.x/adventurer/svg?seed=Power" alt="PLN" />
              <div className="activity-details">
                <span className="activity-name">PLN (Electrivity)</span>
                <span className="activity-meta">2 days ago <div className="meta-dot" /> Bill Payment</span>
              </div>
            </div>
            <div className="activity-right">
              <span className="activity-amount">-S$45.00</span>
              <span className="activity-status processing">PROCESSING</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
