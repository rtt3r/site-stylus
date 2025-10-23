export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
      <div className="absolute inset-0 bg-dark bg-opacity-60"></div>
      <div className="relative z-10 text-center px-4 fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-light">Transforme seu visual com estilo</h1>
        <p className="text-xl md:text-2xl mb-8 text-light">Agende seu horário com os melhores profissionais de beleza e bem-estar.</p>
        <button className="bg-secondary text-dark px-8 py-4 rounded-full text-xl font-semibold hover-scale">
          Agendar agora
        </button>
      </div>
    </section>
  )
}