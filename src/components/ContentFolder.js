import React from 'react'
import Draggable from 'react-draggable';

const ContentFolder = () => {
    return (
        <>
            <div className='content-folder-area'>
                <Draggable handle='.content-folder-toolbar' defaultPosition={{ x: 50, y: 100 }} bounds='.main--Page--Background'>
                    <div className='draggable-library'>
                        <div className='content-folder-toolbar'></div>
                        <div className='content-folder-content'>
                        <div className='content-folder-resize-handle'></div>
                        </div>
                    </div>
                </Draggable>
            </div>
        </>
    )
}

export default ContentFolder
