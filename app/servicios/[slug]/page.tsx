import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceDetail } from '@/components/service-detail'
import { servicePages } from '@/lib/services'

type ServiceRouteProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params
  const service = servicePages.find((item) => item.slug === slug)

  if (!service) return { title: 'Servicio no encontrado | Businessman Advisor' }
  return {
    title: `${service.title} | Businessman Advisor`,
    description: service.intro,
  }
}

export default async function ServiceRoute({ params }: ServiceRouteProps) {
  const { slug } = await params
  const service = servicePages.find((item) => item.slug === slug)

  if (!service) notFound()

  return <ServiceDetail service={service} />
}
