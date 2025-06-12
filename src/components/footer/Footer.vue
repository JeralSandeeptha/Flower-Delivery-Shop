<script setup lang="ts">
import Paragraph from '../paragraph/Paragraph.vue';
import Button from '../button/Button.vue';
import SubHeader from '../sub-header/SubHeader.vue';
import data from '../../constants/footer.json';
import { ref } from 'vue';

const email = ref<string>();
console.log(data.sections[2].socials[1].social_image);

</script>
    
<template>
    <div class="w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div class="footer-section flex flex-col gap-[1rem]">
            <Paragraph 
                :description="data.sections[0].description"
            />
            <div class="flex flex-col gap-[0.8rem]">
                <input type="email" name="email" v-model="email" :placeholder="data.sections[0].placeholder_text" class="outline-none border-2 border-gray-200 p-2 text-gray-500 text-sm w-full font-light">
                <button class="btn-full border-[1px]">{{ data.sections[0].button_name }}</button>
            </div>
        </div>
        <div class="footer-section flex flex-col gap-[1rem]">
            <div class="flex flex-col gap-[1rem]">
                <h1 class="text-[gray] text-xl mb-[1rem] ">{{ data.sections[1].section_name }}</h1>
                <div v-for="link in data.sections[1].details" class=""> 
                    <h3 class="text-[gray] text-sm">{{ link.title }}</h3>
                    <SubHeader 
                        :title="link.description"
                    />
                </div>
            </div>
            <div class="">
                <h1 class="text-[gray] text-xl mb-[1rem]">{{ data.sections[2].section_name }}</h1>
                <div class="flex gap-[0.5rem]">
                    <div v-for="link in data.sections[2].socials"> 
                        <a :href="`${link.social_url}`" class="mb-[1rem]">
                            <img :src="link.social_image" :alt="link.social_name" class="w-[25px] h-[25px]">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-section flex flex-col gap-[1rem]">
            <div>
                <h1 class="text-[gray] text-xl mb-[1rem]">{{ data.sections[3].section_name }}</h1>
                <div v-for="link in data.sections[3].data" class=""> 
                    <router-link :to="`${link.link}`" class="mb-[1rem]">
                        <SubHeader 
                            :title="link.name"
                        />
                    </router-link>
                </div>
            </div>
            <div>
                <h1 class="text-[gray] text-xl mb-[1rem]">{{ data.sections[4].section_name }}</h1>
                <div v-for="link in data.sections[4].data" class=""> 
                    <router-link :to="`${link.link}`" class="mb-[1rem]">
                        <SubHeader 
                            :title="link.name"
                        />
                    </router-link>
                </div>
            </div>
        </div>
        <div class="footer-section">
            <h1 class="text-[gray] text-xl mb-[1rem]">{{ data.sections[5].section_name }}</h1>
            <div v-for="link in data.sections[5].links" class=""> 
                <router-link :to="`${link.link}`" class="mb-[1rem]">
                    <SubHeader 
                        :title="link.name"
                    />
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>