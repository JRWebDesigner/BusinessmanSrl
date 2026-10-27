'use client'

import { useEffect, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  Globe2,
  Pause,
  Play,
  Scale,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { office } from '@/lib/contact'
import { servicePages } from '@/lib/services'

const serviceIcons = [FileCheck2, ShieldCheck, Globe2, Building2, Scale, BriefcaseBusiness]
const services = servicePages.map((service, index) => ({ ...service, icon: serviceIcons[index] }))

const teamStories = [
  {
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',
    alt: 'Personas colaborando alrededor de una mesa de trabajo',
    title: 'Un equipo que escucha',
    text: 'Cada negocio parte de una necesidad distinta. Primero entendemos la tuya y luego definimos el camino.',
    area: 'Atención cercana',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Equipo trabajando en conjunto en una oficina',
    title: 'Experiencia que se conecta',
    text: 'Coordinamos las distintas gestiones para darte una guía clara y mantener cada paso en movimiento.',
    area: 'Gestión coordinada',
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
    alt: 'Profesionales conversando en una reunión de trabajo',
    title: 'Acompañamiento de principio a fin',
    text: 'Te mantenemos al tanto del proceso y disponibles para resolver tus dudas durante la gestión.',
    area: 'Seguimiento continuo',
  },
]

const faqs = [
  {
    question: '¿Qué tipo de trámites y servicios puedo consultar?',
    answer: 'Puedes consultarnos por registros y notificaciones sanitarias, certificados de comercialización, despachos aduaneros, apertura o cierre de empresas y asesoría empresarial. Cuéntanos tu caso y confirmaremos cómo podemos ayudarte.',
  },
  {
    question: '¿Cómo sé qué documentos necesito?',
    answer: 'Los requisitos dependen del trámite, del producto y de tu situación. Revisamos primero tu necesidad y te indicamos los documentos aplicables antes de iniciar la gestión.',
  },
  {
    question: '¿Puedo recibir ayuda si todavía estoy empezando mi negocio?',
    answer: 'Sí. Podemos orientarte sobre los pasos para formalizar tu empresa y revisar qué gestiones pueden ser necesarias para comenzar a operar.',
  },
  {
    question: '¿Cómo me mantienen informado sobre mi trámite?',
    answer: 'Definimos contigo un canal de comunicación y te compartimos las novedades y los pasos siguientes mientras acompañamos la gestión.',
  },
  {
    question: '¿Cuánto cuesta el servicio y cuánto demora?',
    answer: 'El costo y los plazos dependen del tipo de gestión, sus requisitos y las entidades involucradas. Al conocer tu caso podremos orientarte de forma más precisa.',
  },
]

const heroSlides = [
  {
    eyebrow: 'Tu empresa, en buenas manos',
    lead: 'Trámites',
    highlight: 'que mueven',
    ending: 'tu negocio.',
    description: 'Transformamos procesos complejos en soluciones claras para que tú puedas enfocarte en hacer crecer tu empresa.',
  },
  {
    eyebrow: 'Acompañamiento en cada etapa',
    lead: 'Tu empresa',
    highlight: 'merece crecer',
    ending: 'sin barreras.',
    description: 'Desde la formalización hasta el comercio exterior, te ayudamos a dar el siguiente paso con confianza.',
  },
  {
    eyebrow: 'Claridad para avanzar',
    lead: 'Decisiones',
    highlight: 'más claras',
    ending: 'cada día.',
    description: 'Te orientamos en tus gestiones para que sepas qué sigue y puedas poner tu energía en lo que importa.',
  },
]

const buildAnimatedLine = (text: string) =>
  text.split('').map((char, index) => {
    const isSpace = char === ' '
    const isPunctuation = /[.,!?;]/.test(char)
    const shiftX = `${(index % 2 === 0 ? -1 : 1) * (index + 1) * 5}px`
    const shiftY = `${(index % 3 === 0 ? -1 : 1) * (index + 1) * 10}px`
    const tilt = `${(index % 2 === 0 ? -1 : 1) * (13 + (index % 4) * 5)}deg`

    return (
      <span
        key={`${char}-${index}`}
        className="hero-char"
        style={{
          ['--char-shift-x' as string]: shiftX,
          ['--char-shift-y' as string]: shiftY,
          ['--char-tilt' as string]: tilt,
          ['--char-delay' as string]: `${index * 32}ms`,
          ...(isSpace
            ? { display: 'inline-block', minWidth: '0.38em' }
            : isPunctuation
              ? { marginRight: '0.06em' }
              : {}),
        }}
      >
        {isSpace ? '\u00A0' : char}
      </span>
    )
  })

export default function Page() {
  const [scrollY, setScrollY] = useState(0)
  const [activeService, setActiveService] = useState(0)
  const [activeTeamStory, setActiveTeamStory] = useState(0)
  const [activeHeroSlide, setActiveHeroSlide] = useState(0)
  const [heroAutoplay, setHeroAutoplay] = useState(true)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionPreference.matches || !heroAutoplay) return

    const interval = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        setActiveHeroSlide((current) => (current + 1) % heroSlides.length)
      }
    }, 6500)

    return () => window.clearInterval(interval)
  }, [activeHeroSlide, heroAutoplay])

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY)
      const section = document.getElementById('servicios')
      if (!section || window.innerWidth <= 900) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const sequenceLength = section.offsetHeight - window.innerHeight
      const progress = Math.max(0, Math.min(0.999, (window.scrollY - sectionTop) / sequenceLength))
      setActiveService(Math.min(services.length - 1, Math.floor(progress * services.length)))
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
    const serviceList = document.querySelector<HTMLElement>('.service-list')
    if (!serviceList) return

    const updateActiveService = () => {
      if (window.innerWidth > 900) return

      const listCenter = serviceList.getBoundingClientRect().left + serviceList.clientWidth / 2
      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      serviceList.querySelectorAll<HTMLElement>('[data-service-index]').forEach((card) => {
        const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2
        const distance = Math.abs(cardCenter - listCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = Number(card.dataset.serviceIndex)
        }
      })

      setActiveService(closestIndex)
    }

    serviceList.addEventListener('scroll', updateActiveService, { passive: true })
    window.addEventListener('resize', updateActiveService)
    updateActiveService()

    return () => {
      serviceList.removeEventListener('scroll', updateActiveService)
      window.removeEventListener('resize', updateActiveService)
    }
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.scroll-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const currentSlide = heroSlides[activeHeroSlide]
  const titleParts = {
    lead: buildAnimatedLine(currentSlide.lead),
    highlight: buildAnimatedLine(currentSlide.highlight),
    ending: buildAnimatedLine(currentSlide.ending),
  }

  return (
    <main className="site-shell">
      <section id="inicio" className="hero-section">
        <div className={`hero-backdrop hero-backdrop--${activeHeroSlide}`} aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--one" aria-hidden="true" />
        <div className="hero-glow hero-glow--two" aria-hidden="true" />
        <div className="hero-copy reveal-up" aria-label="Presentación">
          <div key={activeHeroSlide} className="hero-message">
            <p className="eyebrow"><span /> {heroSlides[activeHeroSlide].eyebrow}</p>
            <h1 className="hero-title">
              <span className="hero-title-line">{titleParts.lead}</span>
              <em className="hero-title-line hero-title-line--highlight">{titleParts.highlight}</em>
              <span className="hero-title-line">{titleParts.ending}</span>
            </h1>
            <p className="hero-description">{heroSlides[activeHeroSlide].description}</p>
          </div>
          <div className="hero-actions">
            <a className="button button--orange" href="#contacto">Cuéntanos tu proyecto <ArrowRight aria-hidden="true" /></a>
            <a className="text-link" href="#servicios">Explorar servicios <ArrowDown aria-hidden="true" /></a>
          </div>
          <div className="hero-slider-controls" aria-label="Controles de la presentación">
            
            <div className="hero-slide-dots">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  className={`hero-slide-dot ${activeHeroSlide === index ? 'hero-slide-dot--active' : ''}`}
                  aria-label={`Mostrar presentación ${index + 1}: ${slide.eyebrow}`}
                  aria-current={activeHeroSlide === index ? 'true' : undefined}
                  onClick={() => setActiveHeroSlide(index)}
                />
              ))}
            </div>
            
          </div>
        </div>
        <div
          className="hero-orbit-scroll"
          style={{ transform: `translate3d(0, ${Math.min(scrollY * 0.12, 72)}px, 0) rotate(${Math.min(scrollY * 0.025, 12)}deg)` }}
          aria-hidden="true"
        >
          <div className="hero-orbit">
            <div className="orbit-ring orbit-ring--outer" />
            <div className="orbit-ring orbit-ring--inner" />
            <div className="orbit-card orbit-card--top"><FileCheck2 /><span>Gestión<br />sanitaria</span></div>
            <div className="orbit-card orbit-card--right"><Globe2 /><span>Comercio<br />exterior</span></div>
            <div className="orbit-card orbit-card--bottom"><Building2 /><span>Tu empresa<br />crece</span></div>
            <div className="orbit-card orbit-card--bottom--right "><Building2 /><span>Tu empresa<br />crece</span></div>
            <div className="orbit-core"><img src="/logor.png" alt="Businessman Advisor" /></div>
          </div>
        </div>
      </section>

      <section className="statement-section" id="nosotros">
        <div className="statement-layout">
          <h2 className="reveal-up">Menos papeleo.<br /><span>Más posibilidades.</span></h2>
          <div className="statement-body reveal-up">
            <p>En Businessman Advisor hacemos que lo difícil se sienta sencillo. Somos el aliado estratégico que entiende tus objetivos y se encarga de convertirlos en pasos concretos.</p>
            <a className="text-link text-link--dark" href="#contacto">Conoce nuestra forma de trabajar <ChevronRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="number-graphic" aria-hidden="true">01</div>
      </section>

      <section className="services-section" id="servicios">
        <div className="services-intro">
          <h2>Todo resuelto.<br /><span>En un solo lugar.</span></h2>
          <p>Desliza para descubrir cómo podemos acompañar cada etapa de tu negocio.</p>
          <div className="service-progress" aria-label={`Servicio ${activeService + 1} de ${services.length}`}>
            <span className="service-progress-count" aria-hidden="true">
              {String(activeService + 1).padStart(2, '0')} <b>/ {String(services.length).padStart(2, '0')}</b>
            </span>
            <i style={{ '--service-progress': (activeService + 1) / services.length } as CSSProperties} />
          </div>
        </div>
        <div className="service-story">
          <div className="service-story-stage">
            {services.map(({ number, icon: Icon, slug, title, cardText }, index) => (
              <Link
                href={`/servicios/${slug}`}
                className={`service-feature ${index === activeService ? 'service-feature--active' : ''}`}
                key={number}
                aria-hidden={index !== activeService}
                tabIndex={index === activeService ? 0 : -1}
              >
                <span className="service-feature-number">{number}</span>
                <div className="service-feature-icon"><Icon aria-hidden="true" /></div>
                <div><h3>{title}</h3><p>{cardText}</p></div>
                <ArrowUpRight className="service-arrow" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className="service-list scroll-reveal" aria-label="Servicios disponibles">
            {services.map(({ number, icon: Icon, slug, title, cardText }, index) => (
              <Link
                className={`service-row ${index === activeService ? 'service-row--active' : ''}`}
                href={`/servicios/${slug}`}
                key={number}
                data-service-index={index}
                style={{ '--service-card-delay': `${index * 70}ms` } as CSSProperties}
              >
                <span className="service-number">{number}</span><div className="service-icon"><Icon aria-hidden="true" /></div><div className="service-copy"><h3>{title}</h3><p>{cardText}</p></div><ArrowUpRight className="service-arrow" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" id="proceso">
        <div className="process-visual" aria-hidden="true">
          <div className="process-orb process-orb--one" /><div className="process-orb process-orb--two" />
          <div className="process-panel"><Sparkles /><span>Tu próximo<br /><strong>paso</strong></span></div>
        </div>
        <div className="process-copy"><div className="section-label">/ 03 — El proceso</div><h2>Avanzar es<br /><span>más fácil</span> juntos.</h2><p>Un método simple, comunicación constante y la tranquilidad de tener a un equipo experto de tu lado.</p><ol><li><b>01</b><span>Escuchamos tu necesidad</span></li><li><b>02</b><span>Diseñamos la solución</span></li><li><b>03</b><span>Gestionamos hasta lograrlo</span></li></ol></div>
      </section>

      <section className="team-section" id="equipo">
        <div className="team-heading scroll-reveal">
          <div>
            <div className="section-label">/ 04 — Las personas detrás</div>
            <h2>Un equipo a tu lado.<br /><span>En cada paso.</span></h2>
          </div>
          <p>Combinamos atención cercana y gestión especializada para que sepas qué sigue y quién te acompaña.</p>
        </div>
        <div className="team-carousel scroll-reveal" aria-roledescription="carrusel">
          <div className="team-photo">
            <img
              key={teamStories[activeTeamStory].image}
              src={teamStories[activeTeamStory].image}
              alt={teamStories[activeTeamStory].alt}
            />
            <span className="team-photo-label">Fotografía referencial · Así trabajamos</span>
          </div>
          <div className="team-story">
            <span className="team-story-count">{String(activeTeamStory + 1).padStart(2, '0')} / {String(teamStories.length).padStart(2, '0')}</span>
            <p className="team-story-area">{teamStories[activeTeamStory].area}</p>
            <h3>{teamStories[activeTeamStory].title}</h3>
            <p className="team-story-text">{teamStories[activeTeamStory].text}</p>
            <div className="team-controls">
              <div className="team-dots" aria-label={`Historia ${activeTeamStory + 1} de ${teamStories.length}`}>
                {teamStories.map((story, index) => (
                  <button
                    key={story.area}
                    type="button"
                    className={`team-dot ${activeTeamStory === index ? 'team-dot--active' : ''}`}
                    aria-label={`Ver: ${story.title}`}
                    aria-current={activeTeamStory === index ? 'true' : undefined}
                    onClick={() => setActiveTeamStory(index)}
                  />
                ))}
              </div>
              <div className="team-arrows">
                <button
                  type="button"
                  aria-label="Historia anterior"
                  onClick={() => setActiveTeamStory((activeTeamStory - 1 + teamStories.length) % teamStories.length)}
                ><ChevronLeft aria-hidden="true" /></button>
                <button
                  type="button"
                  aria-label="Historia siguiente"
                  onClick={() => setActiveTeamStory((activeTeamStory + 1) % teamStories.length)}
                ><ChevronRight aria-hidden="true" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="company-values">
          <article className="scroll-reveal"><span>01</span><h3>Claridad</h3><p>Te explicamos el proceso y los requisitos en un lenguaje directo.</p></article>
          <article className="scroll-reveal"><span>02</span><h3>Compromiso</h3><p>Nos hacemos cargo de la gestión y damos seguimiento a cada avance.</p></article>
          <article className="scroll-reveal"><span>03</span><h3>Cercanía</h3><p>Trabajamos contigo, con comunicación abierta y atención personalizada.</p></article>
        </div>
      </section>

      <section className="faq-section" id="preguntas">
        <div className="faq-heading scroll-reveal">
          <div className="section-label">/ 05 — Resolvemos tus dudas</div>
          <h2>Preguntas<br /><span>frecuentes.</span></h2>
          <p>¿No encuentras tu respuesta? Cuéntanos qué necesitas y te orientamos.</p>
          <a className="text-link text-link--dark" href="#contacto">Hacer una consulta <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="faq-list">
          {faqs.map(({ question, answer }, index) => (
            <details className="faq-item scroll-reveal" key={question}>
              <summary><span className="faq-number">{String(index + 1).padStart(2, '0')}</span><span>{question}</span><span className="faq-toggle" aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="home-location-section" id="ubicacion">
        <div className="home-location-copy scroll-reveal">
          <div className="section-label">/ 06 — Visítanos</div>
          <h2>Estamos cerca.<br /><span>Hablemos en persona.</span></h2>
          <p>Nuestra oficina está en La Paz, a pasos de la cancha Luis Lastra. Escríbenos si necesitas indicaciones antes de visitarnos.</p>
          <address>{office.address}</address>
          <p className="home-location-hours">Atención: {office.hours}</p>
          <a className="button button--dark" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapSearch)}`} target="_blank" rel="noreferrer">
            Ver ubicación en Google Maps <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="home-location-map scroll-reveal">
          <iframe
            title="Mapa de referencia de la oficina cerca de la cancha Luis Lastra"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(office.mapSearch)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapSearch)}`} target="_blank" rel="noreferrer">
            <span>La Paz · Bolivia</span><span>Abrir indicaciones <ArrowRight aria-hidden="true" /></span>
          </a>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-inner"><div className="section-label">/ 07 — Hablemos</div><h2>Tu siguiente gran paso<br /><span>empieza aquí.</span></h2><p>Cuéntanos qué necesitas. Te responderemos con claridad, sin vueltas.</p><Link className="button button--dark" href="/contacto">Ir a la página de contacto <ArrowRight aria-hidden="true" /></Link><div className="contact-details"><a href={`https://wa.me/${office.whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp {office.phone}</a><a href={`mailto:${office.email}`}>{office.email}</a></div></div>
      </section>

    </main>
  )
}

function ArrowUpRight(props: React.ComponentProps<typeof ArrowRight>) {
  return <ArrowRight {...props} className={`${props.className ?? ''} arrow-up-right`} />
}
