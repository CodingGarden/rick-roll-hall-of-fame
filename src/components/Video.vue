<template>
  <div>
    <video controls :src="data.url"></video>
    <div>
      <p>Rick Roller: <span class="value"><a :href="data.author.url">{{data.author.username}}</a></span></p>
      <p>Date: <span class="value">{{data.date.toLocaleDateString()}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style scoped>
video {
  width: 400px;
  height: auto;
}
.value {
  font-weight: bold;
}
</style>
