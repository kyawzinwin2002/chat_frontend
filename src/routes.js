import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "./stores/AuthStore";
import WelcomeVue from "./views/pages/Welcome.vue";
import RegisterVue from "./views/pages/Register.vue";
import LoginVue from "./views/pages/Login.vue";
import Conversations from "./views/pages/Conversations.vue";

const routes = [
  {
    path: "/",
    component: WelcomeVue,
  },
  {
    path: "/register",
    component: RegisterVue,
  },
  {
    path: "/login",
    component: LoginVue,
  },
  {
    path: "/conversations",
    component: Conversations,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const authStore = useAuthStore();

    if (!authStore.authToken) {
      next({
        path: "/",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
