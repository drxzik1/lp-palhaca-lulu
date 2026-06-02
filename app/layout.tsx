import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Palhaça Lulu | Show Infantil em Toledo e Região',
  description:
    'Show de mágica e recreação para festas infantis em Toledo e região. Crianças que se divertem e pais que aproveitam a festa. Solicite seu orçamento grátis!',
  keywords: [
    'palhaça Toledo',
    'show infantil Toledo',
    'animação festa infantil',
    'mágica infantil',
    'recreação infantil',
    'Palhaça Lulu',
  ],
  openGraph: {
    title: 'Palhaça Lulu | Show Infantil em Toledo e Região',
    description: 'Show de mágica e recreação para festas infantis. Crianças felizes, pais tranquilos!',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: 'https://i.postimg.cc/pdNGBGTJ/logo-Lulu.png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} font-nunito antialiased`}>{children}</body>
    </html>
  )
}
