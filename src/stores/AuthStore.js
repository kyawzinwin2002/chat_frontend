import { defineStore } from "pinia";
import { ref } from "vue";
import Cookies from "js-cookie";

export const useAuthStore = defineStore("auth",() => {
    const authToken = ref(null);
    const user = ref(null);

    const storedToken = Cookies.get("token");
    const storedUser = Cookies.get("user");

    if(storedToken)
    {
        authToken.value = storedToken
    }

    if(storedUser)
    {
        user.value = JSON.parse(storedUser)
    }

    function setAuthToken(token)
    {
        authToken.value = token;
        Cookies.set("token",token);
    }

    function setAuthUser(person)
    {
        user.value = person;
        Cookies.set("user",JSON.stringify(person));
    }

    function removeAuthUser()
    {
        authToken.value = null;
        user.value = null;
        Cookies.remove("token");
        Cookies.remove("user");
    }

    return { authToken, user, setAuthToken, setAuthUser, removeAuthUser };
})