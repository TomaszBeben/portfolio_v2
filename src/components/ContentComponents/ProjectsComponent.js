import React, { useState } from 'react'

import { buttonStyle } from './LanguageButton'
import { language as text } from './Language'
import { toggle } from '../GlobalFunction'



const ProjectsComponent = () => {
    const [language, setLanguage] = useState(text.cv.pl)
    const [languageButton, setLanguageButton] = useState("EN")

    const projectsElements = {
    }
    return (
        <>
           <button
                style={buttonStyle}
                onClick={() => {
                    toggle(language, setLanguage, text.cv.pl, text.cv.en)
                    toggle(languageButton, setLanguageButton, 'PL', 'EN')
                }}>{languageButton}
            </button>
            <div className='default-component-container' >
            <div className='default-content-element default-component-text'> Moje projekty </div>
            <a className='default-content-element' ahref="https://github.com/TomaszBeben/portfolio_v2"> </a>
            <a className='default-content-element' ahref="https://github.com/TomaszBeben/Bieda-messenger"> </a>
            <a className='default-content-element' ahref="https://github.com/TomaszBeben/hangman-game"> </a>
            <a className='default-content-element' ahref="https://github.com/TomaszBeben/CodersLab_final-project"> </a>
            <div className='default-content-element default-component-text'> Kidyś będzie ich więcej, wystarczy poczekać :) </div>
            </div>

        </>
    )
}

export default ProjectsComponent
