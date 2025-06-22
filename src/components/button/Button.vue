<script setup lang="ts">
import { ButtonProps } from '../../types/component.types.ts'; 
const props = defineProps<ButtonProps>();

</script>
    
<template>
    <button
        @click="props.onClick"
        :style="{ width: props.isFullWidth ? '100%' : 'max-content' }"  
        class="btn-primary">{{ props.title }}</button>
</template>

<style scoped>

</style>