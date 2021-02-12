import React from 'react';
import {Grid, Cell} from 'react-mdl';
import LinkedInPicNew from './Assets/LinkedInPicNew.png';

const LandingPage = () => {
    return (
        <div className='landing-container'>
        <Grid className='landing-grid'>
            <Cell col={12}>
                <img
                src={LinkedInPicNew}
                alt='avatar'
                className='avatar-img'
                />

                <div className='banner-text'>
                    <h1>Juan Martinez</h1>
                    <h3>Full Stack Web Developer</h3>
                <hr/>
                <div className='line'></div>

                <p>HTML/CSS | JavaScript | C# | Microsoft SQL Server | MongoDB | ExpressJS | ReactJS | NodeJS</p>

                </div>

                <div className='social-links'>

                {/* LinkedIn link */}
                <a href='https://www.linkedin.com/in/juan-martinez-58231b71' rel='noopener noreferrer' target='_blank'>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>

                {/* GitHub link */}
                <a href='https://github.com/juanmartinez238' rel='noopener noreferrer' target='_blank'>
                <i className="fa fa-github" aria-hidden="true"/>
                </a>
                </div>
            </Cell>
        </Grid>
        </div>
    )
}

export default LandingPage;
