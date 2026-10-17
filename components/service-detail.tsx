'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  FileCheck2,
  Globe2,
  Scale,
  ShieldCheck,
} from 'lucide-react'
import type { ServicePageData } from '@/lib/services'
import { servicePages } from '@/lib/services'

const serviceIcons = [FileCheck2, ShieldCheck, Globe2, Building2, Scale, BriefcaseBusiness]

export function ServiceDetail({ service }: { service: ServicePageData }) {
  const serviceIndex = servicePages.findIndex((item) => item.slug === service.slug)
  const Icon = serviceIcons[serviceIndex]
  const otherServices = servicePages.filter((item) => item.slug !== service.slug)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.service-reveal')
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

  return (
    <main className="site-shell service-page">
      <section className="service-detail-hero">
        <div className="service-detail-grid" aria-hidden="true" />
        <div className="service-detail-glow" aria-hidden="true" />
        <div className="service-detail-copy service-reveal">
          <p className="eyebrow"><span /> {service.eyebrow}</p>
          <h1>{service.headline}</h1>
          <p className="service-detail-intro">{service.intro}</p>
          <div className="hero-actions">
            <Link className="button button--orange" href="/contacto">Consultar este servicio <ArrowRight aria-hidden="true" /></Link>
            <a className="text-link" href="#servicio-detalle">Conocer más <ArrowDown aria-hidden="true" /></a>
          </div>
        </div>
        <div className="service-detail-art service-reveal" aria-hidden="true">
          <div className="service-detail-ring service-detail-ring--outer" />
          <div className="service-detail-ring service-detail-ring--inner" />
          <div className="service-detail-icon"><Icon /></div>
          <span className="service-detail-number">{service.number}</span>
          <p>Businessman<br /><strong>Advisor</strong></p>
        </div>
        <span className="service-detail-location">La Paz · Bolivia</span>
      </section>

      <nav className="service-page-nav" aria-label={`Secciones de ${service.title}`}>
        <span>{service.number} / Secciones</span>
        <a href="#servicio-detalle">El servicio</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#requisitos">Qué preparar</a>
        <a href="#proceso-servicio">El proceso</a>
        <a href="#dudas">Preguntas</a>
      </nav>

      <section id="servicio-detalle" className="service-overview service-reveal">
        <div>
          <div className="section-label">/ {service.number} — El servicio</div>
          <h2>{service.overviewTitle}</h2>
        </div>
        <div className="service-overview-copy">
          <p>{service.overview}</p>
          <p>Cuéntanos tu situación. Revisaremos contigo los siguientes pasos y el alcance que puede tener la gestión.</p>
          <Link className="text-link text-link--dark" href="/contacto">Conversemos sobre tu caso <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section id="beneficios" className="service-benefits">
        <div className="service-section-heading service-reveal">
          <div className="section-label">/ Lo que obtienes</div>
          <h2>Un camino más<br /><span>claro y acompañado.</span></h2>
        </div>
        <div className="service-benefit-grid">
          {service.benefits.map((benefit, index) => (
            <article className="service-benefit-card service-reveal" key={benefit.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
              <Check aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section id="requisitos" className="service-requirements service-reveal">
        <div className="service-requirements-heading">
          <div className="section-label">/ Antes de empezar</div>
          <h2>¿Qué conviene<br /><span>tener a mano?</span></h2>
          <p>Los requisitos exactos dependen de cada caso. Esta información nos ayuda a orientarte desde la primera conversación.</p>
        </div>
        <div className="service-requirements-list">
          {service.requirements.map((requirement, index) => (
            <article key={requirement.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{requirement.title}</h3><p>{requirement.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="proceso-servicio" className="service-process">
        <div className="service-section-heading service-reveal">
          <div className="section-label">/ Nuestra forma de trabajar</div>
          <h2>De la primera charla<br /><span>al siguiente paso.</span></h2>
        </div>
        <ol className="service-process-list">
          {service.steps.map((step, index) => (
            <li className="service-reveal" key={step.title}>
              <span className="service-process-number">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{step.title}</h3><p>{step.text}</p></div>
              <ArrowRight aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>

      <section id="dudas" className="service-faq service-reveal">
        <div className="service-faq-heading">
          <div className="section-label">/ Dudas frecuentes</div>
          <h2>Respuestas<br /><span>claras.</span></h2>
          <p>¿Tienes otra pregunta? Estamos para ayudarte a entender qué sigue.</p>
          <Link className="text-link text-link--dark" href="/contacto">Hacer una consulta <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="faq-list">
          {service.faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question}>
              <summary><span className="faq-number">{String(index + 1).padStart(2, '0')}</span><span>{faq.question}</span><span className="faq-toggle" aria-hidden="true" /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="service-more">
        <div className="service-more-heading service-reveal">
          <div className="section-label">/ Más soluciones</div>
          <h2>Explora otros<br /><span>servicios.</span></h2>
        </div>
        <div className="service-more-links">
          {otherServices.map((item) => (
            <Link className="service-more-link service-reveal" href={`/servicios/${item.slug}`} key={item.slug}>
              <span>{item.number}</span><strong>{item.navLabel}</strong><ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="service-contact">
        <div className="section-label">/ Un buen siguiente paso</div>
        <h2>Hablemos de<br /><span>lo que necesitas.</span></h2>
        <p>Cuéntanos tu caso y te orientaremos con claridad, sin compromiso.</p>
        <Link className="button button--dark" href="/contacto">Contactar a nuestro equipo <ArrowRight aria-hidden="true" /></Link>
      </section>

    </main>
  )
}
