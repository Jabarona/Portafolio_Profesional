import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { SnakeGame } from './components/SnakeGame';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
        <Navbar />
        <main className="pt-20">
          <Hero />
          <Projects />
          <SnakeGame />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
