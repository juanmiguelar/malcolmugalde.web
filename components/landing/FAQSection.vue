<template>
  <section aria-labelledby="faq-title" class="py-10">
    <slot>
      <VContainer class="py-12">
        <h2 id="faq-title" class="text-h5 text-sm-h4 mb-6 text-center">{{ faq.heading }}</h2>
        <VExpansionPanels>
          <VExpansionPanel v-for="(item, idx) in faq.faqs" :key="idx">
            <VExpansionPanelTitle>{{ item.question }}</VExpansionPanelTitle>
            <VExpansionPanelText>{{ item.answer }}</VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </VContainer>
    </slot>
  </section>
</template>
<script setup lang="ts">
const faq = {
  heading: 'Preguntas Frecuentes',
  faqs: [
    {
      question: 'No tengo mucho dinero, ¿puedo invertir?',
      answer:
        'Sí, no necesitas grandes sumas para empezar. Te enseñamos a invertir desde montos pequeños y construir hábito.',
    },
    {
      question: '¿Y si no tengo tiempo para un curso?',
      answer:
        'La asesoría 1:1 se adapta a tu horario. Con sesiones cortas pero efectivas, no perderás tiempo en información irrelevante.',
    },
    {
      question: '¿Cómo sé que esto no es una estafa?',
      answer:
        'Trabajamos con instrumentos financieros seguros y transparentes. Además, tu dinero siempre está bajo tu control en cuentas a tu nombre.',
    },
  ],
};
</script>
