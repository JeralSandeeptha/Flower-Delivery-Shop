<script setup lang="ts">
import { SmallHeaderProps } from '../../types/component.types.ts';
const props = defineProps<SmallHeaderProps>();
</script>
    
<template>
    <h2 class="small-header">{{ props.title }}</h2>
</template>

<style scoped>

</style>