import React from 'react';

import './styles.css';

import DevItem from '../DevItem';

function Main(props) {
  const { devs } = props;

  return (
    <main>
      <ul>
        {devs.map(dev => <DevItem key={dev._id} dev={dev} />)}
      </ul>
    </main>
  );
}

export default Main;
