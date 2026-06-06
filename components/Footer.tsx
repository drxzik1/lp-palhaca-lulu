import Image from 'next/image'

const WA = 'https://wa.me/5546988355732'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <Image
              src="/logo-lulu.png"
              alt="Palhaça Lulu"
              width={100}
              height={50}
              className="object-contain mb-3"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Mais do que entretenimento: uma experiência inesquecível para toda a família.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-brand-yellow mb-3">Serviços</h4>
            <ul className="space-y-1.5 text-white/70 text-sm">
              <li>🎩 Show de Mágica</li>
              <li>🎮 Recreação & Gincanas</li>
              <li>🏰 Infláveis</li>
              <li>🎨 Pintura Facial</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-brand-yellow mb-3">Contato</h4>
            <div className="space-y-2 text-sm">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <span>💬</span>
                <span>(46) 98835-5732</span>
              </a>
              <a
                href="https://www.instagram.com/palhaca_luluoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <span>📸</span>
                <span>@palhaca_luluoficial</span>
              </a>
              <a
                href="https://www.youtube.com/@PALHACALULUANIMACOES"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <span>▶️</span>
                <span>@PALHACALULUANIMACOES</span>
              </a>
              <p className="flex items-center gap-2 text-white/70">
                <span>📍</span>
                <span>Sudoeste e Oeste do Paraná</span>
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-white/40 text-xs mt-6">
          © {new Date().getFullYear()} Palhaça Lulu Animações. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
