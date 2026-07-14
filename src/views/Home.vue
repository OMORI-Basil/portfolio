<template>
  <div>
    <HeroSection />
    <AboutSection />
    <WorksSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import WorksSection from '../components/WorksSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import { useGsapAnimations } from '../composables/useGsapAnimations.js'

useGsapAnimations()
</script>
