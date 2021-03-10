import React from 'react'

import {
    HashRouter,
    Link
} from "react-router-dom";

const elements = [
    { id: 1, mainClass: 'nav-elements-elem', indywidualClass: 'github', route: '/github' },
    { id: 2, mainClass: 'nav-elements-elem', indywidualClass: 'cv', route: '/cv' },
    { id: 3, mainClass: 'nav-elements-elem', indywidualClass: 'mailing', route: '/mailing' },
    { id: 4, mainClass: 'nav-elements-elem', indywidualClass: 'linkedIn', route: '/linkedin' },
    { id: 5, mainClass: 'nav-elements-elem', indywidualClass: 'about', route: '/about' },
    { id: 6, mainClass: 'nav-elements-elem', indywidualClass: 'projects', route: '/projects' },
]

const NavElements = (props) => {

    return (
        <>
            <HashRouter>
                <div className={props.show}>
                    {elements.map((elem) => (
                        <Link to={elem.route}>
                            <div
                                key={elem.id}
                                className={elem.mainClass + ' ' + elem.indywidualClass}
                                onClick={props.click}
                            ></div>
                        </Link>
                    ))}
                </div></HashRouter>
        </>
    )
}

export default NavElements
