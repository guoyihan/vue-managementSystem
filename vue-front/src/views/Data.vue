<template>
  <div>
    <el-row class="head">
      <el-col :span="24">
        <div class="grid-content bg-purple-light text">check in situation</div>
      </el-col>
    </el-row>
    <el-row class="summary" :gutter="50">
      <el-col :span="8" v-for="(item, index) in summaryList" :key="index">  <!--  高度由里面的元素撑开 -->    
        <div class="grid-content bg-purple-dark item">
          <div class="header">{{item.title}}</div>
          <div class="content">
            <div class="num">{{item.nums}}</div>
            <div class="instruction">{{item.rate}}compared to last week</div>
          </div>
        </div>
      </el-col> 
    </el-row>
    <el-row class="lineChart  bg-purple ">
      <el-col :span="24">
        <div class="grid-contentchart">
          <v-echarts></v-echarts>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Echarts from '../components/echarts'
export default {
  components: {
    "v-echarts": Echarts
  },
  data() {
    return {
      summaryList: [
        {
          title: 'Week',
          nums: '2145',
          rate: '+2.5%'
        }, 
        {
          title: 'Maximum',
          nums: '2145',
          rate: '+2.5%'
        }, 
        {
          title: 'Total customer',
          nums: '2145',
          rate: '+2.5%'
        }, 
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
}
.head {
  height: 60px;
  font-size: 30px;
  line-height: 60px;
  text-align: left;
  .text {
    text-align-last: left;
  }
}
.summary {
  height: 200px;

  .item{
    display: flex;
    flex-direction: column;
    height: 200px;
    .header {
      height: 40px;
      line-height: 40px;
      text-align: center;
      align-items: center;
    }
    .content{
      height: 160px;
      display: flex;
      flex-direction: column;
      line-height: 160px;
      .num{
        height: 96px;
        line-height: 96px;
        align-items: center;
      }
      .instruction {
        height: 64px;
        line-height: 64px;
        align-items: center;
      }
    }
  }
  
}
.lineChart{
  .chart{
    width: 1100px; 
    height: 300px
  }
  
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e9eef3;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>