<script setup lang="ts">
import Header from '../header/Header.vue';
import Paragraph from '../paragraph/Paragraph.vue';
import SubHeader from '../sub-header/SubHeader.vue';
</script>
    
<template>
    <div class="w-full flex flex-col items-center justify-center gap-[1rem] p-18 max-sm:p-8">
        <SubHeader
            title="OUR STORY"
        />
        <Header 
            title="Our Founder's Passion"
        />
        <Paragraph 
            class="text-center max-w-[600px] max-md:max-w-full"
            description="Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets."
        />
    </div>
</template>

<style scoped>

</style>