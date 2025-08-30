<template>
  <section aria-labelledby="testimonials-title" class="py-10">
    <slot>
      <VContainer class="py-12">
        <h2 id="testimonials-title" class="text-h5 text-sm-h4 mb-6 text-center">{{ testimonials.heading }}</h2>
        <VRow>
          <VCol
            v-for="(test, idx) in testimonials.testimonials"
            :key="idx"
            cols="12"
            md="6"
            class="mb-4"
          >
            <VCard elevation="2">
              <VCardText>
                <em>“{{ test.quote }}”</em>
                <div class="mt-4 font-weight-medium">{{ test.author }}</div>
                <div class="text-caption">{{ test.authorInfo }}</div>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VContainer>
    </slot>
  </section>
</template>
<script setup lang="ts">
const testimonials = {
  heading: 'Testimonios',
  testimonials: [
    {
      quote:
        'Gracias a la asesoría, invertí por primera vez con poco dinero y ahora proyecto retirarme 10 años antes!',
      author: 'Carlos M.',
      authorInfo: 'Cliente, 35 años',
    },
    {
      quote:
        'Tenía miedo a las inversiones, pero aprendí paso a paso y ahora mi dinero crece de forma segura.',
      author: 'Ana P.',
      authorInfo: 'Cliente, 29 años',
    },
  ],
};
</script>
