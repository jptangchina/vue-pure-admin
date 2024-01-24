<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

defineOptions({
  name: "Menu1-2-2"
});

const input = ref("");
const { query } = useRoute();
</script>

<template>
  <div class="dark:text-white">
    <p>菜单1</p>
    <p style="text-indent: 2em">菜单1-2</p>
    <p style="text-indent: 4em">菜单1-2-2</p>
    <el-input v-model="input" />

    <div v-if="query.text" class="mt-4">
      此页面携带的参数值为：{{ query.text }}
    </div>
  </div>
</template>
