import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { X, CheckCircle2, Image, FileText, Mail, MessageCircle, Link as LinkIcon, UserPlus, Shield } from 'lucide-react';
import './ShareTransactionPage.css';

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

interface RecentContact {
  name: string;
  avatarSeed: string;
  relation: string;
}

const recentContacts: RecentContact[] = [
  { name: "Talita Vicki", avatarSeed: "Talita Vicki", relation: "Recent" },
  { name: "Sarah Nguyen", avatarSeed: "Sarah Nguyen", relation: "Family" },
  { name: "John Smith", avatarSeed: "John Smith", relation: "Work" }
];

const ShareTransactionPage: React.FC = () => {
  const { transactionId } = useParams<{ transactionId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Selected share option state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  const tx = transactionsDb.find(t => t.id === transactionId);

  if (!tx) {
    return (
      <div className="share-modal-overlay fallback-state">
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

  // Handle option select
  const handleSelectOption = (optionName: string) => {
    setSelectedOption(optionName);
    setShareFeedback(`Selected: ${optionName}`);
  };

  const handleShareSubmit = () => {
    if (!selectedOption) {
      setShareFeedback("Please select a share method first.");
      return;
    }
    setShareFeedback(`Receipt ready to share via ${selectedOption}.`);
  };

  // State amount recovery
  const stateAmount = (location.state as any)?.amount;
  const displayAmount = stateAmount !== undefined && stateAmount > 0 ? `S$${stateAmount.toFixed(2)}` : tx.amount;

  return (
    <div className="share-modal-overlay">
      {/* Backdrop for closing modal */}
      <div className="share-modal-backdrop" onClick={() => navigate(`/transfers/${transactionId}`)} />

      {/* Share Bottom-Sheet Visual Container */}
      <div className="share-bottom-sheet glass-panel animate-slide-up">
        <div className="sheet-drag-handle" />

        {/* Sheet Header */}
        <div className="sheet-header">
          <div className="sheet-header-top">
            <h2 className="sheet-title">Share Transaction</h2>
            <button className="sheet-close-btn" onClick={() => navigate(`/transfers/${transactionId}`)} aria-label="Close">
              <X size={18} />
            </button>
          </div>
          <p className="sheet-subtitle">Share this receipt securely.</p>
        </div>

        {/* Share Summary Card */}
        <div className="share-summary-box">
          <div className="summary-status-row">
            <span className="summary-status-tag">
              <CheckCircle2 size={10} color="var(--brand-success)" />
              <span>{tx.status}</span>
            </span>
            <span className="summary-ref">Ref: {tx.referenceId}</span>
          </div>
          <div className="summary-details-grid">
            <div className="summary-cell">
              <span className="cell-lbl">Amount Sent</span>
              <span className="cell-val-sent">{displayAmount}</span>
            </div>
            <div className="summary-cell align-right">
              <span className="cell-lbl">Recipient Receives</span>
              <span className="cell-val-received">{tx.convertedAmount}</span>
            </div>
          </div>
          <div className="summary-divider" />
          <div className="summary-recipient-row">
            <span className="recipient-lbl">Recipient</span>
            <span className="recipient-val">{tx.name} ({tx.wallet})</span>
          </div>
        </div>

        {/* Selected Option Feedback Message */}
        {shareFeedback && (
          <div className="share-feedback-banner">
            <span>{shareFeedback}</span>
          </div>
        )}

        {/* Share Options Grid */}
        <div className="share-options-section">
          <h3 className="section-title">Share Options</h3>
          <div className="share-options-grid">
            {/* Share as Image */}
            <div 
              className={`share-option-card ${selectedOption === 'Share as Image' ? 'active' : ''}`}
              onClick={() => handleSelectOption('Share as Image')}
            >
              <div className="option-icon-wrapper img-type">
                <Image size={18} />
              </div>
              <div className="option-text">
                <span className="option-name">Share as Image</span>
                <span className="option-desc">Send a receipt image</span>
              </div>
            </div>

            {/* Share PDF Receipt */}
            <div 
              className={`share-option-card ${selectedOption === 'Share PDF Receipt' ? 'active' : ''}`}
              onClick={() => handleSelectOption('Share PDF Receipt')}
            >
              <div className="option-icon-wrapper pdf-type">
                <FileText size={18} />
              </div>
              <div className="option-text">
                <span className="option-name">Share PDF Receipt</span>
                <span className="option-desc">Attach official PDF</span>
              </div>
            </div>

            {/* Email Receipt */}
            <div 
              className={`share-option-card ${selectedOption === 'Email Receipt' ? 'active' : ''}`}
              onClick={() => handleSelectOption('Email Receipt')}
            >
              <div className="option-icon-wrapper email-type">
                <Mail size={18} />
              </div>
              <div className="option-text">
                <span className="option-name">Email Receipt</span>
                <span className="option-desc">Send to email</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div 
              className={`share-option-card ${selectedOption === 'WhatsApp' ? 'active' : ''}`}
              onClick={() => handleSelectOption('WhatsApp')}
            >
              <div className="option-icon-wrapper chat-type">
                <MessageCircle size={18} />
              </div>
              <div className="option-text">
                <span className="option-name">WhatsApp</span>
                <span className="option-desc">Share via WhatsApp</span>
              </div>
            </div>

            {/* Copy Transaction Link */}
            <div 
              className={`share-option-card ${selectedOption === 'Copy Transaction Link' ? 'active' : ''}`}
              onClick={() => handleSelectOption('Copy Transaction Link')}
            >
              <div className="option-icon-wrapper link-type">
                <LinkIcon size={18} />
              </div>
              <div className="option-text">
                <span className="option-name">Copy Link</span>
                <span className="option-desc">Copy secure link</span>
              </div>
            </div>

            {/* Share with Contact */}
            <div 
              className={`share-option-card ${selectedOption === 'Share with Contact' ? 'active' : ''}`}
              onClick={() => handleSelectOption('Share with Contact')}
            >
              <div className="option-icon-wrapper contact-type">
                <UserPlus size={18} />
              </div>
              <div className="option-text">
                <span className="option-name">Add Contact</span>
                <span className="option-desc">Share with saved contact</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Contacts Section */}
        <div className="share-contacts-section">
          <h3 className="section-title">Recent Contacts</h3>
          <div className="horizontal-contacts-row">
            {recentContacts.map((contact, idx) => (
              <div 
                key={idx} 
                className="contact-avatar-box"
                onClick={() => handleSelectOption(`Contact: ${contact.name}`)}
              >
                <div className="avatar-wrapper">
                  <img 
                    src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(contact.avatarSeed)}`} 
                    alt={contact.name} 
                    className="contact-avatar" 
                  />
                  <span className="relation-tag">{contact.relation}</span>
                </div>
                <span className="contact-name">{contact.name}</span>
              </div>
            ))}

            {/* Add Contact Trigger */}
            <div className="contact-avatar-box add-trigger" onClick={() => handleSelectOption('Add New Contact')}>
              <div className="avatar-placeholder-plus">
                <UserPlus size={16} color="var(--brand-primary)" />
              </div>
              <span className="contact-name italic">Add Contact</span>
            </div>
          </div>
        </div>

        {/* Security sharing notice */}
        <div className="share-security-card">
          <Shield size={16} color="var(--brand-primary)" className="security-icon" />
          <div className="security-text-col">
            <span className="security-title">Secure Sharing</span>
            <span className="security-desc">Your receipt link is encrypted and only accessible to people you share it with.</span>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="sheet-actions">
          <button 
            className="share-now-btn primary-btn"
            onClick={handleShareSubmit}
            disabled={!selectedOption}
          >
            Share Now
          </button>
          <button 
            className="cancel-btn secondary-btn"
            onClick={() => navigate(`/transfers/${transactionId}`)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareTransactionPage;
