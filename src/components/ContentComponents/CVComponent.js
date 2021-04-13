import React, { useState } from 'react'

import { buttonStyle } from './LanguageButton'
import { language as text } from './Language'
import { toggle } from '../GlobalFunction'
import plCV from '../../files/CV_Tomasz_Bęben.pdf'
import enCV from '../../files/enCV_Tomasz_Beben.pdf'

const CVComponent = () => {
    const [language, setLanguage] = useState(text.cv.pl)
    const [languageButton, setLanguageButton] = useState("EN")
    return (
        <>
            <button
                style={buttonStyle}
                onClick={() => {
                    toggle(language, setLanguage, text.cv.pl, text.cv.en)
                    toggle(languageButton, setLanguageButton, 'PL', 'EN')
                }}>{languageButton}
            </button>
            <div className='default-component-container'>
                <div className='default-content-element default-component-text'>{language}</div>
                <a href={plCV} download className='default-content-element pl-cv'>{null}</a>
                <a href={enCV} download className='default-content-element en-cv'>{null}</a>
            </div>
        </>
    )
}

export default CVComponent
