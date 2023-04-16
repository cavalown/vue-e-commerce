<template>
  <div class="container mt-5">
    <form @submit.prevent="signIn" class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input v-model="user.username" type="email" id="inputEmail" class="form-control" placeholder="Email address"
            required autofocus />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input v-model="user.password" type="password" id="inputPassword" class="form-control" placeholder="Password"
            required />
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn() {
      const api = `${import.meta.env.VITE_API_SERVER
        }${import.meta.env.VITE_API_PATH}admin/signin`
      this.$http.post(`${api}`, this.user)
        .then(res => {
          console.log('res:', res);
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
}
</script>
