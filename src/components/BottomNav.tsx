import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, ArrowRightLeft, Wallet, ReceiptText, Settings } from 'lucide-react';
import './BottomNav.css';

const BottomNav: React.FC = () => {
  const location = useLocation();

  // Dynamic label based on the current page to perfectly match figma screenshots!
  const getFourthTabLabel = () => {
    if (location.pathname === '/' || location.pathname === '/recipients' || location.pathname === '/transfer') {
      return 'Smart Split';
    }
    return 'History';
  };

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/transfer', label: 'Transfers', icon: ArrowRightLeft },
    { path: '/wallet', label: 'Wallet', icon: Wallet },
    { path: '/add-funds', label: getFourthTabLabel(), icon: ReceiptText },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
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
