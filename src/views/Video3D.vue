<template>
  <section class="detail-section">
    <div class="container">
      <a href="#" @click.prevent="goBack" class="back-btn">← 返回</a>
      <div class="section-header">
        <p class="section-label">三维视频</p>
        <h2 class="section-title">动画展示</h2>
        <p class="section-desc">C4D 建模动画与 OC 渲染视频作品</p>
        <p class="section-award">全国三维数字化创新设计大赛 国赛三等奖 / 省赛特等奖</p>
      </div>
      <div class="sub-section">
        <h3 class="sub-title">三维动画</h3>
        <div class="video-grid">
          <div v-for="(video, i) in videos" :key="i" class="video-card">
            <video :src="video.src" controls playsinline preload="metadata"></video>
            <p class="video-label">{{ video.label }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <div class="bottom-nav">
        <a href="#" @click.prevent="goTo(prevPage.path)" class="nav-btn">← 上一区：{{ prevPage.name }}</a>
        <span class="credit-line">以上作品采用<br/>C4D + OC 渲染器 | After Effects</span>
        <a href="#" @click.prevent="goTo(nextPage.path)" class="nav-btn">下一区：{{ nextPage.name }} →</a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() { router.push('/') }
const prevPage = { name: '三维场景', path: '/scenes-3d' }
const nextPage = { name: '平面设计', path: '/graphic-design' }
function goTo(path) { router.push(path) }
const videos = [
  { src: '/videos/古代建筑3d.mp4', label: '古代建筑 3D 展示' },
  { src: '/videos/古代建筑斗拱篇-1.mp4', label: '斗拱结构详解' },
]
</script>
<style scoped>
.detail-section { min-height: 100vh; padding: 8rem var(--container-padding) 4rem; background: #120a1f; }
.container { max-width: var(--container-max); margin: 0 auto; }
.back-btn { font-family: var(--font-family); font-size: 0.8125rem; color: var(--color-text-muted); text-decoration: none; display: inline-flex; align-items: center; justify-content: center; padding: 0.4rem 1.2rem; border: 1px solid rgba(255,255,255,0.15); border-radius: 999px; margin-bottom: 2rem; transition: all 0.2s; gap: 0.3rem; }
.back-btn:hover { border-color: var(--color-accent); color: var(--color-accent); }
.section-header { margin-bottom: 3rem; }
.section-label { font-family: var(--font-family); font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; color: var(--color-accent); text-transform: uppercase; margin-bottom: 0.75rem; }
.section-title { font-family: var(--font-family); font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 900; letter-spacing: -0.04em; color: var(--color-text); margin: 0; line-height: 1; }
.section-desc { font-family: var(--font-family); font-size: 0.75rem; color: var(--color-text-muted); margin: 0.5rem 0 0; }
.section-award { font-family: var(--font-family); font-size: 0.75rem; color: var(--color-accent); margin: 0.5rem 0 0; }
.sub-section { margin-bottom: 3rem; }
.sub-title { font-family: var(--font-family); font-size: 0.9375rem; font-weight: 700; letter-spacing: 0.05em; color: var(--color-text); text-transform: uppercase; margin-bottom: 1rem; }
.video-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 2rem; }
.video-card video { width: 100%; border-radius: 0; display: block; }
.video-label { font-family: var(--font-family); font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.5rem; }
.bottom-section { margin-top: 5rem; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 2rem; }
.bottom-nav { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.nav-btn { font-family: var(--font-family); font-size: 0.875rem; font-weight: 500; color: var(--color-text); text-decoration: none; padding: 0.5rem 1.2rem; border: 1px solid rgba(255,255,255,0.15); border-radius: 999px; transition: all 0.2s; white-space: nowrap; background: transparent; flex-shrink: 0; }
.nav-btn:hover { background: #fff; color: var(--color-accent); border-color: #fff; }
.credit-line { font-family: var(--font-family); font-size: 0.6875rem; color: rgba(255,255,255,0.5); text-align: center; line-height: 1.6; flex: 1; }
@media (max-width: 768px) { .detail-section { padding: 7rem var(--container-padding) 3rem; } .video-grid { grid-template-columns: 1fr; } }
@media (max-width: 480px) { .detail-section { padding: 3.5rem var(--container-padding) 1.5rem; } .section-title { font-size: clamp(1.3rem,7vw,1.8rem); } .nav-btn { font-size: 0.55rem; padding: 0.2rem 0.4rem; white-space: nowrap; } .credit-line { font-size: 0.5rem; line-height: 1.2; } .video-grid { gap: 0.5rem; } .bottom-nav { flex-direction: row; justify-content: space-between; gap: 0.2rem; } .back-btn { font-size: 0.55rem; padding: 0.2rem 0.5rem; white-space: nowrap; } .video-label { font-size: 0.6rem; } }
</style>
