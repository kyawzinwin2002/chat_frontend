import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMessageStore = defineStore("message", () => {
  const messages = ref(null);

  function getMessages(id) {
    axios.get(`/conversation/${id}/messages`).then((res) => {
      messages.value = res?.data.data.messages;
    });
  }

  function sendMessage(message, conversation_id) {
    axios
      .post("/message/send", {
        message: message,
        conversation_id: conversation_id,
      })
      .then((res) => {})
      .catch((e) => {
        console.log(e);
      });
  }

  return { messages, getMessages, sendMessage };
});
