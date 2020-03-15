<template>
  <div class="video">
    <video controls :src="data.url"></video>
    <Info :data="data" />
  </div>
</template>

<script>
import Info from './Info.vue';

export default {
  props: ['data'],
  components: {
    Info,
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables";

.video {
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
video {
  max-width: $maxWidth;
  width: 100%;
  height: auto;
}
.value {
  font-weight: bold;
}
</style>
