<template>
  <div class="lamp-bg-wrapper" :style="wrapperStyle">
    <LampEffect
      class="lamp-bg"
      :delay="delay"
      :duration="duration"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import LampEffect from './LampEffect.vue'

const props = defineProps({
  delay: { type: Number, default: 0.5 },
  duration: { type: Number, default: 0.8 },
})

const scrollY = ref(0)

const wrapperStyle = computed(() => ({
  transform: `translateY(${-scrollY.value * 0.5}px)`,
  opacity: Math.max(0, 1 - scrollY.value / 600),
}))

function handleScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.lamp-bg-wrapper {
  z-index: 0;
  pointer-events: none;
  will-change: transform, opacity;
  position: fixed;
  inset: 0;
  overflow: hidden;
}

.lamp-bg {
  z-index: 0;
  position: absolute !important;
  inset: 0 !important;
}
</style>
