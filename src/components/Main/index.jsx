import React from 'react';
import CardGrid from '../CardGrid';
import './Main.css';
import genreIcon from '../../assets/icon-genre.svg';
const Main = () => {
  return (
    <div className="main-body">
      <div className="main-body-header">
        <p>all songs</p>
        <img src={genreIcon} alt="Grid Icon" />
      </div>
      <CardGrid className="grid" />
    </div>
  );
};

export default Main;
