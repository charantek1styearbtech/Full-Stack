import React from 'react';

const Projects = () => {
    return (
        <section id="projects-section" className="content-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <h3>Uber Clone</h3>
                    <p className="project-desc">Implemented a robust Clone application, facilitating request and Real-time GPS tracking</p>
                    <div className="tech-stack">
                        <span>React</span>
                        <span>Express</span>
                        <span>Web-Scokets</span>
                        <span>MongoDB</span>
                    </div>
                </div>
                <div className="project-card">
                    <h3>Personal Portfolio</h3>
                    <p>A website that reflects my Journey</p>
                    <div className="tech-stack">
                        <span>HMTL</span>
                        <span>CSS</span>
                        <span>React Js</span>
                        <span>Express Js</span>
                        <span>JavaScript</span>
                        <span>Sematic Search</span>
                        <span>Gemini</span>
                    </div>
                </div>
                <div className="project-card">
                    <h3>EMS (WhatsApp Bot)</h3>
                    <p>Educational Management System that simplifies the communication and administration between Teacher's and Student's</p>
                    <div className="tech-stack">
                        <span>Python</span>
                        <span>Flask</span>
                        <span>WhatsApp</span>
                        <span>SQL-Lite</span>
                    </div>
                </div>
                <div className="project-card">
                    <h3>Responsive Chat Bot</h3>
                    <p>An Human Interaction based Chatbot using Natural Languague Tool Kit able to respond basic human responses.</p>
                    <div className="tech-stack">
                        <span>Python</span>
                        <span>NLTK</span>
                        <span>Regex</span>
                        <span>sckiit-learn</span>
                        <span>Jupyter Notebook</span>
                        <span>Streamlit</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects; 