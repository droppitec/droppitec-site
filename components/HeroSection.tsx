'use client'

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen bg-azul flex items-center justify-center pt-[120px] pb-16 px-8 md:pt-[100px] md:pb-12 md:px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Nodos y conexiones de fondo */}
          <g opacity="0.3">
            {/* Círculos/nodos - Más nodos añadidos */}
            <circle cx="100" cy="80" r="5" fill="white" />
            <circle cx="200" cy="150" r="4" fill="white" />
            <circle cx="280" cy="60" r="3" fill="white" />
            <circle cx="350" cy="100" r="4" fill="white" />
            <circle cx="450" cy="50" r="5" fill="white" />
            <circle cx="500" cy="200" r="4" fill="white" />
            <circle cx="150" cy="300" r="4" fill="white" />
            <circle cx="250" cy="250" r="3" fill="white" />
            <circle cx="400" cy="350" r="4" fill="white" />
            <circle cx="550" cy="280" r="5" fill="white" />
            <circle cx="600" cy="250" r="4" fill="white" />
            <circle cx="700" cy="120" r="3" fill="white" />
            <circle cx="800" cy="180" r="4" fill="white" />
            <circle cx="880" cy="100" r="5" fill="white" />
            <circle cx="950" cy="280" r="4" fill="white" />
            <circle cx="1050" cy="200" r="3" fill="white" />
            <circle cx="1100" cy="150" r="4" fill="white" />
            <circle cx="700" cy="400" r="4" fill="white" />
            <circle cx="750" cy="480" r="3" fill="white" />
            <circle cx="850" cy="520" r="5" fill="white" />
            <circle cx="900" cy="450" r="4" fill="white" />
            <circle cx="1000" cy="500" r="3" fill="white" />
            <circle cx="1050" cy="380" r="4" fill="white" />
            {/* Nodos parte inferior izquierda */}
            <circle cx="50" cy="550" r="4" fill="white" />
            <circle cx="80" cy="580" r="3" fill="white" />
            <circle cx="120" cy="620" r="5" fill="white" />
            <circle cx="150" cy="550" r="4" fill="white" />
            <circle cx="180" cy="600" r="3" fill="white" />
            <circle cx="220" cy="640" r="4" fill="white" />
            <circle cx="250" cy="580" r="5" fill="white" />
            <circle cx="280" cy="630" r="3" fill="white" />
            <circle cx="300" cy="600" r="5" fill="white" />
            <circle cx="350" cy="650" r="4" fill="white" />
            <circle cx="400" cy="620" r="3" fill="white" />
            <circle cx="450" cy="660" r="5" fill="white" />
            <circle cx="500" cy="580" r="3" fill="white" />
            <circle cx="550" cy="640" r="4" fill="white" />
            <circle cx="600" cy="680" r="3" fill="white" />
            <circle cx="650" cy="620" r="4" fill="white" />
            
            {/* Nodos parte inferior derecha */}
            <circle cx="750" cy="650" r="4" fill="white" />
            <circle cx="800" cy="680" r="3" fill="white" />
            <circle cx="850" cy="640" r="5" fill="white" />
            <circle cx="900" cy="660" r="3" fill="white" />
            <circle cx="950" cy="650" r="5" fill="white" />
            <circle cx="980" cy="680" r="4" fill="white" />
            <circle cx="1020" cy="620" r="3" fill="white" />
            <circle cx="1050" cy="660" r="5" fill="white" />
            <circle cx="1080" cy="640" r="4" fill="white" />
            <circle cx="1100" cy="600" r="3" fill="white" />
            <circle cx="1120" cy="650" r="4" fill="white" />
            <circle cx="1150" cy="680" r="5" fill="white" />
            
            {/* Líneas de conexión - Más conexiones */}
            <line x1="100" y1="80" x2="200" y2="150" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="200" y1="150" x2="350" y2="100" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="280" y1="60" x2="450" y2="50" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="350" y1="100" x2="500" y2="200" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="150" y1="300" x2="250" y2="250" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="250" y1="250" x2="400" y2="350" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="400" y1="350" x2="550" y2="280" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="550" y1="280" x2="600" y2="250" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="700" y1="120" x2="800" y2="180" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="800" y1="180" x2="880" y2="100" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="880" y1="100" x2="950" y2="280" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="950" y1="280" x2="1050" y2="200" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="1050" y1="200" x2="1100" y2="150" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="700" y1="400" x2="750" y2="480" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="750" y1="480" x2="850" y2="520" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="850" y1="520" x2="900" y2="450" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="900" y1="450" x2="1000" y2="500" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="1000" y1="500" x2="1050" y2="380" stroke="white" strokeWidth="1" opacity="0.2" />
            {/* Conexiones parte inferior izquierda */}
            <line x1="50" y1="550" x2="80" y2="580" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="80" y1="580" x2="120" y2="620" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="120" y1="620" x2="150" y2="550" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="150" y1="550" x2="180" y2="600" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="180" y1="600" x2="220" y2="640" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="220" y1="640" x2="250" y2="580" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="250" y1="580" x2="280" y2="630" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="280" y1="630" x2="300" y2="600" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="300" y1="600" x2="350" y2="650" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="350" y1="650" x2="400" y2="620" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="400" y1="620" x2="450" y2="660" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="450" y1="660" x2="500" y2="580" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="500" y1="580" x2="550" y2="640" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="550" y1="640" x2="600" y2="680" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="600" y1="680" x2="650" y2="620" stroke="white" strokeWidth="1" opacity="0.2" />
            
            {/* Conexiones parte inferior derecha */}
            <line x1="750" y1="650" x2="800" y2="680" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="800" y1="680" x2="850" y2="640" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="850" y1="640" x2="900" y2="660" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="900" y1="660" x2="950" y2="650" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="950" y1="650" x2="980" y2="680" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="980" y1="680" x2="1020" y2="620" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="1020" y1="620" x2="1050" y2="660" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="1050" y1="660" x2="1080" y2="640" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="1080" y1="640" x2="1100" y2="600" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="1100" y1="600" x2="1120" y2="650" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="1120" y1="650" x2="1150" y2="680" stroke="white" strokeWidth="1" opacity="0.2" />
            
            {/* Formas abstractas adicionales - Más formas */}
            <rect x="50" y="200" width="50" height="50" fill="none" stroke="white" strokeWidth="1" opacity="0.15" rx="8" />
            <rect x="100" y="500" width="60" height="60" fill="none" stroke="white" strokeWidth="1" opacity="0.15" rx="8" />
            <rect x="200" y="450" width="40" height="40" fill="none" stroke="white" strokeWidth="1" opacity="0.15" rx="6" />
            <rect x="600" y="100" width="45" height="45" fill="none" stroke="white" strokeWidth="1" opacity="0.15" rx="7" />
            <rect x="1000" y="500" width="80" height="80" fill="none" stroke="white" strokeWidth="1" opacity="0.15" rx="8" />
            <rect x="1100" y="300" width="55" height="55" fill="none" stroke="white" strokeWidth="1" opacity="0.15" rx="8" />
            
            {/* Círculos grandes decorativos */}
            <circle cx="120" cy="400" r="25" fill="none" stroke="white" strokeWidth="1.5" opacity="0.1" />
            <circle cx="1080" cy="400" r="30" fill="none" stroke="white" strokeWidth="1.5" opacity="0.1" />
            <circle cx="600" cy="700" r="20" fill="none" stroke="white" strokeWidth="1.5" opacity="0.1" />
            
            {/* Líneas curvas decorativas */}
            <path d="M 50 300 Q 150 250 250 300" stroke="white" strokeWidth="1" opacity="0.15" fill="none" />
            <path d="M 950 400 Q 1050 350 1150 400" stroke="white" strokeWidth="1" opacity="0.15" fill="none" />
            <path d="M 300 700 Q 500 650 700 700" stroke="white" strokeWidth="1" opacity="0.15" fill="none" />
          </g>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-[1200px] w-full text-center">
        <p className="font-sans text-2xl md:text-xl text-[rgba(238,239,234,0.9)] mb-10 md:mb-8 font-normal">
          Diseñamos, desarrollamos y escalamos soluciones digitales.
        </p>
        <h1 className="font-sans text-[clamp(4.5rem,10vw,8rem)] md:text-[clamp(3rem,12vw,6rem)] font-bold leading-[1.1] text-blanco flex flex-col gap-3">
          <span className="block">Convirtiendo</span>
          <span className="block">tus ideas</span>
          <span className="block">
            <span>en </span>
            <span className="text-gris-oscuro">realidad.</span>
          </span>
        </h1>
      </div>
    </section>
  )
}
