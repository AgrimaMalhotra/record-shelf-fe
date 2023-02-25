import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sync.css';

const Sync = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('songs');
  }
  return (
    <div className="sync-page">
      <div className="sync-page-wrapper">
        <p>
          :(( <br />
          seems a bit empty in here...
        </p>
        <button type="button" onClick={handleClick}>
          sync
        </button>
      </div>
    </div>
  );
};
export default Sync;
