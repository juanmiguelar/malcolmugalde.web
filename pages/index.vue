<template>
  <VContainer fluid class="pa-0">
    <!-- Hero Section -->
    <section>
      <VImg :src="hero.image" cover height="500" class="d-flex align-center">
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
    </section>

    <!-- Problem Section -->
    <section>
      <VContainer class="py-12">
        <h2 class="text-h5 text-sm-h4 mb-6">{{ problems.heading }}</h2>
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
    </section>

    <!-- Solution Section -->
    <section class="bg-grey-lighten-4">
      <VContainer class="py-12">
        <h2 class="text-h5 text-sm-h4 mb-4">{{ solution.heading }}</h2>
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
    </section>

    <!-- Services Section -->
    <section>
      <VContainer class="py-12">
        <h2 class="text-h5 text-sm-h4 mb-6">{{ services.heading }}</h2>
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
    </section>

    <!-- About Advisor Section -->
    <section class="bg-grey-lighten-4">
      <VContainer class="py-12">
        <h2 class="text-h5 text-sm-h4 mb-6 text-center">{{ about.heading }}</h2>
        <VRow align="center">
          <VCol cols="12" md="4" class="text-center mb-4 mb-md-0">
            <VImg :src="about.photo" alt="Foto del asesor" max-width="250" class="rounded-circle mx-auto" />
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
    </section>

    <!-- Testimonials Section -->
    <section>
      <VContainer class="py-12">
        <h2 class="text-h5 text-sm-h4 mb-6 text-center">{{ testimonials.heading }}</h2>
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
    </section>

    <!-- FAQ Section -->
    <section class="bg-grey-lighten-4">
      <VContainer class="py-12">
        <h2 class="text-h5 text-sm-h4 mb-6 text-center">{{ faq.heading }}</h2>
        <VExpansionPanels>
          <VExpansionPanel v-for="(item, idx) in faq.faqs" :key="idx">
            <VExpansionPanelTitle>{{ item.question }}</VExpansionPanelTitle>
            <VExpansionPanelText>{{ item.answer }}</VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </VContainer>
    </section>

    <!-- Final CTA Section -->
    <section>
      <VContainer class="py-12 text-center">
        <h2 class="text-h5 text-sm-h4 mb-4">{{ finalCTA.heading }}</h2>
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
    </section>
  </VContainer>
</template>

<script setup>
const hero = {
  title: 'Aprende a invertir desde cero y retírate antes de los 60 años',
  subtitle: 'Asesoría financiera 100% personalizada para lograr tu libertad financiera',
  image: 'https://placehold.co/1600x500',
  primaryCTA: {
    text: 'Hablar por WhatsApp',
    icon: 'mdi-whatsapp',
    link: 'https://wa.me/521234567890?text=Hola,%20quiero%20más%20información',
    ariaLabel: 'Abrir chat de WhatsApp con asesor financiero',
  },
};

const problems = {
  heading: '¿Te suena familiar?',
  problems: [
    'Trabajas duro pero sientes que nunca podrás jubilarte temprano.',
    'Tienes deudas y poco dinero para ahorrar o invertir cada mes.',
    'Te da miedo invertir por riesgo a perderlo todo o caer en estafas.',
    'No sabes cómo ni por dónde empezar a invertir.',
  ],
};

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
        'Curso guiado paso a paso para principiantes. Aprende los fundamentos de inversión y construye un plan para lograr tu libertad financiera anticipada.',
    },
  ],
  cta: {
    text: 'Quiero más información',
    link: 'https://wa.me/521234567890?text=Hola,%20estoy%20interesado%20en%20sus%20servicios',
    ariaLabel: 'Abrir WhatsApp para más información de servicios',
  },
};

const about = {
  heading: 'Sobre Mí',
  photo: 'https://placehold.co/250x250',
  bio: 'Soy [Nombre Asesor], MBA(c) en Finanzas y asesor de inversiones con más de 5 años de experiencia. He ayudado a más de 50 clientes a dar sus primeros pasos en el mundo de las inversiones de forma segura.',
  credentials: [
    '+5 años de experiencia en inversión',
    'MBA Avanzado en Finanzas (en curso)',
    '50+ clientes satisfechos',
    '$200,000 invertidos por clientes asesorados',
  ],
};

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

const faq = {
  heading: 'Preguntas Frecuentes',
  faqs: [
    {
      question: '¿No tengo mucho dinero, ¿puedo invertir?',
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

const finalCTA = {
  heading: '¡Comienza tu camino hacia la libertad financiera!',
  subheading:
    'Agenda una conversación por WhatsApp y obten tu plan de inversión personalizado.',
  primaryCTA: {
    text: 'Iniciar chat por WhatsApp',
    icon: 'mdi-whatsapp',
    link: 'https://wa.me/521234567890?text=Hola,%20quiero%20empezar%20a%20invertir',
    ariaLabel: 'Iniciar chat de WhatsApp con asesor',
  },
};
</script>
