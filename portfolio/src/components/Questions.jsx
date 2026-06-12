import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Question() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchQuestions = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/questions`, {});
            setQuestions(res.data);
        } catch (error) {
            console.error('Error fetching questions:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
        <div className="app" style={{ paddingTop: '100px' }}>
            <div className='Questions'>
                <div className="question-header">
                    <Link to="/" className="back-btn">
                        ← Back to Portfolio
                    </Link>
                    <h2>🔥 Most Asked Questions</h2>
                    <p>Here are the most frequently asked questions from my AI chat interface</p>
                </div>

                {loading ? (
                    <div className="loading">
                        <div className="loading-spinner">⏳</div>
                        <p>Loading questions...</p>
                    </div>
                ) : questions.length > 0 ? (
                    <ul>
                        {questions.map((question, index) => (
                            <li key={question._id || index} className="question-item">
                                <div className="question-badge">#{index + 1}</div>
                                <div className="question-content">
                                    <div className="question-text">
                                        <strong>❓ Question:</strong>
                                        <p>{question.message}</p>
                                    </div>
                                    <div className="reply-text">
                                        <strong>💬 Reply:</strong>
                                        <p>{question.reply}</p>
                                    </div>
                                    {question.frequency && (
                                        <div className="frequency-badge">
                                            Asked {question.frequency} time{question.frequency > 1 ? 's' : ''}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="no-questions">
                        <p>🤔 No questions found yet. Be the first to ask something!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Question;
