<template>
  <div class="info">
    <p>Rick Roller: <span class="value"><a :href="data.author.url">{{data.author.username}}</a></span></p>
    <p><a :href="data.originalUrl">Live Stream Link</a></p>
    <p>Date: <span class="value">{{data.date.toLocaleDateString()}}</span></p>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style lang="scss">
@import "../styles/variables";

.info {
  max-width: $maxWidth;
  width: 100%;
}

.value {
  font-weight: bold;
}
</style>
