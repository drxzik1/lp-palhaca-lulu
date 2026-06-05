'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    dataLayer?: Record<string, unknown>[]
  }
}

function pushDataLayer(event: string, params?: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

function trackMeta(event: string, params?: Record<string, unknown>) {
  if (typeof window.fbq === 'function') {
    window.fbq('track', event, params)
  }
}

export default function Analytics() {
  useEffect(() => {
    // --- Clique no WhatsApp (todas as âncoras wa.me) ---
    const handleWAClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (target?.href?.includes('wa.me')) {
        pushDataLayer('whatsapp_click', { link_url: target.href })
        trackMeta('Contact')
      }
    }
    document.addEventListener('click', handleWAClick)

    // --- Scroll depth (25 / 50 / 75 / 90%) ---
    const fired = new Set<number>()
    const thresholds = [25, 50, 75, 90]

    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      const pct = Math.round((scrolled / total) * 100)

      thresholds.forEach((t) => {
        if (pct >= t && !fired.has(t)) {
          fired.add(t)
          pushDataLayer('scroll_depth', { scroll_threshold: t })
          if (t === 90) trackMeta('ViewContent', { scroll: '90%' })
        }
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('click', handleWAClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
