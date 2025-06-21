<script setup lang="ts">
import { ref } from 'vue';
import Button from '../../components/button/Button.vue';
import Header from '../../components/header/Header.vue';
import Paragraph from '../../components/paragraph/Paragraph.vue';

const email = ref<string>('');
const password = ref<string>('');

</script>

<template>
    <div class="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-18 max-sm:p-8 max-xs:p-5">
        <div class="max-w-[500px] mx-auto w-[500px] p-10 max-sm:p-8 max-xs:p-5 border-[2px]">
            <div class="flex flex-col gap-[1rem] mb-[1rem]">
                <Header title="Greetings! Welcome to luxury gift shop."/>
                <Paragraph description="Use your email address and password to sign up or log in"/>
                <input type="email" name="email" v-model="email" placeholder="Email Address" class="py-3 outline-none border-2 border-gray-200 p-2 text-gray-500 text-sm w-full font-light">
                <input type="email" name="email" v-model="password" placeholder="Password" class="py-3 outline-none border-2 border-gray-200 p-2 text-gray-500 text-sm w-full font-light">
                <Button title="CONTINUE" :isFullWidth="true" class="bg-black text-white border-[black]"/>
            </div>
            <hr class="border-[1px] borde-[gray]">
            <div class="flex flex-col gap-[1rem] mt-[1rem]">
                <Paragraph description="Instantly login or sign up via Google"/>
                <Button title="CONTINUE WITH GOOGLE" :isFullWidth="true" class="bg-black text-white border-[black]"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>