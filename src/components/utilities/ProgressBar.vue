<script lang="ts" setup>
import { ref } from "vue";

const start = () => {
  hidden.value = false;
  width.value = 0;
};

const finish = () => {
  width.value = 100;
  hidden.value = true;
};

const hidden = ref(true);
const width = ref(0);

defineExpose({ start, finish });
</script>

<template>
  <div
    :class="{ hidden }"
    :style="{ width: `${width}%` }"
  ></div>
</template>
