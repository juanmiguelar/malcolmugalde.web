<template>
  <section aria-labelledby="solution-title" class="py-10 bg-grey-lighten-4">
    <slot>
      <VContainer class="py-12">
        <h2 id="solution-title" class="text-h5 text-sm-h4 mb-4">{{ solution.heading }}</h2>
        <p class="mb-6">{{ solution.content }}</p>
        <VList>
          <VListItem
            v-for="(benefit, idx) in solution.benefits"
            :key="idx"
            prepend-icon="mdi-check-circle"
          >
            {{ benefit }}
          </VListItem>
        </VList>
      </VContainer>
    </slot>
  </section>
</template>
<script setup lang="ts">
const solution = {
  heading: 'La Solución: Invierte con Confianza',
  content:
    'Te ayudo a crear un plan de inversión seguro y a la medida de tu bolsillo. Con acompañamiento 1:1 aprenderás a hacer crecer tu dinero y trabajar rumbo a tu retiro anticipado.',
  benefits: [
    'Empieza a invertir con poco dinero y construye tu patrimonio.',
    'Elimina el miedo a invertir: aprende paso a paso con un experto.',
    'Acelera tu retiro: haz que tu dinero trabaje por ti.',
  ],
};
</script>
