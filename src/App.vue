<template>
  <div id="app">
    <TheNavBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <TheFooter />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.view {
  min-height: 100vh;
}
</style>

<script>
import { mapActions } from 'vuex'
import TheNavBar from '@/components/TheNavBar'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'App',
  components: { TheNavBar, TheFooter },
  methods: {
    ...mapActions(['getAll'])
  },
  mounted() {
    this.getAll()
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.transition = to.meta.transition
      next()
    })
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
