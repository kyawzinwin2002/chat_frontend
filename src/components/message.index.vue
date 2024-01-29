<script setup>
import { useAuthStore } from '../stores/AuthStore';

const { messages } = defineProps(["messages"]);
const authStore = useAuthStore()

const authOrNot = (sender_id) => {
    return authStore.user.id == sender_id;
}
</script>

<template>
    <div class="h-96 flex flex-col gap-5 overflow-y-scroll p-3">
        <div class="flex flex-col my-5" v-for="message in messages">
            {{ message }}
            <p
                v-if="authOrNot(message?.sender?.id)"
                class="ms-auto p-3 rounded-md bg-slate-300 text-black"
            >
                {{ message?.message?.content }}
            </p>
            <p v-else class="me-auto p-3 rounded-md bg-slate-300 text-black">
                {{ message?.message?.content }}
            </p>

        </div>
    </div>
</template>
