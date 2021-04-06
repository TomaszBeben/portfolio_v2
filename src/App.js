import React, { useState } from 'react';

import Content from './components/Content';
import Header from './components/Header';
import MenuButton from './components/MenuButton';
import { toggle } from './components/GlobalFunction';
import { background } from './components/Variables'


const App = () => {
  const show = 'nav-elements-container'
  const hide = 'nav-elements-container hide'
  const [elemHide, setElemHide] = useState(hide)

  const randomColor = {
    background: `${background}`
  };

  return (
    <>
      <div className='main--Page--Background' style={randomColor}>
        <Header headerHide={elemHide}/>
        <Content/>
        <MenuButton headerShowFunction={()=>{toggle(elemHide, setElemHide, hide, show)}} />
      </div>
    </>
  );
};

export default App;
