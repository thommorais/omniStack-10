import React from 'react';

import DevForm from '../DevForm';

import api from '../../services/api';

import './styles.css';

function Sidebar(props) {
  const { devs, setDevs } = props;
  
  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data.newDev]);
  }

  return (
    <aside>
      <strong>Cadastrar</strong>
      <DevForm onSubmit={handleAddDev} />
    </aside>
  );
}

export default Sidebar;
