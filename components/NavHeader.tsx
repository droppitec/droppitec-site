'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function NavHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 py-4 ${
      isScrolled 
        ? 'bg-[rgba(75,102,247,0.98)] shadow-lg' 
        : 'bg-[rgba(75,102,247,0.95)]'
    } backdrop-blur-[10px]`}>
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('inicio')}
          className="flex items-center cursor-pointer relative z-[1001]"
        >
          <Image 
            src="/images/droppitec_logo_blanco.svg" 
            alt="Droppitec" 
            width={160} 
            height={40}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="bg-transparent border-none text-[rgba(238,239,234,0.8)] font-sans text-sm font-medium cursor-pointer transition-colors duration-300 py-2 hover:text-blanco"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('nosotros')}
            className="bg-transparent border-none text-[rgba(238,239,234,0.8)] font-sans text-sm font-medium cursor-pointer transition-colors duration-300 py-2 hover:text-blanco"
          >
            Nosotros
          </button>
          <button 
            onClick={() => scrollToSection('casos-exito')}
            className="bg-transparent border-none text-[rgba(238,239,234,0.8)] font-sans text-sm font-medium cursor-pointer transition-colors duration-300 py-2 hover:text-blanco"
          >
            Casos de éxito
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="bg-blanco text-azul border-none px-6 py-2.5 rounded-full font-sans text-sm font-bold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
          >
            Contáctanos
          </button>
        </div>

        {/* Hamburger Button */}
        <button 
          className="md:hidden relative z-[1001] text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-azul z-[1000] flex flex-col items-center justify-center gap-10 transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-white font-title text-3xl font-black uppercase tracking-tight"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('nosotros')}
            className="text-white font-title text-3xl font-black uppercase tracking-tight"
          >
            Nosotros
          </button>
          <button 
            onClick={() => scrollToSection('casos-exito')}
            className="text-white font-title text-3xl font-black uppercase tracking-tight"
          >
            Casos de éxito
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="bg-white text-azul px-10 py-4 rounded-full font-title text-2xl font-black uppercase shadow-2xl"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </nav>
  )
}
