import React from 'react'

const Awards = (props) => {
    return (
        <div className='resume-sub-container'>
           <div className='education-experience-awards'>
           <div className='year-side'>
           <p>Recieved</p>
           </div>
           <div className='sub-right-side'>
               <i><h4 className='right-name'>{props.award}</h4></i>
           </div>
           </div>
        </div>
    )
}

export default Awards;
