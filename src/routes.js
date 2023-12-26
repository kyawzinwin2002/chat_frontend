import { createRouter, createWebHistory } from "vue-router";
import WelcomeVue from "./views/pages/Welcome.vue";
import RegisterVue from "./views/pages/Register.vue";
import LoginVue from "./views/pages/Login.vue";

const routes = [
    {
        path : "/",
        component : WelcomeVue
    },
    {
        path : "/register",
        component : RegisterVue
    },
    {
        path : "/login",
        component : LoginVue
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router