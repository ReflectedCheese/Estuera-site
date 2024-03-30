<template>
  <div class="albums">
    <Album
      class="album"
      v-for="(album, index) in albums"
      :key="index"
      :link="album.link"
      :cover="album.cover"
      :artist="album.artist"
      :track="album.track"
    />
  </div>
</template>

<style scoped>
.albums {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  gap: 30px;
  justify-content: center;
}
.album {
  display: flex;
  flex-wrap: wrap;
  
}

.album:hover {
  height: 120%;
  transform: scale(1.1);
  transition: 0.3s;
  
}
</style>

<script lang="ts">
import { defineComponent, onMounted, ref, type Ref } from "vue";
import Album from "../components/Album.vue";
import { AlbumService } from "../services/AlbumService";
import { type AlbumItem } from "../components/models";

export default defineComponent({
  name: "AlbumList",
  components: {
    Album,
  },

  setup() {
    const albums = ref();
    onMounted(async () => {
      albums.value = await AlbumService().getAlbumList();
    });

    return {
      albums,
    };
  },
});
</script>
