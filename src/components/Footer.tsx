import { Instagram, Facebook, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-2xl font-bold text-light">Stylus</span>
          </div>
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#home" className="text-light hover:text-secondary transition-colors">Início</a>
            <a href="#services" className="text-light hover:text-secondary transition-colors">Serviços</a>
            <a href="#contact" className="text-light hover:text-secondary transition-colors">Contato</a>
            <a href="#" className="text-light hover:text-secondary transition-colors">Política de privacidade</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-light hover:text-secondary transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-light hover:text-secondary transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-light hover:text-secondary transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-light">
          <p>&copy; 2025 Stylus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}