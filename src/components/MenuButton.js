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

    const show = 'nav-elements-container'
    const hide = 'nav-elements-container nav-elements-hide'
    const[elemHide, setElemHide]= useState(hide)
    const toggle = () => elemHide === hide ? setElemHide(show) : setElemHide(hide)

    return (
        <div className='menu-nav-container'>
            <NavElements props={elemHide}/>
            <div className={rotate} onClick={()=>{rotateCall(); toggle()}}>
                <div className='menu-dots dot-1'></div>
                <div className='menu-dots dot-2'></div>
                <div className='menu-dots dot-3'></div>
                <div className='menu-dots dot-4'></div>
            </div>
        </div>
    )
}

export default MenuButton
