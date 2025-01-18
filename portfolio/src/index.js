import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Questions from './components/Questions';
import './App.css';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/questions" element={<Questions/>} />
        </Routes>
        </BrowserRouter>
);
