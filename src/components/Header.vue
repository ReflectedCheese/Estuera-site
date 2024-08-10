<template>
  <header>
    <nav role="navigation" class="mobile-menu">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li>
            <a href="https://www.youtube.com/estuera" target="_blank">
              <v-icon
                name="bi-youtube"
                aria-label="youtube"
                animation="pulse"
                hover
                scale="2"
                class="icons"
              />Youtube</a
            >
          </li>
          <li>
            <a
              href="https://open.spotify.com/artist/1dpapEdSfcmccxziKtJBn5"
              target="_blank"
            >
              <v-icon
                name="bi-spotify"
                aria-label="spotify"
                animation="pulse"
                hover
                scale="2"
                class="icons"
              />Spotify</a
            >
          </li>
          <li>
            <a href="https://www.instagram.com/estuera/" target="_blank">
              <v-icon
                name="bi-instagram"
                aria-label="instagram"
                animation="pulse"
                hover
                scale="2"
                class="icons"
              />Instagram</a
            >
          </li>
          <li>
            <a href="mailto:inquiries@estuera.com">
              <v-icon
                name="hi-mail"
                aria-label="mail"
                animation="pulse"
                hover
                scale="2"
                class="icons"
              />Contact</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <router-link to="/">
      <img src="/estuera_logo.svg" class="logo"
    /></router-link>

    <div class="icons desktop-menu">
      <a href="https://www.youtube.com/estuera" target="_blank">
        <v-icon
          name="bi-youtube"
          aria-label="youtube"
          animation="pulse"
          hover
          class="icons"
      /></a>
      <a
        href="https://open.spotify.com/artist/1dpapEdSfcmccxziKtJBn5"
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
  width: 100vw;
  opacity: 1;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  background: rgba(225, 225, 225, 0.05);
  padding: 10px 0 5px 0;
}

.icons {
  margin-top: 4px;
  margin-right: 20px;
}
.logo {
  top: 0;
  width: 20px;
  padding: 5px 30px 10px 30px;
}

.logo:hover {
  transform: scale(70%);
  transition: 1s;
  opacity: 80%;
}

.desktop-menu {
  display: none;
}

.mobile-menu {
  display: block;
}

@media (min-width: 768px) {
  .desktop-menu {
    display: block;
  }
  .mobile-menu {
    display: none;
  }
}

#menuToggle {
  color: #232323;
  display: block;
  position: relative;
  left: 50px;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a {
  text-decoration: none;
  color: #ffffff;

  transition: color 0.3s ease;
}

#menuToggle a:hover {
  color: #8b8d8f;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -15px;

  cursor: pointer;

  opacity: 0;
  z-index: 2;

  -webkit-touch-callout: none;
}
#menuToggle span {
  display: block;
  width: 30px;
  height: 3px;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-left: -20px;
  position: relative;

  background: #ffffff;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #ffffff;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: absolute;
  width: 100vw;
  height: 100vh;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  border-style: solid;
  opacity: 1;
  background-color: rgba(15, 15, 15, 0.454);
  backdrop-filter: blur(80px);

  list-style-type: none;
  -webkit-font-smoothing: antialiased;

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul {
  transform: none;
}
</style>
