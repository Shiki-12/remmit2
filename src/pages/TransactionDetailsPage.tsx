import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, Clock, Zap, Info, Headphones, Share2, Download, Check } from 'lucide-react';
import './TransactionDetailsPage.css';

interface TransactionDetails {
  id: string;
  referenceId: string;
  name: string;
  country: string;
  wallet: string;
  amount: string;
  amountNum: number;
  convertedAmount: string;
  date: string;
  time: string;
  status: 'Completed' | 'In Progress' | 'Failed';
  exchangeRate: string;
  fee: string;
  arrival: string;
  network: string;
  avatar: string;
}

const transactionsDb: TransactionDetails[] = [
  {
    id: "TRX-001",
    referenceId: "RA-2026-001234",
    name: "Talita Vicki",
    country: "Indonesia",
    wallet: "DANA Wallet",
    amount: "S$500.00",
    amountNum: 500.00,
    convertedAmount: "Rp5,921,000",
    date: "20 July 2026",
    time: "10:45 AM",
    status: "Completed",
    exchangeRate: "1 SGD = Rp11,842",
    fee: "S$0.30",
    arrival: "Less than 30 seconds",
    network: "Powered by Stellar",
    avatar: "Talita Vicki"
  },
  {
    id: "tx-001",
    referenceId: "RA-2026-001234",
    name: "Talita Vicki",
    country: "Indonesia",
    wallet: "DANA Wallet",
    amount: "S$500.00",
    amountNum: 500.00,
    convertedAmount: "Rp5,921,000",
    date: "20 July 2026",
    time: "10:45 AM",
    status: "Completed",
    exchangeRate: "1 SGD = Rp11,842",
    fee: "S$0.30",
    arrival: "Less than 30 seconds",
    network: "Powered by Stellar",
    avatar: "Talita Vicki"
  },
  {
    id: "TRX-002",
    referenceId: "RA-2026-001235",
    name: "John Dela Cruz",
    country: "Philippines",
    wallet: "GCash Wallet",
    amount: "S$300.00",
    amountNum: 300.00,
    convertedAmount: "₱12,500",
    date: "19 July 2026",
    time: "2:30 PM",
    status: "Completed",
    exchangeRate: "1 SGD = ₱41.67",
    fee: "S$0.30",
    arrival: "Less than 30 seconds",
    network: "Powered by Stellar",
    avatar: "John Dela Cruz"
  },
  {
    id: "TRX-003",
    referenceId: "RA-2026-001236",
    name: "Aisyah Rahman",
    country: "Malaysia",
    wallet: "Bank Account",
    amount: "S$250.00",
    amountNum: 250.00,
    convertedAmount: "RM875.40",
    date: "19 July 2026",
    time: "11:20 AM",
    status: "In Progress",
    exchangeRate: "1 SGD = RM3.50",
    fee: "S$0.30",
    arrival: "Less than 30 seconds",
    network: "Powered by Stellar",
    avatar: "Aisyah Rahman"
  },
  {
    id: "TRX-004",
    referenceId: "RA-2026-001237",
    name: "Minh Nguyen",
    country: "Vietnam",
    wallet: "MoMo Wallet",
    amount: "S$150.00",
    amountNum: 150.00,
    convertedAmount: "₫2,640,000",
    date: "18 July 2026",
    time: "5:15 PM",
    status: "Failed",
    exchangeRate: "1 SGD = ₫19,250",
    fee: "S$0.30",
    arrival: "Less than 30 seconds",
    network: "Powered by Stellar",
    avatar: "Minh Nguyen"
  },
  {
    id: "TRX-005",
    referenceId: "RA-2026-001238",
    name: "Natcha K.",
    country: "Thailand",
    wallet: "Bank Account",
    amount: "S$400.00",
    amountNum: 400.00,
    convertedAmount: "฿10,120.00",
    date: "17 July 2026",
    time: "8:05 PM",
    status: "Completed",
    exchangeRate: "1 SGD = ฿25.30",
    fee: "S$0.30",
    arrival: "Less than 30 seconds",
    network: "Powered by Stellar",
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

const TransactionDetailsPage: React.FC = () => {
  const { transactionId } = useParams<{ transactionId: string }>();
  const navigate = useNavigate();

  const tx = transactionsDb.find(t => t.id === transactionId);

  if (!tx) {
    return (
      <div className="tx-details-page-container fallback-state animate-fade-in-up stagger-1">
        <div className="fallback-card glass-panel">
          <h2>Transaction Not Found</h2>
          <p>The transaction details could not be found or are invalid.</p>
          <button className="back-btn primary-btn" onClick={() => navigate('/transfers')}>
            Back to Transfers
          </button>
        </div>
      </div>
    );
  }

  // Calculate allocation breakdown based on 70 / 20 / 10 split
  const familySupportAmount = tx.amountNum * 0.7;
  const savingsAmount = tx.amountNum * 0.2;
  const billAmount = tx.amountNum * 0.1;

  const formatCurrency = (val: number) => {
    return `S$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="tx-details-page-container">
      {/* Header */}
      <header className="details-header animate-fade-in-up stagger-1">
        <button className="back-button" onClick={() => navigate('/transfers')} aria-label="Go back">
          <ArrowLeft size={24} color="var(--brand-primary)" />
        </button>
        <div className="header-text">
          <h1 className="header-title">Transaction Details</h1>
          <p className="header-subtitle">Track your transfer and receipt information.</p>
        </div>
        <div className="header-right-placeholder" />
      </header>

      {/* Status Hero Card */}
      <div className="status-hero-card glass-panel animate-fade-in-up stagger-1">
        <div className="status-hero-icon-wrapper">
          {tx.status === 'Completed' && (
            <div className="icon-circle completed">
              <CheckCircle2 size={36} color="var(--brand-secondary)" />
            </div>
          )}
          {tx.status === 'In Progress' && (
            <div className="icon-circle in-progress">
              <Clock size={36} color="var(--brand-processing)" />
            </div>
          )}
          {tx.status === 'Failed' && (
            <div className="icon-circle failed">
              <XCircle size={36} color="#ef4444" />
            </div>
          )}
        </div>
        <h2 className="status-hero-title">{tx.status}</h2>
        <p className="status-hero-desc">
          {tx.status === 'Completed' && "Your transfer was completed successfully."}
          {tx.status === 'In Progress' && "Your transfer is being processed securely."}
          {tx.status === 'Failed' && "Your transfer could not be completed."}
        </p>
        <div className="status-hero-meta">
          <span className="meta-time">{tx.date} • {tx.time}</span>
          <div className="meta-divider" />
          <span className="meta-ref">Ref: {tx.referenceId}</span>
        </div>
      </div>

      {/* Recipient Details Card */}
      <div className="recipient-summary-card glass-panel animate-fade-in-up stagger-2">
        <div className="summary-left">
          <div className="avatar-wrapper">
            <img 
              src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(tx.avatar)}`} 
              alt={tx.name} 
              className="summary-avatar" 
            />
            {countryFlags[tx.country] && (
              <img src={countryFlags[tx.country]} alt={tx.country} className="summary-flag" />
            )}
          </div>
          <div className="summary-info">
            <div className="summary-name-row">
              <span className="summary-name">{tx.name}</span>
              <span className="verified-badge">
                <CheckCircle2 size={11} />
                <span>Verified Recipient</span>
              </span>
            </div>
            <span className="summary-destination">{tx.country} • {tx.wallet}</span>
          </div>
        </div>
      </div>

      {/* Transfer Parameters Summary Card */}
      <div className="transfer-summary-card glass-panel animate-fade-in-up stagger-3">
        <div className="summary-row">
          <span className="summary-lbl">Amount Sent</span>
          <span className="summary-val-sent">{tx.amount}</span>
        </div>
        <div className="summary-divider" />
        <div className="summary-row">
          <span className="summary-lbl">Recipient Receives</span>
          <span className="summary-val-received">{tx.convertedAmount}</span>
        </div>
        <div className="summary-divider" />
        <div className="summary-row">
          <span className="summary-lbl">Exchange Rate</span>
          <span className="summary-val">{tx.exchangeRate}</span>
        </div>
        <div className="summary-divider" />
        <div className="summary-row">
          <span className="summary-lbl">Transfer Fee</span>
          <span className="summary-val">{tx.fee}</span>
        </div>
        <div className="summary-divider" />
        <div className="summary-row">
          <span className="summary-lbl">Estimated Arrival</span>
          <span className="summary-val">{tx.arrival}</span>
        </div>
        <div className="summary-divider" />
        <div className="summary-row">
          <span className="summary-lbl">Network</span>
          <span className="detail-val-network">
            <Zap size={11} />
            <span>{tx.network}</span>
          </span>
        </div>
        <div className="summary-divider" />
        <div className="summary-row">
          <span className="summary-lbl">Status</span>
          <span className={`status-badge ${tx.status.toLowerCase().replace(' ', '-')}`}>
            {tx.status}
          </span>
        </div>
      </div>

      {/* Smart Split Executed Card */}
      <div className="split-executed-card glass-panel animate-fade-in-up stagger-4">
        <div className="split-executed-header">
          <h3 className="split-executed-title">Smart Split Summary</h3>
          <span className="split-badge-completed">
            <CheckCircle2 size={11} />
            <span>All allocations completed</span>
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
          <Info size={14} color="var(--brand-primary)" />
          <span>Total Allocation = 100%</span>
        </div>
      </div>

      {/* Transaction Metadata Card */}
      <div className="transaction-info-card glass-panel animate-fade-in-up stagger-4">
        <div className="info-row">
          <span className="info-lbl">Transaction ID</span>
          <span className="info-val monospace">{tx.id}</span>
        </div>
        <div className="info-divider" />
        <div className="info-row">
          <span className="info-lbl">Reference ID</span>
          <span className="info-val monospace">{tx.referenceId}</span>
        </div>
        <div className="info-divider" />
        <div className="info-row">
          <span className="info-lbl">Date</span>
          <span className="info-val">{tx.date}</span>
        </div>
        <div className="info-divider" />
        <div className="info-row">
          <span className="info-lbl">Time</span>
          <span className="info-val">{tx.time}</span>
        </div>
        <div className="info-divider" />
        <div className="info-row">
          <span className="info-lbl">Method</span>
          <span className="info-val">Stellar Network</span>
        </div>
        <div className="info-divider" />
        <div className="info-row">
          <span className="info-lbl">Processed by</span>
          <span className="info-val">RemitAnchor</span>
        </div>
        <div className="info-divider" />
        <div className="info-row">
          <span className="info-lbl">Network Status</span>
          <span className="network-status-badge">
            <CheckCircle2 size={10} />
            <span>{tx.status === 'Failed' ? 'Failed' : 'Success'}</span>
          </span>
        </div>
      </div>

      {/* Timeline Card */}
      <div className="timeline-card glass-panel animate-fade-in-up stagger-4">
        <h3 className="timeline-title">Transfer Timeline</h3>
        <div className="vertical-timeline">
          {/* Step 1 */}
          <div className="timeline-step-row">
            <div className="step-left">
              <span className="step-time">{tx.time}</span>
            </div>
            <div className="step-center">
              <div className="step-circle checked">
                <Check size={10} />
              </div>
              <div className="step-vertical-line active" />
            </div>
            <div className="step-right">
              <span className="step-name active">Transfer initiated</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="timeline-step-row">
            <div className="step-left">
              <span className="step-time">{tx.time}</span>
            </div>
            <div className="step-center">
              <div className="step-circle checked">
                <Check size={10} />
              </div>
              <div className="step-vertical-line active" />
            </div>
            <div className="step-right">
              <span className="step-name active">Details confirmed</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="timeline-step-row">
            <div className="step-left">
              <span className="step-time">{tx.time}</span>
            </div>
            <div className="step-center">
              <div className="step-circle checked">
                <Check size={10} />
              </div>
              <div className="step-vertical-line active" />
            </div>
            <div className="step-right">
              <span className="step-name active">Currency converted</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="timeline-step-row">
            <div className="step-left">
              <span className="step-time">{tx.time}</span>
            </div>
            <div className="step-center">
              <div className="step-circle checked">
                <Check size={10} />
              </div>
              <div className="step-vertical-line active" />
            </div>
            <div className="step-right">
              <span className="step-name active">Sent through Stellar Network</span>
            </div>
          </div>

          {/* Step 5 */}
          <div className="timeline-step-row">
            <div className="step-left">
              <span className="step-time">{tx.time}</span>
            </div>
            <div className="step-center">
              <div className="step-circle checked">
                <Check size={10} />
              </div>
              <div className="step-vertical-line active" />
            </div>
            <div className="step-right">
              <span className="step-name active">Recipient wallet credited</span>
            </div>
          </div>

          {/* Step 6 */}
          <div className="timeline-step-row">
            <div className="step-left">
              <span className="step-time">{tx.time}</span>
            </div>
            <div className="step-center">
              <div className="step-circle checked">
                <Check size={10} />
              </div>
            </div>
            <div className="step-right">
              <span className="step-name active">Transfer completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Support / Help Card */}
      <div className="support-card glass-panel animate-fade-in-up stagger-5">
        <Headphones size={18} color="var(--brand-primary)" className="support-icon" />
        <div className="support-text-col">
          <span className="support-title">Need help with this transaction?</span>
          <span className="support-desc">Contact support with your reference ID for faster assistance.</span>
        </div>
        <button className="support-action-btn" onClick={() => {/* Contact Support TODO */}}>
          Contact
        </button>
      </div>

      {/* Actions */}
      <div className="details-actions animate-fade-in-up stagger-5">
        <button 
          className="receipt-btn primary-btn"
          onClick={() => navigate(`/transfers/${transactionId}/receipt`)}
        >
          <Download size={16} />
          <span>Download Receipt</span>
        </button>
        <button 
          className="share-btn secondary-btn"
          onClick={() => navigate(`/transfers/${transactionId}/share`)}
        >
          <Share2 size={16} />
          <span>Share Receipt</span>
        </button>
        <button 
          className="back-transfers-btn secondary-btn"
          onClick={() => navigate('/transfers')}
        >
          Back to Transfers
        </button>
      </div>
    </div>
  );
};

export default TransactionDetailsPage;
