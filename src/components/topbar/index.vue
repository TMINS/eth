<template>
  <div class="topbar flex">
    <div class="topbar-title font2">
      <p>CAIS <span></span></p>
      <p>MINING</p>
      <p>BLOCKCHAIN</p>
    </div>
    <div class="menu" :class="active ? 'active' : ''" @click="active = !active">
      <span class="top"></span>
      <span class="center"></span>
      <span class="bottom"></span>
    </div>
    <div class="menu-list" :class="fade" @touchmove.prevent>
      <div>
        <p
          :class="route == '/home' ? 'active' : ''"
          @click="routeLink('/home')"
        >
          HOME
        </p>
        <p>NEWS</p>
        <p
          :class="route == '/service' ? 'active' : ''"
          @click="routeLink('/service')"
        >
          SERVICES
        </p>
        <p
          :class="route == '/about' ? 'active' : ''"
          @click="routeLink('/about')"
        >
          ABOUT
        </p>
        <p>SHOP</p>
        <div class="select">
          <img v-if="selectVal == 'en'" src="~@/assets/USA.png" alt="" />
          <img v-if="selectVal == 'zh'" src="~@/assets/HKG.png" alt="" />
          <select name="selectKy" v-model="selectVal" ref="select">
            <option value="en">English</option>
            <option value="zh">Chinese</option>
          </select>
        </div>
        <p class="flex">
          Log In
          <svg
            data-bbox="0 0 50 50"
            data-type="shape"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            style="width: 28px; margin-left: 10px"
          >
            <g>
              <path
                style="fill: #ffffff"
                d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"
              ></path>
            </g>
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      selectVal: "en",
      route: "home",
      fade: "",
    };
  },
  watch: {
    active() {
      if (this.active) {
        this.fade = "fadeIn";
      } else {
        this.fade = "fadeOut";
      }
    },
  },
  created() {},
  mounted() {
    this.route = this.$route.path;
  },
  methods: {
    routeLink(path) {
      this.$router.push({
        path,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.topbar {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 74px;
  align-items: center;
  padding: 0 24px;
  .topbar-title {
    color: #ffffff;
    font-size: 16px;
    line-height: 16px;

    span {
      display: inline-block;
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
      background: rgba(232, 192, 97, 1);
      margin-left: 2px;
    }
  }
  .menu {
    position: absolute;
    top: 30px;
    right: 0px;
    width: 50px;
    height: 50px;
    z-index: 334;
    span {
      display: block;
      width: 22px;
      height: 2px;
      background: rgba(232, 192, 97, 1);
      transition: all 0.3s;
      border-radius: 2px;
    }
    .center {
      margin: 8px 0;
    }
  }
  .active {
    .top {
      width: 30px;
      transform: translateY(10px) rotate(-45deg);
    }
    .center {
      // display: none;
      opacity: 0;
    }
    .bottom {
      width: 30px;
      transform: translateY(-10px) rotate(45deg);
    }
  }

  .menu-list {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 333;
    opacity: 0;
    top: -2000px;
    left: 0;
    background: rgba(10, 10, 10, 1);
    padding: 36px;
    p {
      height: 50px;
      line-height: 50px;
      align-items: center;
      font-size: 16px;
      color: #ffffff;
      font-weight: bold;
      font-family: font16;
      svg {
        color: #ffffff;
      }
    }
    .active {
      color: #e8c061;
    }
  }
  .select {
    margin: 40px 0;
    position: relative;
    select {
      width: 180px;
      height: 44px;
      background-color: #fff;
      border: none;
      outline: none;
      border-radius: 10px;
      padding: 0 20px 0 40px;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      padding-right: 20px;
      background-image: url("~@/assets/down.png");
      background-repeat: no-repeat;
      background-size: 16px auto;
      background-position: calc(100% - 20px);
      option {
        padding: 0 20px;
      }
    }
    img {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 50%;
      left: 14px;
      transform: translateY(-50%);
    }
  }
  .fadeIn {
    // display: block;
    opacity: 0;
    animation: fadeIn both 0.3s;
  }
  .fadeOut {
    // display: none;
    opacity: 0;
    animation: fadeOut both 0.3s;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    top: -20px;
  }
  100% {
    opacity: 1;
    top: 0;
    display: block;
  }
}
@keyframes fadeOut {
  0% {
    top: 0;
    opacity: 1;
  }
  99% {
    opacity: 0;
    top: -20px;
  }
  100% {
    opacity: 0;
    top: -2000px;
  }
}
</style>
