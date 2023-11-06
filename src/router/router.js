import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../components/pages/AppHome.vue";
import AppMassaggi from "../components/pages/AppMassaggi.vue";
import AppAbout from "../components/pages/AppAbout.vue";
import AppCollaboazioni from "../components/pages/AppCollaboazioni.vue";
import AppContatti from "../components/pages/AppContatti.vue";
const routes = [
  {
    path: "",
    redirect: "home",
  },
  {
    path: "/home",
    name: "home",
    component: AppHome,
  },
  {
    path: "/about",
    name: "about",
    component: AppAbout,
  },
  {
    path: "/massaggi",
    name: "massaggi",
    component: AppMassaggi,
  },
  {
    path: "/collaborazioni",
    name: "collaboarazioni",
    component: AppCollaboazioni,
  },
  {
    path: "/contatti",
    name: "contatti",
    component: AppContatti,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
