import React from 'react'

const features = [
  {
    title: 'Innovación',
    description: 'Llevamos la innovación en nuestro ADN. Creamos soluciones de vanguardia con las últimas tecnologías y tendencias.',
    icon: (
      <svg className="w-12 h-12 text-gris-oscuro" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    )
  },
  {
    title: 'Calidad',
    description: 'Nos comprometemos con los más altos estándares de calidad y excelencia en cada proyecto que emprendemos.',
    icon: (
      <svg className="w-12 h-12 text-gris-oscuro" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    title: 'Servicio al cliente',
    description: 'Cada cliente es nuestra prioridad. Generamos vínculos, construimos confianza y aseguramos resultados excepcionales.',
    icon: (
      <svg className="w-12 h-12 text-gris-oscuro" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    )
  }
]

export default function WhyChooseUs() {
  return (
    <section className="min-h-[60vh] flex items-center py-24 px-8 md:py-16 md:px-4 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center w-full">
        <h2 className="font-title text-5xl md:text-3xl font-black text-gris-oscuro mb-4 tracking-tight">
          Por qué elegirnos
        </h2>
        <p className="font-sans text-xl md:text-lg text-gris-oscuro mb-8 opacity-80 tracking-widest font-light">
          Somos diseño, somos digitales, construimos marca
        </p>
        
        {/* Separador con detalle amarillo */}
        <div className="relative w-full max-w-2xl mx-auto h-[1px] bg-gris-claro/30 mb-20 flex justify-center items-center">
          <div className="absolute w-12 h-[4px] bg-[#FFC107] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 items-start text-left group">
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-title text-xl font-black text-gris-oscuro mb-3 group-hover:text-azul transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-sans text-base text-gris-oscuro/70 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
