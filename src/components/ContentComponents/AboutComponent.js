import React,{ useState } from 'react'

import { buttonStyle } from './LanguageButton'
import { language as text } from './Language'
import { toggle } from '../GlobalFunction'


const AboutComponent = () => {
    const [language, setLanguage] = useState(text.about.pl)
    const [languageButton, setLanguageButton] = useState("EN")

    return (
        <>
            {/*  <LanguageButton default={text.about.pl} toChange={text.about.en}/> fix it Tomasz !!!!!!! */}
            <button
            style={buttonStyle}
            onClick={()=>{
                toggle(language, setLanguage, text.about.pl, text.about.en)
                toggle(languageButton, setLanguageButton, 'PL', 'EN')
                }}>{languageButton}</button>
            <div className='about-component'>
                <header className='about-component-header'>TBEBEN</header>
                <h1 className='about-component-text'>
                    {language}
                </h1>
                <div className="about-component-imgOfMyself" />
            </div>
        </>
    )
}

export default AboutComponent
