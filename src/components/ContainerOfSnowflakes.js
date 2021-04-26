import React, { useState } from 'react'

import OneSnowflake from './OneSnowflake'
import RandomPoint from './RandomPoint'

import {random} from './GlobalFunction'


const ContainerOfSnowflakes = () => {

    return (
        <>
            <button onClick={null}
                style={{ position: 'absolute', width: '50px', height: '30px', zIndex: '2' }}>test
            </button>
            <RandomPoint/>
        </>
    )
}

export default ContainerOfSnowflakes
