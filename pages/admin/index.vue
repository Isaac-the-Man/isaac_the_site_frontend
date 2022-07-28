<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Admin</h3>
        <p>Only admins should be in here</p>
        <b-button @click="logout">Logout</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Admin',
  middleware: 'auth',
  methods: {
    logout (event) {
      event.preventDefault()
      // remove auth token and redirect to homepage
      this.$store.commit('clearAuthToken')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
