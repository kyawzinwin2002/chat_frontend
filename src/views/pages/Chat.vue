<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const friendId = ref(null);

onMounted(() => {
    friendId.value = route?.params?.id;
})
</script>
<template>

</template>