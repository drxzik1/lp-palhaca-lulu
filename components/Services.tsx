const services = [
  {
    icon: '🎩',
    title: 'Show de Mágica',
    desc: 'Espetáculo lúdico e interativo com truques incríveis. As crianças participam e ficam hipnotizadas!',
    color: 'from-purple-500/20 to-purple-100',
    border: 'border-purple-200',
  },
  {
    icon: '🎮',
    title: 'Recreação & Gincanas',
    desc: 'Brincadeiras dinâmicas adaptadas à faixa etária. Energia garantida do começo ao fim da festa!',
    color: 'from-pink-500/20 to-pink-100',
    border: 'border-pink-200',
  },
  {
    icon: '🏰',
    title: 'Infláveis & Estrutura',
    desc: 'Pula-pula, tobogã, piscina de bolinhas e futebol de sabão. Equipamentos novos e higienizados.',
    color: 'from-orange-500/20 to-orange-100',
    border: 'border-orange-200',
  },
  {
    icon: '🎨',
    title: 'Pintura Facial',
    desc: 'Transformamos as crianças em seus personagens favoritos com tinta atóxica e segura.',
    color: 'from-yellow-500/20 to-yellow-100',
    border: 'border-yellow-200',
  },
  {
    icon: '🍿',
    title: 'Pipoca & Algodão Doce',
    desc: 'Delícias que completam a experiência. As crianças adoram e os pais também!',
    color: 'from-green-500/20 to-green-100',
    border: 'border-green-200',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="reveal inline-block bg-brand-orange/20 text-brand-orange font-bold text-sm px-4 py-1.5 rounded-full mb-4">
            O que incluímos
          </div>
          <h2 className="reveal text-3xl sm:text-4xl font-black text-brand-dark">
            Tudo para uma festa{' '}
            <span className="gradient-text">completa e inesquecível</span>
          </h2>
          <p className="reveal text-brand-muted mt-3 max-w-xl mx-auto text-lg">
            Um show completo que combina magia, diversão e estrutura profissional em um único pacote.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-group">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal bg-gradient-to-br ${s.color} border ${s.border} rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="font-black text-brand-dark text-xl mb-2">{s.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
