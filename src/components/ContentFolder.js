import React,{useState} from 'react';

import Draggable from 'react-draggable';
import FolderCard from './FolderCard';

import {toggle} from './ToggleFunction';

const ContentFolder = (props) => {
    const hideElem = 'content-folder-area hide'
    const showElem = 'content-folder-area'
    const [isVisible, setVisible] = useState('content-folder-area')

    return (
        <>
            <div className={isVisible}>
                <Draggable handle='.content-folder-toolbar' defaultPosition={{ x: 10, y: 10 }} bounds='.main--Page--Background'>
                    <div className='draggable-library'>
                        <div className='content-folder-toolbar'>
                            <div className='content-folder-toolbar-nav'>_</div>
                            <div className='content-folder-toolbar-nav'>[]</div>
                            <div className='content-folder-toolbar-nav' onClick={()=>toggle(isVisible, setVisible, hideElem, showElem)}>x</div>
                        </div>
                        <div className='content-folder-content'>
                            <FolderCard/>
                        <   div className='content-folder-resize-handle'></div>
                        </div>
                    </div>
                </Draggable>
            </div>
        </>
    )
}

export default ContentFolder
