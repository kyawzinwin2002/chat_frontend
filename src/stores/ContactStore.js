import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useContactStore = defineStore("contact",() => {
    const friends = ref([]);
    const strangers = ref([]);

    function getFriendsList() {
        axios.get("friend/list")
            .then(res => {
                friends.value = res?.data
            })
            .catch(e => {
                console.log(e)
            })
    }

    function getStrangers()
    {
        axios.get("strangers/list")
            .then(res => {
                strangers.value = res?.data
            })
            .catch(e => {
                console.log(e)
            })
    }

    function addFriend(id)
    {
        axios.get(`friend/${id}/add`)
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
    }

    function acceptFriend(id)
    {
        axios.get(`friend/${id}/accept`)
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
    }

    function unfriend(friend_id)
    {
        let foundIndex = friends.value.findIndex(f => f.id == friend_id)
        if(foundIndex !== -1)
        {
            friends.value.splice(foundIndex,1);
        }

        axios.get(`friend/${friend_id}/unfriend`)
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
    }

    return { friends,strangers,getFriendsList, getStrangers, addFriend, acceptFriend, unfriend }
})