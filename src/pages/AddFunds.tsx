import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, CheckCircle2, CreditCard, Building, Smartphone, ChevronRight, ArrowLeft, ArrowRight, X, Send, Clock, Shield, Tag, Zap } from 'lucide-react';
import './AddFunds.css';

const AddFunds: React.FC = () => {
  const navigate = useNavigate();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <div className="add-funds-container">
      {/* TopHeader exactly matched */}
      <div className="top-header animate-fade-in-up stagger-1">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} color="#0f766e" />
        </button>
        <h1 className="header-title" style={{ color: '#0f766e' }}>Add Funds</h1>
        <div className="header-right-placeholder" />
      </div>

      <div className="amount-input-section glass-panel animate-fade-in-up stagger-2" style={{ margin: '0 15px 24px', borderRadius: '24px' }}>
        <div className="amount-header">Enter amount to add</div>
        <div className="amount-display">
          <span className="amount-value" style={{ color: '#054F48' }}>500.00</span>
          <div className="currency-selector" style={{ backgroundColor: 'white' }}>
            <img className="currency-icon" src="https://flagcdn.com/w40/sg.png" alt="SGD Flag" style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }} />
            <span className="currency-code">SGD</span>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className="current-balance-row">
          <div>
            <span className="balance-label">Current Balance:</span>
            <span className="balance-value">S$1,240.50</span>
          </div>
          <div className="balance-details" style={{ color: '#0f766e', cursor: 'pointer' }} onClick={() => setIsDetailsOpen(true)}>
            <CheckCircle2 size={16} color="#0f766e" />
            <span>Details</span>
          </div>
        </div>
      </div>

      <div className="payment-methods-section animate-fade-in-up stagger-3">
        <h2 className="payment-title">Select Payment Method</h2>
        
        <div className="method-list">
          <div className="method-item glass-panel" style={{ padding: '16px', borderRadius: '16px' }}>
            <div className="method-left">
              <div className="method-icon-box" style={{ backgroundColor: '#ebf5f4', color: '#0f766e', border: 'none' }}>
                <CreditCard size={24} />
              </div>
              <div className="method-info">
                <span className="method-name" style={{ color: '#0f766e' }}>Debit Cards</span>
                <span className="method-meta">
                  Instant <div className="meta-dot" /> Up to S$5,000
                </span>
              </div>
            </div>
            <ChevronRight size={20} color="#0f766e" />
          </div>

          <div className="method-item glass-panel" style={{ padding: '16px', borderRadius: '16px' }}>
            <div className="method-left">
              <div className="method-icon-box" style={{ backgroundColor: '#ebf5f4', color: '#0f766e', border: 'none' }}>
                <Building size={24} />
              </div>
              <div className="method-info">
                <span className="method-name" style={{ color: '#0f766e' }}>Bank Transfer</span>
                <span className="method-meta">
                  1-2 hours <div className="meta-dot" /> No Limit
                </span>
              </div>
            </div>
            <ChevronRight size={20} color="#0f766e" />
          </div>

          <div className="method-item glass-panel" style={{ padding: '16px', borderRadius: '16px' }}>
            <div className="method-left">
              <div className="method-icon-box" style={{ backgroundColor: '#ebf5f4', color: '#0f766e', border: 'none' }}>
                <Smartphone size={24} />
              </div>
              <div className="method-info">
                <span className="method-name" style={{ color: '#0f766e' }}>Apple Pay</span>
                <span className="method-meta">
                  Instant <div className="meta-dot" /> Secure
                </span>
              </div>
            </div>
            <ChevronRight size={20} color="#0f766e" />
          </div>

          <div className="method-item glass-panel" style={{ padding: '16px', borderRadius: '16px' }}>
            <div className="method-left">
              <div className="method-icon-box" style={{ backgroundColor: '#ebf5f4', color: '#0f766e', border: 'none' }}>
                <Smartphone size={24} />
              </div>
              <div className="method-info">
                <span className="method-name" style={{ color: '#0f766e' }}>Google Pay</span>
                <span className="method-meta">
                  Instant <div className="meta-dot" /> Secure
                </span>
              </div>
            </div>
            <ChevronRight size={20} color="#0f766e" />
          </div>
        </div>
      </div>

      <div className="continue-btn-container animate-fade-in-up stagger-4">
        <button className="btn-primary-large" style={{ backgroundColor: '#0f766e', gap: '8px' }}>
          Continue <ArrowRight size={18} />
        </button>
      </div>

      {isDetailsOpen && (
        <div className="modal-overlay" onClick={() => setIsDetailsOpen(false)}>
          <div className="bottom-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-handle-container">
              <div className="sheet-handle" />
            </div>
            
            <div className="sheet-header">
              <h3 className="sheet-title">Wallet Details</h3>
              <button className="close-btn" onClick={() => setIsDetailsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-card modal-balance-card">
              <div className="modal-balance-left">
                <span className="modal-balance-label">Wallet Balance</span>
                <span className="modal-balance-value">S$1,240.50</span>
                <div className="modal-balance-status">
                  <CheckCircle2 size={14} />
                  <span>Ready for International Transfers</span>
                </div>
              </div>
              <img src="https://img.icons8.com/3d-fluency/94/wallet.png" alt="Wallet" className="modal-wallet-img" />
            </div>

            <div className="modal-card">
              <div className="availability-row">
                <div className="avail-left">
                  <Send size={18} color="var(--brand-primary)" />
                  <span className="avail-label">Available to Send</span>
                </div>
                <span className="avail-value">S$1,240.50</span>
              </div>
              <div className="availability-row">
                <div className="avail-left">
                  <Clock size={18} color="var(--brand-primary)" />
                  <span className="avail-label">Pending Deposits</span>
                </div>
                <span className="avail-value">S$0.00</span>
              </div>
            </div>

            <div className="modal-card">
              <h4 className="funding-title">Funding Information</h4>
              <div className="funding-row">
                <div className="funding-left">
                  <CreditCard size={18} className="funding-icon" />
                  <span className="funding-label">Debit Card</span>
                </div>
                <div className="funding-right">
                  <span className="funding-badge badge-instant">Instant</span>
                  <ChevronRight size={16} color="var(--text-tertiary)" />
                </div>
              </div>
              <div className="funding-row">
                <div className="funding-left">
                  <Building size={18} className="funding-icon" />
                  <span className="funding-label">Bank Transfer</span>
                </div>
                <div className="funding-right">
                  <span className="funding-badge badge-hours">1-2 Hours</span>
                  <ChevronRight size={16} color="var(--text-tertiary)" />
                </div>
              </div>
              <div className="funding-row">
                <div className="funding-left">
                  <img src="https://img.icons8.com/color/48/apple-logo.png" alt="Apple" style={{width: 18, height: 18}} />
                  <span className="funding-label">Apple Pay</span>
                </div>
                <div className="funding-right">
                  <span className="funding-badge badge-instant">Instant</span>
                  <ChevronRight size={16} color="var(--text-tertiary)" />
                </div>
              </div>
              <div className="funding-row">
                <div className="funding-left">
                  <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" style={{width: 18, height: 18}} />
                  <span className="funding-label">Google Pay</span>
                </div>
                <div className="funding-right">
                  <span className="funding-badge badge-instant">Instant</span>
                  <ChevronRight size={16} color="var(--text-tertiary)" />
                </div>
              </div>
            </div>

            <div className="modal-card" style={{ marginBottom: '8px' }}>
              <h4 className="funding-title">Transfer Network</h4>
              <div className="network-grid">
                <div className="network-item">
                  <Shield size={20} className="network-item-icon" />
                  <span className="network-item-label">Powered by Stellar</span>
                </div>
                <div className="network-divider" />
                <div className="network-item">
                  <Tag size={20} className="network-item-icon" />
                  <span className="network-item-label">Low Fees</span>
                </div>
                <div className="network-divider" />
                <div className="network-item">
                  <Zap size={20} className="network-item-icon" />
                  <span className="network-item-label">Fast Settlement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFunds;
