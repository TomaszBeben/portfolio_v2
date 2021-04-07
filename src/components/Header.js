import React from 'react'

const Header = (props) => {
    const style={
        height: '15%',
        width: '95%',
        border: '1px solid black',
        marginLeft: 'auto',
        marginRight: 'auto',
        filter: 'blur(0) !important'
    }
    return (
        <div style={style}>
            <a className={`nav-elements-elem github ${props.headerHide}`} href="https://github.com/TomaszBeben"><i/></a>
            <a className={`nav-elements-elem linkedIn ${props.headerHide}`} href="https://www.linkedin.com/in/tomasz-bęben-1944021a2/"><i/></a>
        </div>
    )
}

export default Header
