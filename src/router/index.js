import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Teams from "../views/Teams.vue"
import Games from "../views/Games.vue"
import Ranking from "../views/Ranking.vue"
import Home from "../views/Home.vue"


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/teams",
    name: "teams",
    component: Teams,
  },
  {
    path: "/games",
    name: "games",
    component: Games,
  },{
    path: "/ranking",
    name: "ranking",
    component: Ranking,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
