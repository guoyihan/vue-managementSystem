<template>
  <div class="main">
    <div class="bg">
      <div class="bg-intro">
        <div class="intro">
          <div class="left content">
            <div class="remind none">
              <div class="title">Have an account?</div>
              <div class="text">
                If you already have an account, click the button below to log in
              </div>
              <el-button @click="switchBar1" class="btn" size="medium"
                >login</el-button
              >
            </div>
            <div class="form">
              <el-form label-width="80px" status-icon class="form-body">
                <el-form-item
                  :rules="[
                    {
                      required: true,
                      message: '年龄不能为空',
                      trigger: 'blur',
                    },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符' },
                  ]"
                  class="item"
                >
                  <el-input
                    v-model="user_name"
                    clearable
                    placeholder="请输入账号"
                    class="ipt"
                  >
                    <template slot="prepend">账号</template>
                  </el-input>
                </el-form-item>
                <el-form-item
                  class="item"
                  :rules="[{ required: true, message: '密码不能为空' }]"
                >
                  <el-input
                    v-model="user_password"
                    show-password
                    clearable
                    class="ipt"
                    size="medium"
                  >
                    <template slot="prepend">密码</template>
                  </el-input>
                </el-form-item>
                <el-form-item class="item">
                  <el-button type="primary" @click="onSubmit">登录</el-button>
                  <el-button type="primary" @click="onSubmit">注册</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
        <div class="intro">
          <div class="right content">
            <div class="remind">
              <div class="title">Don't Have an account?</div>

              <div class="text">
                If you don't already have an account, click the button below to
                create one that belongs to you
              </div>
              <el-button size="medium" @click="switchBar2" class="btn"
                >sign up</el-button
              >
            </div>
            <div class="form none">
              <el-form label-width="80px" status-icon>
                <el-form-item
                  label="用户名"
                  :rules="[
                    {
                      required: true,
                      message: '年龄不能为空',
                      trigger: 'blur',
                    },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符' },
                  ]"
                >
                  <el-input v-model="user_name" clearable></el-input>
                </el-form-item>
                <el-form-item
                  label="密码"
                  :rules="[{ required: true, message: '密码不能为空' }]"
                >
                  <el-input
                    v-model="user_password"
                    show-password
                    clearable
                    suffix-icon="el-icon-date"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">登录</el-button>
                  <el-button type="primary" @click="onSubmit">注册</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>

      <div class="slide" :class="islogin"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_name: "",
      user_password: "",
      islogin: "",
    };
  },
  methods: {
    onSubmit() {
      this.$router.push('/home')
    },
    switchBar1() {
      this.islogin = "login";
    },
    switchBar2() {
      this.islogin = "sign";
    },
  },
};
</script>

<style lang="less" scoped>
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
          .none {
            display: none;
          }
          .form {
            margin-left: 85px;
            margin-top: 30px;
            height: 100%;
            width: 100%;
            .form-body {
              height: 100%;
              width: 100%;
              .ipt {
                width: 100%;
              }
            }
          }
        }
      }
    }
    .slide {
      background-color: #fff;
      width: 500px;
      height: 500px;
      position: absolute;
      left: 0;
      top: 0;
      margin-top: -50px;
      margin-left: 100px;
      box-shadow: 0 0 10px #a08b90;
      // transform: translateX(450px) 2s ease-in-out;
    }
    .slide.login {
      // transform: translateX(450px) 2s ease-in-out;
      // left: 450px;
      // transition: left 1s  ease-in-out 0s;
      left: 400px;
      // transition: left 1s;
      // transform: translateX(-50px) .5s ease-in-out 2s;
      animation: move2 0.3s ease-in-out 1;
      animation-fill-mode: forwards;
    }
    .slide.sign {
      left: 0px;
      animation: move1 0.3s ease-in-out 1;
      animation-fill-mode: forwards;
    }
  }
}
@keyframes move1 {
  90% {
    transform: translate3d(470px, 0, 0);
  }
  100% {
    transform: translate3d(400px, 0, 0);
  }
}
@keyframes move2 {
  90% {
    transform: translate3d(-470px, 0, 0);
  }
  100% {
    transform: translate3d(-400px, 0, 0);
  }
}
</style>