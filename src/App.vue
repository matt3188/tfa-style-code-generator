<template>
  <div id="app">
    <div id="nav">
      <router-link to="/clothing">Clothing</router-link> |
      <router-link to="/accessories">Accessories</router-link>
    </div>
    <router-view />
    <footer>
      <p>Made with ❤️ for T&amp;F Sports Aparell</p>
      <p>By Matt Coleman</p>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['getAll'])
  },
  mounted() {
    this.getAll()
  }
}
</script>
