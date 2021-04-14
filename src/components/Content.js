import React from 'react'

import AboutComponent from './ContentComponents/AboutComponent'
import CVComponent from './ContentComponents/CVComponent'
import MailingComponent from './ContentComponents/MailingComponent'
import ProjectsComponent from './ContentComponents/ProjectsComponent'

import { HashRouter, Switch, Route } from 'react-router-dom'

const Content = (props) => {
    return (
        <div className={`content-component ${props.contentBoxShadowVisible} ${props.contentAnimation}`}>
        <HashRouter>
            <Switch>
                <Route exact path='/about' component={AboutComponent}></Route>
                <Route exact path='/cv' component={CVComponent}></Route>
                <Route exact path='/mailing' component={MailingComponent}></Route>
                <Route exact path='/projects' component={ProjectsComponent}></Route>
            </Switch>
        </HashRouter>
        </div>
    )
}

export default Content
