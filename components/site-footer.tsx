import Link from 'next/link'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/304978196_775605153494404_943284715644072812_n-Fh8zCfvO6UszQUbEpjX72Hk5Sn0YGW.png'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/#inicio" aria-label="Businessman Advisor, volver al inicio">
        <img src={logoUrl} alt="Businessman Advisor" />
      </Link>
      <span>© 2026 Businessman Advisor</span>
      <Link href="/contacto">Contacto</Link>
      <Link href="/#inicio">Volver arriba ↑</Link>
    </footer>
  )
}
