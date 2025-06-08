import NavBar from "./sections/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import AboutMe from './sections/AboutMe.jsx';
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
export default App
