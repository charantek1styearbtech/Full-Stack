import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import LLMPage from './components/LLM';
import Contact from './components/Contact';
import CodingProfiles from './components/CodingProfiles';

function Home() {
  return (
    <div className="min-h-screen bg-background text-primary antialiased">
      <Header />
      <main>
        <Welcome />
        <About />
        <Projects />
        <LLMPage />
        <Contact />
        <CodingProfiles />
      </main>
    </div>
  );
}

export default Home;
