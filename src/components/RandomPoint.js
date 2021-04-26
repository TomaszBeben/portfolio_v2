import React from 'react'

import styled, { keyframes } from 'styled-components'

const RandomPoint = () => {

    const move = keyframes`
    0%{
        background-color: white;
    }
    100%{
        background-color: black;
    }
    `

    const OnePoint = styled.div `
        position: absolute;
        border: 1px solid black;
        width: 100px;
        height: 100px;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate-reverse;
        animation-timing-function: ease-in-out;
        animation-name: ${move};
    `
    return (
        <>
        <OnePoint>?</OnePoint>
        </>
        
    )
}

export default RandomPoint
