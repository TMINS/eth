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
      <img src="~@/assets/hour1.jpg" alt="" />
    </div>
    <div class="gap_black"></div>
    <div class="hour">
      <h4>Reliable tuning technology</h4>
      <p>
        <span style="color: rgb(46, 50, 56)"
          >A stable mining rig can create a stable source of income. As
          experienced professionals, Caismining will ensure that the machine is
          optimised for the best results.
        </span>
      </p>
      <img src="~@/assets/hour2.jpg" alt="" />
    </div>
    <div class="gap_black"></div>
    <div class="hour">
      <h4>More than 8 years of technical experience</h4>
      <p>
        <span style="color: rgb(46, 50, 56)"
          >As a team, we have vast experience in constructing mines of different
          scales. With this knowledge, Caismining will make sure to design the
          most suitable mining rig for your needs.</span
        >
      </p>
      <img src="~@/assets/hour3.jpg" alt="" />
    </div>

    <!--  -->
    <div class="brand">
      <div>
        <span>Top brand, quality assurance</span>
      </div>
    </div>
    <!--  -->
    <div class="brand-logo flex">
      <img style="height: 36px" src="~@/assets/logo1.png" alt="" />
    </div>
    <div class="gap_black"></div>
    <div class="brand-logo flex">
      <img style="height: 49px" src="~@/assets/logo2.jpg" alt="" />
    </div>
    <div class="gap_black"></div>
    <div class="brand-logo flex">
      <img style="height: 42px" src="~@/assets/logo3.png" alt="" />
    </div>
    <div class="gap_black"></div>
    <div class="brand-logo flex">
      <img style="height: 49px" src="~@/assets/logo4.jpg" alt="" />
    </div>
    <div class="gap_black"></div>
    <!--  -->

    <div class="product">
      <h4 class="title-line">MINING SHOP</h4>
      <div
        class="product-item"
        v-for="(item, index) in productList"
        :key="index"
      >
        <img :src="item.img" alt="" />
        <h5>{{ item.title }}</h5>
        <p>{{ item.price }}</p>
      </div>
      <div class="paging">
        <span>1/1</span>
      </div>
    </div>

    <!--  -->
    <div class="computed"></div>

    <!--  -->
    <div class="price">
      <img src="~@/assets/computed1.png" alt="" />
    </div>
    <div class="built">
      <h4>Built-in monitoring and management software for your mining rig</h4>
      <h5>Provides you with a complete monitoring program</h5>
      <img src="~@/assets/logo11.png" alt="" />
    </div>
    <div class="comp" v-for="(item, index) in compList" :key="index">
      <img :src="item.img" alt="" />
      <h4>{{ item.title }}</h4>
      <p>{{ item.sub }}</p>
    </div>
    <!--  -->
    <div class="gap_black"></div>
    <div class="gap_black"></div>
    <!--  -->
    <div class="news">
      <h3>Featured Post</h3>

      <div class="news-item" v-for="(item, index) in newsList" :key="index">
        <img :src="item.img" alt="" />
        <div class="news-item-content">
          <h5>{{ item.date }}</h5>
          <h4>{{ item.title }}</h4>
          <p>{{ item.sub }}</p>
          <div class="news-item-action flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                viewBox="0 0 19 19"
                role="img"
                aria-label="10 views"
                class="blog-post-post-list-description-fill"
              >
                <path
                  d="M18.6514224,10.4604595 C17.3924224,11.9688254 13.9774224,15.4790227 9.46342244,15.5 L9.42442244,15.5 C6.26242244,15.5 3.20842244,13.7938483 0.345422443,10.4264963 C-0.115140814,9.88163847 -0.115140814,9.08439833 0.345422443,8.5395405 C1.60442244,7.03117456 5.01942244,3.52097727 9.53342244,3.5 L9.57342244,3.5 C12.7354224,3.5 15.7894224,5.20615167 18.6524224,8.5735037 C19.1122856,9.11875503 19.1118633,9.91569484 18.6514224,10.4604595 Z M17.8674224,9.2228003 C15.2084224,6.09518855 12.4194224,4.50990594 9.57442244,4.50990594 L9.54042244,4.50990594 C5.46142244,4.52888537 2.30642244,7.78335969 1.14042244,9.18084575 C0.991393136,9.3517953 0.988008897,9.60533857 1.13242244,9.78019645 C3.79142244,12.9078082 6.58142244,14.4920919 9.42542244,14.4920919 L9.46042244,14.4920919 C13.5394224,14.4741114 16.6934224,11.2196371 17.8604224,9.822151 C18.0095734,9.6511131 18.0125381,9.39726759 17.8674224,9.2228003 L17.8674224,9.2228003 Z M9.49942244,13.3932823 C7.35251405,13.3646853 5.63255349,11.6080263 5.65157552,9.46333471 C5.67059754,7.31864313 7.42144652,5.59270141 9.56852513,5.6021069 C11.7156037,5.61151239 13.4512316,7.35272696 13.4514224,9.49750271 C13.4349115,11.6625186 11.6668124,13.4054651 9.49942244,13.3932823 L9.49942244,13.3932823 Z M9.49942244,6.61762258 C7.91092198,6.63961751 6.63891624,7.93990193 6.65354481,9.52676854 C6.66817338,11.1136351 7.96393479,12.3902997 9.55257137,12.3830695 C11.1412079,12.3758393 12.4252698,11.0874333 12.4254224,9.50049946 C12.4127657,7.89797688 11.1037033,6.60820738 9.49942244,6.61762258 L9.49942244,6.61762258 Z"
                ></path>
              </svg>
              <span>{{ item.see }}</span>
            </div>
            <div @click="item.like = !item.like">
              <span>{{ item.like ? item.likeNum + 1 : item.likeNum }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                viewBox="0 0 19 19"
                role="img"
                :style="{
                  fill: item.like ? '#e84a43' : '',
                  stroke: item.like ? 'none' : '',
                }"
              >
                <path
                  d="M9.44985848,15.5291774 C9.43911371,15.5362849 9.42782916,15.5449227 9.41715267,15.5553324 L9.44985848,15.5291774 Z M9.44985848,15.5291774 L9.49370677,15.4941118 C9.15422701,15.7147757 10.2318883,15.0314406 10.7297038,14.6971183 C11.5633567,14.1372547 12.3827081,13.5410755 13.1475707,12.9201001 C14.3829188,11.9171478 15.3570936,10.9445466 15.9707237,10.0482572 C16.0768097,9.89330422 16.1713564,9.74160032 16.2509104,9.59910798 C17.0201658,8.17755699 17.2088969,6.78363112 16.7499013,5.65913129 C16.4604017,4.81092573 15.7231445,4.11008901 14.7401472,3.70936139 C13.1379564,3.11266008 11.0475663,3.84092251 9.89976068,5.36430396 L9.50799408,5.8842613 L9.10670536,5.37161711 C7.94954806,3.89335486 6.00516066,3.14638251 4.31830373,3.71958508 C3.36517186,4.00646284 2.65439601,4.72068063 2.23964629,5.77358234 C1.79050315,6.87166888 1.98214559,8.26476279 2.74015555,9.58185512 C2.94777753,9.93163559 3.23221417,10.3090129 3.5869453,10.7089994 C4.17752179,11.3749196 4.94653811,12.0862394 5.85617417,12.8273544 C7.11233096,13.8507929 9.65858244,15.6292133 9.58280954,15.555334 C9.53938013,15.5129899 9.48608859,15.5 9.50042471,15.5 C9.5105974,15.5 9.48275828,15.5074148 9.44985848,15.5291774 Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import productList from "./product";
import compList from "./comp";
import newsList from "./news";
export default {
  data() {
    return {
      productList: [],
      compList: [],
      newsList: [],
    };
  },

  mounted() {
    this.productList = productList;
    this.compList = compList;
    this.newsList = newsList;
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
      padding: 30px 0;
    }
    img {
      width: 100%;
    }
  }
  .brand {
    padding: 10px 20px;
    background: #2e3238;
    div {
      height: 68px;
      background: #ffffff;
      border: 1px solid rgb(46, 50, 56);
      text-align: center;
      letter-spacing: 2px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 15px;
        color: #2e3238;
      }
    }
  }
  .brand-logo {
    justify-content: center;
    align-items: center;
    height: 78px;
    background: #ffffff;
  }
  .product {
    padding: 24px 10px 12px 10px;
    background: rgb(90, 54, 58);
    .product-item {
      padding: 10px 0;
      text-align: center;
      img {
        width: 100%;
      }
      h5 {
        font-size: 16px;
        color: #ffffff;
        padding-top: 16px;
      }
      p {
        font-size: 13px;
        color: #c7c7c7;
        padding-top: 6px;
      }
    }
    .paging {
      padding: 68px 0 20px;
      color: #ffffff;
      text-align: center;
      // #999
      span {
        padding: 0 20px;
        font-size: 16px;
        letter-spacing: 4px;
      }
    }
    .paging::before {
      content: "";
      border-top: 1px solid #999;
      border-left: 1px solid #999;
      width: 10px;
      height: 10px;
      display: inline-block;
      transform: rotate(-45deg);
    }
    .paging::after {
      content: "";
      border-top: 1px solid #999;
      border-right: 1px solid #999;
      width: 10px;
      height: 10px;
      display: inline-block;

      transform: rotate(45deg);
    }
  }
  .computed {
  }
  .price {
    img {
      width: 100%;
    }
  }
  .built {
    padding: 24px;
    text-align: center;
    h4 {
      font-size: 22px;
      color: #2d2e2d;
    }
    h5 {
      padding-top: 34px;
      color: #646464;
      padding-bottom: 50px;
    }
    img {
      width: 150px;
      height: 44px;
    }
  }
  .comp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 24px 40px;
    img {
      width: 50px;
      height: 44px;
    }
    h4 {
      font-size: 17px;
      color: #2d2e2d;
      padding: 10px 0 20px;
    }
    p {
      color: #646464;
      line-height: 24px;
      width: 90%;
    }
  }
  .news {
    background: rgb(90, 54, 58);
    padding: 52px 8px;
    h3 {
      font-size: 23px;
      font-weight: bold;
      color: #ffffff;
      padding: 0 20px 20px;
    }
    .news-item {
      padding: 20px 0;
      .news-item-content {
        padding: 24px;
      }
      img {
        width: 100%;
      }
      h5 {
        padding: 0 0 24px 0;
        font-size: 12px;
        color: #ffffff;
      }
      h4 {
        font-size: 22px;
        color: #ffffff;
      }
      p {
        font-size: 16px;
        color: #ffffff;
        padding-top: 12px;
        line-height: 24px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .news-item-action {
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #ffffff;
        margin-top: 62px;
        padding-top: 24px;
        div {
          display: flex;
          align-items: center;
          span {
            padding: 0 10px;
          }
          svg {
            fill: #ffffff;
          }
        }
        div:last-child {
          svg {
            position: relative;
            display: inline-block;
            fill: transparent;
            stroke: #e84a43;
            stroke-width: 1.5px;
            transition: fill 250ms;
          }
        }
      }
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
.gap_black {
  border-bottom: 1px solid #262626;
}
</style>
