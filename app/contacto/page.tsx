import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDown, ArrowRight, Clock3, Mail, MapPin, MessageCircle } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { office } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Contacto | Businessman Advisor',
  description: 'Visita nuestra oficina en La Paz o contáctanos para recibir orientación sobre tus trámites y servicios empresariales.',
}

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapSearch)}`
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(office.mapSearch)}&output=embed`

export default function ContactPage() {
  return (
    <main className="site-shell contact-page">
      <section className="contact-page-hero">
        <div className="service-detail-grid" aria-hidden="true" />
        <div className="contact-page-hero-copy">
          <p className="eyebrow"><span /> Estamos para orientarte</p>
          <h1>Hablemos de<br /><em>tu próximo paso.</em></h1>
          <p>Cuéntanos qué necesitas. Nuestro equipo está listo para escucharte y ayudarte a encontrar el camino más claro.</p>
          <a className="text-link" href="#contacto-formulario">Enviar una consulta <ArrowDown aria-hidden="true" /></a>
        </div>
        <div className="contact-page-hero-mark" aria-hidden="true"><MessageCircle /><span>BA</span></div>
      </section>

      <section className="contact-information" aria-label="Información de contacto y ubicación">
        <article>
          <MapPin aria-hidden="true" />
          <div><h2>Visítanos</h2><address>{office.address}</address><a href={mapUrl} rel="noreferrer" target="_blank">Abrir en Google Maps <ArrowRight aria-hidden="true" /></a></div>
        </article>
        <article>
          <Clock3 aria-hidden="true" />
          <div><h2>Horario de atención</h2><p>{office.hours}</p><span>La Paz · Bolivia</span></div>
        </article>
        <article>
          <Mail aria-hidden="true" />
          <div><h2>Escríbenos</h2><a href={`mailto:${office.email}`}>{office.email}</a><a href={`https://wa.me/${office.whatsappNumber}`} rel="noreferrer" target="_blank">WhatsApp {office.phone}</a></div>
        </article>
      </section>

      <section className="contact-form-section" id="contacto-formulario">
        <div className="contact-form-intro">
          <div className="section-label">/ Cuéntanos tu proyecto</div>
          <h2>Empecemos<br /><span>la conversación.</span></h2>
          <p>Completa el formulario y prepararemos tu consulta en WhatsApp. Podrás revisar el mensaje antes de enviarlo.</p>
          <div className="contact-response-note"><span /> Atención personalizada en horario de oficina</div>
        </div>
        <ContactForm />
      </section>

      <section className="contact-map-section">
        <div className="contact-map-heading">
          <div><div className="section-label">/ Nuestra oficina</div><h2>Te esperamos<br /><span>en La Paz.</span></h2></div>
          <p>{office.address}</p>
        </div>
        <div className="contact-map-frame">
          <iframe
            title="Mapa de referencia de la oficina de Businessman Advisor en La Paz"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a className="contact-map-link" href={mapUrl} rel="noreferrer" target="_blank">Ver indicaciones <ArrowRight aria-hidden="true" /></a>
        </div>
        <p className="contact-map-disclaimer">Ubicación referencial a pasos de la cancha Luis Lastra. Consulta el mapa antes de visitarnos.</p>
      </section>

      <section className="contact-page-services">
        <p>¿Ya sabes qué gestión necesitas?</p>
        <Link className="text-link text-link--dark" href="/#servicios">Explora nuestros servicios <ArrowRight aria-hidden="true" /></Link>
      </section>
    </main>
  )
}
