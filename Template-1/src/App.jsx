import './index.css'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import Inicio from './components/Inicio/Inicio'
import AboutUs from './components/About-us/AboutUs'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
        <nav>
        <Navbar />
        </nav>
        <section id='Home'>
          <Inicio />
        </section>
        <section id='About'>
          <AboutUs />
        </section>
        <section id='Services'>
          <Services />
        </section>
        {/* <section id='Contact'>
          <Contact />
        </section> */}
        <footer>
          <Footer />
        </footer>
        <button
        onClick={scrollToTop}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full fixed bottom-8 right-8">
        Subir
      </button>
    </div>
  )
}

export default App
