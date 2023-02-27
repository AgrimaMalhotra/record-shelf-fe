import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ALL_SONGS, HOME_ROUTE, ERROR_ROUTE } from './constants/routes';
import { Home, Songs, Error, PageNotFound } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={ALL_SONGS} element={<Songs />} />
        <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
