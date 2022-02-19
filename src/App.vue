<template>
  <div class="container" :style="{ height: `${ innerHeight }px` }">
    <div class="theme" @click="switchTheme">
      <Icon 
        :type="minisTheme == 'dark' ? 'sun' : 'moon'"
        style="cursor: pointer;"
      />
    </div>
  </div>
</template>

<script>
import Icon from './components/Icon';
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: 'App',

  components: {
    Icon,
  },

  data: () => ({
    innerHeight: null,
  }),

  computed: {
    ...mapState({ minisTheme: state => state.minis.minisTheme }),
  },

  methods: {
    ...mapMutations({ 
      switchTheme: (commit, args) => commit('switchTheme', args),
    }),
  },

  beforeMount() {
    this.innerHeight = innerHeight;
    window.addEventListener('resize', event => {
      this.innerHeight = innerHeight;
    })
  },
}
</script>

<style lang="scss">
body {
  font-family: 'Noto Sans', sans-serif;
  margin: 0;
  display: flex;
  background-image: url("assets/confetti.svg");
  background-repeat: repeat;
  background-position: center;
  background-color: #333;
  min-height: 100vh;
  overflow: hidden;
  .theme {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: calc((100vw - 100px)/4);
    height: calc((100vw - 100px)/4);
    max-width: 50px;
    max-height: 50px;
    opacity: .8;
    z-index: 100;
  }
}
</style>
