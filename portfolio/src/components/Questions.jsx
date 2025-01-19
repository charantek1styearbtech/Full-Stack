import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Question() {
    const [questions, setQuestions] = useState([]); // State to hold questions

    const fetchQuestions = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/questions`, {});
            setQuestions(res.data); // Set the fetched questions into state
        } catch (error) {
            console.error('Error fetching questions:', error); // Log any errors that occur
        }
    };

    useEffect(() => {
        fetchQuestions(); // Fetch questions when the component mounts
    }, []); // Added an empty dependency array

    return (
        <div className='Questions'>
            <h2>Top Questions</h2>
            {questions.length > 0 ? (
                <ul>
                    {questions.map((question) => (
                        <li key={question._id}> {/* Assuming each question has a unique _id */}
                            <strong>Question:</strong> {question.message} <br />
                            <strong>Reply:</strong> {question.reply} <br />
                            <strong>Frequency:</strong> {question.frequency} {/* If frequency is available */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Question;
