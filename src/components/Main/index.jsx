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
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [allSongsData, setAllSongsData] = useState([]);
  // const [requestError, setRequestError] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const recordsDataWithoutLikes = await makeRequest(
        { ...GET_SONGS_DATA },
        {},
        navigate
      );
      const likesResponseData = await Promise.all(
        recordsDataWithoutLikes.data.map((record) => {
          return makeRequest(GET_LIKES_PER_SONG_ID(record.id), {}, navigate);
        })
      );
      const likesData = likesResponseData.map((resData) => resData.data);

      const recordsData = recordsDataWithoutLikes.data.map((record, idx) => ({
        ...record,
        ...likesData[idx],
      }));
      setAllSongsData(recordsData);
    }
    fetchData();
  }, []);

  // const fetchLikesData = async (data) => {
  //   try {
  //     for (let idx = 0; idx < data.length; idx++) {
  //       await makeRequest(
  //         GET_LIKES_PER_SONG_ID(data[idx].id),
  //         {},
  //         navigate
  //       ).then((likesData) => {
  //         data[idx] = {
  //           ...data[idx],
  //           ...likesData.data,
  //         };
  //       });
  //     }
  //     return data;
  //   } catch (error) {
  //     return <ErrorMessage errorMessage={requestError} />;
  //   }
  // };

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

export default Main;
