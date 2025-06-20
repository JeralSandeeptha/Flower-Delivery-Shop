<script setup lang="ts">
import Header from '../header/Header.vue';
import Paragraph from '../paragraph/Paragraph.vue';
</script>
    
<template>
    <div class="w-full flex flex-col items-center justify-center gap-[1rem] p-18 max-sm:p-8">
        <Header 
            title="Discover Our Beautiful Bouquets"
        />
        <Paragraph 
            class="text-center max-w-[600px] max-md:max-w-full"
            description="Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping"
        />
        <router-link to="/products">
            <button class="btn-full border-[1px]">SHOP NOW</button>
        </router-link>
    </div>
</template>

<style scoped>

</style>