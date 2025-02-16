import React, { useState } from 'react';
import { run } from '../LLM.js'
import axios from 'axios';
import {Link} from 'react-router-dom';
function LLMPage() {
    const [inputText, setInputText] = useState('');
    const [displayedResponse, setDisplayedResponse] = useState('');
    const [loading,setLoading]=useState(false);
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const typeEffect = (text) => {
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                setDisplayedResponse((prev) => prev + text[i]);
                if (i === text.length - 1) {
                    setDisplayedResponse(text);
                }
            }, 50 * i);
        }
    };

    const handleSubmit = async () => {
        setDisplayedResponse('')
        setLoading(true);
        console.log("Submitting input to LLM:", inputText);
        const outputText = await run(inputText) || '';
        if (typeof outputText === 'string' && outputText.trim() !== '') {
            console.log("Sending data:", { inputText, outputText });
            typeEffect(outputText);
        } else {
            console.log("Output is invalid or empty, not displaying.");
            setDisplayedResponse('');
        }
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/addtodb`, {
                inputText,
                outputText
            }); 
            console.log("Response from server:", res.data);
        } catch (error) {
            console.error('Error during Axios request:', error);
        } finally{
            setLoading(false);
        }
    };
    return (
        <div className="content-section llm-interface" id="llm-interface">
            <h1 className="llm-title">AskMe - Finetuned Gemini-1.5-flash</h1>
            <textarea 
                className="llm-input" 
                value={inputText} 
                onChange={handleInputChange} 
                placeholder="Type your query here... or else it would tell one quality about me" 
            />
            <div className='llm-buttons'>
                <button className="llm-submit llm-button" onClick={handleSubmit} disabled={loading}>{loading?'Loading..':'Submit'}</button>
                <Link to='/questions' className="llm-top-questions llm-button">Top Asked Questions</Link>
            </div>
            <div className="llm-response">
                <h2>Response:</h2>
                <p className='llm-response-text'>{displayedResponse}</p>
            </div>
        </div>
    );
}

export default LLMPage;
