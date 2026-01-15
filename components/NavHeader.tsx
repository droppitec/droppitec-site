'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function NavHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 py-4 ${
      isScrolled 
        ? 'bg-[rgba(75,102,247,0.98)] shadow-lg' 
        : 'bg-[rgba(75,102,247,0.95)]'
    } backdrop-blur-[10px]`}>
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('inicio')}
          className="flex items-center cursor-pointer"
        >
          <Image 
            src="/images/droppitec_logo_blanco.svg" 
            alt="Droppitec" 
            width={180} 
            height={42}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </button>
        
        <div className="flex items-center gap-8 md:gap-4">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="bg-transparent border-none text-[rgba(238,239,234,0.8)] font-sans text-base md:text-sm cursor-pointer transition-colors duration-300 py-2 hover:text-blanco"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('nosotros')}
            className="bg-transparent border-none text-[rgba(238,239,234,0.8)] font-sans text-base md:text-sm cursor-pointer transition-colors duration-300 py-2 hover:text-blanco"
          >
            Nosotros
          </button>
          <button 
            onClick={() => scrollToSection('casos-exito')}
            className="bg-transparent border-none text-[rgba(238,239,234,0.8)] font-sans text-base md:text-sm cursor-pointer transition-colors duration-300 py-2 hover:text-blanco"
          >
            Casos de éxito
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="bg-blanco text-gris-oscuro border-none px-6 py-3 md:px-4 md:py-2 rounded-lg font-sans text-base md:text-sm font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </nav>
  )
}
