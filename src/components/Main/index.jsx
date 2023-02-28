import React, { useState } from 'react';
import CardGrid from '../CardGrid';
import './Main.css';
import genreIcon from '../../assets/icon-genre.svg';
import gridIcon from '../../assets/icon-grid.svg';
import GENRE_IMAGE_MAPPING from '../../constants/imageMapping';
import propTypes from 'prop-types';

const Main = ({ allSongsData }) => {
  const [clickedGenreIcon, setClickedGenreIcon] = useState(false);

  const handleClick = () => {
    setClickedGenreIcon(!clickedGenreIcon);
  };

  const getGenreClassification = () => {
    return allSongsData.reduce((acc, song) => {
      if (acc[song.genre['name']]) {
        acc[song.genre['name']].push(song);
      } else {
        acc[song.genre['name']] = [song];
      }
      return acc;
    }, {});
  };
  const genreClassifiedData = getGenreClassification();

  return (
    <div className="main-body">
      {clickedGenreIcon ? (
        <>
          <div className="main-body-header">
            <p>genres</p>
            <img src={gridIcon} alt="Grid Icon" onClick={handleClick} />
          </div>
          <div className="genre-header">
            {Object.keys(genreClassifiedData).map((key) => (
              <div key={key}>
                <div className="genre">
                  <img src={GENRE_IMAGE_MAPPING[key]} alt="Genre" />
                  <p className="genre-name">{key}</p>
                </div>
                <CardGrid
                  className="grid"
                  allSongsData={genreClassifiedData[key]}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="main-body-header" data-testid="test-all-songs-page">
            <p>all songs</p>
            <img
              src={genreIcon}
              alt="Grid Icon"
              onClick={handleClick}
              data-testid="test-genre-icon-button"
            />
          </div>
          <CardGrid className="grid" allSongsData={allSongsData} />
        </>
      )}
    </div>
  );
};

Main.propTypes = {
  allSongsData: propTypes.array.isRequired,
};
export default Main;
