'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import { servicePages } from '@/lib/services'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/304978196_775605153494404_943284715644072812_n-Fh8zCfvO6UszQUbEpjX72Hk5Sn0YGW.png'

export function SiteHeader() {
  const pathname = usePathname()
  const navigationRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('businessman-advisor-theme')
    const darkModeEnabled = savedTheme === 'dark'
    setIsDarkMode(darkModeEnabled)
    document.documentElement.dataset.theme = darkModeEnabled ? 'dark' : 'light'
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY)
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollableHeight > 0 ? Math.max(0, Math.min(1, window.scrollY / scrollableHeight)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    navigationRef.current?.querySelectorAll('details[open]').forEach((item) => item.removeAttribute('open'))
  }, [pathname])

  const toggleDarkMode = () => {
    const nextDarkMode = !isDarkMode
    setIsDarkMode(nextDarkMode)
    window.localStorage.setItem('businessman-advisor-theme', nextDarkMode ? 'dark' : 'light')
    document.documentElement.dataset.theme = nextDarkMode ? 'dark' : 'light'
  }

  return (
    <header className={`site-header ${scrollY > 32 ? 'site-header--scrolled' : ''} ${menuOpen ? 'site-header--menu-open' : ''}`}>
      <Link href="/#inicio" className="brand" aria-label="Businessman Advisor, inicio">
        <img src={logoUrl} alt="Businessman Advisor" />
      </Link>
      <nav ref={navigationRef} id="site-navigation" className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Navegación principal">
        <details className="nav-services">
          <summary aria-label="Abrir menú de servicios">
            <span>Servicios</span><ChevronDown aria-hidden="true" />
          </summary>
          <div className="nav-services-menu">
            <Link className="nav-services-all" href="/#servicios" onClick={() => setMenuOpen(false)}>
              Ver todos los servicios <ArrowRight aria-hidden="true" />
            </Link>
            {servicePages.map((service) => (
              <Link href={`/servicios/${service.slug}`} key={service.slug} onClick={() => setMenuOpen(false)}>
                <span className="nav-service-number">{service.number}</span>
                <span>{service.navLabel}</span>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </details>
        <Link href="/#proceso" onClick={() => setMenuOpen(false)}>Cómo trabajamos</Link>
        <Link href="/#equipo" onClick={() => setMenuOpen(false)}>Equipo</Link>
        <Link href="/#preguntas" onClick={() => setMenuOpen(false)}>Preguntas</Link>
        <Link href="/#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link>
        <button
          className="theme-toggle"
          type="button"
          aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          aria-pressed={isDarkMode}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          <span>{isDarkMode ? 'Modo claro' : 'Modo oscuro'}</span>
        </button>
        <Link href="/contacto" className="nav-contact" onClick={() => setMenuOpen(false)}>Hablemos <ArrowRight aria-hidden="true" /></Link>
      </nav>
      <button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <div
        className="header-scroll-progress"
        role="progressbar"
        aria-label="Progreso de desplazamiento"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollProgress * 100)}
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </header>
  )
}
