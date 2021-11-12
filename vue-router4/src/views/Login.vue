<template>
  <div>
    <h1>登录页</h1>
    <button @click="logout">点击登录</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    function logout() {
      window.sessionStorage.removeItem("token");

      router.push("/logAndIn");
    }
    return {
      logout,
    };
  },
};
</script>
<style>
</style>