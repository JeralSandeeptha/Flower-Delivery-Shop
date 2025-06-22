<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Header from '../../components/header/Header.vue';
import SubHeader from '../../components/sub-header/SubHeader.vue';
import SimilarProducts from '../../components/similar-products/SimilarProducts.vue';
import type { Flower } from '../../types/models.types';
import getFlower from '../../services/getFlower/getFlower';
import { useRoute } from 'vue-router';
import { renderRichText } from '../../utils/others/renderRichText';
import { watch } from 'vue';

const flower = ref<Flower | undefined>(undefined);
const qty = ref<number>(1);
const route = useRoute();

const fetchFlower = async (id: string) => {
    try {
        console.log('Fetching flower with ID:', id);
        const res = await getFlower({ id });
        console.log('Received flower:', res);
        flower.value = res;
    } catch (err) {
        console.error('Error fetching flower:', err);
    }
}

const loadProduct = async () => {
  const id = route.params.productId;
  try {
        console.log('Fetching flower with ID:', id);
        const res = await getFlower({ id });
        console.log('Received flower:', res);
        flower.value = res;
    } catch (err) {
        console.error('Error fetching flower:', err);
    }
};

const addToBasket = () => {

}

onMounted(() => {
    fetchFlower(route.params.productId as string);
});

watch(
  () => route.params.productId,
  () => {
    loadProduct(); // 🔥 re-fetch when id changes
  }
);
</script>

<template>
    <div v-if="flower" class="w-full min-h-[calc(100vh-80px)] grid grid-cols-2 max-lg:grid-cols-1">
      <div 
        class="border-[1px] bg-no-repeat bg-center bg-cover"
        :style="{
            backgroundImage:
                'url(https:' + flower.fields.image.fields.file.url + ')',
        }"
      ></div>
      <div class="flex flex-col p-14 max-sm:p-8 max-xs:p-5 gap-[2rem] border-[1px]">
        <div class="flex items-center gap-[1rem]">
          <SubHeader title="FRESH FLOWERS / " />
          <SubHeader class="text-[gray]" :title="flower.fields.name" />
        </div>
        <div class="flex items-center gap-[1rem]">
          <Header :title="flower.fields.name" />
          <Header title=" - " />
          <Header :title="`$${flower.fields.price}`" />
        </div>
        <div v-html="renderRichText(flower.fields.description)" />
        <div class="flex gap-[1rem] items-center">
          <SubHeader title="QUANTITY" />
          <div class="grid grid-cols-[1fr_2fr_1fr]">
            <div @click="qty--" class="border-[1px] cursor-pointer flex items-center justify-center p-2">
              <button class="cursor-pointer">-</button>
            </div>
            <div class="border-[1px] flex items-center justify-center p-2">
              <p>{{ qty }}</p>
            </div>
            <div @click="qty++" class="cursor-pointer border-[1px] flex items-center justify-center p-2">
              <button class="cursor-pointer">+</button>
            </div>
          </div>
        </div>
        <button class="btn-full border-[1px] w-full" @click="addToBasket()">ADD TO BASKET</button>
      </div>
    </div>
    <SimilarProducts />
</template>

<style scoped>

</style>