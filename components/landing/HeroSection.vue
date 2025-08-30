<template>
  <section role="banner" class="py-12">
    <slot>
      <VImg :src="hero.image" :alt="hero.imageAlt" cover height="500" class="d-flex align-center">
        <VContainer class="text-center text-white">
          <h1 class="text-h4 text-sm-h2 font-weight-bold">{{ hero.title }}</h1>
          <p class="text-subtitle-1 text-sm-h5">{{ hero.subtitle }}</p>
          <VBtn
            color="secondary"
            class="mt-4"
            :href="hero.primaryCTA.link"
            target="_blank"
            rel="noopener"
            :aria-label="hero.primaryCTA.ariaLabel"
          >
            <VIcon start icon="mdi-whatsapp" />
            {{ hero.primaryCTA.text }}
          </VBtn>
        </VContainer>
      </VImg>
    </slot>
  </section>
</template>
<script setup lang="ts">
import { useWhatsApp } from '~/composables/useWhatsApp';

const { buildLink } = useWhatsApp();

const hero = {
  title: 'Aprende a invertir desde cero y retírate antes de los 60 años',
  subtitle: 'Asesoría financiera 100% personalizada para lograr tu libertad financiera',
  image: 'https://placehold.co/1600x500',
  imageAlt: 'Aprende a invertir desde cero y retírate antes de los 60 años',
  primaryCTA: {
    text: 'Hablar por WhatsApp',
    icon: 'mdi-whatsapp',
    link: buildLink('521234567890', 'Hola, quiero más información'),
    ariaLabel: 'Abrir chat de WhatsApp con asesor financiero',
  },
};
</script>
