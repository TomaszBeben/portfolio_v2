import React from 'react'
import Draggable, { DraggableCore } from 'react-draggable';
console.log(window.outerHeight);
console.log(window.outerWidth);

const ContentFolder = () => {
    return (
        <>
            <div className='content-folder-area'>
                <DraggableCore >
                    <Draggable handle='.top' defaultPosition={{ x: 50, y: 100 }} bounds='.content-folder-area'>
                        <div className='draggable-library'>
                            <div className='top'></div>
                            <div className='bottom'></div>
                            <button></button>
                        </div>
                    </Draggable>
                </DraggableCore>
            </div>
        </>
    )
}

export default ContentFolder
