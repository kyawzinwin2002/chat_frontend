<script setup>
import { useAuthStore } from '../stores/AuthStore';
import { onMounted,ref } from 'vue';

const { messages } = defineProps(["messages"]);
const authStore = useAuthStore()
const messageContainer = ref(null)
const messageRef = ref(null)

const authOrNot = (sender_id) => {
    return authStore.user.id == sender_id;
}

</script>

<template>
    <div ref="messageContainer" class="h-96 flex  flex-col-reverse gap-5 overflow-y-scroll p-3">
        <div class="flex flex-col my-5" v-for="(message, index) in messages" :key="index" ref="messageRef">
            <p v-if="authOrNot(message?.sender?.id)" class="ms-auto p-3 rounded-md bg-slate-300 text-black">
                {{ message?.message?.content }}
            </p>
            <p v-else class="me-auto p-3 rounded-md bg-slate-300 text-black">
                {{ message?.message?.content }}
            </p>
        </div>
    </div>
</template>
