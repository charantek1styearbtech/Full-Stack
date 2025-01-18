import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LLMPage from './components/LLM';
import './App.css';

function Home() {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <Welcome />
                <About />
                <Projects />
                <LLMPage />
                <Contact />
            </main>
        </div>
    );
}

export default Home; 