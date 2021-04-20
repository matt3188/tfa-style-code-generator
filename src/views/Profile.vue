<template>
  <div>
    <div>
      <figure class="image is-128x128">
        <img class="is-rounded" :src="$auth.user.picture" />
      </figure>
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>

    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>
