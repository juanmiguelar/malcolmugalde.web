<template>
  <section class="py-6 py-md-8" aria-label="Mensaje de confianza sobre la modalidad del acompañamiento">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="11" md="10" lg="8">
          <v-card :variant="variant" class="pa-4 pa-sm-6 pa-md-8">
            <blockquote class="quote" aria-live="polite">
              «No son cursos pregrabados ni programas impersonales de más de $1000 como tantos que hay allá afuera. El acompañamiento es real, humano, cercano y sincrónico.»
            </blockquote>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: { type: String, default: 'elevated' }
});
</script>

<style scoped>
/* Tipografía y legibilidad responsive */
.quote {
  /* tamaños responsivos: h6 en móvil, h5 en >= md */
  font-size: clamp(1rem, 2.5vw, 1.375rem); /* ~16px a ~22px */
  line-height: 1.6;
  margin: 0;
  text-wrap: pretty;
  overflow-wrap: anywhere; /* evita desbordes en palabras largas */
  hyphens: auto;
}

/* Ajustes visuales del card en mobile */
:deep(.v-card) {
  border-radius: 16px;
}
</style>
