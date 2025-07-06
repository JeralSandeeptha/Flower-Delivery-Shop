<script setup lang="ts">
import Header from '../header/Header.vue';
import { ref, onMounted } from "vue";
import getFlowers from "../../services/getFlowers/getFlowers.ts";
import { type Flower } from "../../types/models.types.ts";
import SubHeader from "../sub-header/SubHeader.vue";

const flowers = ref<Flower[]>([]);

const getProducts = async () => {
  flowers.value = await getFlowers();
  const randomElements = flowers.value.sort(() => Math.random() - 0.5);
  flowers.value = randomElements.slice(0,4);
};

onMounted(() => {
  getProducts();
});

</script>
    
<template>
    <div class="w-full">
        <div class="flex flex-col items-center justify-center p-18 max-sm:p-8 max-xs:p-5 border-[1px]">
            <Header title="You may also like…" />
        </div>
        <div class="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 border-[1px]">
            <div v-for="flower in flowers" :key="flower.sys.id">
                <router-link :to="`/products/${flower.sys.id}`">
                    <div
                        class="border-[1px] min-h-[calc((100vh-80px)/2)] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-end pb-[0.5rem] max-sm:bg-cover"
                        :style="{
                        backgroundImage:
                            'url(https:' + flower.fields.image.fields.file.url + ')',
                        }"
                    >
                        <SubHeader :title="flower.fields.name"/>
                        <div class="flex gap-[10px]">
                            <h5 class="text-gray text-sm">Price: {{ flower.fields.price }}$</h5>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>