// src/App.js
import React, { useEffect } from 'react';
import Main from './main';
import { Route, Routes } from 'react-router-dom';



const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      {/* <WalletConnect/> */}
    </Routes>

  );
};

export default App;
