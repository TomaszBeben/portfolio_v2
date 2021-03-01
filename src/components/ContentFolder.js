import React from 'react';

import Draggable from 'react-draggable';
import FolderCard from './FolderCard';


const ContentFolder = (props) => {

    return (
        <>
            <div className={props.isVisible}>
                <Draggable handle='.content-folder-toolbar' defaultPosition={{ x: 10, y: 10 }} bounds='.main--Page--Background'>
                    <div className='draggable-library'>
                        <div className='content-folder-toolbar'>
                            <div className='content-folder-toolbar-nav'>[]</div>
                            <div className='content-folder-toolbar-nav' onClick={props.hideContentFolder}>x</div>
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
