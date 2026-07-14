<template>
  <section class="circular-gallery" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <div class="gallery-scene" ref="sceneRef">
      <div class="gallery-track" ref="trackRef" :style="{ transform: `translate3d(${currentPos}px, 0, 0)` }">
        <div
          v-for="(item, index) in duplicatedItems"
          :key="index"
          class="gallery-card"
          @click="goTo(item.link)"
        >
          <div class="card-media" :style="{ backgroundImage: item.image, backgroundPosition: item.position || 'center' }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo(path) {
  if (path) router.push(path)
}

const props = defineProps({
  scrollSpeed: { type: Number, default: 1.2 },
})

const defaultItems = [
  { image: 'url(/images/卡通沙漏.png)', position: 'center 45%', link: '/products-3d' },
  { image: 'url(/images/化妆品1_逆光香料.png)', position: 'center 40%', link: '/products-3d' },
  { image: 'url(/images/场景_飞船坠毁.png)', link: '/scenes-3d' },
  { image: 'url(/images/口红.png)', position: 'center 33%', link: '/products-3d' },
  { image: 'url(/images/沙发.png)', link: '/products-3d' },
  { image: 'url(/images/化妆品2_光影.png)', position: 'center 75%', link: '/products-3d' },
  { image: 'url(/images/卡通风格渲染_电灯泡.png)', position: 'center 10%', link: '/products-3d' },
  { image: 'url(/images/奶瓶场景.png)', link: '/products-3d' },
  { image: 'url(/images/旋转宇宙.png)', link: '/scenes-3d' },
  { image: 'url(/images/石头戒指.png)', position: 'center 85%', link: '/products-3d' },
  { image: 'url(/images/欧莱雅小蜜罐面霜.png)', position: 'center 68%', link: '/products-3d' },
  { image: 'url(/images/化妆品3_苔藓光影.png)', link: '/products-3d' },
  { image: 'url(/images/场景_火车车厢.png)', link: '/scenes-3d' },
  { image: 'url(/images/卡面设计.png)', link: '/graphic-design' },
  { image: 'url(/images/古建PPT1.jpg)', link: '/graphic-design' },
]

const duplicatedItems = computed(() => [...defaultItems, ...defaultItems, ...defaultItems, ...defaultItems])

const sceneRef = ref(null)
const trackRef = ref(null)
const currentPos = ref(0)
const hovered = ref(false)
let currentSpeed = props.scrollSpeed
let animId = null
let lastTime = 0

onMounted(() => {
  const scene = sceneRef.value
  const sceneWidth = scene ? scene.offsetWidth : window.innerWidth
  const cardWidth = 200 + 16
  const singleWidth = cardWidth * defaultItems.length
  currentPos.value = -(singleWidth * 1.5 - sceneWidth * 0.3)

  function animate(time) {
    if (!lastTime) lastTime = time
    const dt = Math.min((time - lastTime) / 16, 3)
    lastTime = time

    // Ease speed toward target (lerp with easing)
    const targetSpeed = hovered.value ? 0.3 : props.scrollSpeed
    currentSpeed += (targetSpeed - currentSpeed) * 0.05 * dt

    currentPos.value -= currentSpeed * dt

    const totalWidth = cardWidth * defaultItems.length
    if (currentPos.value < -totalWidth * 2) {
      currentPos.value += totalWidth
    }

    animId = requestAnimationFrame(animate)
  }

  animId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
})
</script>

<style scoped>
.circular-gallery {
  width: 100vw;
  overflow: hidden;
  padding: 2rem 0 0;
  margin-left: calc(-1 * var(--container-padding));
  padding-right: 0;
}

.gallery-scene {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.gallery-track {
  display: flex;
  gap: 1rem;
  will-change: transform;
}

.gallery-card {
  flex-shrink: 0;
  width: 200px;
  height: 120px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease;
}

.gallery-card:hover {
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.card-media {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

@media (max-width: 768px) {
  .gallery-card {
    width: 160px;
    height: 100px;
  }
  .gallery-track {
    gap: 0.75rem;
  }
}
</style>
