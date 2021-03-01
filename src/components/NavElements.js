import React from 'react'

// import ContentFolder from './ContentFolder';

const elements = [
    { id: 1, mainClass: 'nav-elements-elem', indywidualClass: 'github', },
    { id: 2, mainClass: 'nav-elements-elem', indywidualClass: 'cv' },
    { id: 3, mainClass: 'nav-elements-elem', indywidualClass: 'mailing' },
    { id: 4, mainClass: 'nav-elements-elem', indywidualClass: 'linkedIn' },
    { id: 5, mainClass: 'nav-elements-elem', indywidualClass: 'about' },
    { id: 6, mainClass: 'nav-elements-elem', indywidualClass: 'projects' },
]

const NavElements = (props) => {

    return (
        <>
            <div className={props.show}>
                {elements.map((elem) => (
                    <div
                        key={elem.id}
                        className={elem.mainClass + ' ' + elem.indywidualClass}
                        onClick={props.click}
                    ></div>
                ))}
            </div>
        </>
    )
}

export default NavElements
