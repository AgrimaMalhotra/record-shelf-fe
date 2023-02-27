import React from 'react';
import Card from '../Card';
import './CardGrid.css';
// import cardBackgroundColor from '../../constants/cardColor';
import propTypes from 'prop-types';

export const CardGrid = ({ allSongsData }) => {
  return (
    <div className="card-grid">
      {allSongsData.map((songDetail) => (
        <Card
          key={songDetail.id}
          songDetail={songDetail}
          // bgColor={cardBackgroundColor[index % 2]}
        />
      ))}
    </div>
  );
};

export default CardGrid;

CardGrid.propTypes = {
  allSongsData: propTypes.object.isRequired,
};
