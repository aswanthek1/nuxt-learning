<template>
  <div>Hello World</div>
</template>

<script lang="ts" setup>
// const sayHello = () => console.log("Hello");
const { sayHello } = useUtils();
sayHello();
</script>
