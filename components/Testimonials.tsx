const reviews = [
  {
    name: 'Mariana Silva',
    avatar: 'MS',
    color: 'bg-pink-400',
    date: '2 semanas atrás',
    text: 'A Lulu foi o ponto alto da festa do meu filho! Super atenciosa, as crianças ficaram hipnotizadas durante todo o show. Profissionalismo impecável!',
  },
  {
    name: 'Ricardo Oliveira',
    avatar: 'RO',
    color: 'bg-blue-400',
    date: '1 mês atrás',
    text: 'Equipamentos de primeira, tudo muito limpo e seguro. As crianças amaram o pula-pula e o futebol de sabão. Super recomendo!',
  },
  {
    name: 'Ana Paula',
    avatar: 'AP',
    color: 'bg-purple-400',
    date: '3 meses atrás',
    text: 'Melhor contratação que fiz. Pela primeira vez consegui aproveitar o aniversário do meu filho sem me preocupar. A Lulu cuidou de tudo!',
  },
  {
    name: 'Fernanda Costa',
    avatar: 'FC',
    color: 'bg-orange-400',
    date: '2 meses atrás',
    text: 'Trabalho impecável. A equipe é muito carinhosa com as crianças. Vai além do show: transmite amor e cuidado em cada momento.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-amber-400" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

/* Google G logo como SVG inline — sem dependência externa */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full text-sm font-bold text-gray-700 mb-4 shadow-sm">
            <GoogleIcon className="w-4 h-4" />
            Avaliações verificadas no Google
          </div>
          <h2 className="reveal text-3xl sm:text-4xl font-black text-brand-dark">
            O que as famílias dizem{' '}
            <span className="gradient-text">sobre a Lulu</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal-group">
          {reviews.map((r) => (
            <div key={r.name} className="reveal bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-full ${r.color} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <p className="font-black text-brand-dark">{r.name}</p>
                  <p className="text-xs text-brand-muted">{r.date}</p>
                </div>
                <GoogleIcon className="w-5 h-5 ml-auto flex-shrink-0" />
              </div>
              <Stars />
              <p className="mt-3 text-brand-muted text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Screenshot testimonials */}
        <div className="reveal mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            'https://i.postimg.cc/PfL2SKKg/Untitled-design-(2).jpg',
            'https://i.postimg.cc/X7jXV1h9/2.jpg',
            'https://i.postimg.cc/SNSjy15W/3.jpg',
          ].map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src={src} alt={`Depoimento ${i + 1}`} className="w-full h-auto" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
