<template>
  <div class="about">
      <topbar />
    <div class="pic">
      <img src="~@/assets/user1.jpg" alt="" />
    </div>
    <div class="concat">
      <h4>CAISMINING Hong Kong’s one-stop ETH mining rig service</h4>
      <div class="gap-line"></div>
      <p>
        Caismining Blockchain has focused on cryptocurrency technology research
        for more than 8 years. Combined with our team’s first-class IT
        knowledge, we provide Hong Kong users with reliable ETH mining
        technology solutions. Contact us now for the most reliable and
        convenient mining solution.
      </p>
      <h5>Services include:</h5>
      <ul>
        <li>· &nbsp;&nbsp;&nbsp;&nbsp; Mining machine production service</li>
        <li>· &nbsp;&nbsp;&nbsp;&nbsp; 24-hour technical support</li>
        <li>· &nbsp;&nbsp;&nbsp;&nbsp; 24-hour miner maintenance</li>
      </ul>
    </div>

    <div class="contact">
      <h4 class="title-line">CONTACT</h4>
      <h5>
        If you have any inquiries relating to ETH mining rig production, feel
        free to fill in the form below or click the WhatsApp button to contact
        Caismining directly for consultation.
      </h5>
      <div class="btn">WHATAPP NOW</div>
      <div class="form">
        <div class="form-item">
          <p>First Name</p>
          <input type="text" />
        </div>
        <div class="form-item">
          <p>Last Name</p>
          <input type="text" />
        </div>
        <div class="form-item">
          <p>Email *</p>
          <input
            v-model="email"
            :class="error ? 'error' : ''"
            type="text"
            @blur="blur"
          />
        </div>
        <div class="form-item">
          <p>Phone</p>
          <input type="text" />
        </div>
        <div class="form-item">
          <p>Comments</p>
          <textarea></textarea>
        </div>
        <div class="submit">SEND</div>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from "@/components/topbar";
export default {
  data() {
    return {
      email: "",
      error: false,
    };
  },
  components:{topbar},
  watch: {
    email() {
      this.blur();
    },
  },
  methods: {
    blur() {
      if (this.email != "") {
        //
        this.error = false;
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding-top: 74px;
  color: #ffffff;
  background: #2d2e2d;
  .pic {
    width: 100%;
    font-size: 0;
    img {
      width: 100%;
    }
  }
  .concat {
    padding: 24px 24px 80px;
    background: rgb(90, 54, 58);
    h4 {
      line-height: 30px;
      padding: 20px;
      color: #e8c601;
      font-size: 20px;
    }
    p {
      color: #ffffff;
      padding: 34px 0 60px;
      font-size: 14px;
      line-height: 24px;
    }
    h5 {
      font-size: 15px;
      color: #ffffff;
      font-weight: normal;
      padding: 4px 0;
    }
    ul {
      li {
        color: #ffffff;
        padding: 8px 0;
        font-size: 12px;
      }
    }
  }
  .contact {
    padding: 24px;
    color: #ffffff;
    background: #2d2e2d;
    h5 {
      font-size: 14px;
      color: #ffffff;
      padding: 40px 0;
      font-weight: normal;
      line-height: 24px;
    }
    .btn {
      width: 220px;
      height: 52px;
      text-align: center;
      line-height: 52px;
      margin-bottom: 20px;
      border: 1px solid rgba(232, 192, 97, 1);
      color: #e8c061;
      font-size: 12px;
      font-weight: bold;
    }
    .form {
      padding: 40px 0;
      .form-item {
        padding: 10px 0;
        p {
          margin-bottom: 16px;
          color: #ffffff;
          font-size: 16px;
        }
        input,
        textarea {
          width: 100%;
          border: 1px solid #e8c061;
          background: transparent;
          height: 45px;
          line-height: 45px;
          border-radius: 0;
          outline: none;
          color: #ffffff;
          padding: 0 12px;
        }
        input:focus {
          border-width: 2px;
        }
        textarea {
          height: 250px;
        }
        .error {
          background: rgba(255, 64, 64, 0.24);
          border-color: rgb(255, 64, 64);
        }
      }
      .submit {
        width: 120px;
        height: 42px;
        border: 1px solid #e8c061;
        text-align: center;
        line-height: 42px;
        text-align: center;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: 4px;
        color: #e8c061;
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
.gap-line {
  border-top: 1px solid rgb(166, 148, 148);
}
</style>