'use client'

import { useState } from 'react'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    professional: '',
    date: '',
    time: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar lógica para enviar o formulário
    alert('Agendamento confirmado! Entraremos em contato em breve.')
  }

  return (
    <section id="booking" className="py-20 bg-primary bg-opacity-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-light">Agende seu horário</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-dark p-8 rounded-lg">
          <div className="mb-4">
            <label className="block text-light mb-2">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-light bg-opacity-10 border border-primary rounded text-light"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-light mb-2">Telefone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-light bg-opacity-10 border border-primary rounded text-light"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-light mb-2">Serviço</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-light bg-opacity-10 border border-primary rounded text-light"
              required
            >
              <option value="">Selecione um serviço</option>
              <option value="corte-masculino">Corte masculino</option>
              <option value="barba-design">Barba e design</option>
              <option value="hidratacao">Hidratação capilar</option>
              <option value="coloracao">Coloração</option>
              <option value="tratamentos-femininos">Tratamentos femininos</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-light mb-2">Profissional (opcional)</label>
            <input
              type="text"
              name="professional"
              value={formData.professional}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-light bg-opacity-10 border border-primary rounded text-light"
            />
          </div>
          <div className="mb-4">
            <label className="block text-light mb-2">Data</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-light bg-opacity-10 border border-primary rounded text-light"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-light mb-2">Hora</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-light bg-opacity-10 border border-primary rounded text-light"
              required
            />
          </div>
          <button type="submit" className="w-full bg-secondary text-dark py-3 rounded-full font-semibold hover-scale">
            Confirmar agendamento
          </button>
        </form>
      </div>
    </section>
  )
}