import { Nav, Hero, QuestionsSection, About, Footer } from './components/Sections.jsx'

export default function App() {
  return (
    <>
      <a href="#questions" className="skip-link">Skip to sample questions</a>
      <Nav />
      <main>
        <Hero />
        <QuestionsSection />
        <About />
      </main>
      <Footer />
    </>
  )
}
