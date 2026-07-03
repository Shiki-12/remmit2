import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Send, ArrowLeft } from 'lucide-react';
import ContactAvatar from '../components/ContactAvatar';
import './Recipients.css';

const Recipients: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="recipients-container">
      {/* TopHeader exactly matched */}
      <div className="top-header animate-fade-in-up stagger-1">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} color="#0f766e" />
        </button>
        <h1 className="header-title" style={{ color: '#0f766e' }}>Recepients</h1>
        <div className="header-right-placeholder" />
      </div>
      
      <div className="search-container animate-fade-in-up stagger-2">
        <div className="search-bar glass-panel">
          <Search size={20} color="var(--text-tertiary)" />
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search name, email or phone"
          />
        </div>
      </div>

      <div className="favorites-section animate-fade-in-up stagger-3">
        <div className="section-header">
          <h2 className="section-title">Favorites</h2>
          <button className="section-link">View All</button>
        </div>
        <div className="favorites-list">
          <ContactAvatar name="Add" isAdd />
          <ContactAvatar name="Mama" isActive />
          <ContactAvatar name="Father" />
          <ContactAvatar name="Brother" />
        </div>
      </div>

      <div className="all-recipients-section animate-fade-in-up stagger-4">
        <h2 className="all-recipients-title">All Recepients</h2>
        
        <div className="recipient-list">
          {Array(4).fill(0).map((_, i) => (
            <div className="recipient-card glass-panel" key={i}>
              <div className="recipient-header">
                <img 
                  className="recipient-avatar" 
                  src={`https://api.dicebear.com/7.x/adventurer/svg?seed=Vicki${i}`} 
                  alt="Talita Vicki Avatar" 
                />
                <div className="recipient-info">
                  <span className="recipient-name" style={{ color: 'var(--text-primary)' }}>Talita Vicki</span>
                  <span className="recipient-meta">
                    GCash <div className="meta-dot" /> Bank Transfer
                  </span>
                </div>
              </div>
              <div className="recipient-actions">
                <button className="btn-send primary-btn" onClick={() => navigate('/transfers/new')}>
                  <Send size={16} /> Send
                </button>
                <button className="btn-details" style={{ color: '#0f766e', borderColor: 'var(--border-light)' }}>Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipients;
