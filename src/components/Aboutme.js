import React from 'react';
import {Grid, Cell} from 'react-mdl';

const Aboutme = () => {
    return (
        <div className='about-container'>
            <Grid className='about-grid'>
                <Cell col={12}>
                    {/* <img
                    src={LinkedInPicNew}
                    alt='avatar'
                    className='avatar-img'
                    /> */}

                    <div className='about-banner-text'>
                        {/* <h1>Juan Martinez</h1> */}
                        <h3>About Me</h3>
                    <hr/>

                    <p>
                        I'm a United States military veteran that found a passion for coding
						and is fascinated with technology. I initially found my passion for coding
						during a business application development course while completing my bachelor
						of science degree at the University of South Florida. It was such an amazing and fulfilling
						experience to be able to create an application from scratch that I just had to continue
						the programming path. This ultimately lead me to the full stack web development course at Wyncode Academy
						where I've expanded my knowledge and experience. I now seek to merge my web development and computer/network security
						skills to help build secure applications. 
                    </p>

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

export default Aboutme
