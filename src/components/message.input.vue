<script setup>
import { ref } from 'vue';
import { useMessageStore } from "../stores/MessageStore";
import { Icon } from "@iconify/vue"

const { conversation_id } = defineProps(["conversation_id"]);
const message = ref(null);
const messageStore = useMessageStore();
const photoInput = ref(null)

const sendMessageHandler = () => {
    messageStore.sendMessage(message.value, conversation_id);
    message.value = "";
}

const photoClickHandler = () => {
    photoInput.value.click();
}

const photoSelectHandler = (e) => {
    const formData = new FormData();
    formData.append("message", e.target.files[0]);
    formData.append("conversation_id",conversation_id);
    messageStore.sendPhotoMessage(formData);
}

</script>
<template>
    <div class="flex gap-3 justify-between p-3">
        <div class=" w-[100%] flex gap-3 items-center">
            <input v-model="message" @keyup.enter="sendMessageHandler" type="text" placeholder="Write a message..."
                class="rounded-lg w-full" />
                <input @change="photoSelectHandler" ref="photoInput" type="file" class=" hidden" accept="image/*">
            <button @click="photoClickHandler">
            <Icon
             icon="ic:baseline-insert-photo"
             width="42"
             color="#1F2544"
            />
            </button>
        </div>
        <button @click="sendMessageHandler" class="rounded-lg bg-blue-500 text-white px-5 py-2">
            Send
        </button>
    </div>
</template>