/*eslint-disable */
import React from 'react';
import Card from '../Card';
import './CardGrid.css';
import cardBackgroundColor from '../../constants/cardColor';

export const CardGrid = ({ allSongsData }) => {
  return (
    <div className="card-grid">
      {allSongsData.map((songDetail, index) => (
        <Card
          key={songDetail.id}
          songDetail={songDetail}
          bgColor={cardBackgroundColor[index % 2]}
        // isLiked={isLiked}
        // likeCount={likeCount}
        // updateLikeData={updateLikeData}
        />
      ))}
    </div>
  );
};

export default CardGrid;
