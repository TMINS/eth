<template>
  <div class="service">
    <topbar />
    <!-- v-scroll-reveal.reset -->
    <div class="head">
      <h4 class="title-line">SERVICES</h4>
      <p>
        Caismining Blockchain strives to provide Hong Kong with the most
        professional ETH mining rig services. Feel free to consult us for
        services including ETH mining rig production, technical support, as well
        as revenue calculation.
      </p>
    </div>
    <div class="product">
      <img src="~@/assets/product22.jpg" alt="" />
    </div>
    <div class="infoContainer">
      <h4>
        ETH MINING <br />
        RIG
      </h4>
      <p>
        Mining rig have undergone rigorous testing to ensure daily stability.
      </p>
    </div>
    <div class="gap"></div>
    <div class="product">
      <img src="~@/assets/product23.jpg" alt="" />
    </div>
    <div class="infoContainer">
      <h4>
        MINING RIG <br />
        MAINTENANCE
      </h4>
      <p>
        We provide professional maintenance services according to your needs.
      </p>
    </div>
    <div class="gap"></div>
    <div class="product">
      <img src="~@/assets/product24.jpg" alt="" />
    </div>
    <div class="infoContainer">
      <h4>
        24-HOUR <br />
        TECHNICAL <br />
        SUPPORT
      </h4>
      <p>We make sure that your technical problems are resolved immediately.</p>
    </div>
  </div>
</template>

<script>
import topbar from "@/components/topbar";
export default {
  components: { topbar },
};
</script>

<style lang="scss" scoped>
.service {
  padding: 24px;
  padding-top: 74px;
  color: #ffffff;
  background: #2d2e2d;
  .head {
    padding: 40px 0;
    p {
      font-size: 16px;
      line-height: 24px;
      padding-top: 20px;
    }
  }
  .product {
    font-size: 0;
    img {
      width: 100%;
    }
  }
  .infoContainer {
    background: #5a363a;
    padding: 32px 29px;
    h4 {
      text-align: center;
      font-size: 20px;
      letter-spacing: 4px;
    }
    p {
      margin: 12px 0;
      font-size: 14px;
      text-align: center;
    }
  }
}

.title-line {
  letter-spacing: 4px;
  font-weight: bold;
  font-size: 21px;
  line-height: 50px;
  position: relative;
}
.title-line::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 155px;
  height: 5px;
  background: #a69494;
}
.title-line::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #a69494;
  height: 1px;
}
.gap {
  height: 20px;
}
</style>