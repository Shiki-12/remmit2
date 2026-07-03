import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Loader2, Check, Clock, Zap, Lock, Hourglass } from 'lucide-react';
import './ProcessingTransferPage.css';

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

const ProcessingTransferPage: React.FC = () => {
  const { recipientId } = useParams<{ recipientId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve state parameters passed from ReviewTransferPage
  const stateAmount = (location.state as any)?.amount;
  const stateNote = (location.state as any)?.note;
  const sendAmount = stateAmount !== undefined && stateAmount > 0 ? stateAmount : 500;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/transfers/new/${recipientId}/success`, {
        state: {
          amount: sendAmount,
          note: stateNote
        },
        replace: true
      });
    }, 3200);

    return () => clearTimeout(timer);
  }, [navigate, recipientId, sendAmount, stateNote]);

  const recipient = recipientsDb.find(r => r.id === recipientId);

  if (!recipient) {
    return (
      <div className="processing-transfer-container fallback-state animate-fade-in-up stagger-1">
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

  return (
    <div className="processing-transfer-container">
      {/* Spinner / Main status area */}
      <div className="processing-hero-section animate-fade-in-up stagger-1">
        <div className="spinner-wrapper">
          <div className="spinner-ring" />
          <div className="spinner-center">
            <Loader2 size={32} className="spinning-icon" color="var(--brand-primary)" />
          </div>
        </div>
        <h1 className="processing-title">Processing Transfer</h1>
        <p className="processing-subtitle">Sending your money securely...</p>
        <p className="processing-helper">This usually takes less than 30 seconds.</p>
      </div>

      {/* Recipient & Amount Summary Card */}
      <div className="summary-info-card glass-panel animate-fade-in-up stagger-2">
        <div className="summary-avatar-row">
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
          <div className="summary-text">
            <span className="summary-name">{recipient.name}</span>
            <span className="summary-destination">{recipient.country} • {recipient.destination}</span>
          </div>
        </div>
        <div className="summary-divider" />
        <div className="summary-amounts-grid">
          <div className="amount-col">
            <span className="amt-lbl">You Sent</span>
            <span className="amt-val">{formatCurrency(sendAmount)}</span>
          </div>
          <div className="amount-col align-right">
            <span className="amt-lbl">Recipient Receives</span>
            <span className="amt-val highlight">{getConvertedValue()}</span>
          </div>
        </div>
      </div>

      {/* Processing Timeline Card */}
      <div className="processing-timeline-card glass-panel animate-fade-in-up stagger-3">
        <h3 className="timeline-title">Processing Stages</h3>
        <div className="timeline-items">
          {/* Step 1 */}
          <div className="timeline-item done">
            <div className="timeline-icon">
              <Check size={12} />
            </div>
            <div className="timeline-content">
              <span className="stage-name">Verifying available balance</span>
              <span className="stage-time">Just now</span>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="timeline-item done">
            <div className="timeline-icon">
              <Check size={12} />
            </div>
            <div className="timeline-content">
              <span className="stage-name">Confirming details</span>
              <span className="stage-time">Just now</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="timeline-item active">
            <div className="timeline-icon">
              <Loader2 size={12} className="spinning-icon" />
            </div>
            <div className="timeline-content">
              <span className="stage-name">Converting SGD to {recipient.currency}</span>
              <span className="stage-status">In progress...</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="timeline-item pending">
            <div className="timeline-icon">
              <Zap size={12} />
            </div>
            <div className="timeline-content">
              <span className="stage-name">Sending through Stellar Network</span>
              <span className="stage-status">Pending</span>
            </div>
          </div>

          {/* Step 5 */}
          <div className="timeline-item pending">
            <div className="timeline-icon">
              <Clock size={12} />
            </div>
            <div className="timeline-content">
              <span className="stage-name">Delivering funds to recipient</span>
              <span className="stage-status">Pending</span>
            </div>
          </div>

          {/* Step 6 */}
          <div className="timeline-item pending">
            <div className="timeline-icon">
              <Hourglass size={12} />
            </div>
            <div className="timeline-content">
              <span className="stage-name">Awaiting confirmation</span>
              <span className="stage-status">Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Details Card */}
      <div className="status-details-card glass-panel animate-fade-in-up stagger-4">
        <div className="detail-row">
          <span className="detail-lbl">Estimated Arrival</span>
          <span className="detail-val">{recipient.arrival}</span>
        </div>
        <div className="detail-divider" />
        <div className="detail-row">
          <span className="detail-lbl">Transfer Fee</span>
          <span className="detail-val">{recipient.fee}</span>
        </div>
        <div className="detail-divider" />
        <div className="detail-row">
          <span className="detail-lbl">Network</span>
          <span className="detail-val">{recipient.network}</span>
        </div>
        <div className="detail-divider" />
        <div className="detail-row">
          <span className="detail-lbl">Status</span>
          <span className="detail-val status-processing-badge">Processing</span>
        </div>
      </div>

      {/* Security notice */}
      <div className="security-notice-card glass-panel animate-fade-in-up stagger-5">
        <Lock size={16} color="var(--brand-primary)" className="notice-lock-icon" />
        <div className="notice-text-col">
          <span className="notice-bold">Please keep this app open while we process your transfer.</span>
          <span className="notice-desc">Your transfer is encrypted and processed securely.</span>
        </div>
      </div>

      {/* Redirect Message instead of Actions */}
      <div className="processing-redirect-message animate-fade-in-up stagger-5">
        <Loader2 size={16} className="spinning-icon" color="var(--brand-primary)" />
        <span>Almost done... You will be redirected automatically.</span>
      </div>
    </div>
  );
};

export default ProcessingTransferPage;
