import React from 'react';
import { Eye, Plus, ArrowDown, ArrowLeftRight, FileText, ChevronRight } from 'lucide-react';
import './Wallet.css';

const Wallet: React.FC = () => {
  return (
    <div className="wallet-page-container">
      {/* Balance Card */}
      <div className="wallet-balance-card animate-fade-in-up stagger-1">
        <div className="wb-bg-graphics" />
        <div className="wb-content">
          <div className="wb-label">Available Balance</div>
          <div className="wb-amount-row">
            <span className="wb-amount">S$1,250.80</span>
            <Eye size={20} className="wb-eye" />
          </div>
          <div className="wb-currency-info">
            <img src="https://flagcdn.com/w80/sg.png" alt="SGD" className="wb-flag" />
            <span>Singapore Dollar (SGD)</span>
          </div>
          <div className="wb-footer-text">Ready for international transfers</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="wallet-actions animate-fade-in-up stagger-2">
        <button className="w-action-btn">
          <div className="w-action-icon-wrapper">
            <Plus size={24} />
          </div>
          <span className="w-action-label">Add Funds</span>
        </button>
        <button className="w-action-btn">
          <div className="w-action-icon-wrapper">
            <ArrowDown size={24} />
          </div>
          <span className="w-action-label">Withdraw</span>
        </button>
        <button className="w-action-btn">
          <div className="w-action-icon-wrapper">
            <ArrowLeftRight size={24} />
          </div>
          <span className="w-action-label">Exchange<br/>Currency</span>
        </button>
        <button className="w-action-btn">
          <div className="w-action-icon-wrapper">
            <FileText size={24} />
          </div>
          <span className="w-action-label">Statements</span>
        </button>
      </div>

      {/* Balances List */}
      <div className="wallet-balances-section animate-fade-in-up stagger-3">
        <h2 className="wb-section-title">Your Balances</h2>
        <div className="wb-list-container">
          {/* SGD */}
          <div className="wb-list-item">
            <div className="wb-item-left">
              <img src="https://flagcdn.com/w80/sg.png" alt="SGD" className="wb-item-flag" />
              <div className="wb-item-info">
                <span className="wb-item-code">SGD</span>
                <span className="wb-item-name">Singapore Dollar</span>
              </div>
            </div>
            <div className="wb-item-right">
              <div className="wb-item-amount-col">
                <span className="wb-item-amount">S$1,250.80</span>
                <span className="wb-item-badge">Primary Balance</span>
              </div>
              <ChevronRight size={20} color="#9ca3af" />
            </div>
          </div>
          <div className="wb-divider" />
          
          {/* IDR */}
          <div className="wb-list-item">
            <div className="wb-item-left">
              <img src="https://flagcdn.com/w80/id.png" alt="IDR" className="wb-item-flag" />
              <div className="wb-item-info">
                <span className="wb-item-code">IDR</span>
                <span className="wb-item-name">Indonesian Rupiah</span>
              </div>
            </div>
            <div className="wb-item-right">
              <div className="wb-item-amount-col">
                <span className="wb-item-amount">Rp2,450,000</span>
                <span className="wb-item-badge">Available</span>
              </div>
              <ChevronRight size={20} color="#9ca3af" />
            </div>
          </div>
          <div className="wb-divider" />

          {/* PHP */}
          <div className="wb-list-item">
            <div className="wb-item-left">
              <img src="https://flagcdn.com/w80/ph.png" alt="PHP" className="wb-item-flag" />
              <div className="wb-item-info">
                <span className="wb-item-code">PHP</span>
                <span className="wb-item-name">Philippine Peso</span>
              </div>
            </div>
            <div className="wb-item-right">
              <div className="wb-item-amount-col">
                <span className="wb-item-amount">₱8,600</span>
                <span className="wb-item-badge">Available</span>
              </div>
              <ChevronRight size={20} color="#9ca3af" />
            </div>
          </div>
          <div className="wb-divider" />

          {/* VND */}
          <div className="wb-list-item">
            <div className="wb-item-left">
              <img src="https://flagcdn.com/w80/vn.png" alt="VND" className="wb-item-flag" />
              <div className="wb-item-info">
                <span className="wb-item-code">VND</span>
                <span className="wb-item-name">Vietnamese Dong</span>
              </div>
            </div>
            <div className="wb-item-right">
              <div className="wb-item-amount-col">
                <span className="wb-item-amount">₫4,800,000</span>
                <span className="wb-item-badge">Available</span>
              </div>
              <ChevronRight size={20} color="#9ca3af" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
