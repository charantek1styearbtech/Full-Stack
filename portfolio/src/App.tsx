import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Questions from './components/Questions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
