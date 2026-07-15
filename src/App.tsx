import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Education from './components/Education'
import EngineeringPrinciples from './components/EngineeringPrinciples'
import Organizations from './components/Organizations'
import GitHubSection from './components/GitHubSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <EngineeringPrinciples />
        <Organizations />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
