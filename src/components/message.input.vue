<script setup>
import { ref } from 'vue';
import { useMessageStore } from "../stores/MessageStore";

const { conversation_id } = defineProps(["conversation_id"]);
const message = ref(null);
const messageStore = useMessageStore();

const sendMessageHandler = () => {
    messageStore.sendMessage(message.value, conversation_id);
    message.value = "";
}

</script>
<template>
    <div class="flex gap-3 justify-between p-3">
        <input v-model="message" @keyup.enter="sendMessageHandler" type="text" placeholder="Write a message..."
            class="rounded-lg w-full" />
        <button @click="sendMessageHandler" class="rounded-lg bg-blue-500 text-white px-5 py-2">
            Send
        </button>
    </div>
</template>