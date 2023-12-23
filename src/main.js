import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import axios from "axios";
import { createPinia } from "pinia";
import App from "./App.vue";
import Welcome from "./views/pages/Welcome.vue";
import Register from "./views/pages/Register.vue";
import Login from "./views/pages/Login.vue";

axios.defaults.baseURL = "http://localhost:8000/api/v1";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const pinia = createPinia();

const routes = [
  {
    path: "/",
    component: Welcome,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router).use(pinia).mount("#app");

