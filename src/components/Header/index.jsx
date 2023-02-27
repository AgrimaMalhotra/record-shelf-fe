import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
      <header onClick={handleClick}>
        <p>
          My <strong>Record </strong> Shelf
        </p>
      </header>
    </>
  );
};
export default Header;
