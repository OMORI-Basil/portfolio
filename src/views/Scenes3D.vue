<template>
  <section class="detail-section">
    <div class="container">
      <a href="#" @click.prevent="goBack" class="back-btn">← 返回</a>
      <div class="section-header">
        <p class="section-label">三维场景</p>
        <h2 class="section-title">三维场景</h2>
        <p class="section-desc">场景建模与空间渲染作品</p>
        <p class="section-award">年段优秀作品</p>
      </div>
      <div class="sub-section">
        <h3 class="sub-title">横版</h3>
        <div class="grid-row">
          <div v-for="(img, i) in landscape" :key="'l'+i" class="img-wrap"><div class="img-box land" :style="{ backgroundImage: img.url }"></div><p class="img-label">{{ img.name }}</p></div>
        </div>
      </div>
      <div class="sub-section">
        <h3 class="sub-title">竖版</h3>
        <div class="grid-row portrait-row">
          <div v-for="(img, i) in portrait" :key="'p'+i" class="img-wrap"><div class="img-box port" :style="{ backgroundImage: img.url }"></div><p class="img-label">{{ img.name }}</p></div>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <div class="bottom-nav">
        <a href="#" @click.prevent="goTo(prevPage.path)" class="nav-btn">← 上一区：{{ prevPage.name }}</a>
        <span class="credit-line">以上作品采用<br/>C4D + OC 渲染器 | After Effects | 剪映 | Photoshop</span>
        <a href="#" @click.prevent="goTo(nextPage.path)" class="nav-btn">下一区：{{ nextPage.name }} →</a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() { router.push('/') }
const prevPage = { name: '产品设计', path: '/products-3d' }
const nextPage = { name: '三维视频', path: '/video-3d' }
function goTo(path) { router.push(path) }
const landscape = [
  { url: 'url(/images/场景_飞船坠毁.png)', name: '科技废土风格渲染' },
  { url: 'url(/images/旋转宇宙.png)', name: '科技风格渲染' },
  { url: 'url(/images/1.png)', name: '古建筑项目_场景1' },
  { url: 'url(/images/4.png)', name: '古建筑项目_场景4' },
  { url: 'url(/images/5.png)', name: '古建筑项目_场景5' },
  { url: 'url(/images/7.png)', name: '古建筑项目_场景7' },
  { url: 'url(/images/场景_火车车厢.png)', name: '火车车厢' },
]
const portrait = [ { url: 'url(/images/蓝色室内.png)', name: '室内风格化场景渲染' } ]
</script>
<style scoped>
.detail-section { min-height: 100vh; padding: 8rem var(--container-padding) 4rem; background: #120a1f; }
.container { max-width: var(--container-max); margin: 0 auto; }
.back-btn { font-family: var(--font-family); font-size: 0.8125rem; color: var(--color-text-muted); text-decoration: none; display: inline-flex; align-items: center; justify-content: center; padding: 0.4rem 1.2rem; border: 1px solid rgba(255,255,255,0.15); border-radius: 999px; margin-bottom: 2rem; transition: all 0.2s; gap: 0.3rem; }
.back-btn:hover { border-color: var(--color-accent); color: var(--color-accent); }
.section-header { margin-bottom: 3rem; }
.section-label { font-family: var(--font-family); font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; color: var(--color-accent); text-transform: uppercase; margin-bottom: 0.75rem; }
.section-title { font-family: var(--font-family); font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 900; letter-spacing: -0.04em; color: var(--color-text); margin: 0; line-height: 1; }
.section-desc { font-family: var(--font-family); font-size: 0.8125rem; color: var(--color-text-muted); margin: 0.75rem 0 0; }
.section-award { font-family: var(--font-family); font-size: 0.75rem; color: var(--color-accent); margin: 0.5rem 0 0; }
.sub-section { margin-bottom: 3rem; }
.sub-title { font-family: var(--font-family); font-size: 0.9375rem; font-weight: 700; letter-spacing: 0.05em; color: var(--color-text); text-transform: uppercase; margin-bottom: 1rem; }
.grid-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
.portrait-row { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
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
@media (max-width: 768px) { .detail-section { padding: 7rem 1.5rem 3rem; } .grid-row { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 1rem; } }
</style>
