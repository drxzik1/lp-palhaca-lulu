import Image from 'next/image'

const photos = [
  { src: '/brinq-1.jpg', alt: 'Palhaça Lulu realizando show', pos: 'object-center' },
  { src: '/brinq-2.jpg', alt: 'Show infantil com crianças', pos: 'object-top' },
  { src: '/brinq-3.jpg', alt: 'Inflável externo', pos: 'object-center' },
  { src: '/brinq-4.jpg', alt: 'Inflável Stitch com piscina de bolinhas', pos: 'object-center' },
  { src: '/brinq-5.jpg', alt: 'Tobogã colorido e máquina de pipoca', pos: 'object-center' },
  { src: '/brinq-6.png', alt: 'Estrutura inflável da Palhaça Lulu',  pos: 'object-center' },
]

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="reveal inline-block bg-brand-yellow/30 text-amber-700 font-bold text-sm px-4 py-1.5 rounded-full mb-4">
            Estrutura real
          </div>
          <h2 className="reveal text-3xl sm:text-4xl font-black text-brand-dark">
            Veja a estrutura que{' '}
            <span className="gradient-text">levamos para sua festa</span>
          </h2>
        </div>

        {/* Grid: linha 1 = 3 colunas | linha 2 = 2 colunas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 reveal-group">
          {/* Linha 1 — 3 fotos na mesma altura */}
          {photos.slice(0, 3).map((p) => (
            <div
              key={p.src}
              className="reveal relative h-52 sm:h-64 overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className={`object-cover ${p.pos}`}
                sizes="(max-width:640px) 50vw, 33vw"
                quality={90}
              />
            </div>
          ))}

          {/* Linha 2 — 2 fotos mais largas, centralizadas */}
          {photos.slice(3).map((p) => (
            <div
              key={p.src}
              className="reveal relative h-52 sm:h-64 overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className={`object-cover ${p.pos}`}
                sizes="(max-width:640px) 50vw, 50vw"
                quality={90}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
