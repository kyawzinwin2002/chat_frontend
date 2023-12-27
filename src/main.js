import { createApp } from "vue";
import "./style.css";
import axios from "axios";
import Cookie from "js-cookie";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./routes";

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

const app = createApp(App);
app.use(pinia).use(router).mount("#app");
