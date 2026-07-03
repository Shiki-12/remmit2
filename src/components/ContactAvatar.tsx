import React from 'react';
import { Plus } from 'lucide-react';
import './ContactAvatar.css';

interface ContactAvatarProps {
  name: string;
  isAdd?: boolean;
  isActive?: boolean;
}

const getAvatarUrl = (name: string) => {
  const seeds: Record<string, string> = {
    'Mama': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Lily',
    'Father': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Felix',
    'Brother': 'https://api.dicebear.com/7.x/adventurer/svg?seed=Jack',
  };
  return seeds[name] || `https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`;
};

const ContactAvatar: React.FC<ContactAvatarProps> = ({ name, isAdd, isActive }) => {
  return (
    <div className="contact-avatar-container">
      <div className={`avatar-circle ${isAdd ? 'add-circle' : ''} ${isActive ? 'active-circle' : ''}`}>
        {isAdd ? (
          <Plus size={32} color="var(--brand-primary)" strokeWidth={2} />
        ) : (
          <img src={getAvatarUrl(name)} alt={name} className="avatar-img" />
        )}
      </div>
      <span className={`avatar-name ${isActive ? 'active-name' : ''}`}>{name}</span>
    </div>
  );
};

export default ContactAvatar;
