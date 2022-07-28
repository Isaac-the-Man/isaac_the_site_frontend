// verify auth token
export default async function ({ store, redirect, $axios }) {
  // check if auth token exists
  if (store.getters.isAuthenticated) {
    // token exists, verify with server
    const res = await $axios.post('/auth/verify', {}, {
      headers: {
        'X-auth-token': store.getters.getAuthToken
      }
    })
    if (res.status !== 200) {
      // token expired or not authorized, redirect to login
      return redirect('/login')
    }
    // token verified, continue
  } else {
    // token absent, redirect to login
    return redirect('/login')
  }
}
