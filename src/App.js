import React, { useState } from 'react'

import Content from './components/Content'
import Header from './components/Header'
import MenuButton from './components/MenuButton'
import { toggle } from './components/GlobalFunction'
import { randomColor } from './components/Variables'


const App = () => {

  const show = 'nav-elements-container'
  const hide = 'nav-elements-container hide'
  const [elemHide, setElemHide] = useState(hide)

  const contentAnimationClass = 'content-component-animation'
  const[contentAnimationState, setContentAnimationState] = useState('')

  const blurredClass = 'blurred'
  const[blurred, setBlurred] =useState('')

  return (
    <>
      <div className={blurred} style={randomColor}></div>
      <div className='main--Page--Background'>
        <Header headerHide={elemHide}/>
        <Content contentAnimation={contentAnimationState}/>
        <MenuButton headerShowFunction={()=>{
          toggle(elemHide, setElemHide, hide, show)
          toggle(contentAnimationState, setContentAnimationState, '', contentAnimationClass)
          toggle(blurred, setBlurred, '', blurredClass)
          }} />
      </div>
    </>
  );
};

export default App
