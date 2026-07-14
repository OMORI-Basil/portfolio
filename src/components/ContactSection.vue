<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <div class="contact-content">
        <div class="contact-left">
          <p class="section-label gsap-section-label">联系我</p>
          <h2 class="section-title gsap-section-title">一起<span class="title-accent">合作</span><br/><span class="title-accent">创造</span>精彩</h2>
          <p class="section-desc gsap-section-desc">
            如果你有好的想法或项目，欢迎随时联系我。<br/>我很期待与你合作！
          </p>

          <div class="contact-links gsap-reveal">
            <a v-for="(link, index) in contactLinks" :key="index" :href="link.href" class="contact-link" :target="link.external ? '_blank' : '_self'">
              <span class="link-label">{{ link.label }}</span>
              <span class="link-value">{{ link.value }}</span>
            </a>
          </div>
        </div>

        <div class="contact-right gsap-reveal">
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div v-if="formSuccess" class="form-success-banner">消息发送成功！我会尽快回复你。</div>
            <div v-if="formError" class="form-error-banner">{{ formError }}</div>

            <div class="form-group" :class="{ 'has-error': errors.name }">
              <label class="form-label" for="name">姓名</label>
              <input id="name" v-model="form.name" type="text" class="form-input" placeholder="你的姓名" />
              <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
            </div>

            <div class="form-group" :class="{ 'has-error': errors.email }">
              <label class="form-label" for="email">邮箱</label>
              <input id="email" v-model="form.email" type="email" class="form-input" placeholder="your@email.com" />
              <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
            </div>

            <div class="form-group" :class="{ 'has-error': errors.message }">
              <label class="form-label" for="message">留言</label>
              <textarea id="message" v-model="form.message" class="form-textarea" placeholder="写下你想说的话..." rows="4"></textarea>
              <span v-if="errors.message" class="error-text">{{ errors.message }}</span>
            </div>

            <button type="submit" class="submit-btn" :disabled="submitting">
              {{ submitting ? '发送中...' : '发送消息' }}
            </button>
          </form>
        </div>
      </div>

      <footer class="footer">
        <div class="footer-content">
          <p class="footer-text">&copy; {{ new Date().getFullYear() }} 林志翔. All rights reserved.</p>
          <a href="#" @click.prevent="scrollToTop" class="back-to-top">回到顶部 ↑</a>
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const contactLinks = [
  { label: '邮箱', value: '2073054850@qq.com', href: 'mailto:2073054850@qq.com', external: false },
  { label: '电话', value: '18750131360', href: 'tel:18750131360', external: false },
  { label: 'Bilibili', value: 'space.bilibili.com', href: 'https://space.bilibili.com', external: true },
]

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const formSuccess = ref(false)
const formError = ref('')
const submitting = ref(false)

function validate() {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = '请输入姓名'
    valid = false
  }
  if (!form.email.trim()) {
    errors.email = '请输入邮箱'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = '请输入有效的邮箱地址'
    valid = false
  }
  if (!form.message.trim()) {
    errors.message = '请输入留言内容'
    valid = false
  }

  return valid
}

async function handleSubmit() {
  formSuccess.value = false
  formError.value = ''

  if (!validate()) return

  submitting.value = true
  try {
    // Replace with your actual form submission logic
    await new Promise(resolve => setTimeout(resolve, 1000))
    formSuccess.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (e) {
    formError.value = '发送失败，请稍后重试'
  } finally {
    submitting.value = false
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.contact-section {
  padding: var(--section-gap) 0 5rem;
  background: transparent;
}

.container {
  max-width: var(--container-max);
  padding: 0 var(--container-padding);
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
}

.contact-left {
  padding-top: 0.5rem;
}

.section-label {
  font-family: var(--font-family);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: #666;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.section-title {
  font-family: var(--font-family);
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  color: #fff;
  margin: 0 0 1.5rem;
  line-height: 1.1;
}

.title-accent {
  color: var(--color-accent);
}

.section-desc {
  font-family: var(--font-family);
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.5;
  color: #999;
  max-width: 400px;
  margin: 0 0 2.5rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-link {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  text-decoration: none;
  transition: all var(--transition-base);
}

.contact-link:hover .link-value {
  color: var(--color-accent);
}

.link-label {
  font-family: var(--font-family);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: #666;
  text-transform: uppercase;
}

.link-value {
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  transition: color var(--transition-base);
}

/* Form */
.contact-right {
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 3rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-family: var(--font-family);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: #666;
  text-transform: uppercase;
}

.form-input,
.form-textarea {
  color: #fff;
  width: 100%;
  font-family: var(--font-family);
  transition: border-color var(--transition-base);
  box-sizing: border-box;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0;
  padding: 1rem 0;
  font-size: 1rem;
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--color-accent);
  outline: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #555;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  background: var(--color-accent);
  color: #fff;
  border-radius: var(--radius-sm);
  width: 100%;
  font-family: var(--font-family);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all var(--transition-base);
  border: none;
  margin-top: 1rem;
  padding: 1.25rem;
}

.submit-btn:hover:not(:disabled) {
  background: var(--color-accent-hover);
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.form-group.has-error .form-input,
.form-group.has-error .form-textarea {
  border-color: #ff4d4f;
}

.error-text {
  color: #ff4d4f;
  margin-top: 0.25rem;
  font-size: 0.75rem;
}

.form-error-banner,
.form-success-banner {
  border-radius: var(--radius-sm);
  padding: 0.875rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.form-error-banner {
  color: #ff4d4f;
  background: rgba(255, 77, 79, 0.1);
  border: 1px solid rgba(255, 77, 79, 0.2);
}

.form-success-banner {
  color: #52c41a;
  background: rgba(82, 196, 26, 0.1);
  border: 1px solid rgba(82, 196, 26, 0.2);
}

/* Footer */
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 8rem;
  padding-top: 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-text {
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: #666;
}

.back-to-top {
  font-family: var(--font-family);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #666;
  text-transform: uppercase;
  transition: color var(--transition-base);
  text-decoration: none;
}

.back-to-top:hover {
  color: var(--color-accent);
}

@media (max-width: 1200px) {
  .container {
    padding: 0 2rem;
  }
  .contact-content {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .contact-right {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .contact-section { padding: 6rem 0 4rem; }
  .container { padding: 0 var(--container-padding); }
  .contact-content { gap: 3rem; }
  .contact-right { padding: 1.5rem; }
}
@media (max-width: 480px) {
  .contact-section { padding: 4rem 0 3rem; }
  .section-title { font-size: clamp(1.8rem, 8vw, 2.5rem); }
  .contact-right { padding: 1.2rem; }
  .form-input, .form-textarea { padding: 0.6rem 0; }
  .submit-btn { padding: 0.8rem; }
  .contact-links { gap: 0.75rem; }
  .footer-text { font-size: 0.65rem; }
  .back-to-top { font-size: 0.65rem; }
}
</style>
