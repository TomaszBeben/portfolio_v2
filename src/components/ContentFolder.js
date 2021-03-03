import React from 'react';

import Draggable from 'react-draggable';
import FolderCard from './FolderCard';


const ContentFolder = (props) => {
    const random = (num) => Math.floor(Math.random() * num);
    console.log(window.innerHeight);

    return (
        <>
            <div className={props.isVisible}>
                <Draggable
                    handle='.content-folder-toolbar'
                    defaultPosition={
                        { x: random(window.innerWidth - 400), y: random(window.innerHeight - 400) }}
                    bounds='.main--Page--Background'>
                    <div className='draggable-library'>
                        <div className='content-folder-toolbar'>
                            <div className='content-folder-toolbar-nav'>[]</div>
                            <div className='content-folder-toolbar-nav' onClick={props.hideContentFolder}>x</div>
                        </div>
                        <div className='content-folder-content'>
                            <FolderCard />
                        </div>
                    </div>
                </Draggable>
            </div>
        </>
    )
}

export default ContentFolder
