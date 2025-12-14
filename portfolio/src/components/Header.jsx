import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1>RCTR</h1>
            </div>
            <nav className="nav">
                <a href="#about-section" className="nav-item">About</a>
                <a href="#projects-section" className="nav-item">Projects</a>
                <a href="#opensource-section" className="nav-item">Open Source</a>
                <a href="#llm-interface" className="nav-item">My LLM</a>
                <a href="#contact-section" className="nav-item">Contact</a>
            </nav>
        </div>
    );
};

export default Header; 