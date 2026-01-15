'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [showForm, setShowForm] = useState(false)
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
    console.log('Formulario enviado:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('¡Gracias por contactarnos! Te responderemos pronto.')
  }

  return (
    <section id="contacto" className="relative py-24 px-8 md:py-16 md:px-4 bg-azul overflow-hidden transition-all duration-700">
      {/* Fondo de Nodos y Conexiones */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <g opacity="0.4">
            {/* Rectángulos de circuitos */}
            <rect x="50" y="450" width="40" height="60" fill="none" stroke="white" strokeWidth="1.5" rx="4" className="animate-pulse" />
            <rect x="1050" y="150" width="80" height="40" fill="none" stroke="white" strokeWidth="1.5" rx="6" className="animate-float" />
            <rect x="900" y="550" width="50" height="50" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2" rx="10" className="animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Líneas de circuitos */}
            <path d="M 50 480 L 120 480 L 120 550" stroke="white" strokeWidth="1" fill="none" strokeDasharray="10" className="animate-dash" />
            <path d="M 1050 170 L 980 170 L 980 250" stroke="white" strokeWidth="1" opacity="0.2" fill="none" strokeDasharray="15" className="animate-dash" style={{ animationDirection: 'reverse' }} />

            {/* Nodos dispersos */}
            <circle cx="100" cy="80" r="5" fill="white" className="animate-pulse" />
            <circle cx="200" cy="150" r="4" fill="white" className="animate-float" />
            <circle cx="400" cy="100" r="3" fill="white" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="600" cy="150" r="4" fill="white" className="animate-float" />
            <circle cx="800" cy="120" r="3" fill="white" className="animate-drift" style={{ animationDelay: '2s' }} />
            <circle cx="950" cy="80" r="4" fill="white" className="animate-drift" />
            <circle cx="1100" cy="300" r="4" fill="white" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
            <circle cx="750" cy="650" r="3" fill="white" className="animate-float-slow" />
            <circle cx="450" cy="750" r="3" fill="white" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <circle cx="150" cy="750" r="3" fill="white" className="animate-drift" style={{ animationDelay: '2.5s' }} />
            
            {/* Conexiones */}
            <line x1="100" y1="80" x2="200" y2="150" stroke="white" strokeWidth="1" opacity="0.2" className="animate-pulse" />
            <line x1="600" y1="150" x2="800" y2="120" stroke="white" strokeWidth="1" opacity="0.15" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          </g>
        </svg>
      </div>

      <div className="max-w-[1000px] mx-auto relative z-10 text-center text-white">
        {!showForm ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-sans text-7xl md:text-5xl font-bold mb-4 tracking-tighter">
              Contanos
            </h2>
            <p className="font-sans text-xl md:text-lg font-bold mb-10 opacity-90 tracking-widest uppercase">
              ¿Cómo podemos ayudarte?
            </p>

            {/* Separador con detalle amarillo */}
            <div className="relative w-full max-w-2xl mx-auto h-[1px] bg-white/20 mb-12 flex justify-center items-center">
              <div className="absolute w-12 h-[4px] bg-[#FFC107] rounded-full"></div>
            </div>

            <div className="flex flex-col gap-6 mb-16">
              <a href="tel:+5403535633463" className="font-sans text-4xl md:text-2xl font-bold hover:text-white transition-colors duration-300">
                +54 (0353) 5633463
              </a>
            </div>

            <div className="flex justify-center gap-8 mb-16">
              <a href="#" className="text-white hover:text-white transition-all duration-300 transform hover:scale-125">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-white transition-all duration-300 transform hover:scale-125">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-white transition-all duration-300 transform hover:scale-125">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
            </div>

            <button 
              onClick={() => setShowForm(true)}
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-sans text-xl font-bold hover:bg-white hover:text-gris-oscuro transition-all duration-500 transform hover:-translate-y-1 active:scale-95 shadow-xl"
            >
              Contactar por web
            </button>

            <p className="mt-20 opacity-60 text-sm">
              © Copyright 2026 Droppitec - Todos los derechos reservados
            </p>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in-95 duration-700 max-w-[700px] mx-auto">
            <button 
              onClick={() => setShowForm(false)}
              className="mb-8 flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Volver
            </button>
            
            <h2 className="font-sans text-4xl font-bold mb-8">Escribinos</h2>
            
            <form className="flex flex-col gap-6 text-left" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="font-sans text-lg p-5 border-2 border-white/10 rounded-2xl bg-white/5 text-white transition-all duration-300 focus:outline-none focus:border-azul focus:bg-white/10 placeholder:text-white/30"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="font-sans text-lg p-5 border-2 border-white/10 rounded-2xl bg-white/5 text-white transition-all duration-300 focus:outline-none focus:border-azul focus:bg-white/10 placeholder:text-white/30"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <textarea
                  name="message"
                  placeholder="¿En qué podemos ayudarte?"
                  value={formData.message}
                  onChange={handleChange}
                  className="font-sans text-lg p-5 border-2 border-white/10 rounded-2xl bg-white/5 text-white transition-all duration-300 focus:outline-none focus:border-azul focus:bg-white/10 resize-y min-h-[180px] placeholder:text-white/30"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="bg-azul text-white px-12 py-5 rounded-2xl font-sans text-xl font-bold hover:bg-[#3d56d6] hover:-translate-y-1 transition-all duration-300 shadow-2xl"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

