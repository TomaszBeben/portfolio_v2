import React from 'react'

const Header = (props) => {
    return (
        <div className='header-links'>
            <a className={`nav-elements-elem github ${props.headerHide}`} href="https://github.com/TomaszBeben"><i/></a>
            <a className={`nav-elements-elem linkedIn ${props.headerHide}`} href="https://www.linkedin.com/in/tomasz-bęben-1944021a2/"><i/></a>
        </div>
    )
}

export default Header
