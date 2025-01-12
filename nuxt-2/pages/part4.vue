<template>
  <div>Hello Plugins {{ asw }}</div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "part4-page",
});
const { $sayHello } = useNuxtApp();
const asw = $sayHello("Aswanth");
</script>
