/*eslint-disable no-unused-vars*/
import React, { useEffect, useState } from 'react';
import CardGrid from '../CardGrid';
import './Main.css';
import genreIcon from '../../assets/icon-genre.svg';
import gridIcon from '../../assets/icon-grid.svg';
import makeRequest from '../../utils/makeRequest/makeRequest';
import GENRE_IMAGE_MAPPING from '../../constants/imageMapping';
import {
  GET_SONGS_DATA,
  GET_LIKES_PER_SONG_ID,
} from '../../constants/apiEndPoints';

const Main = () => {
  const [allSongsData, setAllSongsData] = useState([]);
  useEffect(() => {
    makeRequest({ ...GET_SONGS_DATA }).then(async (data) => {
      const updatedData = await fetchLikesData(data.data);
      setAllSongsData(updatedData);
    });
  }, []);

  const fetchLikesData = async (data) => {
    for (let idx = 0; idx < data.length; idx++) {
      await makeRequest(GET_LIKES_PER_SONG_ID(data[idx].id)).then(
        (likesData) => {
          data[idx] = {
            ...data[idx],
            ...likesData.data,
          };
        }
      );
    }
    return data;
  };

  const [clickedGenreIcon, setClickedGenreIcon] = useState(false);

  const handleClick = () => {
    setClickedGenreIcon(!clickedGenreIcon);
  };

  const getGenreClassification = () => {
    return allSongsData.reduce((acc, song) => {
      if (acc[song.genre.name]) {
        song['genreImageUri'] = `genre-${song.genre.name}.png`;
        acc[song.genre.name].push(song);
      } else {
        acc[song.genre.name] = [song];
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
          <div className="main-body-header">
            <p>all songs</p>
            <img src={genreIcon} alt="Grid Icon" onClick={handleClick} />
          </div>
          <CardGrid className="grid" allSongsData={allSongsData} />
        </>
      )}
    </div>
  );
};

export default Main;
