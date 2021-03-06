import React, { useState } from 'react';

import Draggable from 'react-draggable';

import { toggle } from './ToggleFunction';


const ContentFolder = (props) => {
    const random = (num) => Math.floor(Math.random() * num);

    const fullScreen = 'content-folder-folder-full-screen';
    const [resize, setResize] = useState('content-folder-folder');// opakować w diva i zmienić style

    return (
        <>
            <div className={props.isVisible}>
                <Draggable
                    handle='.content-folder-toolbar'
                    defaultPosition={
                        { x: random(window.innerWidth - 400), y: random(window.innerHeight - 400) }}
                    bounds='.main--Page--Background'>
                    <div className={resize}>
                        <div className='draggable-library'>
                            <div className='content-folder-toolbar'>
                                <div className='content-folder-toolbar-nav' onClick={() => { toggle(resize, setResize, fullScreen, 'content-folder-folder') }}>[]</div>
                                <div className='content-folder-toolbar-nav' onClick={props.hideContentFolder}>x</div>
                            </div>
                            <div className='content-folder-content'>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
        </>
    )
}

export default ContentFolder
