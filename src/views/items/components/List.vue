<script lang="ts" setup>
import Item from "./Item.vue";
import type { INews } from "@interfaces/news";
import { start, finish } from "@plugins/ProgressBar";

defineProps<{
  items: INews[];
}>();
</script>

<template>
  <button @click="start">START</button>
  <button @click="finish">FINISH</button>
  <div
    class="data" 
  >
    <div class="items-container">
      <template
        v-for="item in items"
        :key="item.id"
      >
        <Item
          :item="item"
        />
      </template>
    </div>
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
