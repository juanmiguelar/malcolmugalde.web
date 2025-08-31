<template>
  <section aria-labelledby="cta-title" class="py-12 bg-grey-lighten-4">
    <slot>
      <VContainer class="py-12 text-center">
        <h2 id="cta-title" class="text-h5 text-sm-h4 mb-4">{{ finalCTA.heading }}</h2>
        <p class="mb-6">{{ finalCTA.subheading }}</p>
        <VBtn
          color="secondary"
          :href="finalCTA.primaryCTA.link"
          target="_blank"
          rel="noopener"
          :aria-label="finalCTA.primaryCTA.ariaLabel"
        >
          <VIcon start icon="mdi-whatsapp" />
          {{ finalCTA.primaryCTA.text }}
        </VBtn>
      </VContainer>
    </slot>
  </section>
</template>
<script setup lang="ts">
import { useWhatsApp } from '~/composables/useWhatsApp';

const { buildLink } = useWhatsApp();

const finalCTA = {
  heading: '¡Comienza tu camino hacia la libertad financiera!',
  subheading:
    'Agenda una conversación por WhatsApp y obten tu plan de inversión personalizado.',
  primaryCTA: {
    text: 'Iniciar chat por WhatsApp',
    icon: 'mdi-whatsapp',
    link: buildLink('50664355539', 'Hola, quiero empezar a invertir'),
    ariaLabel: 'Iniciar chat de WhatsApp con asesor',
  },
};
</script>
