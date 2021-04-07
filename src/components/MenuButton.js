import React, { useState } from 'react'

import NavElements from './NavElements';
import { toggle } from './GlobalFunction';

const MenuButton = (props) => {
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
    const hide = 'nav-elements-container hide'
    const [elemHide, setElemHide] = useState(hide)

    return (
        <>
            <div className='menu-nav-container'>
                <NavElements
                    show={elemHide}
                    click={() => {
                        toggle(elemHide, setElemHide, hide, show)
                        props.headerShowFunction()
                    }}
                />
                <div className={rotate} onClick={() => {
                    rotateCall()
                    toggle(elemHide, setElemHide, hide, show)
                    props.headerShowFunction()
                }}
                >
                    <div className='menu-dots dot-1'></div>
                    <div className='menu-dots dot-2'></div>
                    <div className='menu-dots dot-3'></div>
                    <div className='menu-dots dot-4'></div>
                </div>
            </div>
        </>
    )
}

export default MenuButton
