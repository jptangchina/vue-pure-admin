<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "Menu1-3"
});

const input = ref("");
</script>

<template>
  <div class="dark:text-white">
    <p>菜单1</p>
    <p style="text-indent: 2em">菜单1-3</p>
    <el-input v-model="input" />
  </div>
</template>
