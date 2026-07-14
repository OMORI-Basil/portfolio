/**
 * GSAP Animation Composable
 * Provides scroll-triggered reveal animations for portfolio components.
 * Uses GSAP + ScrollTrigger when available, with IntersectionObserver fallback.
 */
import { onMounted, onUnmounted, nextTick } from 'vue'

const GSAP_SELECTORS = [
  '.gsap-hero-line', '.gsap-hero-headline', '.gsap-hero-subtitle',
  '.gsap-hero-star', '.gsap-hero-desc', '.gsap-hero-gallery',
  '.gsap-section-label', '.gsap-section-title',
  '.gsap-section-desc', '.gsap-card', '.gsap-stagger-item',
  '.gsap-reveal', '.gsap-reveal-inner', '.reveal',
]

export function useGsapAnimations() {
  let gsap = null
  let ctx = null
  let observers = []

  onMounted(async () => {
    await nextTick()

    try {
      const gsapModule = await import('gsap')
      gsap = gsapModule.default

      try {
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsap.registerPlugin(ScrollTrigger)
      } catch {
        // ScrollTrigger not available
      }

      initHeroAnimations()
      initSectionAnimations()
      initStaggerAnimations()
    } catch {
      // GSAP not available at all → use IntersectionObserver fallback
      initFallbackObserver()
    }
  })

  onUnmounted(() => {
    if (ctx) {
      try { ctx.revert() } catch {}
    }
    observers.forEach(o => o.disconnect())
    observers = []
  })

  function initHeroAnimations() {
    if (!gsap) return
    ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } })

      // Headline + subtitle stagger
      const heroLines = document.querySelectorAll(
        '.gsap-hero-headline, .gsap-hero-subtitle'
      )
      if (heroLines.length) {
        tl.from(heroLines, { y: 60, opacity: 0, stagger: 0.2 }, 0)
      }

      // Stars
      const heroStars = document.querySelectorAll('.gsap-hero-star')
      if (heroStars.length) {
        tl.from(heroStars, {
          scale: 0, opacity: 0, rotation: -180, stagger: 0.15, duration: 0.6,
          ease: 'back.out(1.7)',
        }, 0.3)
      }

      // Description texts
      const heroDesc = document.querySelectorAll('.gsap-hero-desc')
      if (heroDesc.length) {
        tl.from(heroDesc, {
          y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        }, 0.5)
      }

      // Gallery
      const heroGallery = document.querySelectorAll('.gsap-hero-gallery')
      if (heroGallery.length) {
        tl.from(heroGallery, {
          y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        }, 0.7)
      }
    })
  }

  function initSectionAnimations() {
    if (!gsap) return
    ctx.add ? ctx.add(() => {
      document.querySelectorAll('.gsap-section-label').forEach(el => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 75%' },
          y: 15, opacity: 0, duration: 0.4, ease: 'power2.out',
        })
      })
      document.querySelectorAll('.gsap-section-title').forEach(el => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 75%' },
          y: 25, opacity: 0, duration: 0.5, ease: 'power2.out',
        })
      })
      document.querySelectorAll('.gsap-section-desc').forEach(el => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 75%' },
          y: 20, opacity: 0, duration: 0.4, ease: 'power2.out',
        })
      })
    }) : null
  }

  function initStaggerAnimations() {
    if (!gsap) return
    ctx.add ? ctx.add(() => {
      document.querySelectorAll('.gsap-card').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 80%' },
          y: 25, opacity: 0, duration: 0.4, delay: i * 0.05, ease: 'power2.out',
        })
      })
      document.querySelectorAll('.gsap-stagger-item').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 80%' },
          y: 20, opacity: 0, duration: 0.35, delay: i * 0.04, ease: 'power2.out',
        })
      })
      document.querySelectorAll('.gsap-reveal, .gsap-reveal-inner').forEach(el => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 75%' },
          y: 25, opacity: 0, duration: 0.5, ease: 'power2.out',
        })
      })
    }) : null
  }

  function initFallbackObserver() {
    const all = document.querySelectorAll(GSAP_SELECTORS.join(','))
    if (!all.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
    )
    all.forEach(el => observer.observe(el))
    observers.push(observer)
  }
}
