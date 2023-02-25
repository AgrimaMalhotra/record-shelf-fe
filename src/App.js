import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ALL_SONGS, HOME_ROUTE } from './constants/routes';
import { Home, Songs } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={ALL_SONGS} element={<Songs />} />
      </Routes>
    </div>
  );
}

export default App;
