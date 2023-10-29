<script setup></script>

<template>
  <footer>
    <div class="copyright">© {{ new Date().getFullYear() }} Jonas Steur Music - created by Ethos Graphic Design</div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  background-color: rgb(0, 0, 0);
  padding: 10px;
}
.copyright{
    font-size: 0.8rem;
}
</style>
