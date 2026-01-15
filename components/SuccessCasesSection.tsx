const cases = [
  { name: 'InnovateX', icon: '🚀' },
  { name: 'ANALYZA', icon: '📊' },
  { name: 'RoboSol', icon: '🤖' },
  { name: 'Cloudify', icon: '☁️' },
  { name: 'AnboSol', icon: '📈' },
  { name: 'ConnectGlobal', icon: '🌐' },
  { name: 'TechFlow', icon: '⚡' },
  { name: 'DataSync', icon: '🔄' },
  { name: 'NextGen', icon: '✨' },
  { name: 'SmartCore', icon: '💎' }
]

export default function SuccessCasesSection() {
  return (
    <section id="casos-exito" className="py-24 px-8 md:py-16 md:px-4 bg-azul relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-8">
          <h2 className="font-sans text-4xl md:text-3xl font-bold text-blanco inline-block bg-[rgba(40,42,43,0.3)] px-8 py-4 md:px-6 md:py-3 rounded-xl backdrop-blur-[10px]">
            Casos de Éxito
          </h2>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 md:gap-4 relative z-20">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-blanco p-8 md:p-6 rounded-xl border-2 border-dashed border-gris-claro text-center transition-all duration-300 hover:-translate-y-1 hover:border-azul hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
              <div className="text-4xl mb-4 flex items-center justify-center">{caseItem.icon}</div>
              <h3 className="font-sans text-xl font-bold text-gris-oscuro">{caseItem.name}</h3>
            </div>
          ))}
        </div>
        
        {/* Patrón de fondo decorativo */}
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <g opacity="0.15">
              {/* Círculos decorativos */}
              <circle cx="100" cy="100" r="3" fill="white" />
              <circle cx="300" cy="150" r="3" fill="white" />
              <circle cx="500" cy="100" r="3" fill="white" />
              <circle cx="700" cy="150" r="3" fill="white" />
              <circle cx="900" cy="100" r="3" fill="white" />
              <circle cx="1100" cy="150" r="3" fill="white" />
              
              {/* Líneas punteadas */}
              <line x1="100" y1="100" x2="300" y2="150" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="300" y1="150" x2="500" y2="100" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="500" y1="100" x2="700" y2="150" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="700" y1="150" x2="900" y2="100" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="900" y1="100" x2="1100" y2="150" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              
              {/* Cuadrados decorativos */}
              <rect x="150" y="600" width="40" height="40" fill="none" stroke="white" strokeWidth="1" rx="4" />
              <rect x="950" y="650" width="50" height="50" fill="none" stroke="white" strokeWidth="1" rx="4" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
