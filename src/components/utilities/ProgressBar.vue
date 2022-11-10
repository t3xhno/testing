<script lang="ts" setup>
import { ref } from "vue";

let timer: ReturnType<typeof setInterval>;

const start = () => {
  hidden.value = false;
  width.value = 0;
  timer = setInterval(() => {
    width.value++;
    if (width.value >= 100) {
      hidden.value = true;
      clearInterval(timer);
    }
  }, 100);
};

const finish = () => {
  width.value = 100;
  hidden.value = true;
  clearInterval(timer);
};

const width = ref(0);
const hidden = ref(true);

defineExpose({ start, finish });
</script>

<template>
  <div
    :class="{ hidden }"
    :style="{ width: `${width}%` }"
  ></div>
</template>
