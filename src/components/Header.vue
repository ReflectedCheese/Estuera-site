<template>
  <header>
    <router-link to="/">
      <img src="/estuera_logo.svg" class="logo"
    /></router-link>
    <div class="icons">
      <a href="https://www.youtube.com/estuera" target="_blank">
        <v-icon
          name="bi-youtube"
          aria-label="youtube"
          animation="pulse"
          hover
          class="icons"
      /></a>
      <a
        href="https://open.spotify.com/artist/0aPasPMebQsHEWlH74l8iv"
        target="_blank"
      >
        <v-icon
          name="bi-spotify"
          aria-label="spotify"
          animation="pulse"
          hover
          class="icons"
      /></a>
      <a href="https://www.instagram.com/estuera/" target="_blank">
        <v-icon
          name="bi-instagram"
          aria-label="instagram"
          animation="pulse"
          hover
          class="icons"
      /></a>
      <a href="mailto:inquiries@estuera.com">
        <v-icon
          name="hi-mail"
          aria-label="mail"
          animation="pulse"
          hover
          class="icons"
      /></a>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  background-color: black;
  opacity: 80%;
  padding: 10px 0 10px 0;
}

.icons {
  margin-right: 20px;
}
.logo {
  top: 0;
  width: 20px;
  margin-left: 10px;
}

.logo:hover {
  transform: scale(70%);
  transition: 1s;
  opacity: 80%;
}
</style>
