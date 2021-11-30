<template>
  <div id="app">
    <!-- <topbar /> -->
    <router-view></router-view>
    <foot />
  </div>
</template>

<script>
// import topbar from "@/components/topbar";
import foot from "@/components/foot";
export default {
  name: "App",
  components: { foot },
};
</script>

<style lang="scss">
@import "@/style/index.scss";
#app {
  min-height: 100vh;
  // background: url("~@/assets/eth-bj.jpg") no-repeat;
  // background-size: 100%;
  // padding-top: 74px;
}
</style>
