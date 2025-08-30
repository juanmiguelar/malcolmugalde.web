# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Analytics y Search Console

### ¿Qué es Google Analytics 4 (GA4) y para qué sirve?
GA4 permite medir el tráfico y las acciones que realizan los usuarios en tu sitio. Con estos datos puedes entender qué secciones funcionan mejor y optimizar la conversión.

**Configuración básica:**
1. Crea una propiedad en [analytics.google.com](https://analytics.google.com).
2. Genera un flujo web y copia el *ID de medición*.
3. Inserta la etiqueta de GA4 en tu proyecto (por ejemplo, mediante un plugin o directamente en `app.vue`).

### ¿Qué es Google Search Console y por qué lo necesitas?
Search Console muestra cómo Google ve tu sitio. Sirve para monitorear el rendimiento en las búsquedas, detectar errores de indexación y enviar sitemaps.

**Configuración básica:**
1. Accede a [search.google.com/search-console](https://search.google.com/search-console).
2. Añade tu dominio y verifica la propiedad (DNS recomendado).
3. Envía el sitemap generado por Nuxt para que Google rastree tu contenido.
