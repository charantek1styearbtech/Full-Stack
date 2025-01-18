import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const service_id=process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const template_id=process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const public_id = process.env.REACT_APP_EMAILJS_PUBLIC_ID;
        try {
            const templateParams = {
                from_name: name,
                to_name: 'Charan',
                message: message,
                from_email: email
            };

            const response = await emailjs.send(
                service_id,
                template_id,
                templateParams,
                public_id
            );

            if (response.status === 200) {
                alert('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            }
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <section id="contact-section" className="content-section">
            <h2>Contact</h2>
            <div className="contact-content">
                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;