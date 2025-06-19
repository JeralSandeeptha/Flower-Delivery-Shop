<script setup lang="ts">
import Header from '../header/Header.vue';
</script>

<template>
  <div class="bg-image w-full min-h-[calc(100vh-80px)] flex items-center justify-center flex-col gap-[1rem]">
    <Header
      class="text-center text-white" 
      title="We Deliver Your Flowers"
      :isLight="true"
    />
    <Header
      class="text-center text-white" 
      title="In To Your Footsteps"
      :isLight="true"
    />
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url('https://plus.unsplash.com/premium_photo-1675063044882-522a7d281b2f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>