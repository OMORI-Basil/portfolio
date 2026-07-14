<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': scrolled }">
    <div class="navbar-inner">
      <!-- Left: Logo button -->
      <router-link to="/" class="logo-btn">
        <span class="logo-text">L</span>
      </router-link>

      <!-- Center: Nav links -->
      <div class="navbar-links">
        <a v-for="item in navItems" :key="item.href" href="#" @click.prevent="scrollToSection(item.href)" class="nav-link">
          {{ item.label }}
        </a>
      </div>

      <!-- Right: Actions -->
      <div class="navbar-actions">
        <a href="#" @click.prevent="scrollToSection('#contact')" class="contact-btn">联系我</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

defineEmits([])

const scrolled = ref(false)

const navItems = [
  { href: '#about', label: '个人经历' },
  { href: '#works', label: '精选项目' },
  { href: '#skills', label: '技能优势' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

function scrollToSection(selector) {
  if (route.path !== '/') {
    router.push('/')
    setTimeout(() => {
      const el = document.querySelector(selector)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  } else {
    const el = document.querySelector(selector)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 1rem;
  left: max(1rem, calc((100vw - min(var(--container-max), 100vw - 2*var(--container-padding))) / 2));
  right: max(1rem, calc((100vw - min(var(--container-max), 100vw - 2*var(--container-padding))) / 2));
  z-index: 50;
  border-radius: 36px;
  padding: 0.6rem 1.5rem;
  transition: all var(--transition-base);
  background: rgba(18, 10, 31, 0.2);
  backdrop-filter: blur(24px) saturate(1.6);
  -webkit-backdrop-filter: blur(24px) saturate(1.6);
  border: 1px solid rgba(139, 92, 246, 0.12);
  box-shadow: 0 0 60px rgba(139, 92, 246, 0.1), 0 4px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

.navbar-scrolled {
  background: rgba(18, 10, 31, 0.3);
  border-color: rgba(139, 92, 246, 0.18);
  box-shadow: 0 0 50px rgba(139, 92, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.16);
}

.navbar-inner {
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo button */
.logo-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.logo-btn:hover {
  transform: scale(1.08);
}

.logo-text {
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: 800;
  color: #6C27E0;
}

/* Nav links */
.navbar-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  font-family: var(--font-family);
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color var(--transition-fast);
  letter-spacing: 0.02em;
  position: relative;
  padding-bottom: 2px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #fff;
}

.nav-link:hover::after {
  width: 100%;
}

/* Right actions */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-btn {
  font-family: var(--font-family);
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #6C27E0, #44C9EA);
  border: 1px solid rgba(108, 39, 224, 0.4);
  border-radius: 18px;
  padding: 0.6rem 1.125rem 0.4rem;
  text-decoration: none;
  transition: all 0.2s ease;
  letter-spacing: 0.02em;
  box-shadow: 0 0 0 1px rgba(108, 39, 224, 0.15), 0 0 20px rgba(108, 39, 224, 0.15);
}

.contact-btn:hover {
  transform: translateY(-2px);
  border-color: rgba(108, 39, 224, 0.6);
  box-shadow: 0 0 0 1px rgba(108, 39, 224, 0.3), 0 0 30px rgba(108, 39, 224, 0.25);
}

@media (max-width: 768px) {
  .navbar { top: 0.5rem; left: 0.5rem; right: 0.5rem; padding: 0.5rem 0.75rem; }
  .navbar-links { gap: 0.8rem; }
  .nav-link { font-size: 0.78rem; }
}
@media (max-width: 500px) {
  .navbar { top: 0.3rem; left: 0.3rem; right: 0.3rem; padding: 0.3rem 0.4rem; border-radius: 12px; }
  .navbar-links { gap: 0.1rem; }
  .nav-link { font-size: 0.72rem; white-space: nowrap; }
  .contact-btn { font-size: 0.7rem; padding: 0.25rem 0.45rem; border-radius: 8px; flex-shrink: 0; }
  .logo-btn { width: 26px; height: 26px; flex-shrink: 0; }
  .logo-text { font-size: 0.7rem; }
}
</style>
