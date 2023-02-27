import React from 'react';
import { useParams } from 'react-router-dom';
import { Header, ErrorMessage } from '../../components';
const Error = () => {
  const { errorCode } = useParams();
  return (
    <div>
      <Header />
      <ErrorMessage errorMessage={errorCode} />
    </div>
  );
};
export default Error;
