import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Awards from './Awards';
import SocialLinks from './SocialLinks';


const Aboutme = () => {
    return (
        <div className='resume2-main-container'>
            <div className='resume2-hero'>
            <div className='resume2-main-description'>
            <h5>About Me</h5><hr></hr>
            <h3 className='resume2-main-h3'>Hello, I'm Juan Martinez</h3>
            <p className='resume-description'>
                I'm a United States military veteran that found a passion for coding
                and is fascinated with technology. I initially found my passion for coding
                during a business application development course while completing my bachelor
                of science degree at the University of South Florida. It was such an amazing and fulfilling
                experience to be able to create an application from scratch that I just had to continue
                the programming path and haven't stopped since. I now seek to merge my web development and computer/network security
						skills to help build secure applications. 
            </p>
            
            <Link className='resume2-button' to='/contact' >Contact Me</Link>
            </div>
            </div>
            <div className='resume2-experience-education'>
            <Grid className='resume-grid'>
                <Cell className='resume-actual' col={8}>
                <h5>Resume</h5><hr></hr>
                <h4>Education</h4>
                    <Education startdate={'Completed'} enddate={'JAN 2021'} school={'BrainStation | Diploma Candidate, Web Development'}/>
                    <Education startdate={'Completed'} enddate={'AUG 2020'} school={'University of South Florida | Bachelor of Science, Business Analytics and Information Systems | GPA 3.90'}/>
                <h4>Experience</h4>
                    <Experience startdate={'JUN 2020'} enddate={'AUG 2020'} company={'ReliaQuest'} position={'Security Analyst'}/>
                    <Experience startdate={'DEC 2012'} enddate={'APR 2017'} company={'Florida National Guard'} position={'Team Leader'}/>
                    <Experience startdate={'JUN 2009'} enddate={'NOV 2012'} company={'United States Department of the Army'} position={'Security Specialist'} />
                <h4>Awards</h4>
                    <Awards award={`Who's Who Among Student in Colleges and Universities Award`}/>
                    <Awards award={`Veteran's Student Activities Exemplary Service Award`}/>

                </Cell>
            </Grid>
            </div>
            <div className='relevant-links'>
                <h4>Relevant Links</h4><hr></hr>
                <SocialLinks/>
            </div>
        </div>
    )
}

export default Aboutme;
