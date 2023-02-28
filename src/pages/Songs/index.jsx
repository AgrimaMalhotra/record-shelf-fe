import React, { useEffect, useState } from 'react';
import { Main } from '../../components';
import makeRequest from '../../utils/makeRequest/makeRequest';
import {
  GET_SONGS_DATA,
  GET_LIKES_PER_SONG_ID,
} from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';

const Songs = () => {
  const [allSongsData, setAllSongsData] = useState([]);
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
  return (
    <div>
      <Main allSongsData={allSongsData} />
    </div>
  );
};

export default Songs;
