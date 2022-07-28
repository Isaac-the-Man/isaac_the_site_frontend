<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Login Page</h1>
        <!-- login form -->
        <b-form @submit="getAuthToken">
          <!-- Username Input -->
          <b-form-group label="Username:" label-for="login-username">
            <b-form-input id="login-username" v-model="username" required />
          </b-form-group>
          <!-- Password Input -->
          <b-form-group label="Password:" label-for="login-password">
            <b-form-input id="login-password" v-model="password" type="password" required />
          </b-form-group>
          <!-- Submit -->
          <b-button variant="primary" type="submit">
            Login
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async getAuthToken (event) {
      event.preventDefault()
      //  get auth token
      try {
        // submit credentials for auth token
        const res = await this.$axios.post('/auth', {
          username: this.username,
          password: this.password
        })
        // auth token retrieved, store in state
        const token = res.data
        this.$store.commit('setAuthToken', token)
        // redirect to admin page
        await this.$router.push('/admin')
      } catch (e) {
        // bad status
        this.toastInvalid()
      }
    },
    toastInvalid () {
      this.$bvToast.toast('Invalid username or password.', {
        title: 'Login Error',
        variant: 'danger',
        autoHideDelay: 5000,
        appendToast: true
      })
    }
  }
}
</script>

<style scoped>

</style>
