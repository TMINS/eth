import Vue from "vue";
import scrollreveal from "vue-scroll-reveal";
Vue.use(scrollreveal, {
  delay: 100, //延迟
  duration: 300, //动画时长
  reset: true, //回滚是否再次触发
  mobile: true, //移动端是否有效
  origin: "top", //动画开始位置  top  bottom left right
  distance: "20px", //滑块距离
  sasing: "linear", //动画速率
  scale: 0.9, //缩放
});
