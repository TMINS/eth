<template>
  <div id="app">
    <topbar />
    <router-view></router-view>
  </div>
</template>

<script>
import topbar from "@/components/topbar";
export default {
  name: "App",
  components: { topbar },
};
</script>

<style lang="scss">
@import "@/style/index.scss";
#app {
  min-height: 100vh;
  background: url("~@/assets/eth-bj.jpg") no-repeat;
  background-size: 100%;
}
</style>
