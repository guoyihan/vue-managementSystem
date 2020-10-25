<template>
  <div class="main">
    <div class="bg">
      <div class="bg-intro">
        <div class="intro">
          <div class="left content">
            <div
              class="remind remind1"
              :class="{ none: islogin == 'login' || islogin == '' }"
            >
              <div class="title">Have an account?</div>
              <div class="text">
                If you already have an account, click the button below to log in
              </div>
              <el-button @click="switchBar1" class="btn" size="medium"
                >login</el-button
              >
            </div>
          </div>
        </div>
        <div class="intro">
          <div class="right content">
            <div class="remind remind2" :class="{ none: islogin == 'sign' }">
              <div class="title">Don't Have an account?</div>
              <div class="text">
                If you don't already have an account, click the button below to
                create one that belongs to you
              </div>
              <el-button size="medium" @click="switchBar2" class="btn"
                >sign up</el-button
              >
            </div>
          </div>
        </div>
      </div>

      <div class="slide slide1" :class="islogin" ref="slide"></div>
      <div class="slide slide2" :class="islogin">
        <div class="form">
          <el-form status-icon :rules="rules" ref="ruleForm" :model="ruleForm">
            <div class="title">
              {{ islogin == "login" || islogin == "" ? "LOG IN" : "SIGN UP" }}
            </div>
            <el-form-item prop="name">
              <el-input
                v-model="ruleForm.name"
                clearable
                placeholder="请输入账号"
              >
                <template slot="prepend">账号</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input
                v-model="ruleForm.pass"
                show-password
                clearable
                size="medium"
              >
                <template slot="prepend">密码</template>
              </el-input>
            </el-form-item>
            <el-form-item
              :class="{ none: islogin === 'login' || islogin === '' }"
              prop="checkPass"
            >
              <el-input
                v-model="ruleForm.checkPass"
                show-password
                clearable
                size="medium"
              >
                <template slot="prepend">确认密码</template>
              </el-input>
            </el-form-item>
            <el-form-item class="btns">
              <el-button
                type="primary"
                @click="handlelogin"
                :class="{ none: islogin === 'sign' }"
                >登录</el-button
              >
              <el-button
                type="primary"
                @click="handregister"
                :class="{ none: islogin === 'login' || islogin === '' }"
                >注册</el-button
              >
              <el-button
                type="primary"
                @click="onSubmit"
                :class="{ none: islogin === 'sign' }"
                >忘记密码</el-button
              >
            </el-form-item>
            <el-form-item>
              <div class="other-login">
                <span>社交帐号登录</span>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
      },
      checkFinish: false,
      islogin: "",
      rules: {
        name: [
          { required: true, message: "请输入账号名", trigger: "blur" },
          { min: 3, max: 9, message: "长度在 3 到 9 个字符", trigger: "blur" },
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("/home/data");
    },
    handlelogin() {
      if (this.ruleForm.name.trim() == "" || this.ruleForm.pass.trim() == "") {
        this.$notify.error({
          title: "错误",
          message: "账户或密码不能为空",
        })
        return
      }
      this.$http.login({
        formData: this.ruleForm
      })
      .then(() => {
        this.$router.push('/home')
      })
    },
    handregister() {
      if (this.ruleForm.name.trim() == "" || this.ruleForm.pass.trim() == "") {
        this.$notify.error({
          title: "错误",
          message: "账户或密码不能为空",
        })
        return
      } else if (this.ruleForm.pass.trim() !== this.ruleForm.checkPass.trim()) {
        this.$notify.error({
          title: "错误",
          message: "两次密码不一致",
        })
        return
      }
    },
    switchBar1() {
      this.islogin = "login";
      console.log(this.$refs.slide);
    },
    switchBar2() {
      this.islogin = "sign";
      console.log(this.$refs.slide);
    },
  },
};
</script>

<style lang="less" scoped>
.none {
  display: none;
}
button {
  float: left;
  width: 100px;
  height: 100px;
}
.main {
  background: url("../assets/images/login-bg1.jpg") no-repeat;
  position: fixed;
  background-size: cover;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .bg {
    width: 1100px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .bg-intro {
      width: 100%;
      height: 100%;
      // background-color: rgba(3,155,229,.4);
      background: linear-gradient(
        to bottom right,
        rgba(19, 38, 140, 0.5),
        rgba(72, 46, 111, 0.5)
      );
      display: flex;
      justify-content: space-between;

      .intro {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80%;
          height: 100%;
          margin: 0 auto;
          .remind {
            height: 100%;
            width: 100%;
            padding: 20% 0;
            float: left;
            .title {
              color: #fff;
              opacity: 0.6;
              font-size: 40px;
              text-align: left;
              margin-bottom: 15px;
            }
            .text {
              color: #fff;
              opacity: 0.3;
              font-size: 25px;
              text-align: left;
              margin-bottom: 15px;
            }
            .btn {
              width: 125px;
              height: 35px;
              border-radius: 10px;
              span {
                text-align: center;
              }
            }
          }
        }
      }
    }
    .slide {
      background-color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      .form {
        height: 100%;
        width: 100%;
        .el-form {
          height: 100%;
          width: 100%;
          .title {
            text-align: left;
            color: #409eff;
            height: 50px;
            line-height: 50px;
            font-size: 35px;
            margin-bottom: 20px;
          }
          .el-form-item {
            .el-button {
              width: 175px;
              height: 40px;
            }
          }
          .btns {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
    .slide1 {
      width: 500px;
      height: 500px;
      margin-top: -50px;
      margin-left: 100px;
      // transform: translateX(450px) 2s ease-in-out;
    }
    .slide2 {
      width: 400px;
      height: 400px;
      margin-left: 150px;
    }
    .slide1.login {
      left: 400px;
      animation: move2 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .slide2.login {
      left: 0px;
      transition: left 0.4s ease-in-out;
    }
    .slide1.sign {
      left: 0px;
      animation: move1 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .slide2.sign {
      left: 400px;
      transition: left 0.4s ease-in-out;
    }
  }
}
@keyframes move1 {
  40% {
    transform: translate3d(400px, 0, 0);
  }
  50% {
    transform: translate3d(420px, 0, 0);
  }
  60% {
    transform: translate3d(380px, 0, 0);
  }
  70% {
    transform: translate3d(400px, 0, 0);
  }
  90% {
    transform: translate3d(400px, 0, 0);
  }
  100% {
    transform: translate3d(400px, 0, 0);
  }
}
@keyframes move2 {
  40% {
    transform: translate3d(-400px, 0, 0);
  }
  50% {
    transform: translate3d(-420px, 0, 0);
  }
  60% {
    transform: translate3d(-380px, 0, 0);
  }
  70% {
    transform: translate3d(-400px, 0, 0);
  }
  90% {
    transform: translate3d(-400px, 0, 0);
  }
  100% {
    transform: translate3d(-400px, 0, 0);
  }
}
</style>