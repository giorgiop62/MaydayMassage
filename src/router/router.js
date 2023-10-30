import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../components/pages/AppHome.vue";
import AppMassaggi from "../components/pages/AppMassaggi.vue";
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
    path: "/massaggi",
    name: "massaggi",
    component: AppMassaggi,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
