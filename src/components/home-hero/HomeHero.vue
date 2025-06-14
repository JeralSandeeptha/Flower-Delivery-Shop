<script setup lang="ts">
import data from '../../constants/website.json';
import Header from "../header/Header.vue";
import SubHeader from "../sub-header/SubHeader.vue";
</script>

<template>
    <div class="w-full min-h-[calc(100vh-80px)] grid grid-cols-2 max-md:grid-cols-1">
    <div
      class="bg-image h-[calc(100vh-80px)] border-[1px] flex items-center justify-center"
    >
      <Header title="Fresh Flowers" :isLight="true" />
    </div>
    <div
      class="grid grid-cols-2 min-h-[calc(100%-80px)] border-[1px] max-sm:grid-cols-1 "
    >
      <div v-for="section in data.pages[2].sections[4]">
          
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>