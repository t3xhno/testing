<script lang="ts" setup>
import { ref } from "vue";

const start = () => (hidden.value = false);
const finish = () => ({});

const hidden = ref(true);

defineExpose({ start, finish });
</script>

<template>
  <div
    :class="{ hidden }"
    :style="{ width: '0%' }"
  ></div>
</template>
