<template>
  <section class="detail-section">
    <div class="container">
      <a href="#" @click.prevent="goBack" class="back-btn">← 返回</a>
      <div class="section-header">
        <p class="section-label">平面设计</p>
        <h2 class="section-title">视觉作品</h2>
        <p class="section-desc">海报设计、卡面设计与 PPT 视觉作品</p>
      </div>
      <div class="sub-section">
        <h3 class="sub-title">海报设计</h3>
        <p class="sub-desc">校内专业设计比赛特等奖</p>
        <div class="grid-row portrait-row">
          <div v-for="(img, i) in posters" :key="'po'+i" class="img-wrap"><div class="img-box port" :style="{ backgroundImage: img.url }"></div><p class="img-label">{{ img.name }}</p></div>
        </div>
      </div>
      <div class="sub-section">
        <h3 class="sub-title">卡面设计</h3>
        <p class="sub-desc">校内设计特等奖</p>
        <h4 class="sub-sub-title">第十六届</h4>
        <div class="grid-row">
          <div v-for="(img, i) in cards16" :key="'c16'+i" class="img-wrap"><div class="img-box land" :style="{ backgroundImage: img.url }"></div><p class="img-label">{{ img.name }}</p></div>
        </div>
        <h4 class="sub-sub-title">第十五届</h4>
        <div class="grid-row">
          <div v-for="(img, i) in cards15" :key="'c15'+i" class="img-wrap"><div class="img-box land" :style="{ backgroundImage: img.url }"></div><p class="img-label">{{ img.name }}</p></div>
        </div>
      </div>
      <div class="sub-section">
        <h3 class="sub-title">古建筑项目 PPT</h3>
        <div class="grid-row">
          <div v-for="(img, i) in ppt1" :key="'a'+i" class="img-wrap"><div class="img-box land" :style="{ backgroundImage: img.url }"></div><p class="img-label">{{ img.name }}</p></div>
        </div>
      </div>
      <div class="sub-section">
        <h3 class="sub-title">计组课件</h3>
        <div class="grid-row">
          <div v-for="(img, i) in ppt2" :key="'b'+i" class="img-wrap"><div class="img-box land" :style="{ backgroundImage: img.url }"></div><p class="img-label">{{ img.name }}</p></div>
        </div>
      </div>
      <div class="sub-section">
        <h3 class="sub-title">日本动物 PPT</h3>
        <div class="grid-row">
          <div v-for="(img, i) in ppt3" :key="'c'+i" class="img-wrap"><div class="img-box land" :style="{ backgroundImage: img.url }"></div><p class="img-label">{{ img.name }}</p></div>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <div class="bottom-nav">
        <a href="#" @click.prevent="goTo(prevPage.path)" class="nav-btn">← 上一区：{{ prevPage.name }}</a>
        <span class="credit-line">以上作品采用<br/>Photoshop | Adobe Illustrator | PowerPoint</span>
        <a href="#" @click.prevent="goTo(nextPage.path)" class="nav-btn">下一区：{{ nextPage.name }} →</a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() { router.push('/') }
const prevPage = { name: '三维视频', path: '/video-3d' }
const nextPage = { name: '后期合成', path: '/post-production' }
function goTo(path) { router.push(path) }
const posters = [
  { url: 'url(/images/皮影戏.png)', name: '传统海报_皮影戏' },
  { url: 'url(/images/了不起的中国古建.png)', name: '传统海报_了不起的中国古建' },
  { url: 'url(/images/校史馆海报设计.png)', name: '校史馆海报' },
]
const cards16 = [
  { url: 'url(/images/卡面设计.png)', name: '工行杯银行卡面设计1' },
  { url: 'url(/images/卡面背面.png)', name: '工行杯银行卡面设计2' },
]
const cards15 = [
  { url: 'url(/images/卡面15正面.png)', name: '工行杯银行卡面设计3' },
  { url: 'url(/images/卡面15背面.png)', name: '工行杯银行卡面设计4' },
]
const ppt1 = [
  { url: 'url(/images/古建PPT1.jpg)', name: '古建筑PPT-1' },
  { url: 'url(/images/古建PPT2.jpg)', name: '古建筑PPT-2' },
  { url: 'url(/images/古建PPT3.jpg)', name: '古建筑PPT-3' },
  { url: 'url(/images/幻灯片2.JPG)', name: '古建筑PPT-4' },
  { url: 'url(/images/幻灯片3.JPG)', name: '古建筑PPT-5' },
  { url: 'url(/images/幻灯片7.JPG)', name: '古建筑PPT-6' },
]
const ppt2 = [
  { url: 'url(/images/机组PPT_幻灯片1.PNG)', name: '机组PPT-1' }, { url: 'url(/images/机组PPT_幻灯片6.PNG)', name: '机组PPT-2' }, { url: 'url(/images/机组PPT_幻灯片7.PNG)', name: '机组PPT-3' }, { url: 'url(/images/机组PPT_幻灯片10.PNG)', name: '机组PPT-4' }, { url: 'url(/images/机组PPT_幻灯片12.PNG)', name: '机组PPT-5' }, { url: 'url(/images/机组PPT_幻灯片13.PNG)', name: '机组PPT-6' }, { url: 'url(/images/机组PPT_幻灯片14.PNG)', name: '机组PPT-7' }, { url: 'url(/images/机组PPT_幻灯片15.PNG)', name: '机组PPT-8' }, { url: 'url(/images/机组PPT_幻灯片16.PNG)', name: '机组PPT-9' }, { url: 'url(/images/机组PPT_幻灯片18.PNG)', name: '机组PPT-10' }, { url: 'url(/images/机组PPT_幻灯片19.PNG)', name: '机组PPT-11' }, { url: 'url(/images/机组PPT_幻灯片20.PNG)', name: '机组PPT-12' }, { url: 'url(/images/机组PPT_幻灯片21.PNG)', name: '机组PPT-13' }, { url: 'url(/images/机组PPT_幻灯片22.PNG)', name: '机组PPT-14' }, { url: 'url(/images/机组PPT_幻灯片23.PNG)', name: '机组PPT-15' },
]
const ppt3 = [
  { url: 'url(/images/日本动物_幻灯片1.PNG)', name: '日本动物PPT-1' }, { url: 'url(/images/日本动物_幻灯片4.PNG)', name: '日本动物PPT-2' }, { url: 'url(/images/日本动物_幻灯片7.PNG)', name: '日本动物PPT-3' }, { url: 'url(/images/日本动物_幻灯片8.PNG)', name: '日本动物PPT-4' }, { url: 'url(/images/日本动物_幻灯片10.PNG)', name: '日本动物PPT-5' }, { url: 'url(/images/日本动物_幻灯片12.PNG)', name: '日本动物PPT-6' }, { url: 'url(/images/日本动物_幻灯片13.PNG)', name: '日本动物PPT-7' }, { url: 'url(/images/日本动物_幻灯片15.PNG)', name: '日本动物PPT-8' },
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
.section-desc { font-family: var(--font-family); font-size: 0.8125rem; color: var(--color-text-muted); margin: 0.75rem 0 0; }
.sub-section { margin-bottom: 3rem; }
.sub-title { font-family: var(--font-family); font-size: 0.9375rem; font-weight: 700; letter-spacing: 0.05em; color: var(--color-text); text-transform: uppercase; margin-bottom: 0.5rem; }
.sub-desc { font-family: var(--font-family); font-size: 0.6875rem; color: var(--color-accent); margin-bottom: 0.75rem; }
.sub-sub-title { font-family: var(--font-family); font-size: 0.8125rem; font-weight: 600; color: var(--color-text-secondary); margin-bottom: 0.75rem; margin-top: 1rem; }
.grid-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
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
@media (max-width: 768px) { .detail-section { padding: 7rem var(--container-padding) 3rem; } .grid-row { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 0.75rem; } }
@media (max-width: 480px) { .detail-section { padding: 3rem var(--container-padding) 1.5rem; } .section-title { font-size: clamp(1.2rem,7vw,1.5rem); } .grid-row { grid-template-columns: repeat(2,1fr); gap: 0.25rem; } .portrait-row { grid-template-columns: repeat(2,1fr); } .nav-btn { font-size: 0.5rem; padding: 0.15rem 0.35rem; white-space: nowrap; } .credit-line { font-size: 0.45rem; line-height: 1.1; } .bottom-nav { flex-direction: row; justify-content: space-between; gap: 0.15rem; } .back-btn { font-size: 0.5rem; padding: 0.15rem 0.4rem; white-space: nowrap; } }
</style>
