<template>
  <section aria-labelledby="problems-title" class="py-10">
    <slot>
      <VContainer class="py-12">
        <h2 id="problems-title" class="text-h5 text-sm-h4 mb-6">{{ problems.heading }}</h2>
        <VList>
          <VListItem
            v-for="(item, idx) in problems.problems"
            :key="idx"
            prepend-icon="mdi-alert-circle"
          >
            {{ item }}
          </VListItem>
        </VList>
      </VContainer>
    </slot>
  </section>
</template>
<script setup lang="ts">
const problems = {
  heading: '¿Te suena familiar?',
  problems: [
    'Trabajas duro pero sientes que nunca podrás jubilarte temprano.',
    'Tienes deudas y poco dinero para ahorrar o invertir cada mes.',
    'Te da miedo invertir por riesgo a perderlo todo o caer en estafas.',
    'No sabes cómo ni por dónde empezar a invertir.',
  ],
};
</script>
