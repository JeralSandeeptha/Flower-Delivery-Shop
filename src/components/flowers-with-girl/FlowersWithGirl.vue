<script setup lang="ts">
import data from '../../constants/website.json';
</script>
    
<template>
    <div class="w-full border-[1px]">
        <img 
            :src="data.pages[0].sections[3].data[0].image_url" 
            :alt="data.pages[0].sections[3].data[0].image_alt"
            class="w-full min-h[100vh] object-cover"
        >
    </div>
</template>

<style scoped>

</style>