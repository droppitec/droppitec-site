'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    // Resetear formulario
    setFormData({ name: '', email: '', message: '' })
    alert('¡Gracias por contactarnos! Te responderemos pronto.')
  }

  return (
    <section id="contacto" className="py-24 px-8 md:py-16 md:px-4 bg-blanco">
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-sans text-4xl md:text-3xl font-bold text-gris-oscuro text-center mb-4">
          Contáctanos
        </h2>
        <p className="font-sans text-lg md:text-base text-gris-oscuro text-center mb-12 md:mb-8 opacity-80">
          ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacerlo realidad.
        </p>
        
        <form className="flex flex-col gap-8 md:gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-sans text-base font-semibold text-gris-oscuro">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="font-sans text-base p-4 border-2 border-gris-claro rounded-lg bg-blanco text-gris-oscuro transition-all duration-300 focus:outline-none focus:border-azul focus:shadow-[0_0_0_3px_rgba(75,102,247,0.1)]"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-sans text-base font-semibold text-gris-oscuro">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="font-sans text-base p-4 border-2 border-gris-claro rounded-lg bg-blanco text-gris-oscuro transition-all duration-300 focus:outline-none focus:border-azul focus:shadow-[0_0_0_3px_rgba(75,102,247,0.1)]"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-sans text-base font-semibold text-gris-oscuro">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="font-sans text-base p-4 border-2 border-gris-claro rounded-lg bg-blanco text-gris-oscuro transition-all duration-300 focus:outline-none focus:border-azul focus:shadow-[0_0_0_3px_rgba(75,102,247,0.1)] resize-y min-h-[150px]"
              rows={6}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="bg-azul text-blanco border-none px-8 py-4 rounded-lg font-sans text-lg font-bold cursor-pointer transition-all duration-300 self-center min-w-[200px] md:w-full hover:bg-[#3d56d6] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(75,102,247,0.3)] active:translate-y-0"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}
