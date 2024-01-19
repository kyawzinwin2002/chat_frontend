import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "./stores/AuthStore";
import WelcomeVue from "./views/pages/Welcome.vue";
import RegisterVue from "./views/pages/Register.vue";
import LoginVue from "./views/pages/Login.vue";
import Friends from "./views/pages/Friends.vue";
import Conversations from "./views/pages/Conversations.vue";
import Requests from "./views/pages/Requests.vue";
import Chat from "./views/pages/Chat.vue";

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
    path: "/friends",
    component: Friends,
    meta: { requiresAuth: true },
  },
  {
    path: "/conversations",
    component: Conversations,
    meta: { requiresAuth: true }
  },
  {
    path: "/requests",
    component: Requests,
    meta: { requiresAuth: true }
  },
  {
    path: "/chat/:id",
    component: Chat,
    meta: { requiresAuth: true }
  }
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
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
