import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { locales,defaultLocale } from './i18n/routing'

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
})

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Ignorar rutas internas de Next.js y archivos estáticos
  if (pathname.startsWith('/_next') || pathname.includes('.')) return

  // Excluir /studio para que no se redirija
  if (pathname.startsWith('/studio')) return

  // Usar el middleware de next-intl
  return intlMiddleware(request)
}

export const config = {
  // Aplica el middleware a todas las rutas menos las excluidas arriba
  matcher: ['/', '/((?!_next|studio|.*\\..*).*)'],
}