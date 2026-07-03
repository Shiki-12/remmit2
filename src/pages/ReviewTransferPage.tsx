import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock, Zap, ShieldCheck, Check, Info, Lock } from 'lucide-react';
import './ReviewTransferPage.css';

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

const ReviewTransferPage: React.FC = () => {
  const { recipientId } = useParams<{ recipientId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve state parameters passed from TransferDetailsPage
  const stateAmount = (location.state as any)?.amount;
  const stateNote = (location.state as any)?.note;

  const sendAmount = stateAmount !== undefined && stateAmount > 0 ? stateAmount : 500;
  const transferNote = stateNote || '';

  const recipient = recipientsDb.find(r => r.id === recipientId);

  if (!recipient) {
    return (
      <div className="review-transfer-container fallback-state animate-fade-in-up stagger-1">
        <div className="fallback-card glass-panel">
          <h2>Recipient Not Found</h2>
          <p>The selected recipient could not be found or is invalid.</p>
          <button className="back-btn primary-btn" onClick={() => navigate('/transfers/new')}>
            Back to Recipients
          </button>
        </div>
      </div>
    );
  }

  // Conversion logic matching details page
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

  // Smart Split calculations
  const familySupportAmount = sendAmount * 0.7;
  const savingsAmount = sendAmount * 0.2;
  const billAmount = sendAmount * 0.1;

  const formatCurrency = (val: number) => {
    return `S$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="review-transfer-container">
      {/* Header */}
      <header className="review-header animate-fade-in-up stagger-1">
        <button className="back-button" onClick={() => navigate(`/transfers/new/${recipientId}`)} aria-label="Go back">
          <ArrowLeft size={24} color="var(--brand-primary)" />
        </button>
        <div className="header-text">
          <h1 className="header-title">Review Transfer</h1>
          <p className="header-subtitle">Please confirm your transfer details.</p>
        </div>
        <div className="header-right-placeholder" />
      </header>

      {/* Recipient summary card */}
      <div className="recipient-summary-card glass-panel animate-fade-in-up stagger-2">
        <div className="summary-left">
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
          <div className="summary-info">
            <div className="summary-name-row">
              <span className="summary-name">{recipient.name}</span>
              <span className="verified-badge">
                <CheckCircle2 size={11} />
                <span>Verified</span>
              </span>
            </div>
            <span className="summary-destination">{recipient.country} • {recipient.destination}</span>
          </div>
        </div>
      </div>

      {/* Transfer Parameters Summary Card */}
      <div className="transfer-details-card glass-panel animate-fade-in-up stagger-3">
        <div className="detail-row">
          <span className="detail-lbl">You Send</span>
          <span className="detail-val-highlight">{formatCurrency(sendAmount)}</span>
        </div>
        <div className="detail-divider" />
        <div className="detail-row">
          <span className="detail-lbl">Recipient Receives</span>
          <span className="detail-val-receives">{getConvertedValue()}</span>
        </div>
        <div className="detail-divider" />
        <div className="detail-row">
          <span className="detail-lbl">Exchange Rate</span>
          <span className="detail-val">{recipient.exchangeRate}</span>
        </div>
        <div className="detail-divider" />
        <div className="detail-row">
          <span className="detail-lbl">Transfer Fee</span>
          <span className="detail-val">{recipient.fee}</span>
        </div>
        <div className="detail-divider" />
        <div className="detail-row">
          <span className="detail-lbl">Estimated Arrival</span>
          <span className="detail-val">{recipient.arrival}</span>
        </div>
        <div className="detail-divider" />
        <div className="detail-row">
          <span className="detail-lbl">Network</span>
          <span className="detail-val-network">
            <Zap size={11} />
            <span>{recipient.network}</span>
          </span>
        </div>
        {transferNote && (
          <>
            <div className="detail-divider" />
            <div className="detail-row">
              <span className="detail-lbl">Note</span>
              <span className="detail-val-note">{transferNote}</span>
            </div>
          </>
        )}
      </div>

      {/* Smart Split Summary Section */}
      <div className="smart-split-summary-card glass-panel animate-fade-in-up stagger-4">
        <div className="split-summary-header">
          <h3 className="split-summary-title">Smart Split Summary</h3>
          <button className="split-edit-link" onClick={() => navigate(`/transfers/new/${recipientId}`)}>
            Edit
          </button>
        </div>
        
        <div className="allocations-list">
          {/* Allocation 1 */}
          <div className="alloc-item">
            <div className="alloc-info-row">
              <span className="alloc-name">Primary Recipient / Family Support</span>
              <div className="alloc-values">
                <span className="alloc-pct">70%</span>
                <span className="alloc-amt">{formatCurrency(familySupportAmount)}</span>
              </div>
            </div>
            <div className="alloc-progress-bg">
              <div className="alloc-progress-fill" style={{ width: '70%' }} />
            </div>
          </div>

          {/* Allocation 2 */}
          <div className="alloc-item">
            <div className="alloc-info-row">
              <span className="alloc-name">Emergency Savings</span>
              <div className="alloc-values">
                <span className="alloc-pct">20%</span>
                <span className="alloc-amt">{formatCurrency(savingsAmount)}</span>
              </div>
            </div>
            <div className="alloc-progress-bg">
              <div className="alloc-progress-fill" style={{ width: '20%' }} />
            </div>
          </div>

          {/* Allocation 3 */}
          <div className="alloc-item">
            <div className="alloc-info-row">
              <span className="alloc-name">Electricity Bill</span>
              <div className="alloc-values">
                <span className="alloc-pct">10%</span>
                <span className="alloc-amt">{formatCurrency(billAmount)}</span>
              </div>
            </div>
            <div className="alloc-progress-bg">
              <div className="alloc-progress-fill" style={{ width: '10%' }} />
            </div>
          </div>
        </div>

        <div className="split-summary-footer">
          <Info size={14} color="var(--brand-primary)" />
          <span>Total allocation = 100%</span>
        </div>
      </div>

      {/* Transfer Journey Timeline */}
      <div className="journey-timeline-card glass-panel animate-fade-in-up stagger-4">
        <h3 className="timeline-title">Transfer Journey</h3>
        <div className="timeline-steps">
          <div className="step-item active">
            <div className="step-circle done">
              <Check size={12} />
            </div>
            <span className="step-label">Confirm Details</span>
          </div>
          <div className="step-line active" />
          <div className="step-item active">
            <div className="step-circle pulse">
              <Zap size={12} />
            </div>
            <span className="step-label">Send via Stellar</span>
          </div>
          <div className="step-line" />
          <div className="step-item">
            <div className="step-circle">
              <Clock size={12} />
            </div>
            <span className="step-label">Credit Wallet</span>
          </div>
          <div className="step-line" />
          <div className="step-item">
            <div className="step-circle">
              <CheckCircle2 size={12} />
            </div>
            <span className="step-label">Completed</span>
          </div>
        </div>
      </div>

      {/* Security Trust Card */}
      <div className="security-trust-card glass-panel animate-fade-in-up stagger-5">
        <div className="trust-title-row">
          <ShieldCheck size={18} color="var(--brand-success)" />
          <span className="trust-title">Security you can trust</span>
        </div>
        <ul className="trust-bullets">
          <li>Encrypted transfer details</li>
          <li>Stellar-powered settlement</li>
          <li>Low fees and transparent rates</li>
        </ul>
      </div>

      {/* Confirmation Notice */}
      <div className="confirm-notice-card animate-fade-in-up stagger-5">
        <Lock size={14} color="var(--text-secondary)" />
        <span className="notice-text">
          Please review all details carefully. Once confirmed, your transfer will be processed securely.
        </span>
      </div>

      {/* Actions */}
      <div className="review-actions-container animate-fade-in-up stagger-5">
        <button 
          className="confirm-transfer-btn primary-btn"
          onClick={() => navigate(`/transfers/new/${recipientId}/processing`, { state: { amount: sendAmount } })}
        >
          Confirm Transfer
        </button>
        <button 
          className="edit-transfer-btn secondary-btn"
          onClick={() => navigate(`/transfers/new/${recipientId}`, { state: { amount: sendAmount, note: transferNote } })}
        >
          Edit Transfer
        </button>
      </div>
    </div>
  );
};

export default ReviewTransferPage;
