import React from 'react'

import styled, { keyframes } from 'styled-components'
import {random} from './GlobalFunction'

const RandomPoint = () => {

    const direction = ['left', 'right', 'top', 'bottom']
    const dirOne = direction[random(4)];
    const dirTwo = direction[random(4)];


    const move = keyframes`
    0%{
        
        ${dirOne}: 0%;
        ${dirTwo}: ${random(150)}%;
    }
    100%{
        ${dirOne}: ${random(150)}%;
        ${dirTwo}: ${random(150)}%;
    }
    `
    console.log(random(2));
    const OnePoint = styled.div`
        position: absolute;
        z-index: 1;
        border: 1px solid black;
        width: 100px;
        height: 100px;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-direction: alternate-reverse;
        animation-timing-function: ease-in-out;
        animation-name: ${move};
    `
    return (
        <>
            <OnePoint></OnePoint>
        </>
    )
}

export default RandomPoint
