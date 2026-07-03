import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Download, Share2 } from 'lucide-react';
import './TransferReceiptPage.css';

interface TransactionDetails {
  id: string;
  referenceId: string;
  name: string;
  country: string;
  wallet: string;
  currency: string;
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
    currency: "IDR",
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
    currency: "IDR",
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
    currency: "PHP",
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
    currency: "MYR",
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
    currency: "VND",
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
    currency: "THB",
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

const TransferReceiptPage: React.FC = () => {
  const { transactionId } = useParams<{ transactionId: string }>();
  const navigate = useNavigate();

  const tx = transactionsDb.find(t => t.id === transactionId);

  if (!tx) {
    return (
      <div className="receipt-page-container fallback-state animate-fade-in-up stagger-1">
        <div className="fallback-card glass-panel">
          <h2>Receipt Not Found</h2>
          <p>The transaction receipt could not be found or is invalid.</p>
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

  const getFeeVal = () => {
    return tx.fee === 'Free' ? 0 : 0.30;
  };

  const totalDeducted = tx.amountNum + getFeeVal();

  return (
    <div className="receipt-page-container">
      {/* Header */}
      <header className="receipt-header animate-fade-in-up stagger-1">
        <button className="back-button" onClick={() => navigate(`/transfers/${transactionId}`)} aria-label="Go back">
          <ArrowLeft size={24} color="var(--brand-primary)" />
        </button>
        <div className="header-text">
          <h1 className="header-title">Transfer Receipt</h1>
          <p className="header-subtitle">Official receipt for your completed transfer.</p>
        </div>
        <div className="header-right-placeholder" />
      </header>

      {/* Official Receipt Paper Card */}
      <div className="receipt-paper animate-fade-in-up stagger-2">
        {/* Receipt Header details */}
        <div className="receipt-paper-header">
          <div className="receipt-logo">
            <span className="logo-remit">Remit</span>
            <span className="logo-anchor">Anchor</span>
          </div>
          <span className="receipt-doc-title">Official Transfer Receipt</span>
          <span className={`receipt-status-badge ${tx.status.toLowerCase().replace(' ', '-')}`}>
            {tx.status}
          </span>
        </div>

        <div className="receipt-dashed-divider" />

        {/* Receipt Metadata */}
        <div className="receipt-meta-grid">
          <div className="meta-col">
            <span className="meta-lbl">Reference Number</span>
            <span className="meta-val highlight">{tx.referenceId}</span>
          </div>
          <div className="meta-col align-right">
            <span className="meta-lbl">Date & Time</span>
            <span className="meta-val">{tx.date}, {tx.time}</span>
          </div>
        </div>

        <div className="receipt-solid-divider" />

        {/* Sender & Recipient Section */}
        <div className="receipt-parties-container">
          {/* Sender */}
          <div className="party-box">
            <span className="party-title">Sender</span>
            <div className="party-details">
              <span className="party-name">Kevin Tan</span>
              <span className="party-sub text-tertiary">Singapore</span>
              <span className="party-sub">Source: Remmit Wallet (SGD)</span>
            </div>
          </div>
          
          <div className="party-line-divider" />

          {/* Recipient */}
          <div className="party-box">
            <span className="party-title">Recipient</span>
            <div className="party-details">
              <span className="party-name">{tx.name}</span>
              <span className="party-sub text-tertiary">{tx.country}</span>
              <span className="party-sub">Destination: {tx.wallet} ({tx.currency})</span>
              <span className="party-verified">
                <CheckCircle2 size={10} />
                <span>Verified Recipient</span>
              </span>
            </div>
          </div>
        </div>

        <div className="receipt-solid-divider" />

        {/* Financial Breakdown */}
        <div className="receipt-breakdown-section">
          <span className="section-header-title">Transfer Breakdown</span>
          <div className="breakdown-rows">
            <div className="breakdown-row">
              <span className="b-lbl">Amount Sent</span>
              <span className="b-val">{tx.amount}</span>
            </div>
            <div className="breakdown-row">
              <span className="b-lbl">Transfer Fee</span>
              <span className="b-val">{tx.fee}</span>
            </div>
            <div className="breakdown-row total-row">
              <span className="b-lbl font-bold">Total Deducted</span>
              <span className="b-val font-bold text-teal">{formatCurrency(totalDeducted)}</span>
            </div>
            <div className="breakdown-row-dashed" />
            <div className="breakdown-row">
              <span className="b-lbl">Exchange Rate</span>
              <span className="b-val font-medium">{tx.exchangeRate}</span>
            </div>
            <div className="breakdown-row receives-row">
              <span className="b-lbl font-bold">Recipient Receives</span>
              <span className="b-val font-bold text-green">{tx.convertedAmount}</span>
            </div>
          </div>
        </div>

        <div className="receipt-solid-divider" />

        {/* Smart Split Allocations executed */}
        <div className="receipt-split-section">
          <span className="section-header-title">Smart Split Executed Allocations</span>
          <div className="split-rows">
            <div className="split-row-item">
              <div className="split-row-info">
                <span className="split-lbl">Family Support (70%)</span>
                <span className="split-val">{formatCurrency(familySupportAmount)}</span>
              </div>
              <div className="split-progress-bar"><div className="split-progress-fill" style={{ width: '70%' }} /></div>
            </div>
            <div className="split-row-item">
              <div className="split-row-info">
                <span className="split-lbl">Emergency Savings (20%)</span>
                <span className="split-val">{formatCurrency(savingsAmount)}</span>
              </div>
              <div className="split-progress-bar"><div className="split-progress-fill" style={{ width: '20%' }} /></div>
            </div>
            <div className="split-row-item">
              <div className="split-row-info">
                <span className="split-lbl">Electricity Bill (10%)</span>
                <span className="split-val">{formatCurrency(billAmount)}</span>
              </div>
              <div className="split-progress-bar"><div className="split-progress-fill" style={{ width: '10%' }} /></div>
            </div>
          </div>
          <div className="split-status-text">Smart Split Allocations Status: Completed</div>
        </div>

        <div className="receipt-solid-divider" />

        {/* Transaction Parameters */}
        <div className="receipt-params-section">
          <span className="section-header-title">Transaction Information</span>
          <div className="params-grid">
            <div className="param-grid-row">
              <span className="p-lbl">Transaction ID</span>
              <span className="p-val monospace">{tx.id}</span>
            </div>
            <div className="param-grid-row">
              <span className="p-lbl">Method / Network</span>
              <span className="p-val">{tx.network}</span>
            </div>
            <div className="param-grid-row">
              <span className="p-lbl">Completed At</span>
              <span className="p-val">{tx.date} {tx.time}</span>
            </div>
            <div className="param-grid-row">
              <span className="p-lbl">Processed by</span>
              <span className="p-val">RemitAnchor Payment Gateway</span>
            </div>
          </div>
        </div>

        <div className="receipt-dashed-divider" />

        {/* Verification and Trust Notice */}
        <div className="receipt-notice-box">
          <ShieldCheck size={16} color="var(--brand-success)" className="notice-icon" />
          <div className="notice-content">
            <span className="notice-title">Generated Securely</span>
            <span className="notice-desc font-xs">This receipt was generated securely by RemitAnchor. Use the reference ID when contacting support.</span>
          </div>
        </div>

        {/* Receipt Footer */}
        <footer className="receipt-paper-footer text-center">
          <p className="footer-line font-bold">Thank you for using RemitAnchor.</p>
          <p className="footer-line">Secure cross-border payments powered by Stellar.</p>
          <p className="footer-line font-xs text-tertiary">This is a system-generated receipt and requires no signature.</p>
        </footer>
      </div>

      {/* Actions */}
      <div className="receipt-actions animate-fade-in-up stagger-3">
        <button 
          className="receipt-download-btn primary-btn"
          onClick={() => console.log('Downloading PDF... (Mock action)')}
        >
          <Download size={16} />
          <span>Download PDF</span>
        </button>
        <button 
          className="receipt-share-btn secondary-btn"
          onClick={() => navigate(`/transfers/${transactionId}/share`)}
        >
          <Share2 size={16} />
          <span>Share Receipt</span>
        </button>
        <button 
          className="receipt-back-btn secondary-btn"
          onClick={() => navigate(`/transfers/${transactionId}`)}
        >
          Back to Details
        </button>
      </div>
    </div>
  );
};

export default TransferReceiptPage;
