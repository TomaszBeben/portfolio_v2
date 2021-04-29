import React, { useState } from 'react'

import Content from './components/Content'
import Header from './components/Header'
import MenuButton from './components/MenuButton'
import { toggle } from './components/GlobalFunction'
import { randomColor } from './components/Variables'
import Snowfall from 'react-snowfall'

const App = () => {

  const show = 'nav-elements-container'
  const hide = 'nav-elements-container hide'
  const [elemHide, setElemHide] = useState(hide)

  const contentAnimationClass = 'content-component-animation'
  const [contentAnimationState, setContentAnimationState] = useState('')

  const blurredClass = 'blurred'
  const [blurred, setBlurred] = useState('')

  const boxShadowForContentStyle = 'content-component-box-shadow'
  const [boxShadowForContent, setBoxShadowForContent] = useState('')

  const defaultSpeed = [-2, 2]
  const defaultWind = [-2, 2]
  const slowMotion = [0, 0]
  const [snowfallSpeed, setSnowfallSpeed] = useState(defaultSpeed)
  const [snowfallWind, setSnowfallWind] = useState(defaultWind)

  const addressCheck = () =>
    window.location.hash === '#/' ?
    setBoxShadowForContent('') :
    setBoxShadowForContent(boxShadowForContentStyle)

  setInterval(addressCheck, 100)

  return (
    <>
      <div className={blurred} style={randomColor}>
        <Snowfall
          color='white'
          snowflakeCount={25}
          wind={snowfallWind}
          speed={snowfallSpeed}
          radius={[1, 5]}
        />

      </div>
      <div className='main--Page--Background'>
        <Header
          headerHide={elemHide}
        />
        <Content
          contentBoxShadowVisible={boxShadowForContent}
          contentAnimation={contentAnimationState}
        />
        <MenuButton headerShowFunction={() => {
          toggle(elemHide, setElemHide, hide, show)
          toggle(contentAnimationState, setContentAnimationState, '', contentAnimationClass)
          toggle(blurred, setBlurred, '', blurredClass)
          toggle(snowfallWind, setSnowfallWind, defaultWind, slowMotion)
          toggle(snowfallSpeed, setSnowfallSpeed, defaultSpeed, slowMotion)
        }}
        />
      </div>
    </>
  );
};

export default App
