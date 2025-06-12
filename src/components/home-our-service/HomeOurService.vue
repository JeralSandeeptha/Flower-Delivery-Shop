<script setup lang="ts">
import Paragraph from '../paragraph/Paragraph.vue';
import Header from '../header/Header.vue';
import SubHeader from '../sub-header/SubHeader.vue';
import data from "../../constants/website.json";
</script>
    
<template>
    <div class="w-full min-h-[100vh] grid grid-cols-2 max-md:grid-cols-1">
        <div class="bg-image border-[1px]"></div>
        <div class="border-[1px] flex flex-col items-center justify-center gap-[2rem] p-[2rem]">
            <SubHeader :title="data.pages[2].sections[1].data[1].subtitle" />
            <div class="flex flex-col gap-[1rem]">
                <div class="text-center">
                    <Header :title="data.pages[2].sections[1].data[1].title"/>
                </div>
                <div class="text-center">
                    <Paragraph :description="data.pages[2].sections[1].data[1].description"/>
                </div>
            </div>
            <router-link :to="data.pages[2].sections[1].data[1].button_url">
                <button class="btn-border">{{ data.pages[2].sections[1].data[1].button_text }}</button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.bg-image {
    background-image: url('../../../public/images/flowers-with-girl.png');
    background-size: cover;
    background-position: contain;
}
</style>