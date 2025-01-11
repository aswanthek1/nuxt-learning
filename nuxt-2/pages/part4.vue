<template>
  <div>Hello Plugins {{ asw }}</div>
</template>

<script lang="ts" setup>
const { $sayHello } = useNuxtApp();
const asw = $sayHello("Aswanth");
</script>
