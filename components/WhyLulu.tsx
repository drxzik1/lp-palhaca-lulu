import Image from 'next/image'

const benefits = [
  { icon: '🛡️', text: 'Seu filho se diverte com total segurança' },
  { icon: '😌', text: 'Você aproveita a festa sem preocupações' },
  { icon: '💖', text: 'Crianças e adultos vivem a festa de verdade' },
  { icon: '🧹', text: 'Equipamentos próprios, novos e higienizados' },
]

export default function WhyLulu() {
  return (
    <section className="py-20 bg-brand-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-14">
        {/* Photo collage */}
        <div className="reveal flex-shrink-0 relative w-full max-w-sm mx-auto lg:mx-0 h-[420px]">
          <div className="absolute top-0 left-0 w-56 h-64 rounded-3xl overflow-hidden shadow-xl rotate-[-3deg]">
            <Image src="/IMG-1500.jpg" alt="Palhaça Lulu com crianças" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-52 h-60 rounded-3xl overflow-hidden shadow-xl rotate-[3deg]">
            <Image src="/IMG-1493.jpg" alt="Festa infantil com Palhaça Lulu" fill className="object-cover" />
          </div>
          {/* Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-magenta text-white rounded-2xl shadow-2xl px-4 py-3 font-black text-center z-10 text-sm whitespace-nowrap">
            🎉 A festa que toda<br/>família merece!
          </div>
        </div>

        {/* Copy */}
        <div className="flex-1">
          <div className="reveal mb-3">
            <span className="inline-block bg-brand-pink/20 text-brand-magenta font-bold text-sm px-4 py-1.5 rounded-full">
              Por que escolher a Lulu?
            </span>
          </div>
          <h2 className="reveal text-3xl sm:text-4xl font-black text-brand-dark mb-4 leading-tight">
            Você merece{' '}
            <span className="gradient-text">aproveitar a festa</span>{' '}
            também
          </h2>
          {/* Pull quote — dor real dos pais */}
          <blockquote className="reveal border-l-4 border-brand-pink bg-brand-pink/10 rounded-r-2xl px-5 py-4 mb-6 italic text-brand-dark font-semibold text-base leading-relaxed">
            &ldquo;A maioria dos pais passa o aniversário do filho se preocupando com as crianças em vez de curtir o momento.&rdquo;
          </blockquote>
          <p className="reveal text-brand-muted text-lg mb-8 leading-relaxed">
            Com a Palhaça Lulu, isso muda.{' '}
            <strong className="text-brand-dark">Você contrata a tranquilidade, a gente entrega a alegria.</strong>
          </p>

          <ul className="reveal-group space-y-4">
            {benefits.map((b) => (
              <li key={b.text} className="reveal flex items-center gap-3">
                <span className="text-2xl flex-shrink-0">{b.icon}</span>
                <span className="font-semibold text-brand-dark">{b.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
