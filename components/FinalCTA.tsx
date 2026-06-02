const WA = 'https://wa.me/5546988355732?text=Oi%20Lulu!%20Quero%20fazer%20um%20or%C3%A7amento%20para%20minha%20festa%20%F0%9F%8E%89'

export default function FinalCTA() {
  return (
    <section
      className="relative py-24 overflow-hidden text-center"
      style={{ background: 'linear-gradient(135deg, #FF6B9D 0%, #FF8B3D 52%, #FFD23F 100%)' }}
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      {/* Floating decorations */}
      <span className="absolute top-10 left-[8%]  text-4xl animate-float select-none pointer-events-none">🎈</span>
      <span className="absolute top-16 right-[8%] text-3xl animate-float-rev select-none pointer-events-none" style={{animationDelay:'0.5s'}}>🎉</span>
      <span className="absolute bottom-10 left-[5%]  text-3xl animate-float select-none pointer-events-none" style={{animationDelay:'1s'}}>⭐</span>
      <span className="absolute bottom-16 right-[5%] text-4xl animate-float-rev select-none pointer-events-none" style={{animationDelay:'0.7s'}}>🎊</span>

      <div className="relative max-w-3xl mx-auto px-4">
        <div className="reveal mb-4 inline-block bg-white/30 backdrop-blur-sm border border-white/50 text-white font-bold text-sm px-4 py-1.5 rounded-full">
          ⚠️ Apenas 8 datas disponíveis por mês. Garanta a sua!
        </div>

        <h2 className="reveal text-4xl sm:text-5xl font-black text-white mb-5 leading-tight drop-shadow-lg">
          Sua festa pode ser{' '}
          <span className="text-brand-yellow drop-shadow">a mais incrível</span>{' '}
          que os seus filhos já viram!
        </h2>

        <p className="reveal text-white/90 text-xl font-semibold mb-8 max-w-xl mx-auto">
          Mande uma mensagem agora. O orçamento é gratuito e sem compromisso.
        </p>

        <div className="reveal">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp animate-bounce-cta inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-xl shadow-2xl"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.847L.057 23.485a.75.75 0 0 0 .921.921l5.638-1.471A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 0 1-4.964-1.365l-.356-.213-3.682.96.981-3.584-.233-.371A9.694 9.694 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            QUERO GARANTIR MINHA DATA!
          </a>
        </div>

        <p className="reveal mt-5 text-white/80 text-sm font-semibold">
          📍 Atendemos Toledo e Região · Resposta em minutos
        </p>
      </div>
    </section>
  )
}
