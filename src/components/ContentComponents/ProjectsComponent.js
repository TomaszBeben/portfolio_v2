import React, { useState } from 'react'

import { buttonStyle } from './LanguageButton'
import { language as text } from './Language'
import { toggle } from '../GlobalFunction'

import defaultImage from '../../images/default.bmp'
import portfolioImage from '../../images/portfolioImage.jpg'



const ProjectsComponent = () => {
    const [languageTop, setLanguageTop] = useState(text.projects.pl.top)
    const [languageBottom, setLanguageBottom] = useState(text.projects.pl.bottom)
    const [languageButton, setLanguageButton] = useState("EN")

    const projectsElements = [
        {id: 1, class: 'default-content-element', link: 'https://github.com/TomaszBeben/portfolio_v2', image: portfolioImage, alt: 'Tomasz Bęben portfolio'},
        {id: 2, class: 'default-content-element', link: 'https://github.com/TomaszBeben/Bieda-messenger', image: defaultImage, alt: 'Tomasz Bęben messenger'},
        {id: 3, class: 'default-content-element', link: 'https://github.com/TomaszBeben/hangman-game', image: defaultImage, alt: 'Tomasz Bęben small game hangman'},
        {id: 4, class: 'default-content-element', link: 'https://github.com/TomaszBeben/CodersLab_final-project', image: defaultImage, alt: 'Tomasz Bęben first project in coders-lab'}
    ]
    return (
        <>
           <button
                style={buttonStyle}
                onClick={() => {
                    toggle(languageTop, setLanguageTop, text.projects.pl.top, text.projects.en.top)
                    toggle(languageBottom, setLanguageBottom, text.projects.pl.bottom, text.projects.en.bottom)
                    toggle(languageButton, setLanguageButton, 'PL', 'EN')
                }}>{languageButton}
            </button>
            <div className='default-component-container' >
            <div className='default-content-element default-component-text'>{languageTop}</div>
            {projectsElements.map((elem)=>(
                <a key={elem.id} href={elem.link}>
                    <img className={elem.class} src={elem.image} alt={elem.alt}/>
                </a>
            ))}
            <div className='default-content-element default-component-text'>{languageBottom}</div>
            </div>

        </>
    )
}

export default ProjectsComponent
