import { useHead } from '#imports'

interface SEOOptions {
  title?: string
  description?: string
  image?: string
  keywords?: string[]
  schema?: Record<string, any> | Record<string, any>[]
}

const defaultMeta: Required<Omit<SEOOptions, 'schema'>> = {
  title: 'Asesor financiero en Costa Rica | Educación e inversión',
  description:
    'Asesoría financiera para costarricenses que desean invertir desde cero y alcanzar el retiro anticipado.',
  image: 'https://placehold.co/1200x630.png',
  keywords: [
    'inversiones Costa Rica',
    'asesor financiero',
    'educación financiera',
    'retiro anticipado',
    'finanzas personales',
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Asesor Financiero CR',
  url: 'https://example.com',
  logo: 'https://placehold.co/250x250',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CR',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Malcolm Ugalde',
  jobTitle: 'Asesor Financiero',
  worksFor: {
    '@type': 'Organization',
    name: 'Asesor Financiero CR',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Asesoría financiera personalizada',
  provider: { '@type': 'Person', name: 'Malcolm Ugalde' },
  areaServed: 'CR',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto dinero necesito para empezar a invertir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puedes comenzar con montos pequeños desde $100.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Ofreces asesoría personalizada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, cada plan se adapta a tus objetivos.',
      },
    },
  ],
}

export const defaultSchema = [organizationSchema, personSchema, serviceSchema, faqSchema]

export function useSEO(options: SEOOptions = {}) {
  const meta = { ...defaultMeta, ...options }
  const schemaList = Array.isArray(options.schema) ? options.schema : defaultSchema

  useHead({
    title: meta.title,
    meta: [
      { name: 'description', content: meta.description },
      { name: 'keywords', content: meta.keywords.join(', ') },
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:image', content: meta.image },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:image', content: meta.image },
    ],
    script: schemaList.map((s) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(s),
    })),
  })
}
