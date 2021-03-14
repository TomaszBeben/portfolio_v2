import React from 'react'

import AboutComponent from './ContentComponents/AboutComponent'
import CVComponent from './ContentComponents/CVComponent'
import GithubComponent from './ContentComponents/GithubComponent'
import LinkedInComponent from './ContentComponents/LinkedInComponent'
import MailingComponent from './ContentComponents/MailingComponent'
import ProjectsComponent from './ContentComponents/ProjectsComponent'
import { HashRouter, Switch, Route } from 'react-router-dom'

// const githubLink= 'https://github.com/TomaszBeben'

const Content = () => {
    return (
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
    )
}

export default Content
