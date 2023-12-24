<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import jsCookie from 'js-cookie';
import { useAuthStore } from '../../stores/AuthStore'

const authStore = useAuthStore()

const formData = reactive({
    email: null,
    password: null
})

const getUser = () => {
    axios.get("/user")
        .then(res => {
            authStore.setAuthUser(res.data)
        })
        .catch(e => {
            console.log(e)
        })
}

const loginHandler = async () => {
    await axios.post("/login", {
        email: formData.email,
        password: formData.password
    })
        .then(response => {
            authStore.setAuthToken(response.data.data.token);
            getUser();
        })
        .catch(e => {
            console.log(e)
        })
}

</script>
<template>
    <div class="h-screen flex flex-col gap-10 items-center justify-center">
        <h1 class=" text-xl font-semibold">Login Form</h1>
        <form @submit.prevent="loginHandler" class="w-96 mx-auto">

            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" name="email" v-model="formData.email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="name@something.com" required>
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    password</label>
                <input type="password" id="password" v-model="formData.password"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required>
            </div>


            <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        </form>

    </div>
</template>