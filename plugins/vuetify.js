import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'landingTheme',
      themes: {
        landingTheme: {
          dark: false,
          colors: {
            primary: '#004c8c',
            secondary: '#00BFA5',
            accent: '#FFC107',
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
