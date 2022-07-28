export const state = () => ({
  authToken: undefined
})

export const getters = {
  getAuthToken (state) {
    return state.authToken
  },
  isAuthenticated (state) {
    return state.authToken !== undefined
  }
}

export const mutations = {
  setAuthToken (state, token) {
    state.authToken = token
  },
  clearAuthToken (state) {
    state.authToken = undefined
  }
}

export const actions = {}
