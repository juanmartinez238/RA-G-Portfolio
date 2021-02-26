import React from 'react'
import { Switch, Route } from 'react-router-dom';
import landingpage from './LandingPage';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Projects from './Projects';

const Main = () => {
    return(
    <Switch>
        <Route exact path='/RA-G-Portfolio/landing' component={landingpage} />
        <Route exact path='/aboutme' component={Aboutme} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={Projects} />
    </Switch>
    )
}

export default Main;
