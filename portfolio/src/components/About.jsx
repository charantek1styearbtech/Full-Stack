import React, { useState } from 'react';

const About = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setHoveredImage(imageSrc);
    };

    const closePopup = () => {
        setHoveredImage(null);
    };

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
                    <li>
                        OOPs in C++ - Codechef 
                        <button
                            className='certification-download'
                            onClick={() => handleImageClick('sources/oops.jpeg')}
                        >
                            <img className='certfication-download-img' src='sources/certificate.png' alt='view'/>
                        </button>
                    </li>
                    <li>
                        Foundational Generative AI - iNeuron 
                        <button
                            className='certification-download'
                            onClick={() => handleImageClick('sources/genai.png')}
                        >
                            <img className='certfication-download-img' src='sources/certificate.png' alt='view'/>
                        </button>
                    </li>
                    <li>
                        Flutter and Dart - Udemy 
                        <button
                            className='certification-download'
                            onClick={() => handleImageClick('sources/flutter.jpg')}
                        >
                            <img className='certfication-download-img' src='sources/certificate.png' alt='view'/>
                        </button>
                    </li>
                    <li>
                        Full Stack Development - Mimo org 
                        <button
                            className='certification-download'
                            onClick={() => handleImageClick('sources/mern.jpeg')}
                        >
                            <img className='certfication-download-img' src='sources/certificate.png' alt='view'/>
                        </button>
                        </li>
                        <li>
                        AWS - Scaler Academy
                        <button
                            className='certification-download'
                            onClick={() => handleImageClick('sources/AWS.jpeg')}
                        >
                            <img className='certfication-download-img' src='sources/certificate.png' alt='view'/>
                        </button>
                    </li>
                </ul>
                </div>
            </div>
            {hoveredImage && (
                <div className="popup">
                    <button className="close-button" onClick={closePopup}>X</button>
                    <img src={hoveredImage} alt="Certification" />
                </div>
            )}
        </section>
    );
};

export default About; 