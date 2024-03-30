<template>
  <div class="card">
    <a :href="`${link}`" target="_blank">
      <img :src="`${cover}`" class="cover"
    /></a>
    <div class="track">{{track}}</div>
    <div class="artist">{{artist}}</div>
  </div>
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
    artist: {
      type: String,
      required: true,
    },
    track: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped>
.artist, .track {
  color: rgb(255, 255, 255);
  display: flex;
  padding-left: 3px;
}

.track{
  font-weight: bold;
  font-size: 14px;
}

.artist{
  font-size: 14px;
  color:rgba(255, 255, 255, 0.596)
}

.card {
  display: flex;
  flex-direction: column;
  height: 260px;
  
}
.cover {
  width: 200px;
  height: 200px;
}
</style>
