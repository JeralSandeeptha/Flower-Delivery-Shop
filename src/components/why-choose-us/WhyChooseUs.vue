<script setup lang="ts">
import data from '../../constants/website.json'; 
import Paragraph from '../../components/paragraph/Paragraph.vue';
import Header from '../../components/header/Header.vue';
import SmallHeader from '../../components/small-header/SmallHeader.vue';
</script>
    
<template>
    <div class="w-full grid grid-cols-2 max-lg:grid-cols-1">
        <div class="p-18 max-sm:p-8 max-xs:p-5 border-[1px]">
            <Header 
                :title="data.pages[2].sections[0].section_name"
            />
        </div>
        <div class="">
            <div 
                v-for="item in data.pages[2].sections[0].reasons" 
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