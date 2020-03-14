<template>
  <div id="app">
    <h1 class="title">Coding Garden Rick Roll Hall of Fame</h1>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: 'Share Tech', sans-serif;
  background: black;
  color: white;
  font-size: 1.5rem;
}

#app {
  width: 100%;
  height: 100%;
}

.title {
  text-align: center;
}

a {
  color: #b8b8f3;
}
</style>
