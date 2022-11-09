<script lang="ts" setup>
import Item from "./Item.vue";
import type { INews } from "@interfaces/news";

defineProps<{
  items: INews[];
}>();
</script>

<template>
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
