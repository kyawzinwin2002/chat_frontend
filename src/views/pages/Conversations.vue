<script setup>
import { onMounted } from 'vue';
import { useConversationsStore } from '../../stores/ConversationsStore';
import { useAuthStore } from "../../stores/AuthStore";

const conversationStore = useConversationsStore();
const authStore = useAuthStore();

onMounted(() => {
    conversationStore.getConversations()
})

const authOrNot = (user_array) => {
    return user_array.filter((user) => user.id !== authStore.user.id);
}

</script>
<template>
    <div class=" w-screen h-screen flex flex-col items-center ">
        <div class=" my-5 w-[500px]">
            <h1 class=" text-xl font-semibold mb-3">Conversations</h1>

            <router-link v-for="conversation in conversationStore.conversations"
                v-if="conversationStore.conversations?.length" :to="{ path: `/chat/conversation/${conversation.id}` }"
                class=" border py-5 px-5  mb-2 rounded-lg flex cursor-pointer justify-between items-center">{{
                    authOrNot(conversation?.users)[0]?.name }}
            </router-link>

            <div v-else class="">
                There is no conversations! Let's talk with friends.
            </div>
        </div>
    </div>
</template>                                           