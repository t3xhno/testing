<script lang="ts" setup>
import { INews } from '@interfaces/news';

defineProps<{
  item: INews;
}>();
</script>

<template>
  <div
    class="item"
  >
    {{ item.name }}: <a :href="item.name" target="_blank">{{ item.age }}</a>
  </div>
</template>
