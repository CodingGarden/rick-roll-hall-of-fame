<template>
  <div class="info">
    <p v-if="Array.isArray(data.author)">Rick Rollers:
      <span class="value">
      <template v-for="(author, index) in data.author">
        <a :key="author.username" :href="author.url">{{author.username}}</a>{{index===data.author.length-1?'':', '}}
      </template>
      </span>
    </p>
    <p v-else>Rick Roller:
      <span class="value">
        <a :href="data.author.url">{{data.author.username}}</a>
      </span>
    </p>
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
