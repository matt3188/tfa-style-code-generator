<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
        <img src="@/assets/logo.png" alt="T&amp;F Sports Aparell" />
      </b-navbar-item>
    </template>

    <template #start v-if="$auth.isAuthenticated">
      <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
        Home
      </b-navbar-item>
      <b-navbar-dropdown label="Clothing">
        <b-navbar-item tag="router-link" :to="{ name: 'Clothing' }">
          View Clothing
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'Add Clothing' }">
          Add Clothing
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="Accessories">
        <b-navbar-item tag="router-link" :to="{ name: 'Accessories' }">
          View Accessories
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'Add Accessory' }">
          Add Accessories
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <b-button
          v-if="!$auth.isAuthenticated"
          type="is-primary"
          @click="login"
        >
          Log in
        </b-button>
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
    logout() {
      this.$auth.logout({
        returnTo: window.location.href
      })
    }
  }
}
</script>

<style scoped>
.navbar-item img {
  max-height: 4.75rem;
}
</style>
