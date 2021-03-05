import React,{useState} from 'react';

import Draggable from 'react-draggable';

import {toggle} from './ToggleFunction';


const ContentFolder = (props) => {
    const random = (num) => Math.floor(Math.random() * num);

    const fullScreen = 'test';
    const [resize, setResize]= useState('');// opakować w diva i zmienić style

    return (
        <>
            <div className={props.isVisible}>
                <Draggable
                    handle='.content-folder-toolbar'
                    defaultPosition={
                        { x: random(window.innerWidth - 400), y: random(window.innerHeight - 400) }}
                    bounds='.main--Page--Background'>
                    <div className={`draggable-library ${resize}`}>
                        <div className={`content-folder-toolbar ${resize}`}>
                            <div className='content-folder-toolbar-nav' onClick={()=>{toggle(resize, setResize, fullScreen, '')}}>[]</div>
                            <div className='content-folder-toolbar-nav' onClick={props.hideContentFolder}>x</div>
                        </div>
                        <div className={`content-folder-content ${resize}`}>
                        </div>
                    </div>
                </Draggable>
            </div>
        </>
    )
}

export default ContentFolder
