<template>
  <span
    :class="['glitch', { 'enable-on-hover': enableOnHover }, className]"
    :style="glitchStyle"
    :data-text="text"
  >
    {{ text }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, default: '' },
  speed: { type: Number, default: 0.5 },
  enableShadows: { type: Boolean, default: true },
  enableOnHover: { type: Boolean, default: false },
  className: { type: String, default: '' },
})

const glitchStyle = computed(() => ({
  '--after-duration': `${props.speed * 3}s`,
  '--before-duration': `${props.speed * 2}s`,
  '--after-shadow': props.enableShadows ? '-2px 0 rgba(139, 92, 246, 0.7)' : 'none',
  '--before-shadow': props.enableShadows ? '2px 0 rgba(59, 130, 246, 0.45)' : 'none',
}))
</script>

<style scoped>
.glitch {
  position: relative;
  display: inline-block;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.glitch::before {
  text-shadow: var(--before-shadow);
  clip-path: inset(0 0 85% 0);
  animation: glitch-scan-before var(--before-duration) ease-in-out infinite alternate;
}

.glitch::after {
  text-shadow: var(--after-shadow);
  clip-path: inset(85% 0 0 0);
  animation: glitch-scan-after var(--after-duration) ease-in-out infinite alternate;
}

@keyframes glitch-scan-before {
  0% { clip-path: inset(20% 0 60% 0); transform: translate(0); }
  5% { clip-path: inset(40% 0 40% 0); transform: translate(-2px, 1px); }
  10% { clip-path: inset(60% 0 20% 0); transform: translate(2px, -1px); }
  15% { clip-path: inset(10% 0 80% 0); transform: translate(-1px, 0); }
  20% { clip-path: inset(50% 0 30% 0); transform: translate(1px, 1px); }
  25%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
}

@keyframes glitch-scan-after {
  0% { clip-path: inset(60% 0 20% 0); transform: translate(0); }
  5% { clip-path: inset(30% 0 50% 0); transform: translate(2px, -1px); }
  10% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 1px); }
  15% { clip-path: inset(80% 0 5% 0); transform: translate(1px, 0); }
  20% { clip-path: inset(20% 0 60% 0); transform: translate(-1px, -1px); }
  25%, 100% { clip-path: inset(100% 0 0 0); transform: translate(0); }
}

.enable-on-hover::before,
.enable-on-hover::after {
  animation: none;
}

.enable-on-hover:hover::before {
  animation: glitch-scan-before var(--before-duration) ease-in-out infinite alternate;
}

.enable-on-hover:hover::after {
  animation: glitch-scan-after var(--after-duration) ease-in-out infinite alternate;
}
</style>
