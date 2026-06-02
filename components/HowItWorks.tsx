const WA = 'https://wa.me/5546988355732?text=Oi%20Lulu!%20Quero%20fazer%20um%20or%C3%A7amento%20para%20minha%20festa%20%F0%9F%8E%89'

const steps = [
  {
    num: '01',
    icon: '💬',
    title: 'Mande uma Mensagem',
    desc: 'Fale com a Lulu pelo WhatsApp. Conte a data, local e número de crianças: é rápido e sem compromisso!',
  },
  {
    num: '02',
    icon: '🎁',
    title: 'Monte Seu Pacote',
    desc: 'A Lulu monta uma proposta personalizada com tudo que você precisa para a festa perfeita.',
  },
  {
    num: '03',
    icon: '🎉',
    title: 'Aproveite a Festa!',
    desc: 'No dia, é só relaxar. A Lulu cuida de tudo e faz as crianças sorrirem muito.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #FFF0F9 0%, #FFF8EE 100%)' }}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="reveal inline-block bg-brand-purple/20 text-brand-purple font-bold text-sm px-4 py-1.5 rounded-full mb-4">
            Como funciona
          </div>
          <h2 className="reveal text-3xl sm:text-4xl font-black text-brand-dark">
            Em 3 passos simples,{' '}
            <span className="gradient-text">sua festa está garantida</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal-group">
            {steps.map((step) => (
              <div key={step.num} className="reveal flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-white shadow-lg ring-4 ring-white">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 bg-brand-magenta text-white text-xs font-black w-7 h-7 rounded-full flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-black text-brand-dark text-xl mb-2">{step.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-lg shadow-xl"
          >
            Pedir orçamento grátis 🎈
          </a>
        </div>
      </div>
    </section>
  )
}
