export default function About() {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              alt="Equipe Stylus"
              className="w-full rounded-lg fade-in"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-4xl font-bold mb-6 text-light">Sobre nós</h2>
            <p className="text-xl text-light leading-relaxed">
              A Stylus conecta você aos melhores profissionais de beleza com tecnologia e estilo.
              Nossa missão é proporcionar experiências únicas de cuidado pessoal, combinando
              expertise profissional com um atendimento personalizado e acolhedor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}