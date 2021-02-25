import React from 'react';

const Education = (props) => {
    return (
        <div className='resume-sub-container'>
           <div className='education-experience-awards'>
           <div className='year-side'>
           <p>{props.startdate} - {props.enddate}</p>
           </div>
           <div className='sub-right-side'>
               <h4 className='right-name'>{props.school}</h4>
           </div>
           </div>
        </div>
    )
}

export default Education;
