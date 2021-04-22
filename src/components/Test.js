import React,{useState, useEffect} from 'react'

import {random} from './GlobalFunction'

const Test = () => {
    const [num, setNum] = useState(-1)
    useEffect(()=>{
        const interval = setInterval(()=>{
            num >= 100 ? setNum(-1) : setNum(num+0.1)
        },1000);
        return()=> clearInterval(interval)
    })
    const size = '40'
    const border = {
        width: `${size}px`,
        height: `${size}px`,
        border: '1px solid black',
        position: 'absolute',
        zIndex: '1',
        top: `${num}vh`,
        left: '10%'
    }
    const point = {
        position: 'relative',
        width: '1px',
        height: '1px',
        borderRadius: '50%',
        border: '1px solid white',
        backgroundColor: 'white'
    }

    const test = {
        position: 'absolute',
        zIndex: '5',
        left: '20%'
    }
    return (
        <>
        <div className='border' style={border}>
            <div className='point' style={point}></div>
        </div>
        <div style={test}>{num}</div>
        </>
    )
}

export default Test
