<script setup>
import { onMounted } from 'vue';
import { useContactStore } from "../../stores/ContactStore";
const friendsStore = useContactStore()

onMounted(() => {
    friendsStore.getFriendsList()
    friendsStore.getStrangers()
})

const addFriendHandler = (id) => {
    friendsStore.addFriend(id);
}

const unfriendHandler = (friend_id) => {
    friendsStore.unfriend(friend_id);
    friendsStore.getStrangers();
}

</script>
<template>
    <div class=" w-screen h-screen flex flex-col items-center">
        <div class=" my-5 w-[500px]">
            <h1 class=" text-xl font-semibold mb-3">Friends</h1>
            <div class=" border py-4 cursor-pointer px-5  mb-3 rounded-lg flex justify-between items-center"
                v-for="friend in friendsStore.friends" v-if="friendsStore.friends.length > 0">
                <h1>{{ friend.name }}</h1>
                <div class=" flex items-center gap-2">
                    <button class=" px-7 py-2 bg-blue-500 text-white rounded-lg">Chat</button>
                    <button @click="unfriendHandler(friend.id)" class=" px-7 py-2 bg-gray-500 text-white rounded-lg">Unfriend</button>
                </div>
            </div>
            <div class="" v-else>
                There is no friend! Go add to make new friends.
            </div>
        </div>
        <hr>
        <div class=" my-5 w-[500px]">
            <h1 class=" text-xl font-semibold mb-3">Suggestions</h1>
            <div class=" border py-3 px-5  mb-2 rounded-lg flex justify-between items-center"
                v-for="stranger in friendsStore.strangers" v-if="friendsStore.strangers.length > 0">
                <h1>{{ stranger.name }}</h1>
                <button @click="addFriendHandler(stranger.id)" class=" px-8 py-2 bg-blue-500 text-white rounded-lg">Add</button>
            </div>
        </div>
    </div>
</template>