import { Scissors } from 'lucide-react'

export default function Header({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  return (
    <header className="fixed top-0 w-full bg-dark bg-opacity-90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Scissors className="text-secondary" size={32} />
          <span className="text-2xl font-bold text-light">Stylus</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => setActiveSection('home')} className="text-light hover:text-secondary transition-colors">Início</button>
          <button onClick={() => setActiveSection('services')} className="text-light hover:text-secondary transition-colors">Serviços</button>
          <button onClick={() => setActiveSection('booking')} className="text-light hover:text-secondary transition-colors">Agendar</button>
          <button onClick={() => setActiveSection('about')} className="text-light hover:text-secondary transition-colors">Sobre nós</button>
          <button onClick={() => setActiveSection('contact')} className="text-light hover:text-secondary transition-colors">Contato</button>
        </nav>
        <button className="bg-secondary text-dark px-6 py-2 rounded-full font-semibold hover-scale">
          Agendar agora
        </button>
      </div>
    </header>
  )
}