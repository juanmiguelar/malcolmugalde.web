<template>
  <section aria-labelledby="services-title" class="py-10">
    <slot>
      <VContainer class="py-12">
        <h2 id="services-title" class="text-h5 text-sm-h4 mb-6">{{ services.heading }}</h2>
        <VRow>
          <VCol
            v-for="(service, idx) in services.services"
            :key="idx"
            cols="12"
            md="6"
            class="mb-4"
          >
            <VCard elevation="2">
              <VCardItem>
                <VCardTitle>{{ service.title }}</VCardTitle>
                <VCardText>{{ service.description }}</VCardText>
              </VCardItem>
            </VCard>
          </VCol>
        </VRow>
        <div class="text-center mt-4">
          <VBtn
            color="primary"
            :href="services.cta.link"
            target="_blank"
            rel="noopener"
            :aria-label="services.cta.ariaLabel"
          >
            {{ services.cta.text }}
          </VBtn>
        </div>
      </VContainer>
    </slot>
  </section>
</template>
<script setup lang="ts">
import { useWhatsApp } from '~/composables/useWhatsApp';

const { buildLink } = useWhatsApp();

const services = {
  heading: 'Servicios',
  services: [
    {
      title: 'Asesoría Personalizada 1:1',
      description:
        'Mentoría individual para optimizar tu portafolio de inversiones. Análisis de tu situación financiera actual y plan de inversión a medida.',
    },
    {
      title: 'Programa "Invierte desde Cero"',
      description:
        'Programa guiado paso a paso para principiantes. Aprende los fundamentos de inversión y construye un plan para lograr tu retiro anticipado.',
    },
  ],
  cta: {
    text: 'Quiero más información',
    link: buildLink('50664355539', 'Hola, estoy interesado en sus servicios'),
    ariaLabel: 'Abrir WhatsApp para más información de servicios',
  },
};
</script>
