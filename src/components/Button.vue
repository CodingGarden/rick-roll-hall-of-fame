<template>
  <a class="button">
    <slot />
  </a>
</template>

<style scoped>
  a.button {
    display: inline-block;
    padding: 0.35em 1.2em;
    border: 0.1em solid #FFFFFF;
    margin: 1rem 0.3em 0.3em 1rem;
    border-radius: 0.12em;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 300;
    color: #FFFFFF;
    text-align: center;
    transition: all 0.2s;
  }

  a.button:hover {
    color: #000000;
    background-color: #FFFFFF;
  }

  @media all and (max-width:30em) {
    a.button {
      display: block;
      margin: 0.4em auto;
    }
  }
</style>