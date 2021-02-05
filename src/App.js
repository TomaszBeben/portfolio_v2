import React from 'react';

import MenuButton from './components/MenuButton';
// import Count from './components/Count';

const random = (num) => Math.floor(Math.random() * num);

const background = `linear-gradient(
  ${random(360)}deg,
  rgba(
    ${random(256)},
    ${random(256)},
    ${random(256)},1)0%,
  rgba(
    ${random(256)},
    ${random(256)},
    ${random(256)},1)
    ${random(98) + 1}%,
  rgba(
    ${random(256)},
    ${random(256)},
    ${random(256)},1) 100%)`;


const App = () => {

  const style = {
    background: `${background}`
  };

  return (
    <div className='main--Page--Background' style={style}>
      <MenuButton/>
      {/* <Count /> */}
    </div>
  );
};

export default App;
