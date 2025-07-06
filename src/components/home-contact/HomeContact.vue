<script setup lang="ts">
import Header from '../header/Header.vue';
import SubHeader from '../sub-header/SubHeader.vue';
</script>
    
<template>
    <div class="w-full min-h-[100vh] grid grid-cols-2 max-md:grid-cols-1">
        
        <div class="grid grid-rows-2 border-[1px]">
            <div class="flex flex-col justify-center gap-[1rem] items-stretch border-[1px] px-[2rem]">
                <Header 
                    title="To Contact Us"
                />
                <div>
                    <SubHeader title="We will call you back"/>
                    <div class="flex gap-[1rem]">,
                        <input type="email" name="email" placeholder="+945654654" class="outline-none border-2 border-gray-200 p-2 text-gray-500 text-sm w-full font-light">
                        <router-link to="/contact">
                            <button class="btn-full">BOOK A CALL</button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 max-md:grid-cols-1">
                <div class="grid grid-rows-[1fr_3fr]">
                    <div class="flex items-center justify-center border-[1px]">
                        <Header title="Phone"/>
                    </div>
                    <div class="flex items-center justify-center border-[1px]">
                        <SubHeader title="+380980099777"/>
                    </div>
                </div>
                <div class="grid grid-rows-[1fr_3fr]">
                    <div class="flex items-center justify-center border-[1px]">
                        <Header title="Address"/>
                    </div>
                    <div class="flex items-center justify-center border-[1px]">
                        <SubHeader title="Opening hours: 8 to 11 p.m."/>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-image"></div>

    </div>
</template>

<style scoped>
.bg-image {
    background-image: url('/public//images//Right\ colum.png');
}
</style>