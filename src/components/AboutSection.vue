<template>
  <section class="about-section" id="about">
    <div class="container">
      <div class="about-me-wrapper">
        <div class="about-avatar gsap-reveal">
          <div class="avatar-card-3d" ref="avatarCardRef" @mousemove="onAvatarMove" @mouseleave="onAvatarLeave">
            <img src="/images/头像.png" alt="avatar" class="avatar-img" />
            <div class="avatar-glow"></div>
          </div>
        </div>
        <div class="about-info">
          <div class="info-greeting gsap-section-title">{{ greeting }}</div>
          <div class="info-bio gsap-section-desc">{{ bio }}</div>
          <div class="about-divider"></div>
          <div class="info-row">
            <div class="info-col-left">
              <div class="info-item gsap-stagger-item">
                <span class="info-item-label">当前身份</span>
                <span class="info-item-value">{{ identity }}</span>
              </div>
              <div class="info-item gsap-stagger-item">
                <span class="info-item-label">就读院校</span>
                <span class="info-item-value">{{ direction }}</span>
              </div>
            </div>
            <div class="info-col-right">
              <div class="info-item gsap-stagger-item">
                <span class="info-item-label">联系电话</span>
                <span class="info-item-value">{{ phone }}</span>
              </div>
              <div class="info-item gsap-stagger-item">
                <span class="info-item-label">邮箱</span>
                <span class="info-item-value">{{ email }}</span>
              </div>
            </div>
          </div>
          <div class="about-divider"></div>
          <div class="stats-row gsap-card">
            <div v-for="(stat, i) in stats" :key="i" class="stat-item gsap-stagger-item">
              <span class="stat-number">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
          <div class="building-row gsap-card">
            <div class="building-left">
              <span class="building-label gsap-section-label">SKILL TAGS</span>
              <div class="building-tags">
                <span v-for="(tag, i) in buildingTags" :key="i" class="build-tag gsap-stagger-item">{{ tag }}</span>
              </div>
            </div>
            <span class="building-right">技能标签</span>
          </div>
        </div>
      </div>
      <div class="career-wrapper">
        <div class="career-header">
          <span class="career-label-en gsap-section-title">CAREER PATH</span>
          <span class="career-label-cn gsap-section-label">获奖经历</span>
        </div>
        <div class="timeline-wrapper gsap-reveal">
          <div class="timeline-line gsap-reveal-inner"></div>
          <div class="timeline-nodes">
            <div v-for="(item, idx) in careerData" :key="idx" class="timeline-node gsap-stagger-item">
              <svg class="node-star" :class="{ 'node-active': idx === 0 }" viewBox="0 0 24 24" fill="none">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
        <div class="experience-grid">
          <div v-for="(item, idx) in careerData" :key="idx" class="experience-card gsap-card">
            <div class="card-period">{{ item.period }}</div>
            <h3 class="card-company">{{ item.company }}</h3>
            <div class="card-role">{{ item.role }}</div>
            <div class="card-desc">
              <p v-for="(line, i) in splitLines(item.description)" :key="i">{{ line }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
const avatarCardRef = ref(null)
function onAvatarMove(e) {
  const card = avatarCardRef.value
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height
  card.style.setProperty('--rx', ((y - 0.5) * -16) + 'deg')
  card.style.setProperty('--ry', ((x - 0.5) * 16) + 'deg')
}
function onAvatarLeave(e) {
  const card = avatarCardRef.value
  if (!card) return
  card.style.setProperty('--rx', '0deg')
  card.style.setProperty('--ry', '0deg')
}
const greeting = 'Hi！我是林志翔'
const bio = '数字媒体技术本科生，具备三维设计、电商视觉及后期制作能力，熟练掌握 AI 工具参与工作流程，善于将创意与技术融合，输出符合商业需求的视觉作品，可随时到岗。'
const identity = '数字媒体技术 · 大四'
const direction = '河南城建学院（本科）'
const phone = '18750131360'
const email = '3479659297@qq.com'
const stats = [
  { value: '8+', label: '竞赛获奖' },
  { value: '5+', label: '项目经验' },
  { value: '10+', label: '掌握技能' },
]
const buildingTags = ['C4D', 'Photoshop', 'AI 工作流', 'OC渲染器', 'AE', '剪辑', 'Adobe Illustrator', '前端开发', '…']
const careerData = [
  { period: '2025', company: '全国三维设计大赛', role: '国赛三等奖 / 省赛特等奖', description: '全国三维设计大赛国家三等奖\n省赛特等奖' },
  { period: '2024 - 2025', company: '专业竞赛', role: '多次特等奖', description: '多次获得专业竞赛设计赛道特等奖\n专业课排名年段前 5%' },
  { period: '2023 - 2025', company: '跨学科项目', role: '项目负责人', description: '多次完整领导、参与学校多学科交融项目\n具有多学科协作与项目统筹经验' },
]
function splitLines(text) { return text.split('\n').filter(Boolean) }
</script>
<style scoped>
.about-section { padding: var(--section-gap) 0; background: transparent; }
.container { max-width: var(--container-max); padding: 0 var(--container-padding); margin: 0 auto; }
.about-me-wrapper { display: grid; grid-template-columns: 320px 1fr; gap: 3rem; margin-bottom: 6rem; }
.about-avatar { display: flex; justify-content: flex-start; align-items: flex-start; }
.avatar-card-3d { position: relative; perspective: 600px; max-width: 340px; width: 100%; cursor: pointer; border-radius: 1rem; overflow: hidden; }
.avatar-img { width: 100%; height: auto; display: block; border-radius: 1rem; transition: transform 0.15s ease, box-shadow 0.3s ease; transform: rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)); }
.avatar-card-3d:hover .avatar-img { box-shadow: 0 25px 70px rgba(139,92,246,0.35); }
.avatar-glow { position: absolute; inset: 0; border-radius: 1rem; background: radial-gradient(circle at 40% 30%, rgba(139,92,246,0.2), transparent 60%); opacity: 0; pointer-events: none; z-index: 0; }
.info-greeting { font-family: var(--font-family); font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 800; letter-spacing: -0.03em; color: var(--color-text); margin: 0 0 0.75rem -1px; line-height: 1.2; }
.info-bio { font-family: var(--font-family); font-size: 0.75rem; line-height: 1.5; color: var(--color-text-muted); margin-bottom: 1.5rem; max-width: 400px; }
.info-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 0; }
.info-col-left, .info-col-right { display: flex; flex-direction: column; gap: 1.25rem; }
.info-item { display: flex; flex-direction: column; gap: 0.2rem; }
.info-item-label { font-family: var(--font-family); font-size: 0.75rem; font-weight: 500; letter-spacing: 0.04em; color: var(--color-text-muted); text-transform: uppercase; }
.info-item-value { font-family: var(--font-family); font-size: 0.875rem; font-weight: 600; color: var(--color-text); }
.about-divider { width: 100%; height: 1px; background: rgba(255,255,255,0.15); margin: 1.25rem 0; }
.stats-row { display: flex; gap: 2.5rem; margin-bottom: 2rem; }
.stat-item { display: flex; flex-direction: column; gap: 0.25rem; }
.stat-number { font-family: var(--font-family); font-size: 2rem; font-weight: 800; letter-spacing: -0.03em; color: var(--color-accent); }
.stat-label { font-family: var(--font-family); font-size: 0.8125rem; font-weight: 500; color: var(--color-text-muted); }
.building-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 1.5rem; margin-top: 1.5rem; }
.building-left { display: flex; flex-direction: column; gap: 0.75rem; margin-left: -0.4rem; }
.building-label { font-family: var(--font-family); font-size: 0.6875rem; font-weight: 500; letter-spacing: 0.2em; color: var(--color-accent); text-transform: uppercase; padding-left: 8px; }
.building-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; padding-left: 4px; }
.build-tag { font-family: var(--font-family); font-size: 0.75rem; font-weight: 500; color: #fff; background: transparent; border: 1px solid rgba(139,92,246,0.3); border-radius: 50px; padding: 0.2rem 0.5rem; transition: all 0.3s ease; }
.build-tag:hover { background: var(--color-accent); border-color: var(--color-accent); color: #fff; }
.building-right { font-family: var(--font-family); font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; color: var(--color-text-muted); text-transform: uppercase; white-space: nowrap; }
.career-wrapper { margin-top: 2rem; }
.career-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; }
.career-label-en { font-family: var(--font-family); font-size: 0.75rem; font-weight: 500; letter-spacing: 0.2em; color: var(--color-accent); text-transform: uppercase; }
.career-label-cn { font-family: var(--font-family); font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; color: var(--color-text-muted); text-transform: uppercase; }
.timeline-wrapper { position: relative; margin-bottom: 2rem; }
.timeline-line { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(139,92,246,0.3); transform: translateY(-50%); }
.timeline-nodes { display: grid; grid-template-columns: repeat(3,1fr); justify-items: start; gap: 2rem; position: relative; }
.timeline-node { display: flex; flex-direction: column; align-items: start; }
.node-star { width: 14px; height: 14px; color: rgba(139,92,246,0.4); transition: color 0.3s ease, transform 0.3s ease; }
.node-star.node-active { color: var(--color-accent); transform: scale(1.2); filter: drop-shadow(0 0 8px rgba(139,92,246,0.5)); }
.experience-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; }
.experience-card { text-align: left; }
.card-period { font-family: var(--font-family); font-size: 0.75rem; font-weight: 500; letter-spacing: 0.02em; color: var(--color-accent); margin-bottom: 0.5rem; }
.card-company { font-family: var(--font-family); font-size: 0.9375rem; font-weight: 700; color: var(--color-text); margin: 0 0 0.35rem; line-height: 1.2; }
.card-role { font-family: var(--font-family); font-size: 0.6875rem; font-weight: 500; letter-spacing: 0.02em; color: #fff; background: rgba(139,92,246,0.25); border: 1px solid rgba(139,92,246,0.35); border-radius: 50px; padding: 0.2rem 0.7rem; display: inline-flex; align-self: flex-start; margin-bottom: 0.5rem; }
.role-gold { background: #FFF5D6; border-color: rgba(255,245,214,0.5); }
.card-desc { display: flex; flex-direction: column; gap: 0.25rem; }
.card-desc p { font-family: var(--font-family); font-size: 0.75rem; font-weight: 400; line-height: 1.5; color: var(--color-text-muted); margin: 0; }
@media (max-width:1200px){ .about-me-wrapper { grid-template-columns: 280px 1fr; gap: 2rem; margin-bottom: 6rem; } .experience-grid { gap: 2rem; } .stats-row { gap: 2.5rem; } }
@media (max-width:992px){ .info-row { grid-template-columns: 1fr; gap: 1.25rem; } }
@media (max-width:768px){ .about-section { padding: 6rem 0; } .container { padding: 0 var(--container-padding); } .about-me-wrapper { grid-template-columns: 1fr; gap: 2rem; margin-bottom: 4rem; } .about-avatar { max-width: 200px; } .info-row { grid-template-columns: 1fr; gap: 1rem; } .stats-row { gap: 2rem; } .building-row { flex-direction: row; align-items: flex-start; gap: 1rem; justify-content: flex-start; } .building-left { margin-left: 0; flex: 1; } .building-right { white-space: nowrap; flex-shrink: 0; } .career-wrapper { margin-top: 3rem; } .timeline-wrapper { display: none; } .experience-grid { grid-template-columns: 1fr; gap: 2rem; } .experience-card { padding-left: 0; } }
</style>
