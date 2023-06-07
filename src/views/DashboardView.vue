<template>
  <Navbar />
  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
    // console.log('token:', token)
    this.$http.defaults.headers.common.Authorization = token
    const api = `${import.meta.env.VITE_API_SERVER}api/user/check`
    this.$http.post(api)
      .then(res => {
        // console.log('res:', res);
        if (!res.data.success) {
          this.$router.push('/login');
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

}
</script>

<style></style>