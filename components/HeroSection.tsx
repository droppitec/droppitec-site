'use client'

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen bg-azul flex items-center justify-center pt-[120px] pb-16 px-8 md:pt-[100px] md:pb-12 md:px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Nodos y conexiones de fondo - Estilo Circuito */}
          <g opacity="0.4">
            {/* Rectángulos de circuitos (chips/bloques) */}
            <rect x="50" y="450" width="40" height="60" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2" rx="4" />
            <rect x="1050" y="150" width="80" height="40" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2" rx="6" />
            <rect x="900" y="550" width="50" height="50" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2" rx="10" />
            <rect x="100" y="100" width="30" height="30" fill="none" stroke="white" strokeWidth="1.5" opacity="0.1" rx="2" />
            
            {/* Líneas de circuitos en ángulo recto */}
            <path d="M 50 480 L 120 480 L 120 550" stroke="white" strokeWidth="1" opacity="0.2" fill="none" />
            <path d="M 1050 170 L 980 170 L 980 250" stroke="white" strokeWidth="1" opacity="0.2" fill="none" />
            <path d="M 925 550 L 925 500 L 850 500" stroke="white" strokeWidth="1" opacity="0.2" fill="none" />
            <path d="M 115 100 L 115 50 L 200 50" stroke="white" strokeWidth="1" opacity="0.1" fill="none" />

            {/* Nodos parte superior izquierda */}
            <circle cx="100" cy="80" r="5" fill="white" />
            <circle cx="200" cy="150" r="4" fill="white" />
            <circle cx="280" cy="60" r="3" fill="white" />
            <circle cx="350" cy="100" r="4" fill="white" />
            
            {/* Conexiones superiores */}
            <line x1="100" y1="80" x2="200" y2="150" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="200" y1="150" x2="350" y2="100" stroke="white" strokeWidth="1" opacity="0.2" />

            {/* Nodos parte inferior izquierda - Circuitos */}
            <circle cx="50" cy="550" r="4" fill="white" />
            <circle cx="120" cy="620" r="5" fill="white" />
            <circle cx="150" cy="550" r="4" fill="white" />
            <circle cx="220" cy="640" r="4" fill="white" />
            <circle cx="280" cy="630" r="3" fill="white" />
            <circle cx="350" cy="650" r="4" fill="white" />
            
            {/* Conexiones estilo bus de datos */}
            <line x1="50" y1="550" x2="150" y2="550" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="120" y1="620" x2="220" y2="640" stroke="white" strokeWidth="1" opacity="0.2" />
            
            {/* Nodos parte inferior derecha */}
            <circle cx="850" cy="640" r="5" fill="white" />
            <circle cx="950" cy="650" r="5" fill="white" />
            <circle cx="1050" cy="660" r="5" fill="white" />
            <circle cx="1150" cy="680" r="5" fill="white" />
            
            {/* Más formas decorativas (estilo UI/UX de fondo) */}
            <text x="40" y="700" fill="white" fontSize="14" opacity="0.1" fontFamily="sans-serif">UX/UI</text>
            <text x="1100" y="100" fill="white" fontSize="14" opacity="0.1" fontFamily="sans-serif">DEV</text>
            
            {/* Círculos con borde doble */}
            <circle cx="1080" cy="400" r="30" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />
            <circle cx="1080" cy="400" r="20" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />
            
            <circle cx="80" cy="350" r="25" fill="none" stroke="white" strokeWidth="1" opacity="0.05" />
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
