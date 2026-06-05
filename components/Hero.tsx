import Image from 'next/image'

const WA = 'https://wa.me/5546988355732?text=Ol%C3%A1!%20Eu%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FF6B9D 0%, #FF8B3D 52%, #FFD23F 100%)' }}
    >
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      {/* Floating decorations */}
      <span className="absolute top-24 left-[6%] text-5xl animate-float select-none pointer-events-none">🎈</span>
      <span className="absolute top-32 right-[8%] text-4xl animate-float-slow select-none pointer-events-none" style={{animationDelay:'0.8s'}}>⭐</span>
      <span className="absolute bottom-32 left-[10%] text-3xl animate-float-rev select-none pointer-events-none" style={{animationDelay:'0.4s'}}>🎊</span>
      <span className="absolute bottom-40 right-[6%] text-4xl animate-float select-none pointer-events-none" style={{animationDelay:'1.2s'}}>🎉</span>
      <span className="absolute top-1/2 left-[3%] text-2xl animate-float-rev select-none pointer-events-none" style={{animationDelay:'0.6s'}}>✨</span>
      <span className="absolute top-1/3 right-[4%] text-3xl animate-float select-none pointer-events-none" style={{animationDelay:'1s'}}>🎪</span>

      <div className="relative max-w-5xl mx-auto px-4 pt-28 pb-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Left: copy */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm border border-white/50 text-white font-bold text-sm px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
            <span>⭐⭐⭐⭐⭐</span>
            <span>+200 Festas Realizadas na Região</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5 animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '100ms' }}>
            Transformamos<br />
            <span className="text-brand-yellow drop-shadow">Festas em Memórias</span><br />
            Inesquecíveis
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-lg sm:text-xl font-semibold mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Com a Palhaça Lulu, as crianças se divertem de verdade{' '}
            <strong className="text-white">e você aproveita a festa sem preocupações.</strong>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '320ms' }}>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp animate-bounce-cta flex items-center justify-center gap-3 px-8 py-4 rounded-full font-black text-lg shadow-2xl"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.847L.057 23.485a.75.75 0 0 0 .921.921l5.638-1.471A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 0 1-4.964-1.365l-.356-.213-3.682.96.981-3.584-.233-.371A9.694 9.694 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              QUERO MEU ORÇAMENTO GRÁTIS
            </a>
          </div>

          <p className="mt-4 text-white/80 text-sm font-semibold animate-fade-in-up" style={{ animationDelay: '420ms' }}>
            📍 Atendemos o Sudoeste e Oeste do Paraná · Resposta rápida no WhatsApp
          </p>
        </div>

        {/* Right: photo */}
        <div className="flex-shrink-0 w-72 h-80 lg:w-80 lg:h-96 relative animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/40 animate-float">
            <Image
              src="/IMG-1497.jpg"
              alt="Palhaça Lulu animando uma festa infantil"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="(max-width: 1024px) 288px, 320px"
            />
          </div>
          {/* Floating photo badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-2 font-black text-brand-magenta text-sm">
            🎪 Show de Mágica incluso!
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60V30C240 0 480 60 720 40C960 20 1200 60 1440 30V60H0Z" fill="#FFFBF5"/>
        </svg>
      </div>
    </section>
  )
}
