import React from 'react'

import LightDarkMode from './LightDarkMode'
import Links from './Links'


const Header = () => {
    return (
        <div className='header'>
            <Links/>
            <LightDarkMode/>
        </div>
    )
}

export default Header
