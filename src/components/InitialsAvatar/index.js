import React from 'react';
import './index.scss';

const InitialsAvatar = ({ initials = 'AT', size = 'lg' }) => {
  return (
    <div className={`initials-avatar ${size}`} aria-label={`Avatar ${initials}`}>
      {initials}
    </div>
  );
};

export default InitialsAvatar;