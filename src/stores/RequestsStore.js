import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useRequestsStore = defineStore("requests", () => {
    const requests = ref([]);

    function getRequests()
    {
        axios.get("/requests")
            .then(res => {
                requests.value = res?.data
            })
            .catch(e => {
                console.log(e)
            })
    }

    function accept(friend_id)
    {
        let foundIndex = requests.value.findIndex(r => r.pivot.friend_id == friend_id)
        if(foundIndex !== -1)
        {
            requests.value.splice(foundIndex,1);
        }
    }

    function deleteRequest(friend_id)
    {
        let foundIndex = requests.value.findIndex(r => r.pivot.friend_id == friend_id)
        if(foundIndex !== -1)
        {
            requests.value.splice(foundIndex,1);
        }

        axios.delete(`request/${friend_id}/delete`)
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
    }

    return { requests, getRequests, deleteRequest, accept }
})