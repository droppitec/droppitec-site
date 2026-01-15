'use client'

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen bg-azul flex items-center justify-center pt-[120px] pb-16 px-8 md:pt-[100px] md:pb-12 md:px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Nodos y conexiones de fondo */}
          <g opacity="0.3">
            {/* Círculos/nodos */}
            <circle cx="200" cy="150" r="4" fill="white" />
            <circle cx="350" cy="100" r="4" fill="white" />
            <circle cx="500" cy="200" r="4" fill="white" />
            <circle cx="150" cy="300" r="4" fill="white" />
            <circle cx="400" cy="350" r="4" fill="white" />
            <circle cx="600" cy="250" r="4" fill="white" />
            <circle cx="800" cy="180" r="4" fill="white" />
            <circle cx="950" cy="280" r="4" fill="white" />
            <circle cx="1100" cy="150" r="4" fill="white" />
            <circle cx="700" cy="400" r="4" fill="white" />
            <circle cx="900" cy="450" r="4" fill="white" />
            <circle cx="1050" cy="380" r="4" fill="white" />
            
            {/* Líneas de conexión */}
            <line x1="200" y1="150" x2="350" y2="100" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="350" y1="100" x2="500" y2="200" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="150" y1="300" x2="400" y2="350" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="400" y1="350" x2="600" y2="250" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="800" y1="180" x2="950" y2="280" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="950" y1="280" x2="1100" y2="150" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="700" y1="400" x2="900" y2="450" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="900" y1="450" x2="1050" y2="380" stroke="white" strokeWidth="1" opacity="0.2" />
            
            {/* Formas abstractas adicionales */}
            <rect x="100" y="500" width="60" height="60" fill="none" stroke="white" strokeWidth="1" opacity="0.15" rx="8" />
            <rect x="1000" y="500" width="80" height="80" fill="none" stroke="white" strokeWidth="1" opacity="0.15" rx="8" />
          </g>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-[1200px] w-full text-center">
        <p className="font-sans text-xl md:text-base text-[rgba(238,239,234,0.9)] mb-8 md:mb-6 font-normal">
          Diseñamos, desarrollamos y escalamos soluciones digitales.
        </p>
        <h1 className="font-sans text-[clamp(3rem,8vw,6rem)] md:text-[clamp(2rem,10vw,4rem)] font-bold leading-[1.1] text-blanco flex flex-col gap-2">
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
