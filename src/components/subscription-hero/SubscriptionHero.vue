<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Header from "../../components/header/Header.vue";
import SubHeader from "../../components/sub-header/SubHeader.vue";
import Paragraph from "../../components/paragraph/Paragraph.vue";
import Button from "../../components/button/Button.vue";
import data from "../../constants/website.json";

const image = ref<string>();

onMounted(() => {
  image.value = data.pages[0].sections[1].data[0].hero_image_url;
});
</script>

<template>
  <div
    class="w-full min-h-[calc(100vh-80px)] grid grid-cols-2 max-lg:grid-cols-1"
  >
    <div>
      <img
        :src="image"
        :alt="data.pages[0].sections[1].data[0].image_alt"
        class="w-full h-full object-cover border-[1px]"
      />
    </div>
    <div class="p-18 max-sm:p-8 max-xs:p-5 flex flex-col gap-[1rem] border-[1px]">
      <Header title="Flower Subscription" />
      <div class="flex flex-col gap-[1rem]">
        <div
          v-for="item in data.pages[0]?.sections[0]?.data?.data"
          :key="data.pages[0]?.sections[0]?.data?.data?.id"
        >
          <SubHeader :title="item.title" />
          <Paragraph :description="item.description" :isBullet="true" />
        </div>
      </div>
      <router-link :to="data.pages[0]?.sections[0]?.data?.button_cta?.button_url">
        <Button
          :title="data.pages[0]?.sections[0]?.data?.button_cta?.button_name"
          :isFullWidth="data.pages[0]?.sections[0]?.data?.button_cta?.is_full_width"
        />
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
