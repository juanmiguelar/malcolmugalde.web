<template>
  <section class="py-8" aria-label="Mensaje de confianza sobre la modalidad del acompañamiento">
    <v-container class="d-flex justify-center">
      <v-responsive max-width="960">
        <v-card :variant="props.variant" class="pa-6">
          <blockquote class="text-h6 text-sm-h5 mb-0" aria-live="polite">
            «No son cursos pregrabados ni programas impersonales de más de $1000 como tantos que hay allá afuera. El acompañamiento es real, humano, cercano y sincrónico.»
          </blockquote>
        </v-card>
      </v-responsive>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<'elevated' | 'outlined' | 'tonal' | 'flat'>,
    default: 'elevated',
  },
})
</script>

<style scoped>
blockquote {
  line-height: 1.6;
}
</style>
