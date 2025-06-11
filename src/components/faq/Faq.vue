<script setup lang="ts">
import Paragraph from "../../components/paragraph/Paragraph.vue";
import Header from "../../components/header/Header.vue";
import { FaqProps } from '../../types/component.types.ts';
import { ref } from "vue";
import openIcon from '../../assets/icons/arrow-bottom-right.png';
import closeIcon from '../../assets/icons/Vector.png';

const isVisible = ref<boolean>(false);
const props = defineProps<FaqProps>();

const toggleFaq = () => {
    isVisible.value = !isVisible.value;
    console.log(isVisible.value);
}

</script>

<template>
    <div class="py-3 relative border-b-2 border-black cursor-pointer" @click="toggleFaq()">
      <div class="flex items-center justify-between">
          <h3 class="faq-text">{{ props.question }}</h3>
          <img v-if="isVisible" :src="closeIcon" alt="open-icon">
          <img v-else="!isVisible" :src="openIcon" alt="close-icon">
      </div>
      <div class="py-2">
        <Paragraph v-if="isVisible" :description="props.answer" />
      </div>
    </div>
</template>

<style scoped></style>
