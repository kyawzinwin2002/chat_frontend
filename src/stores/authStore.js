import { defineStore } from "pinia";
import { ref } from "vue";

export const  useAuthStore = defineStore("auth",() => {
    const authToken = ref(null);
    function setAuthToken(token){
        authToken.value = token
    }

    return { authToken, setAuthToken }
})