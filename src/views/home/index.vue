<template>
  <div class="viewport">
    <div class="peak">
      <h4>ONE-STOP SHOP IN HONG KONG</h4>
      <h3>ETH MINING RIG SERVICE</h3>
      <h5>
        There is no need to install and find the necessary accessories yourself.
        Together with the best software ecological support, we have built the
        most reliable ETH mining rig for your use.
      </h5>
      <div class="peak-btn1">
        <span>WHATAPP NOW</span>
      </div>
      <div class="peak-btn2">
        <span>Calculate your returns</span>
      </div>
    </div>

    <!--  -->
    <div class="product1 flex">
      <div class="product1-img"></div>
      <p><span>行情</span>由TradingView提供</p>
    </div>

    <!--  -->
    <div class="about">
      <h4 class="title-line">ABPUT US</h4>
      <p>
        Caismining ETH Professional Mining Rig have focused on cryptocurrency
        technology research for more than 8 years. Combined with our team’s
        first-class IT knowledge, we provide Hong Kong users with reliable ETH
        mining technology solutions. Contact us now for the most reliable and
        convenient mining solution.
      </p>
    </div>
    <!--  -->
    <div class="about-img">
      <img src="~@/assets/about1.jpg" alt="" />
    </div>
    <!--  -->
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="img_c1" src="~@/assets/product1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img class="img_c1" src="~@/assets/product1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img class="img_c1" src="~@/assets/product1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img class="img_c1" src="~@/assets/product1.png" alt="" />
          </div>
        </div>
      </div>
      <h4 class="title-line">MININIG NOW</h4>
    </div>

    <!--  -->
    <div class="hour">
      <h4>24-hour stability</h4>
      <p>
        <span style="color: rgb(46, 50, 56)"
          >Before shipment, all mining machines go through uninterrupted testing
          for more than 48 hours to ensure mining stability.</span
        >
      </p>
      <img src="~@/assets/hour1.png" alt="" />
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  data() {
    return {};
  },

  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: "auto",
      centeredSlides: true,

      spaceBetween: 10,
      // pagination: { el: ".swiper-pagination", clickable: true },
    });
  },
};
</script>

<style lang="scss" scoped>
.viewport {
  color: #ffffff;
  padding: 60px 0 0;
  .peak {
    padding: 0 24px;
    h3 {
      font-size: 27px;
      letter-spacing: 4px;
    }
    h4 {
      font-size: 13px;
      letter-spacing: 4px;
    }
    h5 {
      font-size: 14px;
      color: rgb(232, 192, 97);
      margin: 27px 0;
    }
    .peak-btn1,
    .peak-btn2 {
      width: 220px;
      height: 52px;
      text-align: center;
      line-height: 52px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    .peak-btn1 {
      border: 1px solid rgba(232, 192, 97, 1);
      color: #e8c061;
    }
    .peak-btn2 {
      background: rgba(232, 192, 97, 1);
      color: #2d2e2d;
      border: 0px solid #e8c061;
      box-shadow: 1.41px 1.41px 27px -2px rgba(232, 192, 97, 65%);
      span::after {
        content: "";
        width: 6px;
        height: 6px;
        display: inline-block;
        border-top: 2px solid #262626;
        border-right: 2px solid #262626;
        transform: rotate(45deg);
        margin-left: 8px;
      }
    }
  }
  .product1 {
    padding: 0 24px;
    height: 450px;

    align-items: flex-end;
    position: relative;
    .product1-img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: -46px;
      background: url("~@/assets/product1.png") no-repeat;
      background-size: 130%;
    }
    p {
      height: 50px;
      font-size: 16px;
      color: #000000;
      span {
        color: blue;
      }
    }
  }
  .about {
    padding: 24px 24px 12px 24px;
    height: 314px;
    background: rgb(90, 54, 58);

    p {
      font-weight: bold;
      padding-top: 40px;
      padding-right: 20px;
      font-size: 14px;
    }
  }
  .about-img {
    height: 222px;
    img {
      width: 100%;
      height: 222px;
    }
  }

  .banner {
    background: #2d2e2d;
    padding: 12px 0;
    .swiper-slide {
      width: 160px !important;
    }
    .img_c1 {
      width: 160px;
      height: 160px;
    }
    .swiper-container {
      overflow: hidden;
    }
    h4 {
      width: calc(100% - 48px);
      margin: 0 auto;
      padding-top: 40px;
    }
  }
  .hour {
    background: #ffffff;
    padding: 24px;
    text-align: center;
    h4 {
      font-size: 23px;
      color: #262626;
    }
    p {
      font-size: 13px;
      line-height: 24px;
      padding-top: 30px;
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
  width: 108px;
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
</style>
