import Navbar from './components/layout/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Press from './components/Press';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-deep-black min-h-screen text-text-primary selection:bg-neon-orange selection:text-white">
      <Navbar />
      <Hero />
      <ValueProp />
      <Services />
      <Portfolio />
      <Press />
      <Testimonials />
      <Team />
      <FAQ />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
