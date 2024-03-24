<template>
  <div class="content">
    <img src="/studio-hero.jpg" class="studio-foto-desktop" />
    <img src="/studio-hero-mobile.jpg" class="studio-foto-mobile" />
    <h1>Latest releases</h1>
    <AlbumList />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AlbumList from "../components/AlbumList.vue";

export default defineComponent({
  name: "About",
  components: {
    AlbumList,
  },
});
</script>

<style scoped>
.studio-foto-desktop {
  padding-top: 40px;
  width: 100%;
}

.studio-foto-mobile {
  display: none;
  padding-top: 56px;
  width: 100vw;
}

@media (max-width: 980px) {
  .studio-foto-desktop {
    display: none;
  }
  .studio-foto-mobile {
    display: block;
  }
}
.content {
  justify-content: center;
  margin-top: -6px;
  width: 100%;
  min-width: 320px;
  padding-bottom: 2rem;
  background-image: linear-gradient(to top, #1d1d1d 0%, black 100%);

  background-blend-mode: multiply, multiply;
}

h1 {
  text-align: center;
  padding-bottom: 2rem;
  padding-top: 1rem;
}

a:hover {
  transform: scale(1.1);
  transition: 1s;
}
</style>
