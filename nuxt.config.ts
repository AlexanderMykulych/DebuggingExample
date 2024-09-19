import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
   modules: [
     '@unocss/nuxt',
     '@primevue/nuxt-module',
     '@vueuse/nuxt',
  ],
   css: ['~/assets/main.scss'],
   primevue: {
        options: {
            theme: {
                preset: Aura,
            },
        },
    },
})