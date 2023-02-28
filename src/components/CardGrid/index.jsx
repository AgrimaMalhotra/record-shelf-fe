import React from 'react';
import Card from '../Card';
import './CardGrid.css';
import propTypes from 'prop-types';

export const CardGrid = ({ allSongsData }) => {
  return (
    <div className="card-grid" data-testid="card-grid">
      {allSongsData.map((songDetail) => (
        <Card key={songDetail.id} songDetail={songDetail} />
      ))}
    </div>
  );
};

export default CardGrid;

CardGrid.propTypes = {
  allSongsData: propTypes.array.isRequired,
};
