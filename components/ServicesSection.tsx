const services = [
  {
    icon: '👁️',
    title: 'UX/UI',
    description: 'Diseñamos experiencias intuitivas.'
  },
  {
    icon: '⚙️',
    title: 'Desarrollo e integración',
    description: 'Construimos tu plataforma digital.'
  },
  {
    icon: '📊',
    title: 'Marketing',
    description: 'Estrategias para crecer.'
  },
  {
    icon: '🔍',
    title: 'Ayuda y soporte',
    description: 'Siempre estamos contigo.'
  },
  {
    icon: '💡',
    title: 'Estrategia de producto',
    description: 'Lanzamos soluciones innovadoras.'
  },
  {
    icon: '📈',
    title: 'Análisis de datos',
    description: 'Decisiones basadas en insights.'
  }
]

export default function ServicesSection() {
  return (
    <section id="nosotros" className="py-24 px-8 md:py-16 md:px-4 bg-gradient-to-br from-[rgba(238,239,234,0.5)] to-blanco relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <h2 className="font-sans text-4xl md:text-3xl font-bold text-gris-oscuro mb-12 md:mb-8 uppercase tracking-wide relative">
          NUESTROS SERVICIOS
          <span className="block w-[60px] h-1 bg-azul mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-1 gap-8 md:gap-6 relative z-20">
          {services.map((service, index) => (
            <div key={index} className="bg-blanco p-10 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 relative z-10 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(75,102,247,0.2)]">
              <div className="text-5xl mb-6 flex items-center justify-center w-20 h-20 bg-[rgba(75,102,247,0.1)] rounded-2xl">
                {service.icon}
              </div>
              <h3 className="font-sans text-2xl font-bold text-gris-oscuro mb-4">{service.title}</h3>
              <p className="font-sans text-base text-gris-oscuro leading-relaxed opacity-80">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Líneas de conexión decorativas */}
        <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-30" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <g stroke="rgba(75, 102, 247, 0.2)" strokeWidth="2" fill="none">
            <path d="M 200 200 Q 300 150 400 200" />
            <path d="M 400 200 Q 500 250 600 200" />
            <path d="M 600 200 Q 700 150 800 200" />
            <path d="M 200 400 Q 300 350 400 400" />
            <path d="M 400 400 Q 500 450 600 400" />
            <path d="M 600 400 Q 700 350 800 400" />
            <path d="M 200 200 L 200 400" />
            <path d="M 400 200 L 400 400" />
            <path d="M 600 200 L 600 400" />
            <path d="M 800 200 L 800 400" />
          </g>
        </svg>
      </div>
    </section>
  )
}
