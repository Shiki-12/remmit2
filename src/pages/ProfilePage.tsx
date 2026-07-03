import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Globe, ShieldCheck, MapPin, LogOut, ChevronRight } from 'lucide-react';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-page-container">
      {/* Header */}
      <div className="profile-header animate-fade-in-up stagger-1">
        <button className="back-button" onClick={() => navigate('/settings')}>
          <ArrowLeft size={24} color="var(--brand-primary)" />
        </button>
        <h1 className="header-title">My Profile</h1>
        <div className="header-right-placeholder" />
      </div>

      {/* Profile Details Card */}
      <div className="profile-hero-card glass-panel animate-fade-in-up stagger-2">
        <div className="hero-avatar-wrapper">
          <img 
            className="hero-avatar" 
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=Vicki" 
            alt="Talita Vicki Avatar" 
          />
          <div className="status-indicator online" />
        </div>
        <h2 className="hero-name">Talita Vicki</h2>
        <span className="hero-handle">@talita.vicki</span>
        <span className="hero-joined">Member since July 2025</span>
      </div>

      {/* Verification & Status */}
      <div className="profile-status-section animate-fade-in-up stagger-3">
        <div className="status-card glass-panel">
          <div className="status-row">
            <div className="status-info-left">
              <ShieldCheck size={20} color="var(--brand-secondary)" />
              <span className="status-label">Verification Status</span>
            </div>
            <span className="status-badge-verified">VERIFIED</span>
          </div>
          <div className="status-divider" />
          <div className="status-row-vertical">
            <div className="limit-labels">
              <span className="limit-title">Monthly Sending Limit</span>
              <span className="limit-val">S$12,450.00 / S$20,000.00 left</span>
            </div>
            <div className="limit-progress-bar">
              <div className="limit-progress-fill" style={{ width: '62.25%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Personal Info List */}
      <div className="profile-info-section animate-fade-in-up stagger-4">
        <h3 className="section-title">Personal Details</h3>
        <div className="info-list glass-panel">
          <div className="info-item">
            <div className="info-item-left">
              <Mail size={18} color="var(--text-secondary)" />
              <div className="info-text-col">
                <span className="info-item-label">Email Address</span>
                <span className="info-item-value">talita.vicki@stellar.org</span>
              </div>
            </div>
            <ChevronRight size={16} color="var(--text-tertiary)" />
          </div>
          <div className="info-divider" />
          <div className="info-item">
            <div className="info-item-left">
              <Phone size={18} color="var(--text-secondary)" />
              <div className="info-text-col">
                <span className="info-item-label">Phone Number</span>
                <span className="info-item-value">+65 8123 4567</span>
              </div>
            </div>
            <ChevronRight size={16} color="var(--text-tertiary)" />
          </div>
          <div className="info-divider" />
          <div className="info-item">
            <div className="info-item-left">
              <Globe size={18} color="var(--text-secondary)" />
              <div className="info-text-col">
                <span className="info-item-label">Home Country</span>
                <span className="info-item-value">Indonesia</span>
              </div>
            </div>
            <ChevronRight size={16} color="var(--text-tertiary)" />
          </div>
          <div className="info-divider" />
          <div className="info-item">
            <div className="info-item-left">
              <MapPin size={18} color="var(--text-secondary)" />
              <div className="info-text-col">
                <span className="info-item-label">Residence Address</span>
                <span className="info-item-value">Geylang Road, Singapore</span>
              </div>
            </div>
            <ChevronRight size={16} color="var(--text-tertiary)" />
          </div>
        </div>
      </div>

      {/* Logout Action */}
      <div className="profile-footer animate-fade-in-up stagger-5" style={{ paddingBottom: '32px' }}>
        <button className="logout-button glass-panel" onClick={() => navigate('/settings')}>
          <LogOut size={18} />
          <span>Back to Settings</span>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
