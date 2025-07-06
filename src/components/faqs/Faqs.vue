<script setup lang="ts">
import data from '../../constants/faq.json';
import Header from '../../components/header/Header.vue';
import Faq from '../faq/Faq.vue';

console.log(data.faqs);

</script>
    
<template>
    <div class="w-full min-h-[100vh] max-md:px-8 border-[1px]">
        <div class="max-w-[1200px] min-h-[100vh] mx-auto flex items-center justify-center py-14">
            
            <div class="max-w-[600px] w-[600px] min-h-[500px] mx-auto border-[2px] px-10 py-14">
                <div class="flex items-center justify-center w-full pb-10">
                    <Header :title="data.section_title"/>
                </div>
                <div class="w-full">
                    <Faq 
                        v-for="item in data.faqs" :key="item.id"
                        :answer="item.answer"
                        :question="item.question"
                    />             
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>