<template>
  <section class="hero-section" id="hero">
    <!-- Radial purple glow -->
    <div class="hero-glow"></div>

    <div class="hero-inner">
      <!-- Title line 1: Purple uppercase + stars -->
      <div class="title-row gsap-hero-headline">
        <h1 class="title-primary">{{ titleLine1 }}</h1>
        <div class="title-stars">
          <svg class="star star-lg" viewBox="0 0 24 24" fill="#8b5cf6">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
          <svg class="star star-sm" viewBox="0 0 24 24" fill="#a78bfa">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>
      </div>

      <!-- Title line 2: White uppercase with glitch -->
      <h2 class="title-secondary gsap-hero-subtitle">
        <GlitchText :text="titleLine2" :speed="0.4" />
      </h2>

      <!-- Decorative line + italic text -->
      <div class="decorative-row gsap-hero-desc">
        <span class="decorative-label">{{ decorativeLabel }}</span>
      </div>

      <!-- Description text -->
      <p class="hero-desc gsap-hero-desc">{{ description1 }}</p>
      <p class="hero-desc hero-desc-sub gsap-hero-desc">{{ description2 }}</p>

      <!-- Circular Gallery -->
      <CircularGallery class="gsap-hero-gallery" />
    </div>
  </section>
</template>

<script setup>
import GlitchText from './GlitchText.vue'
import CircularGallery from './CircularGallery.vue'

const titleLine1 = '三维设计'
const titleLine2 = '视觉表达'
const decorativeLabel = 'C4D · OC RENDER · AI DESIGN'
const description1 = '专注于三维建模与电商视觉设计'
const description2 = '将创意与技术融合，打造具有商业价值的视觉作品'
</script>
<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem var(--container-padding) 3rem;
  position: relative;
}

/* Purple glow */
.hero-glow {
  position: absolute;
  top: 50%;
  left: 40%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  overflow: hidden;
}

.hero-inner {
  max-width: var(--container-max);
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Title row */
.title-row {
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
}

.title-primary {
  font-family: var(--font-family);
  font-size: clamp(2.2rem, 6.5vw, 5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--color-accent);
  text-transform: uppercase;
  margin: 0 0 0 -0.08em;
}

.title-stars {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.15rem;
}

.star {
  flex-shrink: 0;
}

.star-lg {
  width: 20px;
  height: 20px;
}

.star-sm {
  width: 12px;
  height: 12px;
}

/* Secondary title */
.title-secondary {
  font-family: var(--font-family);
  font-size: clamp(1.8rem, 5.5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--color-text);
  text-transform: none;
  margin: 0 0 0.5rem;
}

/* Decorative line */
.decorative-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.decorative-label {
  font-family: var(--font-family);
  font-size: 0.8125rem;
  font-weight: 400;
  font-style: italic;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.05em;
}

/* Description */
.hero-desc {
  font-family: var(--font-family);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  max-width: 560px;
}

.hero-desc-sub {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 0.2rem;
  margin-bottom: 2.5rem;
}

@media (max-width: 768px) {
  .hero-section { padding: 4rem var(--container-padding) 1.5rem; }
  .title-primary { font-size: clamp(3.5rem, 13vw, 5rem); }
  .title-secondary { font-size: clamp(2.5rem, 11vw, 4rem); }
  .star-lg { width: 24px; height: 24px; }
  .star-sm { width: 15px; height: 15px; }
  .hero-desc { font-size: 0.9rem; }
  .hero-desc-sub { margin-bottom: 1rem; }
}

@media (max-width: 480px) {
  .hero-section { padding: 4.5rem var(--container-padding) 1.5rem; }
  .title-primary { font-size: clamp(2.5rem, 12vw, 3.5rem); }
  .title-secondary { font-size: clamp(2rem, 10vw, 3rem); }
  .star-lg { width: 16px; height: 16px; }
  .star-sm { width: 11px; height: 11px; }
  .title-stars { gap: 0.15rem; margin-top: 0; }
  .decorative-label { font-size: 0.7rem; }
  .hero-desc { font-size: 0.8rem; }
  .hero-desc-sub { font-size: 0.75rem; margin-bottom: 1.5rem; }
}
</style>
