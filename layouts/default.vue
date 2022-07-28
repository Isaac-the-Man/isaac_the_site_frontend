<template>
  <div>
    <div class="d-flex">
      <b-link to="/" class="mx-1">
        Home
      </b-link>
      <b-link to="/admin" class="mx-1">
        Admin
      </b-link>
      <b-link to="/login" class="mx-1">
        Login
      </b-link>
    </div>
    <h1>Isaac The Site</h1>
    <hr>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>

<style scoped>

</style>
