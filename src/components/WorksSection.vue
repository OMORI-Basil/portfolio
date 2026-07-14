<template>
  <section class="works-section" id="works">
    <div class="container">
      <div class="section-header">
        <p class="section-label gsap-section-label">作品集</p>
        <h2 class="section-title gsap-section-title">精选项目</h2>
        <p class="section-desc gsap-section-desc">这里展示了我参与和主导的部分项目。</p>
      </div>
      <div class="works-list">
        <div v-for="(work, index) in works" :key="index" class="work-row gsap-stagger-item" @click="goTo(work.link)">
          <span class="work-num">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="work-info" :class="{ 'shift': index > 0 }">
            <h3 class="work-title">{{ work.title }}</h3>
            <p class="work-subtitle">{{ work.subtitle }}</p>
          </div>
          <span class="work-date">{{ work.date }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const works = [
  { title: '产品设计', subtitle: '产品建模 / OC 渲染', date: '产品', link: '/products-3d' },
  { title: '场景渲染', subtitle: '场景建模 / 空间渲染', date: '场景', link: '/scenes-3d' },
  { title: '三维动画', subtitle: 'C4D 动画 / 建筑漫游', date: '动画', link: '/video-3d' },
  { title: '平面设计', subtitle: '海报 / 卡面 / PPT 视觉', date: '设计', link: '/graphic-design' },
  { title: '后期合成', subtitle: '实景合成 / 视觉特效', date: '合成', link: '/post-production' },
]
function goTo(path) { router.push(path) }
</script>
<style scoped>
.works-section { padding: var(--section-gap) 0; background: transparent; }
.container { max-width: var(--container-max); padding: 0 var(--container-padding); margin: 0 auto; }
.section-header { margin-bottom: 2.5rem; }
.section-label { font-family: var(--font-family); font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; color: var(--color-text-muted); text-transform: uppercase; margin-bottom: 0.75rem; }
.section-title { font-family: var(--font-family); font-size: clamp(2.5rem,6vw,4rem); font-weight: 900; letter-spacing: -0.04em; color: var(--color-text); margin: 0; line-height: 1; }
.section-desc { font-family: var(--font-family); font-size: 0.8125rem; font-weight: 400; line-height: 1.5; color: var(--color-text-muted); max-width: 500px; margin: 0.75rem 0 0; }
.works-list { display: flex; flex-direction: column; width: 100%; }
.work-row { --px: 50%; --py: 50%; box-sizing: border-box; cursor: pointer; z-index: 0; border-top: 1px solid rgba(255,255,255,0.25); align-items: center; gap: 2rem; width: 100%; min-height: 10rem; padding: 2rem 0; display: flex; position: relative; }
.works-list .work-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.25); }
.work-row::after { content: ''; clip-path: polygon(0 50%,100% 50%,100% 50%,0 50%); z-index: 0; background: #fff; width: 100%; height: 100%; transition: clip-path .5s cubic-bezier(.16,1,.3,1); position: absolute; top: 0; left: 0; }
.work-row:hover::after { clip-path: polygon(0 0,100% 0,100% 100%,0 100%); }
.work-num, .work-info, .work-date { z-index: 1; position: relative; }
.work-num { font-family: var(--font-family); color: transparent; -webkit-text-stroke: 2px var(--color-text); letter-spacing: .05em; flex-shrink: 0; width: 7rem; font-size: clamp(4rem,8vw,6rem); font-weight: 900; line-height: 1; transition: color .4s,-webkit-text-stroke-color .4s; }
.work-row:hover .work-num { color: var(--color-accent); -webkit-text-stroke-color: var(--color-accent); }
.work-info { display: flex; flex-direction: column; flex: 1; gap: 0.5rem; min-width: 0; }
.work-info.shift { margin-left: 2px; }
.work-title { font-family: var(--font-family); font-size: clamp(1.5rem,3vw,2.5rem); font-weight: 800; letter-spacing: -.02em; color: var(--color-text); text-transform: uppercase; white-space: nowrap; text-overflow: ellipsis; margin: 0; line-height: 1.1; transition: color .4s; overflow: hidden; }
.work-subtitle { font-family: var(--font-family); font-size: 0.75rem; font-weight: 500; letter-spacing: .08em; color: rgba(255,255,255,.7); margin: 0 0 0 4px; transition: color .4s; }
.work-row:hover .work-title, .work-row:hover .work-subtitle { color: #000; }
.work-date { font-family: var(--font-family); font-size: .875rem; font-weight: 500; letter-spacing: .15em; color: rgba(255,255,255,.7); flex-shrink: 0; margin-left: 2rem; transition: color .4s; }
.work-row:hover .work-date { color: #000; }
@media (max-width:992px){ .work-row { gap: 1.25rem; min-height: 8rem; padding: 1.5rem 0; } .work-num { -webkit-text-stroke-width: 1.5px; width: 5rem; } }
@media (max-width:768px){ .works-section { padding: 4rem 0; } .container { padding: 0 var(--container-padding); } .work-row { gap: .75rem 1rem; min-height: auto; padding: 1rem 0; } .work-num { -webkit-text-stroke-width: 1px; font-size: 2.8rem; width: 4rem; text-align: center; } .work-info { flex: 1; min-width: 0; } .work-title { white-space: normal; } .work-date { text-align: right; margin-left: auto; white-space: nowrap; } }
@media (max-width: 480px) { .works-section { padding: 3rem 0; } .work-row { gap: 0.5rem; padding: 0.75rem 0; } .work-num { font-size: 2.5rem; -webkit-text-stroke-width: 1px; width: 3.5rem; } .work-title { font-size: clamp(0.9rem, 4vw, 1.1rem); } .work-subtitle { font-size: 0.6rem; margin-left: 0; } .work-date { font-size: 0.7rem; } }
</style>
