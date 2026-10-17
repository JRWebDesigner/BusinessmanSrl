'use client'

import { type FormEvent, useState } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { servicePages } from '@/lib/services'
import { office } from '@/lib/contact'

export function ContactForm() {
  const [whatsAppBlocked, setWhatsAppBlocked] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const service = String(formData.get('service') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    const text = [
      'Hola, quiero hacer una consulta a Businessman Advisor.',
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Servicio de interés: ${service || 'Quisiera orientación'}`,
      `Consulta: ${message}`,
    ].join('\n')
    const whatsappUrl = `https://wa.me/${office.whatsappNumber}?text=${encodeURIComponent(text)}`
    const openedWindow = window.open(whatsappUrl, '_blank')

    if (openedWindow) {
      openedWindow.opener = null
    } else {
      setWhatsAppBlocked(true)
      window.location.assign(whatsappUrl)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-fields">
        <label>
          <span>Nombre</span>
          <input autoComplete="name" name="name" placeholder="Tu nombre" required />
        </label>
        <label>
          <span>Correo electrónico</span>
          <input autoComplete="email" name="email" placeholder="tu@correo.com" required type="email" />
        </label>
        <label className="contact-form-service">
          <span>¿En qué podemos ayudarte?</span>
          <select defaultValue="" name="service">
            <option value="">Selecciona un servicio (opcional)</option>
            {servicePages.map((service) => (
              <option key={service.slug} value={service.title}>{service.title}</option>
            ))}
          </select>
        </label>
        <label className="contact-form-message">
          <span>Cuéntanos brevemente</span>
          <textarea name="message" placeholder="Escribe aquí tu consulta..." required rows={4} />
        </label>
      </div>
      {whatsAppBlocked && (
        <p className="contact-form-notice" role="status">
          WhatsApp no se pudo abrir en una ventana nueva. Te estamos redirigiendo para continuar.
        </p>
      )}
      <button className="button button--orange" type="submit">
        Enviar consulta por WhatsApp <MessageCircle aria-hidden="true" /><ArrowRight aria-hidden="true" />
      </button>
      <p className="contact-form-privacy">Al enviar, se abrirá WhatsApp con tu mensaje preparado para que lo revises antes de enviarlo.</p>
    </form>
  )
}
