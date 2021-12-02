<template>
  <div class="viewport">
    <topbar />
    <div class="peak font2">
      <h4>
        ONE-STOP SHOP IN HONG <br />
        <span></span>
        <br />
        KONG
      </h4>
      <h3>ETH MINING RIG SERVICE</h3>
      <h5 class="font17">
        There is no need to install and find the necessary <br />
        accessories yourself. Together with the best <br />
        software ecological support, we have built the most <br />
        reliable ETH mining rig for your use.
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
    <div class="about" v-scroll-reveal.reset>
      <h4 class="title-line">ABPUT US</h4>
      <p>
        Caismining ETH Professional Mining Rig have <br />
        focused on cryptocurrency technology research for <br />
        more than 8 years. Combined with our team’s first- <br />
        class IT knowledge, we provide Hong Kong users <br />
        with reliable ETH mining technology solutions. <br />
        Contact us now for the most reliable and <br />
        convenient mining solution.
      </p>
    </div>
    <!--  -->
    <div class="about-img" v-scroll-reveal.reset>
      <img src="~@/assets/about1.jpg" alt="" />
    </div>
    <!--  -->
    <div class="banner" v-scroll-reveal.reset>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in bannerList"
            :key="index"
            @click="bannerEvent(index)"
          >
            <img class="img_c1" :src="item.img" alt="" />
            <div class="active" v-if="item.active">
              <svg
                viewBox="0 0 18 15"
                fill="currentColor"
                width="21"
                height="21"
                @click.stop="bannerLike(index)"
              >
                <path
                  v-if="!item.like"
                  fill="#262626"
                  d="M9,15c-0.1,0-0.2,0-0.3-0.1c-0.2-0.2-6-3.9-7.8-7C0,6.3-0.3,4.5,0.3,3C0.8,1.7,1.7,0.7,3,0.3	C5.3-0.5,7.7,0.7,9,2.4c1.4-1.9,4-2.9,6.1-2.1c1.2,0.5,2.2,1.4,2.6,2.6c0.6,1.5,0.3,3.3-0.6,5c-1.8,3.3-7.5,6.8-7.8,7	C9.2,15,9.1,15,9,15z M4.6,1.2c-0.4,0-0.8,0.1-1.2,0.2c-0.9,0.3-1.6,1-1.9,2C1,4.6,1.2,6,2,7.3c1.4,2.5,5.8,5.5,7.1,6.3	c1.2-0.8,5.6-3.7,7-6.3c0.8-1.4,1-2.8,0.5-4c-0.3-0.9-1-1.6-1.9-1.9l0,0c-1.9-0.7-4.3,0.7-5.1,2.4c-0.2,0.4-0.9,0.4-1.1,0	C7.8,2.4,6.3,1.2,4.6,1.2z"
                ></path>
                <path
                  v-else
                  fill="currentColor"
                  d="M9,15c-0.1,0-0.2,0-0.3-0.1c-0.2-0.2-6-3.9-7.8-7C0,6.3-0.3,4.5,0.3,3C0.8,1.7,1.7,0.7,3,0.3	C5.3-0.5,7.7,0.7,9,2.4c1.4-1.9,4-2.9,6.1-2.1c1.2,0.5,2.2,1.4,2.6,2.6c0.6,1.5,0.3,3.3-0.6,5c-1.8,3.3-7.5,6.8-7.8,7	C9.2,15,9.1,15,9,15z"
                  style="color: red"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev" @click="prev"></div>
        <div class="swiper-button-next" @click="next"></div>
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
    <computed />

    <!--  -->
    <div class="price">
      <img src="~@/assets/computed1.png" alt="" />
    </div>
    <div class="built">
      <h4>Built-in monitoring and management software for your mining rig</h4>
      <h5>
        Provides you with a complete monitoring <br />
        program
      </h5>
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

    <!-- banner news -->
    <div class="banner-news">
      <div class="content">
        <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperight">
          <div v-for="(item, index) in bannerNewsList" :key="index">
            <div class="item" v-if="newsIndex == index">
              <p>{{ item.content }}</p>
              <h4>{{ item.title }}</h4>
            </div>
          </div>
        </v-touch>
        <div class="doit">
          <span
            :class="index == newsIndex ? 'active' : ''"
            v-for="(item, index) in bannerNewsList"
            :key="index"
          ></span>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="caismining">
      <img src="~@/assets/caismining.jpg" alt="" />
      <p>caismining</p>
      <p>48 Posts</p>
      <p>2,092 Followers</p>
      <p>0 Following</p>
      <a>See More</a>
      <div class="btn flex">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="FollowBtn158509262__InstagramIcon FollowBtn158509262--isHover"
        >
          <path
            d="M13.156.008c2.223.004 2.677.021 3.786.072 1.277.058 2.15.26 2.912.557a5.88 5.88 0 012.125 1.384 5.88 5.88 0 011.384 2.125c.296.763.499 1.635.557 2.912.055 1.194.07 1.63.072 4.331v1.23c-.002 2.701-.017 3.137-.072 4.33-.058 1.278-.26 2.15-.557 2.913a5.88 5.88 0 01-1.384 2.125 5.88 5.88 0 01-2.125 1.383c-.763.297-1.635.5-2.912.558-1.194.054-1.63.07-4.331.072h-1.23c-2.701-.002-3.137-.018-4.33-.072-1.278-.058-2.15-.261-2.913-.558a5.88 5.88 0 01-2.125-1.383A5.88 5.88 0 01.63 19.862c-.297-.763-.5-1.635-.558-2.912-.05-1.11-.068-1.564-.071-3.786v-2.32C.004 8.62.02 8.167.072 7.058.13 5.78.333 4.908.63 4.146A5.88 5.88 0 012.013 2.02 5.88 5.88 0 014.138.637C4.901.341 5.773.138 7.05.08 8.16.03 8.614.012 10.836.008zm-.28 2.161h-1.76c-2.408.003-2.829.018-3.967.07-1.17.053-1.805.249-2.228.413-.56.218-.96.478-1.38.897-.419.42-.679.82-.897 1.38-.164.422-.36 1.058-.413 2.227-.052 1.139-.067 1.56-.07 3.968v1.76c.003 2.408.018 2.829.07 3.967.054 1.17.25 1.805.413 2.228.218.56.478.96.898 1.38.42.419.82.679 1.38.897.422.164 1.057.36 2.227.413 1.096.05 1.527.065 3.708.069h2.279c2.18-.004 2.612-.02 3.708-.07 1.17-.053 1.805-.248 2.227-.412.56-.218.96-.478 1.38-.898.42-.42.68-.82.897-1.38.164-.422.36-1.057.413-2.227.05-1.096.066-1.527.07-3.708v-2.279c-.004-2.18-.02-2.611-.07-3.708-.053-1.17-.249-1.805-.413-2.227a3.716 3.716 0 00-.897-1.38c-.42-.42-.82-.68-1.38-.897-.422-.164-1.058-.36-2.227-.413-1.139-.052-1.56-.067-3.968-.07zm-.88 3.675a6.16 6.16 0 110 12.32 6.16 6.16 0 010-12.32zm0 2.161a3.999 3.999 0 100 7.998 3.999 3.999 0 000-7.998zM18.4 4.161a1.44 1.44 0 110 2.879 1.44 1.44 0 010-2.88z"
            fill="current"
            fill-rule="evenodd"
          ></path>
        </svg>
        <span>Follow</span>
      </div>
    </div>

    <!--  -->
    <div class="operate">
      <div
        class="operate-item"
        v-for="(item, index) in operateList"
        :key="index"
      >
        <img :src="item.img" alt="" />
        <div class="operate-item-action" v-if="item.show">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path
                d="M1 0h22a1 1 0 011 1v22a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1z"
              ></path>
              <path
                d="M15.333 8.667v10h-10v-10h10zm3.334-3.334v10H17V7H8.667V5.333h10z"
                fill="#FFF"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div class="btn">
        <span>Load More</span>
      </div>
    </div>
    <!--  -->

    <div></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import productList from "./product";
import compList from "./comp";
import newsList from "./news";
import operateList from "./operate";
import bannerNewsList from "./bannerNews";
import bannerList from "./banner";
import computed from "@/components/computed";
import topbar from "@/components/topbar";

export default {
  data() {
    return {
      productList: [],
      bannerList: [],
      compList: [],
      newsList: [],
      operateList: [],
      bannerNewsList: [],
      newsIndex: 0,
      mySwiper: null,
    };
  },
  components: { computed, topbar },
  mounted() {
    this.productList = productList;
    this.compList = compList;
    this.newsList = newsList;
    this.operateList = operateList;
    this.bannerNewsList = bannerNewsList;
    this.bannerList = bannerList;
    this.mySwiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
  methods: {
    swiperleft() {
      if (this.newsIndex >= 2) {
        this.newsIndex = 0;
      } else {
        this.newsIndex++;
      }
    },
    swiperight() {
      if (this.newsIndex <= 0) {
        this.newsIndex = 2;
      } else {
        this.newsIndex--;
      }
    },
    bannerEvent(index) {
      this.bannerList.forEach((item, idx) => {
        if (index == idx) {
          item.active = !item.active;
        } else {
          item.active = false;
        }
      });
    },
    bannerLike(index) {
      this.bannerList.forEach((item, idx) => {
        if (index == idx) {
          item.like = !item.like;
        }
      });
    },
    next() {
      this.mySwiper.slideNext();
    },
    prev() {
      this.mySwiper.slidePrev();
    },
  },
};
</script>

<style lang="scss" scoped>
.viewport {
  color: #ffffff;
  padding: 60px 0 0;
  background: url("~@/assets/eth-bj.jpg") no-repeat;
  background-size: 100%;
  padding-top: 134px;
  .peak {
    padding: 0 24px;
    h3 {
      font-size: 28px;
      letter-spacing: 0px;
    }
    h4 {
      font-size: 14px;
      // letter-spacing: 4px;
      line-height: 24px;
      padding-right: 20px;
    }
    h5 {
      font-size: 14px;
      color: rgb(232, 192, 97);
      margin: 27px 0;
      font-weight: normal;
      line-height: 28px;
      font-family: Oswald-Medium;
    }
    .peak-btn1,
    .peak-btn2 {
      width: 220px;
      height: 52px;
      text-align: center;
      font-size: 16px;
      line-height: 52px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    .peak-btn1 {
      border: 1px solid rgba(232, 192, 97, 1);
      color: #e8c061;
      font-family: font16;
    }
    .peak-btn2 {
      background: rgba(232, 192, 97, 1);
      color: #2d2e2d;
      border: 0px solid #e8c061;
      box-shadow: 1.41px 1.41px 27px -2px rgba(232, 192, 97, 65%);
      font-family: font18;
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
    // height: 314px;
    background: rgb(90, 54, 58);

    p {
      font-weight: bold;
      padding-top: 40px;
      padding-right: 20px;
      font-size: 18px;
      font-family: font19;
      line-height: 32px;
      // font-weight: normal;
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
      background: rgb(10, 7, 8);
      width: 160px !important;
      position: relative;
      .active {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(199, 199, 199, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      top: 90px;
      color: rgba(45, 46, 45, 1);
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
      font-family: Oswald-Medium;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      padding: 30px 0;
      font-family: font18;
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
        font-family: font16;
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
    h4 {
      margin: 20px 10px 40px;
    }
    .product-item {
      padding: 10px 0;
      text-align: center;

      font-family: font20;
      img {
        width: 100%;
      }
      h5 {
        font-size: 18px;
        color: #ffffff;
        padding-top: 16px;
        font-family: font20;
        font-weight: normal;
      }
      p {
        font-size: 16px;
        color: #c7c7c7;
        padding-top: 6px;
        font-family: font20;
      }
    }
    .paging {
      padding: 68px 0 20px;
      color: #ffffff;
      text-align: center;

      font-family: font20;
      // #999
      span {
        padding: 0 20px;
        font-size: 18px;
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
      font-size: 24px;
      color: #2d2e2d;
      font-family: Oswald-Medium;
    }
    h5 {
      padding-top: 34px;
      color: #646464;
      padding-bottom: 50px;
      font-size: 14px;
      font-family: Oswald-Medium;
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
      font-size: 20px;
      color: #2d2e2d;
      padding: 10px 0 20px;
      font-weight: normal;
      font-family: font21;
    }
    p {
      color: #646464;
      line-height: 24px;
      width: 90%;
      font-size: 16px;
      font-family: font18;
    }
  }
  .news {
    background: rgb(90, 54, 58);
    padding: 52px 8px;
    h3 {
      font-size: 23px;
      font-weight: bold;
      color: #ffffff;
      font-family: Oswald-Medium;
      padding: 0 20px 20px;
    }
    .news-item {
      padding: 20px 0;
      font-family: font22;
      .news-item-content {
        padding: 24px;
      }
      img {
        width: 100%;
      }
      h5 {
        padding: 0 0 24px 0;
        font-size: 14px;
        color: #ffffff;
      }
      h4 {
        font-size: 24px;
        color: #ffffff;
      }
      p {
        font-size: 18px;
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
            stroke-width: 2px;
            transition: fill 250ms;
          }
        }
      }
    }
  }
  .banner-news {
    height: 394px;
    background: url("~@/assets/banner-news.png") no-repeat;
    background-size: 100%;
    .content {
      width: 100%;
      height: 100%;
      padding: 100px 46px;
      background: rgba($color: #000000, $alpha: 0.7);
      .item {
        text-align: center;
        p {
          font-size: 17px;
          color: #ffffff;
          font-family: caudex;
        }
        h4 {
          font-size: 14px;
          color: #ffffff;
          padding-top: 40px;
          font-family: font16;
        }
      }
      .doit {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        span {
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #ffffff;
          margin-right: 20px;
          border-radius: 50%;
          font-size: 0;
        }
        span:last-child {
          margin-right: 0;
        }
        .active {
          width: 10px;
          height: 10px;
          position: relative;
        }
        .active:before {
          content: "";
          display: block;
          width: 6px;
          height: 6px;
          position: absolute;
          font-size: 0;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #2d2e2d;

          border-radius: 50%;
        }
      }
    }
  }
  .caismining {
    padding: 24px 20px;
    background: #2d2e2d;
    font-family: font20;
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
    p {
      margin: 8px 0 6px;
      color: #ffffff;
      font-size: 16px;
    }
    a {
      text-decoration: underline;
      color: #c7c7c7;
      font-size: 16px;
      display: inline-block;
      margin-top: 12px;
    }
    .btn {
      border: 1px solid #ffffff;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      height: 42px;
      span {
        padding-left: 8px;
        color: #ffffff;
        font-size: 16px;
        margin-bottom: 4px;
      }
      svg {
        fill: #ffffff;
        width: 16px;
        height: 16px;
      }
    }
  }
  .operate {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 4px;
    background: #2d2e2d;
    .operate-item {
      width: calc((100% - 4px - 4px) / 3);
      margin-right: 4px;
      margin-bottom: 4px;
      position: relative;
      font-size: 0;
      img {
        width: 100%;
        height: 112px;
      }
      .operate-item-action {
        position: absolute;
        right: 8px;
        top: 8px;
        background: rgba(22, 22, 22, 0.6);
        padding: 1px;
        svg {
          fill: #ffffff;
          width: 20px;
          height: 20px;
        }
      }
    }

    .operate-item:nth-child(3n) {
      margin-right: 0;
    }
    .btn {
      width: 160px;
      height: 50px;
      margin: 50px auto;
      line-height: 50px;
      text-align: center;
      font-size: 16px;
      border: 1px solid rgba(255, 255, 255, 0.49);
      color: rgba(255, 255, 255, 0.7);
      font-family: font20;
    }
  }
}
.title-line {
  letter-spacing: 4px;
  font-weight: bold;
  font-size: 21px;
  line-height: 50px;
  position: relative;
  font-family: Oswald-Medium;
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
.gap_black {
  border-bottom: 1px solid #262626;
}
</style>
