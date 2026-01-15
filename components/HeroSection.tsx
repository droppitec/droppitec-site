'use client'

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen bg-azul flex items-center justify-center pt-[120px] pb-16 px-8 md:pt-[100px] md:pb-12 md:px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Nodos y conexiones de fondo - Estilo Circuito */}
          <g opacity="0.4">
            {/* Rectángulos de circuitos (chips/bloques) */}
            <rect x="50" y="450" width="40" height="60" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2" rx="4" className="animate-pulse" />
            <rect x="1050" y="150" width="80" height="40" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2" rx="6" className="animate-float" />
            <rect x="900" y="550" width="50" height="50" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2" rx="10" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <rect x="100" y="100" width="30" height="30" fill="none" stroke="white" strokeWidth="1.5" opacity="0.1" rx="2" className="animate-float-slow" />
            
            {/* Líneas de circuitos en ángulo recto */}
            <path d="M 50 480 L 120 480 L 120 550" stroke="white" strokeWidth="1" opacity="0.2" fill="none" strokeDasharray="10" className="animate-dash" />
            <path d="M 1050 170 L 980 170 L 980 250" stroke="white" strokeWidth="1" opacity="0.2" fill="none" strokeDasharray="15" className="animate-dash" style={{ animationDirection: 'reverse' }} />
            <path d="M 925 550 L 925 500 L 850 500" stroke="white" strokeWidth="1" opacity="0.2" fill="none" strokeDasharray="12" className="animate-dash" />
            <path d="M 115 100 L 115 50 L 200 50" stroke="white" strokeWidth="1" opacity="0.1" fill="none" strokeDasharray="8" className="animate-dash" />

            {/* MICRO-CHIPS Y COMPONENTES DINÁMICOS */}
            <rect x="300" y="500" width="15" height="15" fill="none" stroke="white" strokeWidth="1" opacity="0.2" rx="2" className="animate-drift" style={{ animationDelay: '1s' }} />
            <rect x="800" y="100" width="20" height="10" fill="none" stroke="white" strokeWidth="1" opacity="0.2" rx="2" className="animate-float" style={{ animationDelay: '3s' }} />
            <rect x="1100" y="500" width="10" height="25" fill="none" stroke="white" strokeWidth="1" opacity="0.2" rx="2" className="animate-pulse" />

            {/* LÍNEAS DE BUS DE DATOS ADICIONALES */}
            <path d="M 0 400 L 200 400" stroke="white" strokeWidth="0.5" opacity="0.08" fill="none" strokeDasharray="20" className="animate-dash" />
            <path d="M 1200 300 L 1000 300" stroke="white" strokeWidth="0.5" opacity="0.08" fill="none" strokeDasharray="20" className="animate-dash" style={{ animationDirection: 'reverse' }} />
            <path d="M 600 0 L 600 200" stroke="white" strokeWidth="0.5" opacity="0.08" fill="none" strokeDasharray="15" className="animate-dash" />

            {/* Nodos parte superior izquierda */}
            <circle cx="100" cy="80" r="5" fill="white" className="animate-pulse" />
            <circle cx="200" cy="150" r="4" fill="white" className="animate-float" />
            <circle cx="280" cy="60" r="3" fill="white" className="animate-pulse" style={{ animationDelay: '2s' }} />
            <circle cx="350" cy="100" r="4" fill="white" className="animate-float-slow" />
            
            {/* Conexiones superiores */}
            <line x1="100" y1="80" x2="200" y2="150" stroke="white" strokeWidth="1" opacity="0.2" className="animate-pulse" />
            <line x1="200" y1="150" x2="350" y2="100" stroke="white" strokeWidth="1" opacity="0.2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />

            {/* NUEVOS NODOS Y CONEXIONES (Centro y Derecha Superior) */}
            <circle cx="500" cy="200" r="3" fill="white" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
            <circle cx="600" cy="150" r="4" fill="white" className="animate-float" />
            <circle cx="750" cy="180" r="3" fill="white" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
            <line x1="500" y1="200" x2="600" y2="150" stroke="white" strokeWidth="1" opacity="0.15" className="animate-pulse" />
            <line x1="600" y1="150" x2="750" y2="180" stroke="white" strokeWidth="1" opacity="0.15" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            
            <circle cx="950" cy="80" r="4" fill="white" className="animate-drift" />
            <circle cx="1100" cy="60" r="3" fill="white" className="animate-pulse" />
            <line x1="950" y1="80" x2="1100" y2="60" stroke="white" strokeWidth="1" opacity="0.15" className="animate-dash" strokeDasharray="5" />

            {/* MÁS NODOS DISPERSOS POR TODO EL CANVAS */}
            <circle cx="400" cy="100" r="2" fill="white" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="250" cy="300" r="3" fill="white" className="animate-float" style={{ animationDelay: '2s' }} />
            <circle cx="700" cy="50" r="2" fill="white" className="animate-drift" style={{ animationDelay: '3s' }} />
            <circle cx="1150" cy="300" r="4" fill="white" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="600" cy="450" r="3" fill="white" className="animate-float-slow" />
            <circle cx="550" cy="600" r="2" fill="white" className="animate-drift" style={{ animationDelay: '4s' }} />
            <circle cx="450" cy="750" r="3" fill="white" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <circle cx="1000" cy="500" r="2" fill="white" className="animate-float" style={{ animationDelay: '0.2s' }} />
            <circle cx="150" cy="750" r="3" fill="white" className="animate-drift" style={{ animationDelay: '2.5s' }} />

            {/* CONEXIONES EXTRA LARGAS */}
            <line x1="100" y1="80" x2="400" y2="100" stroke="white" strokeWidth="0.5" opacity="0.1" className="animate-pulse" />
            <line x1="750" y1="180" x2="1150" y2="300" stroke="white" strokeWidth="0.5" opacity="0.1" className="animate-pulse" />
            <line x1="600" y1="450" x2="900" y2="550" stroke="white" strokeWidth="0.5" opacity="0.1" className="animate-dash" strokeDasharray="10" />

            {/* NUEVOS NODOS (Zona Central Derecha) */}
            <circle cx="800" cy="400" r="4" fill="white" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
            <circle cx="900" cy="350" r="3" fill="white" className="animate-float" />
            <rect x="840" y="370" width="20" height="20" fill="none" stroke="white" strokeWidth="1" opacity="0.15" rx="2" className="animate-pulse" />
            <line x1="800" y1="400" x2="900" y2="350" stroke="white" strokeWidth="1" opacity="0.15" />

            {/* NUEVAS LÍNEAS DE CIRCUITO (Centro-Izquierda) */}
            <path d="M 300 300 L 400 300 L 400 400" stroke="white" strokeWidth="1" opacity="0.15" fill="none" strokeDasharray="10" className="animate-dash" />
            <circle cx="300" cy="300" r="3" fill="white" className="animate-pulse" />
            <circle cx="400" cy="400" r="3" fill="white" className="animate-float" />

            {/* Nodos parte inferior izquierda - Circuitos */}
            <circle cx="50" cy="550" r="4" fill="white" className="animate-float" />
            <circle cx="120" cy="620" r="5" fill="white" className="animate-pulse" />
            <circle cx="150" cy="550" r="4" fill="white" className="animate-float-slow" />
            <circle cx="220" cy="640" r="4" fill="white" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="280" cy="630" r="3" fill="white" className="animate-float" />
            <circle cx="350" cy="650" r="4" fill="white" className="animate-pulse" />
            
            {/* Conexiones estilo bus de datos */}
            <line x1="50" y1="550" x2="150" y2="550" stroke="white" strokeWidth="1" opacity="0.2" className="animate-pulse" />
            <line x1="120" y1="620" x2="220" y2="640" stroke="white" strokeWidth="1" opacity="0.2" className="animate-pulse" style={{ animationDelay: '2s' }} />
            
            {/* Nodos parte inferior derecha */}
            <circle cx="850" cy="640" r="5" fill="white" className="animate-float" />
            <circle cx="950" cy="650" r="5" fill="white" className="animate-pulse" />
            <circle cx="1050" cy="660" r="5" fill="white" className="animate-float-slow" />
            <circle cx="1150" cy="680" r="5" fill="white" className="animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Más formas decorativas (estilo UI/UX de fondo) */}
            <text x="40" y="700" fill="white" fontSize="14" opacity="0.1" fontFamily="sans-serif" className="animate-float-slow">UX/UI</text>
            <text x="1100" y="100" fill="white" fontSize="14" opacity="0.1" fontFamily="sans-serif" className="animate-float">DEV</text>
            
            {/* Círculos con borde doble */}
            <circle cx="1080" cy="400" r="30" fill="none" stroke="white" strokeWidth="1" opacity="0.1" className="animate-pulse" />
            <circle cx="1080" cy="400" r="20" fill="none" stroke="white" strokeWidth="1" opacity="0.1" className="animate-pulse" style={{ animationDelay: '1s' }} />
            
            <circle cx="80" cy="350" r="25" fill="none" stroke="white" strokeWidth="1" opacity="0.05" className="animate-float" />
          </g>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-[1400px] w-full text-center px-4">
        <p className="font-sans text-xl md:text-lg text-[rgba(238,239,234,0.9)] mb-6 font-medium tracking-wide">
          Diseñamos, desarrollamos y escalamos soluciones digitales.
        </p>
        <h1 className="font-sans text-[clamp(5rem,15vw,11rem)] md:text-[clamp(3.5rem,14vw,7rem)] font-bold leading-[0.95] text-white flex flex-col items-center">
          <span className="block tracking-tighter">Convirtiendo</span>
          <span className="block tracking-tighter">tus ideas</span>
          <span className="block tracking-tighter">
            <span>en </span>
            <span className="text-[#282a2b] opacity-90">realidad.</span>
          </span>
        </h1>
      </div>
    </section>
  )
}
