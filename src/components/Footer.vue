<template>
  <footer>
    <div class="copyright">© {{ new Date().getFullYear() }} Jonas Steur Music </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  opacity: 1;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  background: rgba(225, 225, 225, 0.05);
  padding: 10px 0 10px 0;
}
.copyright{
    font-size: 0.8rem;
}
</style>
