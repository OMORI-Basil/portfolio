<template>
  <div :class="['lamp-effect', $props.class]">
    <!-- Left Conic Gradient -->
    <div
      class="animate-conic-gradient absolute inset-auto right-1/2 h-56 w-60 overflow-visible from-purple-500 via-transparent to-transparent text-white opacity-50"
      style="background-image: conic-gradient(var(--conic-position), var(--tw-gradient-stops)); --conic-position: from 88deg at center top;"
    >
      <div class="absolute bottom-0 left-0 z-20 h-40 w-full bg-[#120a1f] [mask-image:linear-gradient(to_top,white,transparent)]"></div>
      <div class="absolute bottom-0 left-0 z-20 h-full w-40 bg-[#120a1f] [mask-image:linear-gradient(to_right,white,transparent)]"></div>
    </div>

    <!-- Right Conic Gradient -->
    <div
      class="animate-conic-gradient absolute inset-auto left-1/2 h-56 w-60 from-transparent via-transparent to-purple-500 text-white opacity-50"
      style="background-image: conic-gradient(var(--conic-position), var(--tw-gradient-stops)); --conic-position: from 272deg at center top;"
    >
      <div class="absolute bottom-0 right-0 z-20 h-full w-40 bg-[#120a1f] [mask-image:linear-gradient(to_left,white,transparent)]"></div>
      <div class="absolute bottom-0 right-0 z-20 h-40 w-full bg-[#120a1f] [mask-image:linear-gradient(to_top,white,transparent)]"></div>
    </div>

    <!-- Glow layers -->
    <div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#120a1f] blur-2xl"></div>
    <div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
    <div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-3xl"></div>

    <!-- Spot light -->
    <div class="animate-spotlight absolute inset-auto z-30 h-36 w-32 -translate-y-24 rounded-full bg-purple-400 blur-2xl"></div>

    <!-- Glowing line -->
    <div class="animate-glowing-line absolute inset-auto z-50 h-0.5 w-60 -translate-y-28 bg-purple-400"></div>

    <!-- Bottom cover -->
    <div class="absolute inset-auto z-50 h-64 w-full translate-y-[-10rem] bg-[#120a1f]"></div>
  </div>
</template>

<script setup>
defineProps({
  delay: { type: Number, default: 0.5 },
  duration: { type: Number, default: 0.8 },
  class: { type: [String, Object, Array], default: '' },
})
</script>

<style scoped>
.lamp-effect {
  z-index: 0;
  pointer-events: none;
  background-color: #120a1f;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 160px;
  display: flex;
  position: fixed;
  inset: 0;
  overflow: hidden;
}

.lamp-effect :deep(.bg-gradient-conic) {
  background-image: conic-gradient(var(--conic-position), var(--tw-gradient-stops));
}

.animate-spotlight {
  animation: spotlight-anim ease-in-out var(--anim-duration, 0.8s) forwards;
  animation-delay: var(--anim-delay, 0.5s);
}

.animate-glowing-line {
  animation: glowing-line-anim ease-in-out var(--anim-duration, 0.8s) forwards;
  animation-delay: var(--anim-delay, 0.5s);
}

.animate-conic-gradient {
  animation: conic-gradient-anim ease-in-out var(--anim-duration, 0.8s) forwards;
  animation-delay: var(--anim-delay, 0.5s);
}

@keyframes spotlight-anim {
  0% { width: 8rem; }
  to { width: 16rem; }
}

@keyframes glowing-line-anim {
  0% { width: 15rem; }
  to { width: 30rem; }
}

@keyframes conic-gradient-anim {
  0% { opacity: 0.5; width: 15rem; }
  to { opacity: 1; width: 30rem; }
}

@media (prefers-reduced-motion: reduce) {
  .animate-spotlight,
  .animate-glowing-line,
  .animate-conic-gradient {
    opacity: 1;
    animation: none;
  }
}
</style>
