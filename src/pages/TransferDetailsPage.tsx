import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock, Globe, Zap, ArrowLeftRight, Coins, ChevronRight } from 'lucide-react';
import './TransferDetailsPage.css';

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

const TransferDetailsPage: React.FC = () => {
  const { recipientId } = useParams<{ recipientId: string }>();
  const navigate = useNavigate();
  const [amountStr, setAmountStr] = useState('0');
  const [note, setNote] = useState('');

  const recipient = recipientsDb.find(r => r.id === recipientId);

  if (!recipient) {
    return (
      <div className="transfer-details-container fallback-state animate-fade-in-up stagger-1">
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

  // Keypad click handler
  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (amountStr.length <= 1) {
        setAmountStr('0');
      } else {
        setAmountStr(amountStr.slice(0, -1));
      }
    } else if (key === '.') {
      if (!amountStr.includes('.')) {
        setAmountStr(amountStr + '.');
      }
    } else {
      // Validate decimal places (max 2)
      const decimalParts = amountStr.split('.');
      if (decimalParts[1] && decimalParts[1].length >= 2) {
        return;
      }
      if (amountStr === '0') {
        setAmountStr(key);
      } else {
        // Enforce maximum transfer limit S$10,000
        const nextVal = parseFloat(amountStr + key);
        if (nextVal <= 10000) {
          setAmountStr(amountStr + key);
        }
      }
    }
  };

  const amountNum = parseFloat(amountStr) || 0;

  // Conversion calculations
  const getConvertedValue = () => {
    const rate = 
      recipient.currency === 'IDR' ? 11842 :
      recipient.currency === 'PHP' ? 41.67 :
      recipient.currency === 'SGD' ? 1 :
      recipient.currency === 'VND' ? 19250 : 1;

    const converted = amountNum * rate;
    
    if (converted === 0) {
      const symbol = 
        recipient.currency === 'IDR' ? 'Rp' : 
        recipient.currency === 'PHP' ? '₱' : 
        recipient.currency === 'SGD' ? 'S$' : '₫';
      return `≈ ${symbol}0`;
    }

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

  const formattedDisplayAmount = amountStr === '0' || amountStr === '' ? 'S$0.00' : `S$${amountStr}`;
  const isContinueEnabled = amountNum > 0;

  return (
    <div className="transfer-details-container">
      {/* Header */}
      <header className="details-header animate-fade-in-up stagger-1">
        <button className="back-button" onClick={() => navigate('/transfers/new')} aria-label="Go back">
          <ArrowLeft size={24} color="var(--brand-primary)" />
        </button>
        <div className="header-text">
          <h1 className="header-title">Transfer Details</h1>
          <p className="header-subtitle">Enter the amount you want to send.</p>
        </div>
        <div className="header-right-placeholder" />
      </header>

      {/* Recipient Summary Card */}
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
        <button className="change-recipient-btn" onClick={() => navigate('/transfers/new')}>
          Change
        </button>
      </div>

      {/* Amount Input Display */}
      <div className="amount-input-card glass-panel animate-fade-in-up stagger-3">
        <div className="amount-input-row">
          <div className="input-col">
            <span className="input-label">You Send</span>
            <div className="amount-display-value">{formattedDisplayAmount}</div>
          </div>
          <div className="currency-badge">
            <img src="https://flagcdn.com/w40/sg.png" alt="SGD flag" className="currency-flag" />
            <span className="currency-code">SGD</span>
          </div>
        </div>
        <div className="amount-helper-text">
          Minimum transfer S$1.50 • Maximum transfer S$10,000
        </div>
      </div>

      {/* Recipient Receives Display */}
      <div className="recipient-receives-card glass-panel animate-fade-in-up stagger-3">
        <div className="receives-row">
          <div className="receives-col">
            <span className="receives-label">Recipient Receives</span>
            <div className="receives-display-value">{getConvertedValue()}</div>
          </div>
          <div className="currency-badge">
            {countryFlags[recipient.country] && (
              <img src={countryFlags[recipient.country]} alt="flag" className="currency-flag" />
            )}
            <span className="currency-code">{recipient.currency}</span>
          </div>
        </div>
      </div>

      {/* Transfer Summary parameters */}
      <div className="transfer-summary-card glass-panel animate-fade-in-up stagger-4">
        <div className="summary-param-row">
          <div className="param-label-col">
            <ArrowLeftRight size={16} color="var(--text-secondary)" />
            <span>Exchange Rate</span>
          </div>
          <span className="param-val">{recipient.exchangeRate}</span>
        </div>
        <div className="param-divider" />
        <div className="summary-param-row">
          <div className="param-label-col">
            <Coins size={16} color="var(--text-secondary)" />
            <span>Transfer Fee</span>
          </div>
          <span className="param-val">{recipient.fee}</span>
        </div>
        <div className="param-divider" />
        <div className="summary-param-row">
          <div className="param-label-col">
            <Clock size={16} color="var(--text-secondary)" />
            <span>Estimated Arrival</span>
          </div>
          <span className="param-val">{recipient.arrival}</span>
        </div>
        <div className="param-divider" />
        <div className="summary-param-row">
          <div className="param-label-col">
            <Globe size={16} color="var(--text-secondary)" />
            <span>Network</span>
          </div>
          <span className="param-val-network">
            <Zap size={12} className="stellar-icon" />
            <span>{recipient.network}</span>
          </span>
        </div>
      </div>

      {/* Optional Note Field */}
      <div className="note-input-container animate-fade-in-up stagger-4">
        <input 
          type="text" 
          placeholder="Add a note for your recipient (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="note-input glass-panel"
        />
      </div>

      {/* Numeric Keypad */}
      <div className="numeric-keypad-container animate-fade-in-up stagger-5">
        <div className="keypad-row">
          <button className="keypad-key" onClick={() => handleKeyPress('1')}>1</button>
          <button className="keypad-key" onClick={() => handleKeyPress('2')}>2</button>
          <button className="keypad-key" onClick={() => handleKeyPress('3')}>3</button>
        </div>
        <div className="keypad-row">
          <button className="keypad-key" onClick={() => handleKeyPress('4')}>4</button>
          <button className="keypad-key" onClick={() => handleKeyPress('5')}>5</button>
          <button className="keypad-key" onClick={() => handleKeyPress('6')}>6</button>
        </div>
        <div className="keypad-row">
          <button className="keypad-key" onClick={() => handleKeyPress('7')}>7</button>
          <button className="keypad-key" onClick={() => handleKeyPress('8')}>8</button>
          <button className="keypad-key" onClick={() => handleKeyPress('9')}>9</button>
        </div>
        <div className="keypad-row">
          <button className="keypad-key" onClick={() => handleKeyPress('.')}>.</button>
          <button className="keypad-key" onClick={() => handleKeyPress('0')}>0</button>
          <button className="keypad-key backspace" onClick={() => handleKeyPress('backspace')} aria-label="Backspace">
            ⌫
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <div className="continue-btn-container animate-fade-in-up stagger-5">
        <button 
          className="details-continue-btn primary-btn"
          disabled={!isContinueEnabled}
          onClick={() => navigate(`/transfers/new/${recipientId}/review`, { state: { amount: amountNum, note } })}
        >
          <span>Continue</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default TransferDetailsPage;
