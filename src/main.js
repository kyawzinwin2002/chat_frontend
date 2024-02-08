import { createApp } from "vue";
import "./style.css";
import axios from "axios";
import Cookie from "js-cookie";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./routes";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

const pinia = createPinia();

axios.defaults.baseURL = "http://localhost:8000/api/v1";
axios.defaults.headers.common["Accept"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    const token = Cookie.get("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const token = Cookie.get("token")

  window.Pusher = Pusher;
  
  window.Echo = new Echo({
    authEndpoint: "http://localhost:8000/broadcasting/auth",
    broadcaster: "pusher",
    key: "39d321e2203dcf5ae539",
    cluster: "ap1",
    forceTLS: true,
    encrypted: true,
    auth: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });


const app = createApp(App);
app.use(pinia).use(router).mount("#app");
