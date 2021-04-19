<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div v-if="$auth.isAuthenticated">
          <div class="is-flex is-justify-content-center mb-3">
            <figure class="image">
              <img class="is-rounded" :src="$auth.user.picture" />
            </figure>
          </div>

          <p class="title">Welcome, {{ $auth.user.name }}</p>
          <div class="buttons is-justify-content-center">
            <b-button tag="router-link" to="/clothing/add" type="is-link">
              Add Clothing
            </b-button>
            <b-button tag="router-link" to="/accessories/add" type="is-link">
              Add Accessory
            </b-button>
          </div>
        </div>
        <div v-else>
          <p class="title">Welcome to T&amp;F's<br />style code generator</p>
          <p class="subtitle">Please log in</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>
