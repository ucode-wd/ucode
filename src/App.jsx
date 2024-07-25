import Header from './components/Header.jsx';
import NosotrosSection from './components/NosotrosSection.jsx';
import BentoSection from './components/BentoSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import ProyectsSection from './components/ProyectsSection.jsx';
import './scripts/background.js'
function App() {
  return (
    <>
      <Header />
      <NosotrosSection />
      <BentoSection />
      <ProyectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
import './scripts/carousel.js';
export default App
