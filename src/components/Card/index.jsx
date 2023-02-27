import React, { useState } from 'react';
import propTypes from 'prop-types';
import './Card.css';
import grayHeart from '../../assets/heart-gray.svg';
import redHeart from '../../assets/heart-red.svg';
import { UPDATE_LIKES_PER_SONG_ID } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest/makeRequest';

const Card = (props) => {
  const [isLiked, setIsLiked] = useState(props.songDetail.like);
  const [likeCount, setLikeCount] = useState(props.songDetail.count);

  const updateLikeData = (count, like) => {
    setIsLiked(like);
    setLikeCount(count);
  };

  const increaseLikeCount = async () => {
    try {
      let updatedLikeCount = isLiked ? likeCount - 1 : likeCount + 1;
      await makeRequest(UPDATE_LIKES_PER_SONG_ID(props.songDetail.id), {
        data: {
          like: !isLiked,
        },
      });
      updateLikeData(updatedLikeCount, !isLiked);
    } catch (e) {
      return (
        <div className="backendError">
          <p>{e.message}</p>
        </div>
      );
    }
  };

  return (
    <div className="card" style={{ backgroundColor: props.bgColor }}>
      <img src={props.songDetail.imageUrl} alt="Song Poster" />
      <div className="card-body">
        <div className="song-details">
          <p className="song-name">{props.songDetail.name}</p>
          <p className="singer">{props.songDetail.artist.name}</p>
        </div>
        <div className="likes" onClick={increaseLikeCount}>
          <img
            src={isLiked ? redHeart : grayHeart}
            alt="heart"
            className="imgg"
          />
          <p className="like-count">{likeCount}</p>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  bgColor: propTypes.string.isRequired,
  songDetail: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    artist: propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    }).isRequired,
    genre: propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    }).isRequired,
    count: propTypes.number.isRequired,
    like: propTypes.bool.isRequired,
  }).isRequired,
  // isLiked: propTypes.bool.isRequired,
  // likeCount: propTypes.number.isRequired,
  // updateLikeData: propTypes.func.isRequired,
};
export default Card;
