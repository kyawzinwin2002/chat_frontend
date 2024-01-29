<script setup>
import { onMounted } from 'vue';
import { useRequestsStore } from '../../stores/RequestsStore';
import { useContactStore } from '../../stores/ContactStore';

const requestStore = useRequestsStore();
const contactStore = useContactStore();

onMounted(() => {
    requestStore.getReceivedRequests();
})

const friendAcceptHandler = (sender_id) => {
    contactStore.acceptFriend(sender_id);
    requestStore.accept(sender_id);
}

const deleteRequestHandler = (sender_id) => {
    requestStore.deleteRequest(sender_id);
}
</script>

<template>
    <div class=" w-screen h-screen flex flex-col items-center">
        <div class=" my-5 w-[500px]">
            <h1 class=" text-xl font-semibold mb-3">Requests</h1>
            <div class=" border py-3 px-5  mb-2 rounded-lg flex justify-between items-center"
                v-for="request in requestStore.requests" v-if="requestStore.requests.length > 0">
                <h1>{{ request.name }}</h1>
                <div class=" flex gap-3 items-center">
                    <button @click="friendAcceptHandler(request.pivot.friend_id, request.id)"
                        class=" px-8 py-2 bg-blue-500 text-white rounded-lg">Accept</button>
                    <button @click="deleteRequestHandler(request.pivot.friend_id)"
                        class=" px-8 py-2 bg-gray-500 text-white rounded-lg">Delete</button>
                </div>
            </div>
            <div class="" v-else>
                There is no request!
            </div>
        </div>

    </div>
</template>