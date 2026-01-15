import React from 'react'

const services = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'UX/UI',
    description: 'Diseñamos experiencias intuitivas.',
    polygon: 'polygon(5% 15%, 95% 0%, 100% 85%, 15% 100%)'
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Desarrollo e integración',
    description: 'Construimos tu plataforma digital.',
    polygon: 'polygon(0% 0%, 100% 10%, 90% 90%, 5% 100%)'
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 14 4-4 4 4-4 4-4-4Z" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </svg>
    ),
    title: 'Marketing',
    description: 'Estrategias para crecer.',
    polygon: 'polygon(10% 0%, 90% 15%, 100% 100%, 0% 85%)'
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 15h2a2 2 0 1 0 0-4h-3c-1.1 0-2-.9-2-2.5s.9-2.5 2-2.5h2" />
        <path d="M12 5v1M12 18v1" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: 'Análisis de datos',
    description: 'Decisiones basadas en insights.',
    polygon: 'polygon(0% 10%, 100% 0%, 95% 90%, 10% 100%)'
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    title: 'Estrategia de producto',
    description: 'Lanzamos soluciones innovadoras.',
    polygon: 'polygon(15% 0%, 100% 15%, 85% 100%, 0% 90%)'
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    title: 'Ayuda y soporte',
    description: 'Siempre estamos contigo.',
    polygon: 'polygon(5% 0%, 95% 10%, 100% 100%, 10% 85%)'
  }
]

export default function ServicesSection() {
  return (
    <section id="nosotros" className="py-24 px-8 md:py-16 md:px-4 bg-[#f8f9ff] relative overflow-hidden">
      {/* Elementos decorativos de fondo (Círculos) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full border border-blue-100 opacity-60 animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full border border-blue-100 opacity-60 animate-float-slow" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full border border-blue-100 opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border border-blue-100 opacity-60 animate-drift" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <h2 className="font-title text-3xl md:text-2xl font-black text-gris-oscuro mb-16 md:mb-12 tracking-wider">
          NUESTROS SERVICIOS
          <span className="block w-20 h-[3px] bg-azul mt-3 animate-pulse"></span>
        </h2>
        
        {/* Red de conexiones (SVG de fondo) */}
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-20" viewBox="0 0 1200 800">
          <path d="M200,250 C350,150 500,300 650,200 S950,300 1100,250" stroke="#4b66f7" fill="none" strokeWidth="1" strokeDasharray="10" className="animate-dash" />
          <path d="M150,550 C300,450 450,600 600,500 S900,600 1050,550" stroke="#4b66f7" fill="none" strokeWidth="1" strokeDasharray="15" className="animate-dash" style={{ animationDirection: 'reverse' }} />
          <path d="M300,200 L400,500 M600,150 L650,550 M900,200 L850,550" stroke="#4b66f7" fill="none" strokeWidth="0.5" strokeDasharray="5" className="animate-pulse" />
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 relative z-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative group transition-all duration-500 hover:-translate-y-2"
              style={{ 
                marginTop: index % 3 === 1 ? '2rem' : '0', // Efecto escalonado
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Resplandor de fondo en hover */}
              <div className="absolute inset-0 bg-azul/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

              {/* Contenedor del borde del polígono */}
              <div 
                className="relative bg-azul/10 p-[1.5px] transition-all duration-300 group-hover:bg-azul/50 group-hover:shadow-[0_20px_50px_rgba(75,102,247,0.15)]"
                style={{ clipPath: service.polygon }}
              >
                <div 
                  className="bg-white p-12 md:p-10 flex flex-col items-center text-center h-full transition-colors duration-300 group-hover:bg-white/95"
                  style={{ clipPath: service.polygon }}
                >
                  <div className="text-azul mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                    {service.icon}
                  </div>
                  <h3 className="font-title text-lg font-black text-gris-oscuro mb-3 leading-tight transition-colors duration-300 group-hover:text-azul">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-gris-oscuro opacity-70 leading-relaxed max-w-[200px] font-light">
                    {service.description}
                  </p>
                  
                  {/* Detalle decorativo interno que aparece en hover */}
                  <div className="mt-6 w-0 h-1 bg-azul transition-all duration-500 group-hover:w-12"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
