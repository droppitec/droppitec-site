import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import NavHeader from '@/components/NavHeader'
import { getCaseBySlug, getAllCaseSlugs } from '@/lib/successCases'

export async function generateStaticParams() {
  const slugs = getAllCaseSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseData = getCaseBySlug(params.slug)
  
  if (!caseData) {
    return {
      title: 'Caso de éxito no encontrado',
    }
  }

  return {
    title: `${caseData.title} - Caso de éxito | Droppitec`,
    description: caseData.description,
  }
}

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const caseData = getCaseBySlug(params.slug)

  if (!caseData) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <NavHeader />
      
      {/* Hero del caso */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${caseData.coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16">
          <div className="max-w-[1200px] mx-auto w-full">
            <Link 
              href="/#casos-exito"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a casos de éxito
            </Link>
            
            <h1 className="font-title text-5xl md:text-7xl font-black text-white mb-4">
              {caseData.title}
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white/90 font-light">
              {caseData.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Descripción */}
          <div className="mb-16">
            <h2 className="font-title text-3xl md:text-4xl font-black text-gris-oscuro mb-6">
              Sobre el proyecto
            </h2>
            <p className="font-sans text-lg md:text-xl text-gris-oscuro/80 font-light leading-relaxed max-w-3xl">
              {caseData.description}
            </p>
          </div>

          {/* Información del proyecto */}
          <div className="mb-16">
            <h3 className="font-title text-xl font-black text-gris-oscuro mb-4">Año</h3>
            <p className="font-sans text-lg text-gris-oscuro/80 font-light">{caseData.year}</p>
          </div>

          {/* Galería de imágenes */}
          <div>
            <h2 className="font-title text-3xl md:text-4xl font-black text-gris-oscuro mb-8">
              Galería del proyecto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseData.images.map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-xl group"
                >
                  <Image
                    src={image}
                    alt={`${caseData.title} - Imagen ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA para contactar */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-azul">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-title text-4xl md:text-5xl font-black text-white mb-6">
            ¿Tienes un proyecto similar?
          </h2>
          <p className="font-sans text-xl text-white/90 font-light mb-8 max-w-2xl mx-auto">
            Estamos listos para ayudarte a hacerlo realidad.
          </p>
          <Link
            href="/#contacto"
            className="inline-block bg-white text-azul px-12 py-5 rounded-full font-title text-xl font-black hover:bg-blanco transition-all duration-300 hover:-translate-y-1 shadow-2xl"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </main>
  )
}
