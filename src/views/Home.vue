<template>
    <img src="/studio-hero.jpg" class="studio-foto" />
    <div class="content">
      <h1>Latest releases</h1>
      <div class="albums">
        <a href="https://www.youtube.com/watch?v=ueLevnjQ6Fw">
            <img src="/jupiter-impulse.jpg" class="album" /></a>
        <a href="https://www.youtube.com/watch?v=HCgrBSurmlk">
            <img src="/anaphora.jpg" class="album" /></a>
        <a href="https://www.youtube.com/watch?v=bTc2L4KM7Hw">
            <img src="/elpida.jpg" class="album" /></a>
        <a href="https://www.youtube.com/watch?v=i2K1JPRZrqE">
            <img src="/somnium.jpg" class="album" /></a>
        <a href="https://www.youtube.com/watch?v=nxp5fcwJw2I">
            <img src="/umbra.jpg" class="album" /></a>
        <a href="https://www.youtube.com/watch?v=ysCD10oSTQg">
            <img src="/little-white-lies.jpg" class="album" /></a>
        <a href="https://www.youtube.com/watch?v=UkX4bNY20zg">
            <img src="/ex-tempore.jpg" class="album" /></a>
      </div>
    </div>
</template>

<style scoped>
.studio-foto {
  padding-top: 40px;
  width: 100%;
}
.content {
  justify-content: center;
  margin-top: -6px;
  width: 100%;
  min-width: 320px;
  padding: 1rem;
  background-color: rgb(19, 19, 19);
}

.albums {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  gap: 70px;
  justify-content: center;
}
.album {
  display: flex;
  flex-wrap: wrap;
  border-style: solid;
  border-color: #918f8f;
  border-radius: 10px;
}

h1 {
  text-align: center;
  padding-bottom: 2rem;
}

a:hover {
  transform: scale(1.1);
  transition: 1s;
  
  
}
</style>
