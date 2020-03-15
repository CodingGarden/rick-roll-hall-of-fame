<template>
  <div class="home">
    <h2>Days since last Rick Roll: <span class="sinceLast">{{daysSinceLastRickRoll}}</span></h2>
    <Button @click.native="asc = !asc">Sort {{asc ? '⬇' : '⬆'}}</Button>
    <component
      :is="rickRoll.type"
      v-for="rickRoll in sorted"
      :key="rickRoll.id"
      :data="rickRoll"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Button from '../components/Button.vue';
import Twitch from '../components/Twitch.vue';
import Youtube from '../components/Youtube.vue';
import Github from '../components/Github.vue';

export default {
  name: 'Home',
  components: {
    Button,
    Twitch,
    Youtube,
    Github,
  },
  data: () => ({
    asc: true,
  }),
  computed: {
    ...mapState(['rickRolls', 'daysSinceLastRickRoll']),
    sorted() {
      if (this.asc) {
        return this.rickRolls;
      }
      return this.rickRolls.slice().reverse();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables";

.home {
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.sinceLast {
  color: $yellow;
}
</style>
