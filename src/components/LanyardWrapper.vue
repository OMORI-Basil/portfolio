<template>
  <div class="lanyard-wrapper">
    <canvas ref="canvasRef" class="lanyard-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  position: { type: Array, default: () => [0, 4, 15] },
  gravity: { type: Array, default: () => [0, -40, 0] },
  fov: { type: Number, default: 20 },
  frontImage: { type: String, default: '/images/lanyard-front.png' },
  backImage: { type: String, default: '/images/lanyard-back.png' },
  imageFit: { type: String, default: 'contain' },
})

const canvasRef = ref(null)
let renderer = null
let scene = null
let camera = null
let animationId = null

onMounted(async () => {
  try {
    const THREE = await import('three')
    const canvas = canvasRef.value
    if (!canvas) return

    // Scene setup
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x120a1f)

    // Camera
    const aspect = canvas.clientWidth / canvas.clientHeight
    camera = new THREE.PerspectiveCamera(props.fov, aspect, 0.1, 100)
    camera.position.set(...props.position)
    camera.lookAt(0, 0, 0)

    // Renderer
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2)
    dirLight.position.set(5, 10, 7)
    scene.add(dirLight)

    const backLight = new THREE.DirectionalLight(0x8b5cf6, 0.4)
    backLight.position.set(-5, 0, -5)
    scene.add(backLight)

    // Create a simple card group
    const group = new THREE.Group()

    // Card body
    const cardGeo = new THREE.BoxGeometry(3.2, 4.8, 0.08)
    const cardMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e1437,
      roughness: 0.3,
      metalness: 0.1,
      clearcoat: 0.2,
      side: THREE.DoubleSide,
    })
    const card = new THREE.Mesh(cardGeo, cardMat)
    group.add(card)

    // Card border glow
    const edgeGeo = new THREE.EdgesGeometry(cardGeo)
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.3,
    })
    const edges = new THREE.LineSegments(edgeGeo, edgeMat)
    group.add(edges)

    // Small decorative elements
    for (let i = 0; i < 20; i++) {
      const starGeo = new THREE.SphereGeometry(0.02, 4, 4)
      const starMat = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.2 + Math.random() * 0.5,
      })
      const star = new THREE.Mesh(starGeo, starMat)
      star.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 2 - 1
      )
      scene.add(star)
    }

    group.position.y = 0.5
    scene.add(group)

    // Animation
    let time = 0
    function animate() {
      time += 0.008
      group.rotation.x = Math.sin(time * 0.3) * 0.08
      group.rotation.y = Math.sin(time * 0.2) * 0.15
      group.position.y = 0.5 + Math.sin(time * 0.5) * 0.3

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }
    animate()

    // Resize handler
    function handleResize() {
      if (!canvas || !renderer || !camera) return
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
    }
    window.addEventListener('resize', handleResize)

    onUnmounted(() => {
      if (animationId) cancelAnimationFrame(animationId)
      if (renderer) renderer.dispose()
      window.removeEventListener('resize', handleResize)
    })
  } catch (e) {
    console.error('Three.js failed to load:', e)
  }
})
</script>

<style scoped>
.lanyard-wrapper {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transform-origin: center;
  pointer-events: auto;
}

.lanyard-canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
