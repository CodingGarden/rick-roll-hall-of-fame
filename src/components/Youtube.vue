<template>
  <div class="video">
    <div class="video-container">
      <iframe :src="data.url"></iframe>
    </div>
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
  max-width: $maxWidth;
  width: 100%;
  height: auto;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px; height: 0; overflow: hidden;
  width: 100%;
}
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.value {
  font-weight: bold;
}
</style>
