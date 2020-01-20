import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  return (
    <div id="app">
      <Sidebar devs={devs} setDevs={setDevs} />
      <Main devs={devs} />
    </div>
  );
}

export default App;
