import React from 'react'

const SocialLinks = () => {
    return (
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
    )
}

export default SocialLinks;
