<script setup lang="ts">
import { ref } from "vue";
import List from "@components/List.vue";
import { fetchNewsSync } from "@api/newsApi";
import type { INews } from "@interfaces/news";

const items = ref<INews[]>(fetchNewsSync());
</script>

<template>
  <List
    :items="items"
  />
</template>
