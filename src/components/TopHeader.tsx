import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './TopHeader.css';

interface TopHeaderProps {
  title: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="top-header">
      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeft size={24} color="var(--text-primary)" />
      </button>
      <h1 className="header-title">{title}</h1>
      <div className="header-right-placeholder" /> {/* To center the title */}
    </div>
  );
};

export default TopHeader;
