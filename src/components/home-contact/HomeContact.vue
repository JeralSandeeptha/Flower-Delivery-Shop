<script setup lang="ts">
import data from '../../constants/website.json';
import Header from '../header/Header.vue';
import SubHeader from '../sub-header/SubHeader.vue';
import Paragraph from '../paragraph/Paragraph.vue';
</script>
    
<template>
    <div class="w-full min-h-[100vh] grid grid-cols-2 max-md:grid-cols-1 border-[1px]">
        
        <div class="grid grid-rows-2">
            <div class="flex flex-col items-center justify-center">
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
                <div>
                    
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        
        <div class="">
            <div>
                
            </div>
            <div>
                <div>
                    <Header 
                        title="Follow Us"
                    />
                </div>
                <div>
                    
                </div>    
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>