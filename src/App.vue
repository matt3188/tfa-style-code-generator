<template>
  <div id="app">
    <TheNavBar />
    <router-view />
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
  }
}
</script>
