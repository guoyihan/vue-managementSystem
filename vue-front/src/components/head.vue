<template>
  <div class="head">
    <div class="left">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        clearable
        v-model="searchRes"
      >
      </el-input>
    </div>
    <div class="right">
      <div class="mess">
        <el-avatar icon="el-icon-bell" :size="20"></el-avatar>
        <el-avatar icon="el-icon-s-comment" :size="20"></el-avatar>
      </div>
      <div class="ava">
        <el-dropdown>
          <el-avatar class="el-dropdown-link" icon="el-icon-user-solid" :size="50"></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-s-custom" @click="personCenter">个人中心</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button" @click="logout">退出</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchRes: "",
    };
  },
  methods:{
    personCenter(){},
    logout(){}
  }
};
</script>

<style lang="less" scoped>
.el-avatar {
  margin-left: 10px;
  background: #b3c0d1;
  color: #fff;
}
.head {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    margin-left: 30px;
    .el-input {
      border-radius: 30px;
    }
  }
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    .mess {
      margin-right: 15px;
    }
  }
}
</style>