import React from 'react'
import { ResizableBox } from 'react-resizable';
import Handle from './Handle';
import Draggable from 'react-draggable';
import Toolbar from './Toolbar'
import {random} from '../GlobalFunction'

const Test = () => {
    return (
        <>
        <ResizableBox className='test' width={200} height={200}
            minConstraints={[100, 100]} maxConstraints={[300, 300]} handle={Handle} style={null}>
                <Draggable  handle={Toolbar} defaultPosition={
                        { x: random(window.innerWidth - 500), y: random(window.innerHeight - 500) }}
                    bounds='.main--Page--Background'>
                        <div></div>
                    </Draggable>
        </ResizableBox>
        </>
    )
}

export default Test
