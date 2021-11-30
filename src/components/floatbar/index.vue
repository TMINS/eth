<template>
  <div class="floatbar">
    <div class="btn" :class="active ? 'active' : ''" @click="change">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="float-content" v-if="active" @click="change">
      <ul class="option">
        <li @click.stop="empty">
          <div class="title">Facebook</div>
          <div class="icon">
            <svg
              data-bbox="17 6 17 17"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="17 6 17 17"
              height="30"
              width="50"
              data-type="shape"
            >
              <g>
                <path
                  d="M33.062 23H17.938a.938.938 0 0 1-.938-.938V6.938c0-.518.42-.938.938-.938h15.124c.518 0 .938.42.938.938v15.124c0 .518-.42.938-.938.938zm-4.547 0v-6.462h2.228l.334-2.518h-2.562v-1.608c0-.73.208-1.227 1.282-1.227h1.37V8.933c-.237-.031-1.05-.1-1.996-.1-1.974 0-3.326 1.174-3.326 3.329v1.858H23.61v2.518h2.234V23h2.67z"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>
          </div>
        </li>
        <li @click.stop="empty">
          <div class="title">Instagram</div>
          <div class="icon">
            <svg
              data-bbox="17 7 17 17"
              width="50"
              height="30"
              viewBox="17 7 17 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M32.126 20.512c-.154.398-.338.68-.636.979a2.64 2.64 0 0 1-.977.635c-.3.117-.749.255-1.577.292-.898.041-1.166.05-3.436.05s-2.538-.009-3.435-.05c-.828-.037-1.279-.175-1.577-.292a2.632 2.632 0 0 1-.978-.635 2.638 2.638 0 0 1-.636-.979c-.116-.299-.255-.75-.293-1.578-.041-.895-.048-1.165-.048-3.434 0-2.27.007-2.539.048-3.435.038-.829.177-1.278.293-1.578.155-.398.338-.68.636-.978a2.62 2.62 0 0 1 .978-.635c.298-.117.749-.255 1.577-.293.897-.041 1.166-.05 3.435-.05 2.27 0 2.538.009 3.436.05.828.038 1.278.176 1.577.293.396.154.68.338.977.635.298.297.482.58.636.978.116.3.255.75.293 1.578.041.896.05 1.165.05 3.435 0 2.269-.009 2.539-.05 3.434-.038.829-.177 1.28-.293 1.578zm1.427-10.58a4.17 4.17 0 0 0-.98-1.506 4.174 4.174 0 0 0-1.506-.98c-.54-.21-1.158-.354-2.062-.396C28.098 7.009 27.809 7 25.5 7c-2.308 0-2.597.009-3.505.05-.904.042-1.521.186-2.062.396a4.183 4.183 0 0 0-1.506.98 4.154 4.154 0 0 0-.98 1.505c-.21.54-.354 1.16-.395 2.065C17.01 12.902 17 13.19 17 15.5c0 2.308.01 2.598.052 3.504.04.906.185 1.523.396 2.064.216.559.506 1.032.979 1.506a4.18 4.18 0 0 0 1.506.98c.54.21 1.158.354 2.062.395.908.042 1.197.051 3.505.051 2.31 0 2.598-.009 3.505-.051.904-.04 1.521-.185 2.062-.396a4.158 4.158 0 0 0 1.506-.98c.473-.473.763-.946.98-1.505.211-.54.354-1.158.395-2.064.042-.906.052-1.196.052-3.504 0-2.309-.01-2.598-.052-3.504-.04-.906-.184-1.524-.395-2.065zM22.667 15.5a2.834 2.834 0 1 1 5.667-.001 2.834 2.834 0 0 1-5.667 0zm-1.53 0a4.364 4.364 0 1 0 8.727 0 4.365 4.365 0 1 0-8.728 0zm7.88-4.538a1.02 1.02 0 1 0 2.041 0 1.02 1.02 0 0 0-2.041 0z"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>
          </div>
        </li>
        <li @click.stop="empty">
          <div class="title">Whatsapp</div>
          <div class="icon">
            <svg
              data-bbox="15 5 19.904 20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="15 5 19.904 20"
              height="30"
              width="50"
              data-type="shape"
            >
              <g>
                <path
                  d="M29.512 16.985c-.248-.124-1.465-.723-1.692-.806-.227-.082-.392-.123-.557.124-.165.248-.64.806-.784.971-.145.166-.29.186-.537.062-.247-.124-1.045-.385-1.991-1.229-.736-.656-1.233-1.467-1.378-1.715-.144-.248-.015-.382.109-.506.111-.11.248-.289.371-.433.124-.145.165-.248.248-.414.082-.165.041-.31-.02-.433-.063-.124-.558-1.343-.764-1.84-.201-.482-.405-.416-.557-.424a9.932 9.932 0 0 0-.475-.009.91.91 0 0 0-.66.31c-.227.248-.867.847-.867 2.066 0 1.219.887 2.396 1.011 2.561.124.166 1.746 2.667 4.23 3.74.591.255 1.053.407 1.412.521.593.189 1.133.162 1.56.098.476-.07 1.465-.599 1.671-1.177.207-.579.207-1.074.145-1.178-.062-.103-.227-.165-.475-.289m-4.518 6.17h-.004a8.225 8.225 0 0 1-4.192-1.149l-.3-.178-3.118.817.832-3.04-.196-.31a8.218 8.218 0 0 1-1.26-4.385c.002-4.541 3.697-8.236 8.241-8.236 2.2 0 4.268.859 5.824 2.416a8.188 8.188 0 0 1 2.41 5.827c-.002 4.542-3.697 8.237-8.237 8.237m7.01-15.248A9.846 9.846 0 0 0 24.994 5c-5.463 0-9.909 4.446-9.91 9.91a9.879 9.879 0 0 0 1.322 4.954L15 25l5.254-1.378a9.902 9.902 0 0 0 4.736 1.206h.004c5.462 0 9.908-4.446 9.91-9.91a9.851 9.851 0 0 0-2.9-7.012"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>
          </div>
        </li>
        <li @click.stop="empty">
          <div class="title">地址</div>
          <div class="icon">
            <svg
              data-bbox="18 6 14 18.001"
              width="50"
              height="30"
              viewBox="18 6 14 18.001"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M25.16 6C20.98 6.008 18 9.407 18 13.066c0 6.175 6.38 10.686 6.38 10.686.431.338 1.13.334 1.552-.023 0 0 6.068-4.488 6.068-10.663C32 9.407 29.328 6.009 25.16 6zM25 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>
          </div>
        </li>
        <li @click.stop="empty">
          <div class="title">Chat</div>
          <div class="icon">
            <svg
              viewBox="17 8 17 17.989"
              width="50"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M19 8c-1.105 0-2 .892-2 2.005v9.577a2 2 0 0 0 1.99 2.004h2.238l-.18 3.847c-.027.555.3.724.736.371L27 21.586h4.994A2.001 2.001 0 0 0 34 19.582v-9.577C34 8.897 33.11 8 32 8H19z"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    change() {
      this.active = !this.active;
    },
    empty() {},
  },
};
</script>

<style lang="scss" scoped>
.floatbar {
  .btn {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 222;
    border-radius: 50%;
    background: #fff;
    text-align: center;
    line-height: 50px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
    span::before {
      content: "";
      height: 6px;
      width: 6px;
      display: inline-block;
      border-radius: 27px;
      transition: all 0.3s ease;
      opacity: 1;
      transform: scale(1);
      background: #1d2d3c;
      margin-right: 4px;
    }
    span:last-child::before {
      margin-right: 0;
    }
  }
  .active {
    span:nth-child(1):before {
      width: 17px;
      height: 3px;
      transform: translate(16px, -2px) rotate(-45deg);
    }
    span:nth-child(2):before {
      opacity: 0;
    }
    span:nth-child(3):before {
      width: 17px;
      height: 3px;
      margin-right: 0;
      transform: translate(-16px, -2px) rotate(45deg);
    }
  }
  .float-content {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 221;
    background: rgba(255, 255, 255, 0.9);
    .option {
      position: absolute;
      right: 24px;
      bottom: 70px;
      li {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 18px;
        .title {
          padding: 6px 8px;
          color: #1d2d3c;

          background: #fff;
          margin-right: 20px;
          border-radius: 4px;

          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
        }
        .icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 50%;

          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
          svg {
            fill: #000000;
            width: 17px;
            height: 17px;
          }
        }
      }
    }
  }
}
</style>