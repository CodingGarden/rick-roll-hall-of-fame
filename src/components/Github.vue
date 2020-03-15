<template>
  <div class="github">
    <div class="link">
      <a :href="data.url">{{data.url}}</a>
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

.github {
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link {
  max-width: $maxWidth;
  width: 100%;
  word-break: break-all;
  margin: 1rem;
}
</style>
