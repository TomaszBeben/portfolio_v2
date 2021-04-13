import React, { useState } from 'react'

import { toggle } from '../GlobalFunction'
export const buttonStyle = {
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '10rem',
        height: '6rem',
        fontSize: '40px',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '10px',
        zIndex: 50,
        cursor: 'pointer',
        boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)'
    }
const LanguageButton = (props) => {
    const [language, setLanguage] = useState(props.default)
    const [languageButton, setLanguageButton] = useState("EN")
    return (
        <button
            style={buttonStyle}
            onClick={() => {
                toggle(language, setLanguage, props.default, props.toChange);
                toggle(languageButton, setLanguageButton, 'PL', 'EN');
            }}>{languageButton}
        </button>
    )
}

export default LanguageButton
