<template>
  <section class="skills-section" id="skills">
    <div class="container">
      <div class="section-header">
        <p class="section-label gsap-section-label">技能</p>
        <h2 class="section-title gsap-section-title">技术栈 & 能力</h2>
        <p class="section-desc gsap-section-desc">
          我掌握的核心技术和工具。
        </p>
      </div>

      <div class="skills-grid">
        <div class="top-row">
          <div
            v-for="(skill, index) in topSkills"
            :key="index"
            class="skill-card gsap-card"
          >
            <div class="hover_color_bubble"></div>
            <div class="so_top_icon">
              <span class="skill-icon" v-html="skill.icon"></span>
            </div>
            <div class="solu_title">
              <h3 class="skill-title">{{ skill.name }}</h3>
            </div>
            <div class="solu_description">
              <p class="skill-desc">{{ skill.description }}</p>
            </div>
          </div>
        </div>
        <div class="bottom-row">
          <div
            v-for="(skill, index) in bottomSkills"
            :key="index"
            class="skill-card gsap-card"
          >
            <div class="hover_color_bubble"></div>
            <div class="so_top_icon">
              <span class="skill-icon" v-html="skill.icon"></span>
            </div>
            <div class="solu_title">
              <h3 class="skill-title">{{ skill.name }}</h3>
            </div>
            <div class="solu_description">
              <p class="skill-desc">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const topSkills = [
  {
    name: 'C4D',
    description: '场景建模、物品建模、动画制作',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
  },
  {
    name: 'OC 渲染器',
    description: '打光、材质、渲染',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
  },
]

const bottomSkills = [
  {
    name: 'Photoshop',
    description: '商业海报设计、产品调色',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z"/></svg>',
  },
  {
    name: 'AI 创意工作流',
    description: '熟练掌握 AI 工具参与设计全流程',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0z"/></svg>',
  },
  {
    name: 'After Effects',
    description: '后期制作、视觉合成',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  },
]
</script>

<style scoped>
.skills-section {
  padding: var(--section-gap) 0;
  background: transparent;
}

.container {
  max-width: var(--container-max);
  padding: 0 var(--container-padding);
  margin: 0 auto;
}

.section-header {
  margin-bottom: 2.5rem;
}

.section-label {
  font-family: var(--font-family);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.section-title {
  font-family: var(--font-family);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  color: var(--color-accent);
  margin: 0;
  line-height: 1;
}

.section-desc {
  font-family: var(--font-family);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text-muted);
  max-width: 500px;
  margin: 1rem 0 0;
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.top-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.bottom-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.skill-card {
  z-index: 1;
  cursor: pointer;
  background: #fff;
  border-radius: 15px;
  flex-direction: column;
  min-height: 265px;
  padding: 10px 15px;
  transition: all 0.7s;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(136, 144, 195, 0.2), 0 5px 15px rgba(37, 44, 97, 0.15);
}

.skill-card::before {
  content: '';
  z-index: 0;
  background: rgba(139, 92, 246, 0.08);
  border-radius: 35px;
  width: 170px;
  height: 400px;
  position: absolute;
  top: -23px;
  right: -56px;
  transform: rotate(42deg);
}

.skill-card:hover {
  background: var(--color-accent);
  color: #fff;
  z-index: 9;
  transform: scale(1.1);
}

.skill-card:hover::before {
  background: rgba(255, 255, 255, 0.12);
}

.skill-card > .so_top_icon,
.skill-card > .solu_title,
.skill-card > .solu_description {
  z-index: 1;
  position: relative;
}

.skill-card:hover .skill-title,
.skill-card:hover .skill-desc {
  color: #fff;
}

.skill-card:hover .skill-icon {
  color: var(--color-accent);
}

.hover_color_bubble {
  z-index: 0;
  background: rgba(139, 92, 246, 0.12);
  border-radius: 50%;
  width: 100rem;
  height: 100rem;
  transition: all 0.7s;
  position: absolute;
  top: 16rem;
  left: -18rem;
  right: 0;
  transform: rotate(-36deg);
}

.skill-card:hover .hover_color_bubble {
  background: rgba(255, 255, 255, 0.08);
  top: 0;
}

.so_top_icon {
  background: #fff;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  transition: all 0.7s;
  display: flex;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-left: 8px;
}

.skill-icon {
  width: 16px;
  height: 16px;
  color: var(--color-accent);
  transition: color 0.7s;
}

.solu_title {
  margin-top: 10px;
  margin-bottom: 8px;
  padding-left: 6px;
}

.skill-title {
  color: #212121;
  font-size: 1.3rem;
  font-family: var(--font-family);
  margin: 0;
  font-weight: 700;
}

.skill-desc {
  color: var(--color-text-muted);
  margin: 0 0 10px;
  font-size: 0.75rem;
  line-height: 1.4;
  padding-left: 6px;
}

@media (max-width: 1200px) {
  .container {
    padding: 0 2rem;
  }
}

@media (max-width: 992px) {
  .top-row {
    grid-template-columns: 1fr;
  }
  .bottom-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .skills-section { padding: 6rem 0; }
  .container { padding: 0 var(--container-padding); }
  .bottom-row { grid-template-columns: 1fr; }
  .skill-card { min-height: 240px; padding: 1rem; }
  .skill-title { font-size: 1.15rem; }
  .skill-desc { font-size: 14px; }
}
@media (max-width: 480px) {
  .skills-section { padding: 4rem 0; }
  .skill-card { min-height: 200px; padding: 0.75rem; }
  .skill-title { font-size: 1rem; }
  .skill-desc { font-size: 13px; }
}
</style>
