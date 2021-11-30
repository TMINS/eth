<template>
  <div class="computed">
    <div class="computed-box">
      <h4>Calculate your ETH mining machine returns</h4>
      <h5>Real-time update of currency price</h5>
      <div class="calculator">
        <div class="head">
          <img src="~@/assets/calculatorc-icon.png" alt="" />
          <div class="info">
            <h4>Ethereum</h4>
            <p>Ethash</p>
          </div>
        </div>
        <div class="specs">
          <div class="specs-item">
            <p>Network hashrate</p>
            <span>838.457 TH/s</span>
          </div>
          <div class="specs-item">
            <p>Difficulty</p>
            <span>10.653P</span>
          </div>
          <div class="specs-item">
            <p>Block reward</p>
            <span>5.0418 ETH</span>
          </div>
          <div class="specs-item">
            <p>Price</p>
            <span>4052.33 USD</span>
          </div>
        </div>
        <div class="filter">
          <p>Your hashrate</p>
          <div>
            <input type="text" value="400" />
            <span>MH/s</span>
          </div>
        </div>
        <div class="coin">
          <div>
            <p>Daily est. coins</p>
            <span>0.0069 ETH</span>
          </div>
          <div>
            <p>Daily est. earnings</p>
            <span>27.82 USD</span>
          </div>
        </div>
        <div class="copyright">
          <span>Provided by minerstat®</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.computed {
  background: url("~@/assets/computed-bj.png") no-repeat;
  background-size: 100%;
  .computed-box {
    width: 100%;
    height: 100%;
    background: url("~@/assets/box-icon.png") repeat;
    background-size: auto;
    padding: 80px 18px;
  }
  h4 {
    font-size: 17px;
    color: #e8c601;
    padding-bottom: 24px;
    text-align: center;
    font-family: Oswald-Medium;
  }
  h5 {
    font-size: 14px;
    text-align: center;
    color: #ffffff;
    font-family: font19;
  }
  .calculator {
    background: #ffffff;
    border-radius: 5px;
    font-family: Mukta-Mahee, sans-serif;
    color: #6b6d7a;
    font-weight: 400;
    line-height: 1;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 10%);
    margin-top: 60px;

    .head {
      display: flex;
      align-items: center;
      padding: 12px 15px;
      border-bottom: 1px solid #e2e5ef;
      img {
        width: 32px;
        height: 32px;
        margin-left: 10px;
      }
      .info {
        padding-left: 12px;
      }
      h4 {
        color: #46474f;
        font-weight: 800;
        font-size: 16px;
        font-family: "Mukta-Mahee", sans-serif;
        padding-bottom: 0;
      }
      p {
        color: #9396a6;
        font-weight: 400;
        font-size: 12px;
        font-family: "Mukta-Mahee", sans-serif;
      }
    }
    .specs {
      border-bottom: 1px solid #e2e5ef;
      display: flex;
      flex-wrap: wrap;
      padding: 10px 15px 0;
      .specs-item {
        width: calc(50% - 10px);
        margin: 0 10px 16px 0;
        p {
          font-size: 12px;
          color: #9396a6;
          font-weight: 400;
          margin-bottom: 8px;
          font-family: "Mukta Mahee", sans-serif;
        }
        span {
          color: #46474f;
          font-weight: 800;
          font-size: 18px;
          height: 18px;
          font-family: "Mukta Mahee", sans-serif;
        }
      }
    }
    .filter {
      padding: 15px;
      p {
        margin-bottom: 5px;
        font-size: 14px;
      }
      div {
        position: relative;
        input {
          display: block;
          width: 100%;
          border: 1px solid #e2e5ef;
          background: transparent;
          border-radius: 3px;
          padding: 1px 8px;
          font-size: 16px;
          font-weight: 300;
          color: #6b6d7a;
          font-family: "Mukta Mahee", sans-serif;
          height: 32px;
          box-sizing: border-box;
          font-size: 14px;
        }
        span {
          position: absolute;
          right: 12px;
          top: 9px;
          font-size: 14px;
          font-weight: 800;
          color: #46474f;
          cursor: default;
        }
      }
    }
    .coin {
      display: flex;
      align-items: center;
      padding: 20px 15px;
      box-shadow: inset 0px 10px 15px -10px rgba(0, 0, 80, 0.05);
      div {
        width: 50%;
      }
      p {
        font-size: 12px;
        color: #9396a6;
        font-weight: 400;
        margin-bottom: 8px;
      }
      span {
        color: #46474f;
        font-weight: 800;
        font-size: 18px;
      }
    }
    .copyright {
      height: 32px;
      text-align: center;
      background: url("~@/assets/logo.svg") no-repeat;
      background-size: 16px;
      background-position: 28% 50%;
      background-color: #f8f9fc;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      span {
        padding-left: 20px;
        line-height: 32px;
      }
    }
  }
}
</style>
