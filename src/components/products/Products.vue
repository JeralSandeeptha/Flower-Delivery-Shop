<script setup lang="ts">
import { ref, onMounted } from "vue";
import getFlowers from "../../services/getFlowers/getFlowers.ts";
import { Flower } from "../../types/models.types.ts";
import Header from "../header/Header.vue";
import SubHeader from "../sub-header/SubHeader.vue";

const flowers = ref<Flower>([]);

const getProducts = async () => {
  flowers.value = await getFlowers();
  console.log(flowers.value);
};

onMounted(() => {
  getProducts();
});
</script>

<template>
  <div class="w-full min-h-[calc(100vh-80px)] grid grid-cols-2 max-md:grid-cols-1">
    <div
      class="bg-image h-[calc(100vh-80px)] border-[1px] flex items-center justify-center"
    >
      <Header title="Fresh Flowers" :isLight="true" />
    </div>
    <div
      class="grid grid-cols-2 min-h-[calc(100%-80px)] border-[1px] max-sm:grid-cols-1 "
    >
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
.bg-image {
  background-image: url("/images/products-hero.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
