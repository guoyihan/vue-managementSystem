<template>
  <div class="main">
    <el-container>
      <el-aside width="300px">
        <div class="title">五星级酒店管理系统</div>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1" @click="toHome_sub('data')">
            <div>
              <i class="el-icon-menu"></i>
              <span slot="title">DATA CENTER</span>
            </div>
          </el-menu-item>
          <el-menu-item index="2" @click="toHome_sub('management')">
            <div>
              <i class="el-icon-s-management"></i>
              <span slot="title">MANAGEMENT</span>
            </div>
          </el-menu-item>

          <el-menu-item index="3" @click="toHome_sub('order')">
            <div>
              <i class="el-icon-document"></i>
              <span slot="title">ORDER</span>
            </div>
          </el-menu-item>
          <el-menu-item index="4" @click="toHome_sub('access')">
            <div>
              <i class="el-icon-user"></i>
              <span slot="title">ACCESS</span>
            </div>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="75px">
          <v-head></v-head>
        </el-header>
        <el-main>
          <router-view> </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Head from "../components/head";
export default {
  components: {
    "v-head": Head,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toHome_sub(sub) {
      this.$router.push(`/home/${sub}`);
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  height: 100vh;
}
.el-container {
  width: 100%;
  height: 100%;
}
.dfnone {
  display: none;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  width: 100%;
  height: 75px;
}
.el-aside {
  color: #333;
  height: 100%;
  text-align: center;
  .title {
    width: 100%;
    height: 75px;
    text-align: center;
    margin-bottom: 50px;
    background-color: #dcdfe6;
    line-height: 75px;
  }
  .el-menu {
    width: 100%;
    box-sizing: border-box;
  }
}

.el-menu-item,
.el-submenu {
  text-align: left;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>