<template>
  <div class="main">
    <el-container>
      <el-aside width="300px">
        <div class="title">五星级酒店管理系统</div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <router-link to="/home/data">
              <div>
                <i class="el-icon-menu"></i>
                <span slot="title">DATA CENTER</span>
              </div>
            </router-link>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-management"></i>
              <span>MANAGEMENT</span>
            </template>
            <router-link to="/home/hotel-setting">
              <div>
                <el-menu-item index="2-1">Hotel Setting</el-menu-item>
              </div>
            </router-link>

            <router-link to="/home/rooms-manage">
              <div>
                <el-menu-item index="2-2">Rooms Manage</el-menu-item>
              </div>
            </router-link>
          </el-submenu>

          <el-menu-item index="3">
            <router-link to="/home/order">
              <div>
                <i class="el-icon-document"></i>
            <span slot="title">ORDER</span>
              </div>
            </router-link>
            
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/home/access">
              <div>
                <i class="el-icon-user"></i>
            <span slot="title">ACCESS</span>
              </div>
            </router-link>
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
.dfnone{
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