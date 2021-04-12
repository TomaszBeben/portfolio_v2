import React,{useState} from 'react'
import { language as text } from './Language'
import {toggle} from '../GlobalFunction'

const AboutComponent = () => {
    const [language, setLanguage] = useState(text.about.pl)
    const [languageButton, setLanguageButton] = useState("EN")
    const style={
        width: '100px',
        height: '50px',
        fontSize: '40px',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '10px'
    }
    return (
        <>
            <button
            style={style}
            onClick={()=>{
                toggle(language, setLanguage, text.about.pl, text.about.en); 
                toggle(languageButton, setLanguageButton, 'PL', 'EN');
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
