import React from 'react'
import { ResizableBox } from 'react-resizable';
import Handle from './Handle';

const Test = () => {
    return (
        <>
        <ResizableBox className='test' width={200} height={200}
            minConstraints={[100, 100]} maxConstraints={[300, 300]} handle={Handle}>
        </ResizableBox>
        </>
    )
}

export default Test
