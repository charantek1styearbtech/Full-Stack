import React from 'react';

const Welcome = () => {
    return (
        <div className="welcome-message">
            <div className='msg-content'>
                <img className="signature" src="/sources/image.png" alt="signature" />
            <div className="text-msg">
                <h1>Hi 👋🏻</h1>
                <h1>I'm Charantej Reddy</h1>
            </div>
            </div>
            <div className="ext-links">
                <a className="resume" href="/files/Resume.pdf" download>Resume</a>
                <a className="linkedin" href="https://linkedin.com/in/reddycharantej">Linkedin</a>
                <a className="email" href="mailto:charantej928@gmail.com">Email</a>
                <a className='Github' href='https://github.com/charantek1styearbtech/'>Github</a>
            </div>
        </div>
    );
};

export default Welcome; 
