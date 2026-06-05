import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Analytics from '@/components/Analytics'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Palhaça Lulu | Show Infantil no Sudoeste e Oeste do Paraná',
  description:
    'Show de mágica e recreação para festas infantis no Sudoeste e Oeste do Paraná. Crianças que se divertem e pais que aproveitam a festa. Solicite seu orçamento grátis!',
  keywords: [
    'palhaça infantil',
    'show infantil',
    'animação festa infantil',
    'mágica infantil',
    'recreação infantil',
    'Palhaça Lulu',
    'festa infantil Paraná',
  ],
  openGraph: {
    title: 'Palhaça Lulu | Show Infantil no Sudoeste e Oeste do Paraná',
    description: 'Show de mágica e recreação para festas infantis. Crianças felizes, pais tranquilos!',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: 'https://i.postimg.cc/pdNGBGTJ/logo-Lulu.png' }],
  },
}

const GTM_ID = 'GTM-P72RQ3RG'
const META_PIXEL_ID = '895059098961929'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body className={`${nunito.variable} font-nunito antialiased`}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
