// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueScrollTo from "vue-scrollto";
import VueFuse from "vue-fuse";

export default function(Vue, { head }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease"
  });

  Vue.use(VueFuse);

  head.meta.push({
    name: "keywords",
    content:
      "Vue.js, JavaScript, FP, npm, тестування, функціональне програмування, переклади, статті, веб, програмування"
  });

  head.meta.push({
    name: "description",
    content: "Кращі технічні статті"
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700"
  });
}
