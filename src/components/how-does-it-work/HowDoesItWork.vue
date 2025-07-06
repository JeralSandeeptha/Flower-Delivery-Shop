<script setup lang="ts">
import Header from '../header/Header.vue';
import Paragraph from '../paragraph/Paragraph.vue';
import data from '../../constants/website.json';
import SmallHeader from '../small-header/SmallHeader.vue';
</script>
    
<template>
    <div class="w-full grid grid-cols-2 max-lg:grid-cols-1">
        <div class="p-18 max-sm:p-8 max-xs:p-5 border-[1px]">
            <Header 
                :title="data.pages[0].sections[2].data[0].title"
            />
        </div>
        <div class="">
            <div 
                v-for="item in data.pages[0].sections[2].data[1]" 
                class="p-16 max-sm:p-8 max-xs:p-5 border-[1px] flex flex-col gap-[1rem]"
                :key="item.id"
            >
                <SmallHeader :title="item.title"/>
                <Paragraph 
                    :description="item.description"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>