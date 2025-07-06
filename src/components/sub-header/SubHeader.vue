<script setup lang="ts">
import { type SubHeaderProps } from '../../types/component.types.ts'; 
const props = defineProps<SubHeaderProps>();

</script>
    
<template>
    <h5>{{ props.title }}</h5>
</template>

<style scoped>

</style>