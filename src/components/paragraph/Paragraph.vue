<script setup lang="ts">
import { type ParagraphProps } from '../../types/component.types.ts';
const props = defineProps<ParagraphProps>();
</script>
    
<template>
    <p class="flex gap-[0.5rem]">
        <span v-if="props.isBullet">
            •
        </span>
        <h5 class="text-sm">{{ props.description }}</h5>
    </p>
</template>

<style scoped>

</style>