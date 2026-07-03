import React from 'react';
import { Plus, Users, ReceiptText, Sparkles, ChevronRight, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import './SmartSplitPage.css';

const SmartSplitPage: React.FC = () => {
  const splits = [
    {
      id: '1',
      title: 'Trip to Bali 2026',
      members: 4,
      totalAmount: 'S$340.00',
      status: 'You are owed S$85.00',
      statusType: 'owed',
      date: 'Updated today',
    },
    {
      id: '2',
      title: 'Dinner at Marina Bay',
      members: 3,
      totalAmount: 'S$120.00',
      status: 'Completed',
      statusType: 'completed',
      date: 'Yesterday',
    },
    {
      id: '3',
      title: 'Weekly Groceries',
      members: 2,
      totalAmount: 'S$64.00',
      status: 'You owe S$32.00',
      statusType: 'owe',
      date: '3 days ago',
    },
  ];

  return (
    <div className="smart-split-container">
      {/* Header */}
      <div className="split-header animate-fade-in-up stagger-1">
        <h1 className="split-title">Smart Split</h1>
        <button className="new-group-btn">
          <Plus size={20} />
        </button>
      </div>

      {/* Summary Card */}
      <div className="split-summary-card animate-fade-in-up stagger-2">
        <div className="summary-bg" />
        <div className="summary-content">
          <div className="summary-title">Smart Split Balances</div>
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-label">
                <ArrowUpRight size={14} className="stat-icon owed" /> You are owed
              </span>
              <span className="stat-val owed">S$85.00</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-label">
                <ArrowDownLeft size={14} className="stat-icon owe" /> You owe
              </span>
              <span className="stat-val owe">S$32.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="split-actions animate-fade-in-up stagger-3">
        <button className="split-action-btn">
          <div className="action-circle bg-teal">
            <Plus size={20} />
          </div>
          <span className="action-lbl">New Split</span>
        </button>
        <button className="split-action-btn">
          <div className="action-circle bg-white">
            <Sparkles size={20} color="var(--brand-primary)" />
          </div>
          <span className="action-lbl">AI Auto-Split</span>
        </button>
        <button className="split-action-btn">
          <div className="action-circle bg-white">
            <ReceiptText size={20} color="var(--brand-primary)" />
          </div>
          <span className="action-lbl">Settle Up</span>
        </button>
      </div>

      {/* Group Splits List */}
      <div className="split-groups-section animate-fade-in-up stagger-4">
        <h2 className="section-subtitle">Active Groups & Bills</h2>
        <div className="splits-list">
          {splits.map((item) => (
            <div key={item.id} className="split-item-card glass-panel">
              <div className="split-item-left">
                <div className="group-avatar">
                  <Users size={20} color="var(--brand-primary)" />
                </div>
                <div className="group-info">
                  <span className="group-name">{item.title}</span>
                  <span className="group-meta">
                    {item.members} members <div className="meta-dot" /> {item.date}
                  </span>
                </div>
              </div>
              <div className="split-item-right">
                <div className="amount-col">
                  <span className="group-total">{item.totalAmount}</span>
                  <span className={`group-status ${item.statusType}`}>
                    {item.status}
                  </span>
                </div>
                <ChevronRight size={18} color="var(--text-tertiary)" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartSplitPage;
