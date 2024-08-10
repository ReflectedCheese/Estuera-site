<template>
  <div class="card">
    <a :href="`${youtube_link}`" target="_blank">
      <img :src="`${cover_image_link}`" class="cover"
    /></a>
    <div class="track">{{ title }}</div>
    <div class="artist">{{ artist_name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Album",
  props: {
    youtube_link: {
      type: String,
      required: true,
    },
    cover_image_link: {
      type: String,
      required: true,
    },
    artist_name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped>
.artist,
.track {
  color: rgb(255, 255, 255);
}

.track {
  font-weight: bold;
  font-size: 14px;
}

.artist {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.596);
}

.card {
  flex-direction: column;
  height: 300px;
  width: 200px;
}
.cover {
  width: 200px;
  height: 200px;
}
</style>
