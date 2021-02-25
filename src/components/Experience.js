import React from 'react'

const Experience = (props) => {
    return (
        <div className='resume-sub-container'>
           <div className='education-experience-awards'>
           <div className='year-side'>
           <p>{props.startdate} - {props.enddate}</p>
           </div>
           <div className='sub-right-side'>
               <h4 className='right-name'>{props.company} | {props.position}</h4>
           </div>
           </div>
        </div>
    )
}

export default Experience;
