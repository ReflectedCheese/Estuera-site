<script setup></script>

<template>
  <footer>
    <div class="copyright">© {{ new Date().getFullYear() }} Jonas Steur Music - Created by Ethos Graphic Design</div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  background-color: rgb(0, 0, 0);
  padding: 10px 0 10px 0;
}
.copyright{
    font-size: 0.8rem;
}
</style>
