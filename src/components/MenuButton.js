import React, { useState } from 'react'

import NavElements from './NavElements';

const MenuButton = () => {
    const [rotate, setRotate] = useState('menu-square')

    function functionRotate() {
        return new Promise(
            res => {
                setTimeout(() => {
                    res(setRotate('menu-square'))
                }, 300)
            }
        );
    }

    async function rotateCall() {
        setRotate('menu-square rotate')
        await functionRotate()
    }

    return (
        <div className='menu-nav-container'>
            <NavElements/>
            <div className={rotate} onClick={rotateCall}>
                <div className='menu-dots dot-1'></div>
                <div className='menu-dots dot-2'></div>
                <div className='menu-dots dot-3'></div>
                <div className='menu-dots dot-4'></div>
            </div>
        </div>
    )
}

export default MenuButton
