<template>
  <div class="app-container" style="background: transparent; min-height: 100vh; position: relative;">
    <LampBg :delay="0.3" :duration="1.2" class="lamp-home" />

    <!-- Lanyard 3D slot -->
    <div v-if="showLanyard" class="lanyard-slot">
      <div class="lanyard-drop" :class="{ dropped: lanyardDropped }">
        <LanyardWrapper
          :position="[0, 4, 15]"
          :gravity="[0, -40, 0]"
          :fov="20"
          front-image="/images/lanyard-front.png"
          back-image="/images/lanyard-back.png"
          image-fit="contain"
        />
      </div>
    </div>

    <Navbar @toggle-lanyard="toggleLanyard" />

    <main style="z-index: 1; position: relative;">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LampBg from './components/LampBg.vue'
import Navbar from './components/Navbar.vue'
import LanyardWrapper from './components/LanyardWrapper.vue'

const showLanyard = ref(false)
const lanyardDropped = ref(false)

function toggleLanyard() {
  showLanyard.value = !showLanyard.value
  if (showLanyard.value) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        lanyardDropped.value = true
      })
    })
  } else {
    lanyardDropped.value = false
  }
}
</script>

<style scoped>
.lanyard-slot {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  pointer-events: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.lanyard-drop {
  width: 100%;
  height: 100%;
  transform: translateY(-100vh);
  transition: transform 1.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
}

.lanyard-drop.dropped {
  transform: translateY(0);
}

.lanyard-loading {
  z-index: 100;
  color: #fff;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 1024px) {
  .lanyard-slot {
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .lanyard-drop {
    transform: translateY(-100vh);
  }
  .lanyard-drop.dropped {
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .lanyard-slot {
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .lanyard-drop {
    transform: translateY(-100vh);
  }
  .lanyard-drop.dropped {
    transform: translateY(0);
  }
}
</style>
