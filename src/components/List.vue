<script lang="ts" setup>
import { ref } from "vue";
import { fetchNews } from "@api/newsApi";
import type { INews } from "@interfaces/news";

const items = ref<INews[]>(await fetchNews());
</script>

<template>
  <div
    v-if="items"
    class="data" 
  >
    <div class="items-container">
      <div
        v-for="item in items"
        :key="item.id"
        class="item"
      >
        {{ item.name }}: {{ item.age }}
      </div>
    </div>
  </div>
  <div
    v-else
    class="no-data"
  >
    Loading...
  </div>
</template>

<style lang="scss" scoped>
.items-container {
  gap: 1rem;
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
