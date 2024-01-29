<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useMessageStore } from "../../stores/MessageStore";
import messageIndex from '../../components/message.index.vue';
import messageInput from '../../components/message.input.vue';

const route = useRoute();
const messageStore = useMessageStore();
const conversationId = route?.params?.conId;

onMounted(() => {
    messageStore.getMessages(conversationId);
    console.log(conversationId)
})

window.Echo.private(`message.${conversationId}`).listen('.sendMessageEvent', function (data) {
    //   messageStore.messages.push(JSON.stringify(data))
    messageStore.getMessages(conversationId)
});

</script>
<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white shadow-xl sm:rounded-lg">
                <messageIndex :messages="messageStore.messages" />
                <messageInput :conversation_id="conversationId" />
            </div>
        </div>
    </div>
</template>