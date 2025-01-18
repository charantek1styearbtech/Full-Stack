import React from 'react';

const About = () => {
    return (
        <section id="about-section" className="content-section">
            <h2 className='about-txt'>About Me</h2>
            <div className="about-content">
                <p>I'm an upcoming passionate software developer</p>
                <p>who loves to contribute to the tech world and solve problems.</p>
                <div className="study">
                    <h3>Study</h3>
                    <ul className='study-li'>
                        <li>
                            <i className="fas fa-spinner fa-spin"></i>
                            Btech 3rd Yr National Institute of Technology Warangal
                        </li>
                        <li>
                            <i className="fas fa-check-circle"></i>
                            10+2 in Narayana Jr College
                        </li>
                        <li>
                            <i className="fas fa-check-circle"></i>
                            0-10 in ST.joseph's Public School
                        </li>
                    </ul>
                </div>
                <div className='skills'>
                <h3>Skills</h3>
                <ul className='skills-li'>
                    <li>Languages: C++, Python, JavaScript.</li>
                    <li>Web Technologies: HTML,CSS,React JS,Express JS</li>
                    <li>App Technologies: Flutter</li>
                    <li>AI/ML: TensorFlow, Pandas, Generative AI, Neural Networks, sckit-learn</li>
                </ul>
                </div>
                <div className='certifications'>
                <h3>Certifications</h3>
                <ul className='certify-li'>
                    <li>OOPs in C++ -Codechef</li>
                    <li>Foundational Generative Ai -iNueron</li>
                    <li>Flutter and Dart -Udemy</li>
                    <li>Full Stack Development- Mimo org</li>
                </ul>
                </div>
            </div>
        </section>
    );
};

export default About; 