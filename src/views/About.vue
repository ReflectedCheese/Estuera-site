<script>
function getdata() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => console.log(error));
}
</script>
<template>
  <img src="/studio-hero.jpg" class="studio-foto-desktop" />
</template>

<style scoped>
.studio-foto-desktop {
  padding-top: 30px;
  width: 100%;
}
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
  border-style: solid;
  border-color: #918f8f;
  border-radius: 10px;
}
button {
  background-color: pink;
}
h1 {
  text-align: center;
}
</style>
