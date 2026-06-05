'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Quanto custa o show da Palhaça Lulu?',
    a: 'Os valores variam conforme o pacote, data e distância. Para garantir o melhor custo-benefício para a sua festa, solicite uma proposta personalizada pelo WhatsApp: é rápido, gratuito e sem nenhum compromisso!',
  },
  {
    q: 'E se eu precisar cancelar ou remarcar a data?',
    a: 'Sabemos que imprevistos acontecem! Entre em contato pelo WhatsApp assim que possível e a Lulu vai buscar a melhor solução para você, seja remarcação de data ou outra alternativa. O atendimento é sempre humano e sem burocracia.',
  },
  {
    q: 'Quanto tempo dura o show da Palhaça Lulu?',
    a: 'O show tem duração média de 60 a 90 minutos, podendo variar conforme o pacote escolhido. A Lulu adapta a programação ao ritmo da festa e das crianças.',
  },
  {
    q: 'Qual é a faixa etária atendida?',
    a: 'A Palhaça Lulu atende crianças de 2 a 12 anos. Cada atividade é adaptada para a faixa etária do grupo, garantindo diversão para todos.',
  },
  {
    q: 'Quais cidades são atendidas?',
    a: 'Atendemos toda a região Oeste do Paraná. Fale pelo WhatsApp para confirmar disponibilidade na sua cidade.',
  },
  {
    q: 'Com quanto tempo de antecedência devo contratar?',
    a: 'Recomendamos contratar com pelo menos 15 dias de antecedência para garantir a data. Em períodos de alta demanda (férias, final de ano), quanto antes melhor!',
  },
  {
    q: 'O que está incluído no pacote?',
    a: 'O pacote básico inclui o show de mágica e recreação. Adicionais como infláveis, pintura facial, pipoca e algodão doce podem ser contratados à parte. Peça uma proposta personalizada!',
  },
  {
    q: 'A Lulu tem equipamentos próprios?',
    a: 'Sim! Todos os equipamentos (brinquedos infláveis, fantasias e materiais de mágica) são próprios, novos e higienizados antes de cada evento.',
  },
  {
    q: 'Onde é realizado o show? Precisa de espaço mínimo?',
    a: 'Atendemos em salões de festa, casas, espaços ao ar livre, escolas, empresas e igrejas. O espaço necessário depende do pacote escolhido; a Lulu avalia com você na hora do orçamento.',
  },
  {
    q: 'Como faço para reservar a data?',
    a: 'É simples! Mande uma mensagem no WhatsApp com a data e localização da festa. A Lulu entra em contato rapidamente com disponibilidade e proposta.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="reveal inline-block bg-brand-pink/20 text-brand-magenta font-bold text-sm px-4 py-1.5 rounded-full mb-4">
            Dúvidas frequentes
          </div>
          <h2 className="reveal text-3xl sm:text-4xl font-black text-brand-dark">
            Tudo que você precisa{' '}
            <span className="gradient-text">saber antes de contratar</span>
          </h2>
        </div>

        <div className="reveal space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-brand-pink/50 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-bold text-brand-dark hover:bg-brand-cream transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-magenta font-black text-lg leading-none transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-brand-muted text-sm leading-relaxed border-t border-gray-100">
                  <p className="pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
