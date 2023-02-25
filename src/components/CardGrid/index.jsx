// import React from 'react';
// // import Card from '../Card';
// import './CardGrid.css';
// // import cardBackgroundColor from '../../constants/cardColor';
// import makeRequest from '../../utils/makeRequest/makeRequest';
// import { GET_SONGS_DATA } from '../../constants/apiEndPoints';

// const CardGrid = () => {
//   const [allSongsData, setAllSongsData] = React.useState([]);
//   const [error, setError] = React.useState();
//   React.useEffect(() => {
//     makeRequest({ ...GET_SONGS_DATA })
//       .then((response) => {
//         setAllSongsData(response.data);
//       })
//       .catch((e) => setError(e.message));
//   }, []);

//   if (error) {
//     return (
//       <div className="error">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="card-grid">
//       {allSongsData.map((songDetail) => {
//         // <Card
//         //   key={songDetail.id}
//         //   bgColor={cardBackgroundColor[index % 2]}
//         //   songDetail={songDetail}
//         // />;
//         <p>{songDetail}</p>;
//       })}
//     </div>
//   );
// };
/*eslint-disable */
import React, { useEffect, useState } from 'react';
import Card from '../Card';
import makeRequest from '../../utils/makeRequest/makeRequest';
import {
  GET_SONGS_DATA,
  GET_LIKES_PER_SONG_ID,
} from '../../constants/apiEndPoints';
import cardBackgroundColor from '../../constants/cardColor';

export const CardGrid = () => {
  const [allSongsData, setAllSongsData] = useState([]);
  const [isLiked, setIsLiked] = useState();
  const [likeCount, setLikeCount] = useState();
  useEffect(() => {
    makeRequest({ ...GET_SONGS_DATA }).then(async (data) => {
      const updatedData = await fetchLikesData(data.data);
      setAllSongsData(updatedData);
    });
  }, []);

  const [isLiked, setIsLiked] = useState(props.songDetail.like);
  const [likeCount, setLikeCount] = useState(props.songDetail.count);

  const increaseLikeCount = async () => {
    try {
      let updatedLikeCount = likeDetails.like ? likeDetails.count - 1 : likeDetails.count + 1;
      await makeRequest(UPDATE_LIKES_PER_SONG_ID(props.songDetail.id), {
        data: {
          count: updatedLikeCount,
          like: !isLiked,
        },
      });
      setIsLiked(!isLiked);
      setLikeCount(updatedLikeCount);
    } catch (e) {
      return (
        <div className="backendError">
          <p>{e}</p>
        </div>
      );
    }
  }
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

  return (
    <div>
      {allSongsData.map((songDetail, index) => (
        <Card
          key={songDetail.id}
          songDetail={songDetail}
          bgColor={cardBackgroundColor[index % 2]}
        />
      ))}
    </div>
  );
};

export default CardGrid;
