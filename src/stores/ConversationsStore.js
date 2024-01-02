import { defineStore } from "pinia";
import { ref } from "vue";

export const useConversationsStore = defineStore("conversations",() => {
    const conversations = ref(null);

    const getConversations = () => {
        
    }
})