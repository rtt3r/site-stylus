const testimonials = [
  {
    name: 'João Silva',
    text: 'Excelente atendimento! Meu corte ficou perfeito.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    name: 'Maria Santos',
    text: 'Profissionais incríveis e ambiente super agradável.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    name: 'Pedro Oliveira',
    text: 'Sempre saio satisfeito. Recomendo a todos!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary bg-opacity-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-light">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-dark p-6 rounded-lg text-center hover-scale fade-in">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-light mb-4 italic">"{testimonial.text}"</p>
              <p className="text-secondary font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}