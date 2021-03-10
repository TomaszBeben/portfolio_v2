import React, { useState } from 'react';

import Draggable from 'react-draggable';

import Content from './Content'

import { toggle, random } from './GlobalFunction';


const ContentFolder = (props) => {

    const fullScreen = 'content-folder-folder-full-screen';
    const [resize, setResize] = useState('content-folder-folder');

    return (
        <>
            <div className={props.isVisible}>
                <Draggable
                    handle='.content-folder-toolbar'
                    defaultPosition={
                        { x: random(window.innerWidth - 500), y: random(window.innerHeight - 500) }}
                    bounds='.main--Page--Background'>
                    <div className={resize}>
                        <div className='draggable-library'>
                            <div className='content-folder-toolbar' onDoubleClick={() => { toggle(resize, setResize, fullScreen, 'content-folder-folder') }}>
                                <div className='content-folder-toolbar-nav' onClick={() => { toggle(resize, setResize, fullScreen, 'content-folder-folder') }}>[]</div>
                                <div className='content-folder-toolbar-nav' onClick={props.hideContentFolder}>x</div>
                            </div>
                            <div className='content-folder-content'>
                                <Content/>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
        </>
    )
}

export default ContentFolder
