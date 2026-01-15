'use client'

import { useState, useEffect } from 'react'

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
        <div className="flex items-center">
          <span className="font-sans text-2xl font-bold text-blanco tracking-tight">
            droppitec
          </span>
        </div>
        
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
          <button className="bg-blanco border-none w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 text-gris-oscuro hover:-translate-y-0.5 hover:shadow-lg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="currentColor"/>
              <path d="M10 12C5.58172 12 2 13.7909 2 16V20H18V16C18 13.7909 14.4183 12 10 12Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
