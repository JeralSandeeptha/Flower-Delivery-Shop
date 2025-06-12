<script setup lang="ts">
import WeddingService from '../wedding-service/WeddingService.vue';
import Paragraph from '../paragraph/Paragraph.vue';
import Header from '../header/Header.vue';
import data from '../../constants/website.json';
</script>
    
<template>
    <div class="bg-image w-full min-h-[100vh] flex flex-col items-center justify-center text-center gap-[2rem] max-md:p-8">
        <h4 class="text-[white] faq-text">{{ data.pages[2].sections[2].esction_name }}</h4>
        <div class="flex flex-col gap-[1rem]">
            <Header 
                style="color: white !important"
                :title="data.pages[2].sections[2].data[0].title"
            />
            <Paragraph 
                class="text-white max-w-[500px]"
                :description="data.pages[2].sections[2].data[0].description"
            />
        </div>
        <router-link to="/contact">
            <button class="btn-secondary">{{ data.pages[2].sections[2].data[0].btton_text }}</button>
        </router-link>
    </div>
</template>

<style scoped>
.bg-image {
    background-image: url('../../../public/images/wedding-bg.png');
    background-size: cover;
    background-position: center;
}
</style>