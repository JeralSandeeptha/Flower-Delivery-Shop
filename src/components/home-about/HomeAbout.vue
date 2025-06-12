<script setup lang="ts">
import data from '../../constants/website.json';
import Header from '../header/Header.vue'; 
import SubHeader from '../sub-header/SubHeader.vue'; 
import Paragraph from '../paragraph/Paragraph.vue'; 
import Button from '../button/Button.vue'; 
console.log(data.pages[2].sections[3].data[1].subTitle);
</script>
    
<template>
    <div class="w-full min-h-[100vh] grid grid-cols-2 max-md:grid-cols-1">
        <div class="p-18 max-sm:p-8 max-xs:p-5 border-[1px]">
            <Header :title="data.pages[2].sections[3].data[0].title"/>
        </div>
        <div class="p-16 max-sm:p-8 max-xs:p-5 border-[1px] justify-start flex flex-col gap-[2rem]">
            <SubHeader :title="data.pages[2].sections[3].data[1].subTitle"/>
            <Header :title="data.pages[2].sections[3].data[1].title"/>
            <Paragraph :description="data.pages[2].sections[3].data[1].description"/>
            <Button
                :title="data.pages[2].sections[3].data[1].button_text"
                :isFullWidth="true"
            />
        </div>
    </div>
</template>

<style scoped>

</style>