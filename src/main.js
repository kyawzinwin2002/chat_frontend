import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000/api/v1";
axios.defaults.headers.common["Accept"] = "application/json";

createApp(App).mount('#app')
