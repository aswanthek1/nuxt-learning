<script setup>
// const route = useRoute();
// console.log(route.params)
const nuxt = useNuxtApp();
console.log(nuxt)
</script>

<template>
    <h1>Event {{ $route.params.id }}</h1>
</template>