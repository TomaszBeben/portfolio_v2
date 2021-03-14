import React from 'react';

import Header from './components/header/Header'
import MenuButton from './components/MenuButton';
import Test from './components/test/Test'
import { random } from './components/GlobalFunction';

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
    <>
      <div className='main--Page--Background' style={style}>
        <Header/>
        <MenuButton />
        {/* <Test/> */}
      </div>
    </>
  );
};

export default App;
