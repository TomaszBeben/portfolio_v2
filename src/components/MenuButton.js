import React, { useState } from 'react'
import ContentFolder from './ContentFolder';

import NavElements from './NavElements';
import {toggle} from './ToggleFunction';

const MenuButton = () => {
    const [rotate, setRotate] = useState('menu-square')

    functionRotate();

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

    const hideElem = 'content-folder-area hide'
    const showElem = 'content-folder-area'
    const [isVisible, setVisible] = useState('content-folder-area')

    return (
        <>
        {/* <ContentFolder isVisible={isVisible}/> */}
        <div className='menu-nav-container'>
            <NavElements show={elemHide} click={()=>toggle(elemHide, setElemHide, hide, show)}/>
            <div className={rotate} onClick={()=>{rotateCall(); toggle(elemHide, setElemHide, hide, show); toggle(isVisible, setVisible, hideElem, showElem)}}>
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
