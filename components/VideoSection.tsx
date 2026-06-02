export default function VideoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="reveal inline-block bg-brand-purple/20 text-brand-purple font-bold text-sm px-4 py-1.5 rounded-full mb-4">
            Veja ao vivo
          </div>
          <h2 className="reveal text-3xl sm:text-4xl font-black text-brand-dark">
            Antes de contratar,{' '}
            <span className="gradient-text">assista ao show</span>
          </h2>
          <p className="reveal text-brand-muted mt-3 text-lg max-w-xl mx-auto">
            Nada de promessas vazias: veja com seus próprios olhos como é a energia da Palhaça Lulu em uma festa de verdade.
          </p>
        </div>

        <div className="reveal relative w-full rounded-3xl overflow-hidden shadow-2xl ring-4 ring-brand-pink/20" style={{ aspectRatio: '16/9' }}>
          <iframe
            src="https://www.youtube.com/embed/JBVw8Rc6LPA?rel=0&modestbranding=1&color=white"
            title="Show da Palhaça Lulu"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <p className="reveal text-center text-brand-muted text-sm mt-5">
          ▶️ Assista e veja por que as crianças não param de sorrir
        </p>
      </div>
    </section>
  )
}
