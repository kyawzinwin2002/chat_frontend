<script setup>
import { onBeforeUnmount, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useMessageStore } from "../../stores/MessageStore";
import messageIndex from '../../components/message.index.vue';
import messageInput from '../../components/message.input.vue';
import Cookie from 'js-cookie';

const route = useRoute();
const messageStore = useMessageStore();
const conversationId = route?.params?.conId;

const subscribeToPusher = () => {
    window.Echo.private(`message.${conversationId}`)
        .listen('.sendMessageEvent', function (data) {
            messageStore.messages.unshift(data.message)
        });
}

window.Echo.connector.pusher.connection.bind("disconnected", () => {
    const state = window.Echo.connector.pusher.connection.state;
    if (state != "connecting" && state != "connected") {
        window.Echo.connector.pusher.connect();
    }
})


onMounted(() => {
    messageStore.getMessages(conversationId);
    subscribeToPusher()
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