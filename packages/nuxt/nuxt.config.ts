// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/testing-sites/nuxt/",
    head: {
      script: [
        {
          id: "mierucaOptimizejs",
          innerHTML: `
window.__optimizeid = window.__optimizeid || [];__optimizeid.push([1842686338]);
(function () {var fjs = document.createElement('script');fjs.type = 'text/javascript';
fjs.async = true;fjs.id = "fjssync";var timestamp = new Date;fjs.src = 'https://opt.mieru-ca.com/service/js/mieruca-optimize.js?v=' + timestamp.getTime();
var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(fjs, x);})();
          `,
        },
      ],
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
});
