import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Check, CheckCircle2, ChevronRight, Info, Sparkles } from 'lucide-react';
import './TransferSuccessPage.css';

interface RecipientDetails {
  id: string;
  name: string;
  country: string;
  destination: string;
  currency: string;
  flag: string;
  exchangeRate: string;
  fee: string;
  arrival: string;
  network: string;
  avatar: string;
}

const recipientsDb: RecipientDetails[] = [
  {
    id: "rec-001",
    name: "Talita Vicki",
    country: "Indonesia",
    destination: "DANA Wallet",
    currency: "IDR",
    flag: "🇮🇩",
    exchangeRate: "1 SGD = Rp11,842",
    fee: "S$0.30",
    arrival: "Less than 30 seconds",
    network: "Powered by Stellar",
    avatar: "Talita Vicki"
  },
  {
    id: "rec-002",
    name: "Juan Dela Cruz",
    country: "Philippines",
    destination: "BDO Bank",
    currency: "PHP",
    flag: "🇵🇭",
    exchangeRate: "1 SGD = ₱41.67",
    fee: "S$0.30",
    arrival: "Less than 30 seconds",
    network: "Powered by Stellar",
    avatar: "Juan Dela Cruz"
  },
  {
    id: "rec-003",
    name: "Nur Aisyah",
    country: "Singapore",
    destination: "DBS Bank",
    currency: "SGD",
    flag: "🇸🇬",
    exchangeRate: "1 SGD = S$1.00",
    fee: "Free",
    arrival: "Instant",
    network: "Internal Transfer",
    avatar: "Nur Aisyah"
  },
  {
    id: "rec-004",
    name: "Minh Tran",
    country: "Vietnam",
    destination: "MoMo Wallet",
    currency: "VND",
    flag: "🇻🇳",
    exchangeRate: "1 SGD = ₫19,250",
    fee: "S$0.30",
    arrival: "Less than 30 seconds",
    network: "Powered by Stellar",
    avatar: "Minh Tran"
  }
];

const countryFlags: { [key: string]: string } = {
  Indonesia: "https://flagcdn.com/w40/id.png",
  Philippines: "https://flagcdn.com/w40/ph.png",
  Singapore: "https://flagcdn.com/w40/sg.png",
  Vietnam: "https://flagcdn.com/w40/vn.png"
};

const TransferSuccessPage: React.FC = () => {
  const { recipientId } = useParams<{ recipientId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve state parameters passed from ProcessingTransferPage
  const stateAmount = (location.state as any)?.amount;
  const sendAmount = stateAmount !== undefined && stateAmount > 0 ? stateAmount : 500;

  const recipient = recipientsDb.find(r => r.id === recipientId);

  if (!recipient) {
    return (
      <div className="success-page-container fallback-state animate-fade-in-up stagger-1">
        <div className="fallback-card glass-panel">
          <h2>Transfer Not Found</h2>
          <p>The selected transfer success details could not be loaded.</p>
          <button className="back-btn primary-btn" onClick={() => navigate('/transfers')}>
            Back to Transfers
          </button>
        </div>
      </div>
    );
  }

  // Conversion calculations
  const getConvertedValue = () => {
    const rate = 
      recipient.currency === 'IDR' ? 11842 :
      recipient.currency === 'PHP' ? 41.67 :
      recipient.currency === 'SGD' ? 1 :
      recipient.currency === 'VND' ? 19250 : 1;

    const converted = sendAmount * rate;
    
    if (recipient.currency === 'IDR') {
      return `Rp${Math.round(converted).toLocaleString()}`;
    } else if (recipient.currency === 'PHP') {
      return `₱${Math.round(converted).toLocaleString()}`;
    } else if (recipient.currency === 'VND') {
      return `₫${Math.round(converted).toLocaleString()}`;
    } else {
      return `S$${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  };

  const formatCurrency = (val: number) => {
    return `S$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Smart Split calculations
  const familySupportAmount = sendAmount * 0.7;
  const savingsAmount = sendAmount * 0.2;
  const billAmount = sendAmount * 0.1;

  return (
    <div className="success-page-container">
      {/* Celebratory Icon & Status Area */}
      <div className="success-hero-section animate-fade-in-up stagger-1">
        <div className="success-badge-wrapper">
          <div className="celebration-sparkles">
            <Sparkles className="sparkle left" size={14} />
            <Sparkles className="sparkle right" size={14} />
          </div>
          <div className="circle-bg-success">
            <CheckCircle2 size={54} color="var(--brand-secondary)" className="success-check-icon" />
          </div>
        </div>
        <h1 className="success-title">Transfer Successful</h1>
        <p className="success-subtitle">Your money has been sent successfully.</p>
      </div>

      {/* Recipient avatar & summary card */}
      <div className="success-recipient-card glass-panel animate-fade-in-up stagger-2">
        <div className="avatar-wrapper">
          <img 
            src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(recipient.avatar)}`} 
            alt={recipient.name} 
            className="summary-avatar" 
          />
          {countryFlags[recipient.country] && (
            <img src={countryFlags[recipient.country]} alt={recipient.country} className="summary-flag" />
          )}
        </div>
        <div className="recipient-text">
          <span className="recipient-name">{recipient.name}</span>
          <span className="recipient-destination">{recipient.country} • {recipient.destination}</span>
        </div>
      </div>

      {/* Transfer Summary Parameters */}
      <div className="success-summary-card glass-panel animate-fade-in-up stagger-3">
        <div className="summary-row">
          <span className="summary-lbl">Amount Sent</span>
          <span className="summary-val-sent">{formatCurrency(sendAmount)}</span>
        </div>
        <div className="summary-divider" />
        <div className="summary-row">
          <span className="summary-lbl">Recipient Receives</span>
          <span className="summary-val-received">{getConvertedValue()}</span>
        </div>
        <div className="summary-divider" />
        <div className="summary-row">
          <span className="summary-lbl">Transfer Fee</span>
          <span className="summary-val">{recipient.fee}</span>
        </div>
        <div className="summary-divider" />
        <div className="summary-row">
          <span className="summary-lbl">Estimated Arrival</span>
          <span className="summary-val">{recipient.arrival}</span>
        </div>
        <div className="summary-divider" />
        <div className="summary-row">
          <span className="summary-lbl">Status</span>
          <span className="status-completed-badge">Completed</span>
        </div>
      </div>

      {/* Smart Split Executed Card */}
      <div className="split-executed-card glass-panel animate-fade-in-up stagger-4">
        <div className="split-executed-header">
          <h3 className="split-executed-title">Smart Split Executed</h3>
          <span className="split-badge-completed">
            <Check size={10} />
            <span>Completed</span>
          </span>
        </div>
        
        <div className="allocations-list">
          <div className="alloc-item">
            <div className="alloc-info-row">
              <span className="alloc-name">Primary Recipient / Family Support (70%)</span>
              <span className="alloc-amt">{formatCurrency(familySupportAmount)}</span>
            </div>
            <div className="alloc-progress-bg">
              <div className="alloc-progress-fill" style={{ width: '70%' }} />
            </div>
          </div>

          <div className="alloc-item">
            <div className="alloc-info-row">
              <span className="alloc-name">Emergency Savings (20%)</span>
              <span className="alloc-amt">{formatCurrency(savingsAmount)}</span>
            </div>
            <div className="alloc-progress-bg">
              <div className="alloc-progress-fill" style={{ width: '20%' }} />
            </div>
          </div>

          <div className="alloc-item">
            <div className="alloc-info-row">
              <span className="alloc-name">Electricity Bill (10%)</span>
              <span className="alloc-amt">{formatCurrency(billAmount)}</span>
            </div>
            <div className="alloc-progress-bg">
              <div className="alloc-progress-fill" style={{ width: '10%' }} />
            </div>
          </div>
        </div>

        <div className="split-executed-footer">
          <span>All allocations completed successfully</span>
        </div>
      </div>

      {/* Transaction Metadata Card */}
      <div className="transaction-info-card glass-panel animate-fade-in-up stagger-4">
        <div className="info-row">
          <span className="info-lbl">Reference ID</span>
          <span className="info-val monospace">RA-2026-001234</span>
        </div>
        <div className="info-divider" />
        <div className="info-row">
          <span className="info-lbl">Transfer Date</span>
          <span className="info-val">Today</span>
        </div>
        <div className="info-divider" />
        <div className="info-row">
          <span className="info-lbl">Transfer Time</span>
          <span className="info-val">10:45 AM</span>
        </div>
        <div className="info-divider" />
        <div className="info-row">
          <span className="info-lbl">Processed by</span>
          <span className="info-val">Stellar Network</span>
        </div>
        <div className="info-divider" />
        <div className="info-row">
          <span className="info-lbl">Network Status</span>
          <span className="network-status-badge">
            <CheckCircle2 size={10} />
            <span>Success</span>
          </span>
        </div>
      </div>

      {/* Helpful Message Card */}
      <div className="helpful-message-card glass-panel animate-fade-in-up stagger-5">
        <Info size={16} color="var(--brand-primary)" className="message-icon" />
        <div className="message-text-col">
          <span className="message-title">Your family has received the money successfully.</span>
          <span className="message-subtitle">You can download or share the receipt from transaction details.</span>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="success-actions animate-fade-in-up stagger-5">
        <button 
          className="view-details-btn primary-btn"
          onClick={() => navigate('/transfers/tx-001')}
        >
          <span>View Transaction Details</span>
          <ChevronRight size={16} />
        </button>
        <button 
          className="back-home-btn secondary-btn"
          onClick={() => navigate('/home')}
        >
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

export default TransferSuccessPage;
