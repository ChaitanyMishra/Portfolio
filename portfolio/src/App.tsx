import { Hero, About, SkillsTimeline, Projects, Contact, Footer, Navbar } from '@/components/sections'
import AppLayout from '@/components/AppLayout'

function App() {
  return (
    <AppLayout>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <SkillsTimeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </AppLayout>
  )
}

export default App
