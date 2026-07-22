<template>
  <section class="detail-section">
    <div class="container">
      <a href="#" @click.prevent="goBack" class="back-btn">← 返回</a>
      <div class="section-header">
        <p class="section-label">产品设计</p>
        <h2 class="section-title">产品渲染</h2>
        <p class="section-desc">C4D 建模与 OC 渲染产品静帧作品</p>
      </div>
      <div class="sub-section">
        <h3 class="sub-title">横版</h3>
        <div class="grid-row">
          <div v-for="(img, i) in landscape" :key="'l'+i" class="img-wrap">
            <div class="img-box land" :style="{ backgroundImage: img.url, backgroundPosition: img.pos || 'center' }" @click="openViewer(img.url)"></div>
            <p class="img-label">{{ img.name }}</p>
          </div>
        </div>
      </div>
      <div class="sub-section">
        <h3 class="sub-title">竖版</h3>
        <div class="grid-row portrait-row">
          <div v-for="(img, i) in portrait" :key="'p'+i" class="img-wrap">
            <div class="img-box port" :style="{ backgroundImage: img.url, backgroundPosition: img.pos || 'center' }" @click="openViewer(img.url)"></div>
            <p class="img-label">{{ img.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <div class="bottom-nav">
        <a href="#" @click.prevent="goTo(prevPage.path)" class="nav-btn">← 上一区：{{ prevPage.name }}</a>
        <span class="credit-line">以上作品采用<br/>C4D + OC 渲染器 | Photoshop</span>
        <a href="#" @click.prevent="goTo(nextPage.path)" class="nav-btn">下一区：{{ nextPage.name }} →</a>
      </div>
    </div>
    <!-- Image Viewer -->
    <div v-if="viewerImg" class="viewer-overlay" @click.self="closeViewer">
      <span class="viewer-close" @click="closeViewer">&times;</span>
      <div class="viewer-content" :style="{ backgroundImage: viewerImg }"></div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() { router.push('/') }
const prevPage = { name: '后期合成', path: '/post-production' }
const nextPage = { name: '三维场景', path: '/scenes-3d' }
function goTo(path) { router.push(path) }
const viewerImg = ref(null)
function openViewer(url) { viewerImg.value = url }
function closeViewer() { viewerImg.value = null }
const landscape = [
  { url: 'url(/images/欧莱雅小蜜罐面霜.png)', name: '欧莱雅小蜜罐面霜' },
  { url: 'url(/images/沙发.png)', name: '家居场景渲染' },
  { url: 'url(/images/卡通风格渲染_电灯泡.png)', name: '卡通风格渲染' },
]
const portrait = [
  { url: 'url(/images/化妆品2_光影.png)', name: '化妆品_场景光影渲染' },
  { url: 'url(/images/奶瓶场景.png)', name: '电商主图风格产品渲染' },
  { url: 'url(/images/化妆品1_逆光香料.png)', name: '化妆品_氛围感渲染' },
  { url: 'url(/images/口红.png)', name: '氛围感口红海报' },
  { url: 'url(/images/卡通沙漏.png)', name: '卡通风格渲染' },
  { url: 'url(/images/化妆品3_苔藓光影.png)', name: '化妆品_自然风格渲染' },
  { url: 'url(/images/石头戒指.png)', name: '奢侈品_自然风格渲染' },
  { url: 'url(/images/灭蚊灯.png)', name: '科技风格渲染' },
]
</script>
<style scoped>
.detail-section { min-height: 100vh; padding: 8rem var(--container-padding) 4rem; background: #120a1f; }
.container { max-width: var(--container-max); margin: 0 auto; }
.back-btn { font-family: var(--font-family); font-size: 0.8125rem; color: var(--color-text-muted); text-decoration: none; display: inline-flex; align-items: center; justify-content: center; padding: 0.4rem 1.2rem; border: 1px solid rgba(255,255,255,0.15); border-radius: 999px; margin-bottom: 2rem; transition: all 0.2s; gap: 0.3rem; }
.back-btn:hover { border-color: var(--color-accent); color: var(--color-accent); }
.section-header { margin-bottom: 3rem; }
.section-label { font-family: var(--font-family); font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; color: var(--color-accent); text-transform: uppercase; margin-bottom: 0.75rem; }
.section-title { font-family: var(--font-family); font-size: clamp(2.5rem,6vw,4rem); font-weight: 900; letter-spacing: -0.04em; color: var(--color-text); margin: 0; line-height: 1; }
.section-desc { font-family: var(--font-family); font-size: 0.8125rem; color: var(--color-text-muted); margin: 0.75rem 0 0; }
.sub-section { margin-bottom: 3rem; }
.sub-title { font-family: var(--font-family); font-size: 0.9375rem; font-weight: 700; letter-spacing: 0.05em; color: var(--color-text); text-transform: uppercase; margin-bottom: 1rem; }
.grid-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px,1fr)); gap: 1.5rem; }
.portrait-row { grid-template-columns: repeat(auto-fill, minmax(200px,1fr)); }
.img-wrap { display: flex; flex-direction: column; gap: 0.4rem; }
.img-box { background-size: contain; background-repeat: no-repeat; background-position: center; background-color: #120a1f; border-radius: 0; aspect-ratio: 16/9; transition: transform 0.4s ease, box-shadow 0.4s ease; cursor: pointer; }
.img-box.port { aspect-ratio: 9/16; }
.img-box:hover { transform: scale(1.03) translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.4); }
.img-label { font-family: var(--font-family); font-size: 0.6875rem; color: var(--color-text-muted); text-align: center; }
.bottom-section { margin-top: 5rem; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 2rem; }
.bottom-nav { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.nav-btn { font-family: var(--font-family); font-size: 0.875rem; font-weight: 500; color: var(--color-text); text-decoration: none; padding: 0.5rem 1.2rem; border: 1px solid rgba(255,255,255,0.15); border-radius: 999px; transition: all 0.2s; white-space: nowrap; background: transparent; flex-shrink: 0; }
.nav-btn:hover { background: #fff; color: var(--color-accent); border-color: #fff; }
.credit-line { font-family: var(--font-family); font-size: 0.6875rem; color: rgba(255,255,255,0.5); text-align: center; line-height: 1.6; flex: 1; }
.viewer-overlay { position: fixed; inset: 0; z-index: 999; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; }
.viewer-close { position: absolute; top: 1.5rem; right: 2rem; font-size: 2.5rem; color: #fff; cursor: pointer; line-height: 1; opacity: 0.7; transition: opacity 0.2s; z-index: 2; }
.viewer-close:hover { opacity: 1; }
.viewer-content { width: 90vw; height: 90vh; background-size: contain; background-repeat: no-repeat; background-position: center; }
@media (max-width:768px){ .detail-section { padding: 7rem var(--container-padding) 3rem; } .grid-row { grid-template-columns: repeat(auto-fill, minmax(140px,1fr)); gap: 1rem; } }
@media (max-width:480px){ .detail-section { padding: 3.5rem var(--container-padding) 1.5rem; } .section-title { font-size: clamp(1.3rem,7vw,1.8rem); } .grid-row { grid-template-columns: repeat(2,1fr); gap: 0.3rem; } .portrait-row { grid-template-columns: repeat(2,1fr); } .nav-btn { font-size: 0.55rem; padding: 0.2rem 0.4rem; white-space: nowrap; } .credit-line { font-size: 0.5rem; line-height: 1.2; } .bottom-nav { flex-direction: row; justify-content: space-between; gap: 0.2rem; } .back-btn { font-size: 0.55rem; padding: 0.2rem 0.5rem; white-space: nowrap; } }
</style>
