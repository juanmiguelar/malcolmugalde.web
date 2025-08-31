<template>
  <VContainer fluid class="pa-0">
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <QuoteSection variant="outlined" />
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
import QuoteSection from '@/components/landing/QuoteSection.vue'
import ServicesSection from '@/components/landing/ServicesSection.vue'
import AboutAdvisorSection from '@/components/landing/AboutAdvisorSection.vue'
import TestimonialsSection from '@/components/landing/TestimonialsSection.vue'
import FAQSection from '@/components/landing/FAQSection.vue'
import FinalCTASection from '@/components/landing/FinalCTASection.vue'
import { useSEO } from '@/composables/useSEO'

useSEO({
  title: 'Asesor financiero en Costa Rica | Invierte desde cero',
  description:
    'Aprende a invertir desde cero con asesoría financiera personalizada para lograr tu libertad financiera en Costa Rica.',
  keywords: [
    'inversiones Costa Rica',
    'asesor financiero',
    'educación financiera',
    'retiro anticipado',
    'finanzas personales',
  ],
})
</script>
