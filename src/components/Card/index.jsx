import React from 'react';
import propTypes from 'prop-types';
import './Card.css';
import grayHeart from '../../assets/heart-gray.svg';
import redHeart from '../../assets/heart-red.svg';
// import makeRequest from '../../utils/makeRequest/makeRequest';
// import { UPDATE_LIKES_PER_SONG_ID, } from '../../constants/apiEndPoints';

const Card = (props) => {
  // const [isLiked, setIsLiked] = useState(props.songDetail.like);
  // const [likeCount, setLikeCount] = useState(props.songDetail.count);

  // const increaseLikeCount = async () => {
  //   try {
  //     let updatedLikeCount = likeDetails.like ? likeDetails.count - 1 : likeDetails.count + 1;
  //     await makeRequest(UPDATE_LIKES_PER_SONG_ID(props.songDetail.id), {
  //       data: {
  //         count: updatedLikeCount,
  //         like: !isLiked,
  //       },
  //     });
  //     setIsLiked(!isLiked);
  //     setLikeCount(updatedLikeCount);
  //   } catch (e) {
  //     return (
  //       <div className="backendError">
  //         <p>{e}</p>
  //       </div>
  //     );
  //   }
  // }

  return (
    <div className="card" style={{ backgroundColor: props.bgColor }}>
      <img src={props.songDetail.imageUrl} alt="Song Poster" />
      <div className="card-body">
        <div className="song-details">
          <p className="song-name">{props.songDetail.name}</p>
          <p className="singer">{props.songDetail.artist.name}</p>
        </div>
        <div className="likes">
          {/* <img src={isLiked ? redHeart : grayHeart} alt="heart" onClick={increaseLikeCount} />
          <p>{likeCount}</p> */}
          <img src={props.songDetail.like ? redHeart : grayHeart} alt="heart" />
          <p>{props.songDetail.count}</p>
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
};
export default Card;

// import React, { useEffect, useState } from 'react';
// import propTypes from 'prop-types';
// import './Card.css';
// import grayHeart from '../../assets/heart-gray.svg';
// import redHeart from '../../assets/heart-red.svg';
// import makeRequest from '../../utils/makeRequest/makeRequest';
// import {
//   GET_LIKES_PER_SONG_ID,
//   UPDATE_LIKES_PER_SONG_ID,
// } from '../../constants/apiEndPoints';

// const Card = (props) => {
//   const [likeDetails, setLikeDetails] = useState({});

//   useEffect(() => {
//     makeRequest(GET_LIKES_PER_SONG_ID(props.songDetail.id)).then((data) => {
//       setLikeDetails(data.data);
//     });
//   }, []);

//   const [isLiked, setIsLiked] = useState(likeDetails.like);
//   const [likeCount, setLikeCount] = useState(likeDetails.count);
//   const increaseLikeCount = async () => {
//     try {
//       let updatedLikeCount;
//       isLiked
//         ? (updatedLikeCount = likeCount - 1)
//         : (updatedLikeCount = likeCount + 1);
//       await makeRequest(UPDATE_LIKES_PER_SONG_ID(props.songDetail.id), {
//         data: {
//           count: updatedLikeCount,
//           like: !isLiked,
//         },
//       });
//       setIsLiked(!isLiked);
//       setLikeCount(updatedLikeCount);
//     } catch (e) {
//       return (
//         <div className="backendError">
//           <p>{e}</p>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="card" style={{ backgroundColor: props.bgColor }}>
//       <img src={props.songDetail.imageUrl} alt="Song Poster" />
//       <div className="card-body">
//         <div className="song-details">
//           <p className="song-name">{props.songDetail.name}</p>
//           <p className="singer">{props.songDetail.artist.name}</p>
//         </div>
//         <div className="likes">
//           <img
//             src={isLiked ? redHeart : grayHeart}
//             alt="heart"
//             onClick={increaseLikeCount}
//           />
//           <p>{likeCount}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// Card.propTypes = {
//   bgColor: propTypes.string.isRequired,
//   songDetail: propTypes.shape({
//     id: propTypes.string.isRequired,
//     name: propTypes.string.isRequired,
//     imageUrl: propTypes.string.isRequired,
//     artist: propTypes.shape({
//       id: propTypes.string.isRequired,
//       name: propTypes.string.isRequired,
//     }).isRequired,
//     genre: propTypes.shape({
//       id: propTypes.string.isRequired,
//       name: propTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
// export default Card;
