<script setup>
const store = useCounterStore();
</script>

<template>
  <div>
    <div class="flex gap-10 items-center">
      Counter: {{ store.doubleCount }}
      <button @click="store.increment()">+</button>
      <button @click="store.decrement()">-</button>
    </div>
  </div>
</template>
