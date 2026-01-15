import React from 'react'

const cases = [
  { 
    title: 'Fema', 
    subtitle: 'Electricidad e iluminación', 
    image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    title: 'Med Estetic', 
    subtitle: 'Estética madrileña', 
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    title: 'Mariápolis', 
    subtitle: 'Desarrollo urbanístico', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    title: 'Produsem', 
    subtitle: 'Líder argentina en forrajes', 
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    title: 'LeParc', 
    subtitle: 'Concesionario oficial Peugeot', 
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    title: 'Delforge Law', 
    subtitle: 'Principado de Mónaco', 
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop'
  }
]

// Función para determinar el tamaño del mosaico dinámicamente según el índice
const getGridSpan = (index: number) => {
  const spans = [
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-2 md:row-span-2',
    'md:col-span-2 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
  ];
  return spans[index % spans.length];
};

export default function SuccessCasesSection() {
  return (
    <section id="casos-exito" className="py-24 px-8 md:py-16 md:px-4 bg-[#f0f2f9] relative overflow-hidden">
      {/* Elementos decorativos de fondo (similar a Services) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-40 right-10 w-32 h-32 rounded-full border border-blue-200 animate-float-slow" />
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-full border border-blue-200 animate-float" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <h2 className="font-title text-3xl md:text-2xl font-black text-gris-oscuro mb-16 md:mb-12 tracking-wider">
          Casos de éxito
          <span className="block w-20 h-[3px] bg-azul mt-3 animate-pulse"></span>
        </h2>

        {/* Red de conexiones que une los casos */}
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30" viewBox="0 0 1400 1000">
          <path d="M100,200 Q400,100 700,500 T1300,800" stroke="#4b66f7" fill="none" strokeWidth="1" strokeDasharray="12" className="animate-dash" />
          <path d="M1300,100 Q900,400 700,500 T100,900" stroke="#4b66f7" fill="none" strokeWidth="1" strokeDasharray="12" className="animate-dash" style={{ animationDirection: 'reverse' }} />
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6 relative z-10">
          {cases.map((caseItem, index) => (
            <div 
              key={index} 
              className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:cursor-pointer ${getGridSpan(index)}`}
            >
              {/* Imagen de fondo con movimiento dinámico */}
              <div 
                className="absolute inset-0 z-0 transition-transform duration-1000 ease-out group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${caseItem.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Overlay gradiente */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Contenido de texto interactivo */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end transform transition-transform duration-500">
                {/* Línea decorativa que crece */}
                <div className="w-8 h-[2px] bg-azul mb-4 transition-all duration-500 group-hover:w-16 group-hover:bg-white" />
                
                <h3 className="font-title text-xl md:text-2xl font-black text-white mb-1 transition-colors duration-300 group-hover:text-white leading-tight">
                  {caseItem.title}
                </h3>
                
                <p className="font-sans text-sm md:text-base text-white/80 font-light leading-tight max-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {caseItem.subtitle}
                </p>
              </div>

              {/* Borde brillante en hover */}
              <div className="absolute inset-0 z-30 border-0 group-hover:border-2 border-azul/30 transition-all duration-500 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
