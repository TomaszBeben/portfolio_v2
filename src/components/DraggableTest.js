import React from 'react'
import Draggable from 'react-draggable';

const DraggableTest = () => {
    return (
        <>
        <Draggable  handle='.top' defaultPosition={{x: 50, y: 100}}>
            <div className='draggable-library'>
                <div className='top'></div>
                <div className='bottom'></div>
                <button></button>
            </div>
        </Draggable>
        </>
    )
}

export default DraggableTest
