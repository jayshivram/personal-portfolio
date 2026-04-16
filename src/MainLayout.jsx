import AppBar from './components/AppBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Toast from './components/Toast'
import ScrollProgressBar from './components/ScrollProgressBar'

export default function MainLayout({ toastState }) {
  return (
    <>
      <ScrollProgressBar />
      <AppBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toast message={toastState.message} visible={toastState.visible} />
    </>
  )
}
