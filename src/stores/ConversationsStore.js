import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useConversationsStore = defineStore("conversations",() => {
    const conversations = ref(null);

    const getConversations = () => {
        axios.get("/conversations/index")
            .then(res => {
                conversations.value = res.data.data.conversations;
            })
            .catch(e => {
                console.log(e)
            })
    }

    return { conversations, getConversations };
})