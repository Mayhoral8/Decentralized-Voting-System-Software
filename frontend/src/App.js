// src/App.js
import React, { useEffect } from 'react';
import Main from './main';
import { Route, Routes } from 'react-router-dom';
import ViewProposal from './viewProposal';
import CreateProposals from './CreateProposals';


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/viewProposal" element={<ViewProposal />}/>
      <Route path="/createProposal" element={<CreateProposals />}/>
    </Routes>

  );
};

export default App;
