import React from "react";
import Home from "./Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Questions from './components/Questions';
function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={<Home/>}/>
            <Route path="/questions" Component={<Questions/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;