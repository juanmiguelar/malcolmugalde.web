<template>
  <section aria-labelledby="about-title" class="py-10 bg-grey-lighten-4">
    <slot>
      <VContainer class="py-12">
        <h2 id="about-title" class="text-h5 text-sm-h4 mb-6 text-center">{{ about.heading }}</h2>
        <VRow align="center">
          <VCol cols="12" md="4" class="text-center mb-4 mb-md-0">
            <VImg
              :src="about.photo"
              alt="Foto del asesor"
              max-width="250"
              class="rounded-circle mx-auto"
              loading="lazy"
            />
          </VCol>
          <VCol cols="12" md="8">
            <p class="mb-4">{{ about.bio }}</p>
            <VList>
              <VListItem
                v-for="(cred, idx) in about.credentials"
                :key="idx"
                prepend-icon="mdi-star-circle"
              >
                {{ cred }}
              </VListItem>
            </VList>
          </VCol>
        </VRow>
      </VContainer>
    </slot>
  </section>
</template>
<script setup lang="ts">
const about = {
  heading: 'Sobre Mí',
  photo: '/PERFIL.jpeg',
  bio: 'Soy [Nombre Asesor], MBA(c) en Finanzas y asesor de inversiones con más de 5 años de experiencia. He ayudado a más de 50 clientes a dar sus primeros pasos en el mundo de las inversiones de forma segura.',
  credentials: [
    '+5 años de experiencia en inversión',
    'MBA Avanzado en Finanzas (en curso)',
    '50+ clientes satisfechos',
    '$200,000 invertidos por clientes asesorados',
  ],
};
</script>
