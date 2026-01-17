// Datos centralizados de los casos de éxito
export const successCases = [
  { 
    slug: 'districen',
    title: 'Districen', 
    subtitle: 'Venta mayorista de autopartes', 
    coverImage: '/images/portadas-caso-exitos/districen.jpg',
    description: 'Plataforma digital completa para la gestión y venta mayorista de autopartes, optimizando procesos y mejorando la experiencia del cliente.',
    images: [
      '/images/portadas-caso-exitos/districen.jpg',
      // Agrega más imágenes aquí cuando las tengas
      
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    year: '2025'
  },
]

export function getCaseBySlug(slug: string) {
  return successCases.find(caseItem => caseItem.slug === slug)
}

export function getAllCaseSlugs() {
  return successCases.map(caseItem => caseItem.slug)
}
