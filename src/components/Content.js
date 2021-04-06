import React from 'react'

import AboutComponent from './ContentComponents/AboutComponent'
import CVComponent from './ContentComponents/CVComponent'
import GithubComponent from './ContentComponents/GithubComponent'
import LinkedInComponent from './ContentComponents/LinkedInComponent'
import MailingComponent from './ContentComponents/MailingComponent'
import ProjectsComponent from './ContentComponents/ProjectsComponent'

import { HashRouter, Switch, Route } from 'react-router-dom'

const Content = () => {
    const style={
        position: 'relative',
        top: '-8%',
        width: '90%',
        height: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '2px solid black'
    }
    return (
        <div style={style}>
        <HashRouter>
            <Switch>
                <Route exact path='/about' component={AboutComponent}></Route>
                <Route exact path='/cv' component={CVComponent}></Route>
                <Route exact path='/github' component={GithubComponent}></Route>
                <Route exact path='/linkedin' component={LinkedInComponent}></Route>
                <Route exact path='/mailing' component={MailingComponent}></Route>
                <Route exact path='/projects' component={ProjectsComponent}></Route>
            </Switch>
        </HashRouter>
        </div>
    )
}

export default Content
