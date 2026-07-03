import React from 'react';
import { Globe, Bell, Shield, Lock, Headphones, Info, LogOut, ChevronRight } from 'lucide-react';
import './Settings.css';

const Settings: React.FC = () => {
  return (
    <div className="settings-container">
      <div className="top-header animate-fade-in-up stagger-1" style={{ justifyContent: 'center' }}>
        <h1 className="header-title" style={{ flex: 'none', color: '#0f766e' }}>Settings</h1>
      </div>

      {/* User Profile Card */}
      <a href="#" className="profile-card glass-panel animate-fade-in-up stagger-2">
        <div className="profile-left">
          <img 
            className="profile-avatar" 
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=Vicki" 
            alt="Talita Vicki Avatar" 
          />
          <div className="profile-info">
            <span className="profile-name">Talita Vicki</span>
            <span className="profile-subtitle">Edit Profile</span>
          </div>
        </div>
        <ChevronRight size={20} color="var(--text-tertiary)" />
      </a>

      {/* Account Section */}
      <div className="animate-fade-in-up stagger-3">
        <div className="settings-section-title">Account</div>
        <div className="settings-card glass-panel">
          <a href="#" className="settings-item">
            <div className="settings-item-left">
              <div className="settings-icon-box">
                <Globe size={20} />
              </div>
              <span className="settings-item-label">Language</span>
            </div>
            <ChevronRight size={20} color="var(--text-tertiary)" />
          </a>
          <a href="#" className="settings-item">
            <div className="settings-item-left">
              <div className="settings-icon-box">
                <Bell size={20} />
              </div>
              <span className="settings-item-label">Notifications</span>
            </div>
            <ChevronRight size={20} color="var(--text-tertiary)" />
          </a>
        </div>
      </div>

      {/* Security Section */}
      <div className="animate-fade-in-up stagger-4">
        <div className="settings-section-title">Security</div>
        <div className="settings-card glass-panel">
          <a href="#" className="settings-item">
            <div className="settings-item-left">
              <div className="settings-icon-box">
                <Shield size={20} />
              </div>
              <span className="settings-item-label">Security</span>
            </div>
            <ChevronRight size={20} color="var(--text-tertiary)" />
          </a>
          <a href="#" className="settings-item">
            <div className="settings-item-left">
              <div className="settings-icon-box">
                <Lock size={20} />
              </div>
              <span className="settings-item-label">Privacy</span>
            </div>
            <ChevronRight size={20} color="var(--text-tertiary)" />
          </a>
        </div>
      </div>

      {/* Support & Info Section */}
      <div className="animate-fade-in-up stagger-5" style={{ paddingBottom: '32px' }}>
        <div className="settings-section-title">Support & Info</div>
        <div className="settings-card glass-panel">
          <a href="#" className="settings-item">
            <div className="settings-item-left">
              <div className="settings-icon-box">
                <Headphones size={20} />
              </div>
              <span className="settings-item-label">Support Center</span>
            </div>
            <ChevronRight size={20} color="var(--text-tertiary)" />
          </a>
          <a href="#" className="settings-item">
            <div className="settings-item-left">
              <div className="settings-icon-box">
                <Info size={20} />
              </div>
              <span className="settings-item-label">About Stellar</span>
            </div>
            <ChevronRight size={20} color="var(--text-tertiary)" />
          </a>
          <a href="#" className="settings-item">
            <div className="settings-item-left">
              <div className="settings-icon-box">
                <LogOut size={20} />
              </div>
              <span className="settings-item-label" style={{ color: 'var(--brand-primary)' }}>Logout</span>
            </div>
            <ChevronRight size={20} color="var(--text-tertiary)" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Settings;
