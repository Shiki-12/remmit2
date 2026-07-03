import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, ArrowRightLeft, Wallet, ReceiptText, Settings } from 'lucide-react';
import './BottomNav.css';

const BottomNav: React.FC = () => {
  const location = useLocation();

  const isTabActive = (path: string) => {
    if (path === '/home') {
      return location.pathname === '/home' || location.pathname === '/';
    }

    if (path === '/transfers') {
      return location.pathname.startsWith('/transfers');
    }

    if (path === '/wallet') {
      return location.pathname.startsWith('/wallet');
    }

    if (path === '/smart-split') {
      return location.pathname.startsWith('/smart-split');
    }

    if (path === '/settings') {
      return (
        location.pathname.startsWith('/settings') ||
        location.pathname.startsWith('/profile')
      );
    }

    return location.pathname === path;
  };

  const navItems = [
    { path: '/home', label: 'Home', icon: Home },
    { path: '/transfers', label: 'Transfers', icon: ArrowRightLeft },
    { path: '/wallet', label: 'Wallet', icon: Wallet },
    { path: '/smart-split', label: 'Smart Split', icon: ReceiptText },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isTabActive(item.path);
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={`nav-item ${active ? 'active' : ''}`}
          >
            <div className="nav-icon">
              <Icon size={18} strokeWidth={2.5} />
            </div>
            <span className="nav-text">{item.label}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default BottomNav;
