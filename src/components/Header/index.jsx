import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div>
      <header onClick={handleClick} data-testid="page-title">
        <p>
          My <strong>Record </strong> Shelf
        </p>
      </header>
    </div>
  );
};
export default Header;
