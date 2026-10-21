import { Nav, Hero, DokLevels, ItemsSection, Blueprint, Rationale, About, Footer } from './components/Sections.jsx'

export default function App() {
  return (
    <>
      <a href="#items" className="skip-link">Skip to items</a>
      <Nav />
      <main>
        <Hero />
        <DokLevels />
        <ItemsSection />
        <Blueprint />
        <Rationale />
        <About />
      </main>
      <Footer />
    </>
  )
}
