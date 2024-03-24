<template>
  <a :href="`${link}`" target="_blank">
    <img :src="`${cover}`" class="cover"
  /></a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Album",
  props: {
    link: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped>
.cover{
    width: 200px;
    height: 200px;
}
</style>