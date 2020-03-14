<template>
  <div class="home">
    <component
      :is="rickRoll.type"
      v-for="rickRoll in rickRolls"
      :key="rickRoll.id"
      :data="rickRoll"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Video from '../components/Video.vue';

export default {
  name: 'Home',
  components: {
    Video,
  },
  computed: mapState(['rickRolls']),
};
</script>

<style scoped>
.home {
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
