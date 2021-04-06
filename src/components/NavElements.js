import React from 'react'

import {
    HashRouter,
    Link
} from "react-router-dom";

const elements = [
    { id: 1, mainClass: 'nav-elements-elem', indywidualClass: 'cv', route: '/cv' },
    { id: 2, mainClass: 'nav-elements-elem', indywidualClass: 'mailing', route: '/mailing' },
    { id: 3, mainClass: 'nav-elements-elem', indywidualClass: 'projects', route: '/projects' },
    { id: 4, mainClass: 'nav-elements-elem', indywidualClass: 'about', route: '/about' }
]

const NavElements = (props) => {

    return (
        <>
            <HashRouter>
                <div className={props.show}>
                    {elements.map((elem) => (
                        <Link key={elem.id} to={elem.route}>
                            <div
                                className={elem.mainClass + ' ' + elem.indywidualClass}
                                onClick={props.click}
                            ></div>
                        </Link>
                    ))}
                </div>
            </HashRouter>
        </>
    )
}

export default NavElements
