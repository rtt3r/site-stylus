import { Scissors, Beard, Droplets, Palette, Sparkles } from 'lucide-react'

const services = [
  { name: 'Corte masculino', description: 'Cortes modernos e clássicos para homens.', icon: Scissors },
  { name: 'Barba e design', description: 'Modelagem e cuidados especiais para a barba.', icon: Beard },
  { name: 'Hidratação capilar', description: 'Tratamentos para cabelos saudáveis e brilhantes.', icon: Droplets },
  { name: 'Coloração', description: 'Tinturas e mechas profissionais.', icon: Palette },
  { name: 'Tratamentos femininos', description: 'Cortes, penteados e cuidados para mulheres.', icon: Sparkles },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-light">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-primary bg-opacity-10 p-6 rounded-lg hover-scale fade-in">
              <service.icon className="text-secondary mb-4" size={48} />
              <h3 className="text-2xl font-semibold mb-2 text-light">{service.name}</h3>
              <p className="text-light mb-4">{service.description}</p>
              <button className="bg-secondary text-dark px-4 py-2 rounded-full font-semibold hover-scale">
                Agendar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}