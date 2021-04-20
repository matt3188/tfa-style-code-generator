<template>
  <div id="app">
    <TheNavBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <TheFooter />
  </div>
</template>

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
