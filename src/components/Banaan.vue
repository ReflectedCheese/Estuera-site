<script setup>
import { ref } from "vue";


defineProps({
  title: String,
});

const count = ref(0);
</script>

<template>
  <header>
    <img src="/public/estuera_logo.svg" class="logo">
    <div class="icons">
      <v-icon name="bi-youtube" aria-label="youtube" animation="pulse" hover />
      <v-icon name="bi-spotify" aria-label="spotify" animation="pulse" hover />
      <v-icon name="bi-instagram" aria-label="instagram" animation="pulse" hover/>
      <v-icon name="hi-mail" aria-label="mail" animation="pulse" hover />
    </div>
  </header>
  <h1>{{ msg }}</h1>

  <div class="card">
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
.card {
  color: deeppink;
  display: flex;
}

header {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  background-color: deeppink;
  padding: 10px;
}

.icons {
  justify-content: right;
  margin-right: 20px;
}
.logo{
  top: 0;
  width: 20px;

}
</style>
