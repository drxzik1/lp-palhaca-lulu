const stats = [
  { icon: '🎪', number: '200+',   label: 'Festas Realizadas',       sub: 'famílias atendidas' },
  { icon: '⭐', number: '5.0',    label: 'Avaliação no Google',      sub: 'avaliações verificadas' },
  { icon: '😊', number: '100%',   label: 'Satisfação Garantida',     sub: 'em todos os eventos' },
  { icon: '📍', number: 'Região', label: 'Oeste do Paraná',           sub: 'atendimento presencial' },
]

export default function TrustBar() {
  return (
    <section className="bg-white shadow-sm py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 reveal-group">
          {stats.map((s) => (
            <div key={s.label} className="reveal flex flex-col items-center text-center gap-0.5">
              <span className="text-3xl">{s.icon}</span>
              <span className="text-3xl font-black text-brand-magenta leading-tight">{s.number}</span>
              <span className="text-sm font-bold text-brand-dark">{s.label}</span>
              <span className="text-xs text-brand-muted">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
