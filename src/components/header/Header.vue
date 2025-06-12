<script setup lang="ts">
import { HeaderProps } from '../../types/component.types.ts';
const props = defineProps<HeaderProps>();
</script>
    
<template>
    <h1 class="header" :style="{ color: props.isLight ? 'white' : 'black' }">{{ props.title }}</h1>
</template>

<style scoped>

</style>