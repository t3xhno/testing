<script lang="ts" setup>
import { ref } from "vue";
import Item from "./Item.vue";
import type { INews } from "@interfaces/news";
import ProgressBar from "@components/utilities/ProgressBar.vue";

defineProps<{
  items: INews[];
}>();

const progress = ref<InstanceType<typeof ProgressBar> | null>(null);
</script>

<template>
  <ProgressBar ref="progress"/>
  <button @click="progress?.start()">START</button>
  <button @click="progress?.finish()">FINISH</button>
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
