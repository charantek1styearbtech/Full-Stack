import React from 'react';

const Projects = () => {
    return (
        <section id="projects-section" className="content-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <h3>WhatsApp Bot</h3>
                    <p className="project-desc">A Automated chat bot which interacts and connects teacher and students to facilitate in academic activities</p>
                    <div className="tech-stack">
                        <span>Python</span>
                        <span>Twilio</span>
                        <span>Flask</span>
                        <span>Sql lite</span>
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
                <div className="project-card">
                    <h3>Stock Price Prediction</h3>
                    <p>Stock Price forecast using Long-Short Term Memory</p>
                    <div className="tech-stack">
                        <span>Python</span>
                        <span>Jupyter Notebook</span>
                        <span>Streamlit</span>
                    </div>
                </div>
                <div className="project-card">
                    <h3>Personal Website</h3>
                    <p>A Website that reflects my Journey</p>
                    <div className="tech-stack">
                        <span>HMTL</span>
                        <span>CSS</span>
                        <span>React Js</span>
                        <span>Express Js</span>
                        <span>JavaScript</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects; 