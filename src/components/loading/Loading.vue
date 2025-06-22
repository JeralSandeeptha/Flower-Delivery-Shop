<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
import animationData from '../../assets/lotties/loading.json';
const container = ref<HTMLDivElement | null>(null);
let animationInstance: any = null;

onMounted(() => {
  if (container.value) {
    animationInstance = lottie.loadAnimation({
      container: container.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });
  }
});

onBeforeUnmount(() => {
  animationInstance?.destroy();
});
</script>
    
<template>
    <div class="w-full min-h-[100vh] flex items-center justify-center fixed top-0 left-0 bg-black/80">
        <div ref="container" style="width: 300px; height: 300px;"></div>
    </div>
</template>

<style scoped>

</style>