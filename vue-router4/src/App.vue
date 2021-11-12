<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <!-- 切换动效 -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
a {
  text-decoration: none;
  color: red;
  font-size: 32px;
  font-weight: 800;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
