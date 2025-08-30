<template>
  <VContainer fluid class="pa-0">
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <ServicesSection />
    <AboutAdvisorSection />
    <TestimonialsSection />
    <FAQSection />
    <FinalCTASection />
  </VContainer>
</template>

<script setup lang="ts">
import HeroSection from '@/components/landing/HeroSection.vue'
import ProblemSection from '@/components/landing/ProblemSection.vue'
import SolutionSection from '@/components/landing/SolutionSection.vue'
import ServicesSection from '@/components/landing/ServicesSection.vue'
import AboutAdvisorSection from '@/components/landing/AboutAdvisorSection.vue'
import TestimonialsSection from '@/components/landing/TestimonialsSection.vue'
import FAQSection from '@/components/landing/FAQSection.vue'
import FinalCTASection from '@/components/landing/FinalCTASection.vue'
</script>
