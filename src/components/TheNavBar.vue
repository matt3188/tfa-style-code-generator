<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">LOGO</b-navbar-item>
    </template>
    <template #start v-if="$auth.isAuthenticated">
      <b-navbar-item tag="router-link" :to="{ path: '/' }"> Home</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/clothing' }"
        >Clothing
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/accessories' }"
        >Accessories
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="div">
        <b-button type="is-primary" v-if="!$auth.isAuthenticated" @click="login"
          >Log in</b-button
        >
        <b-button v-else @click="logout">Log out</b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'TheNavBar',
  methods: {
    login() {
      this.$auth.loginWithRedirect()
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    }
  }
}
</script>
