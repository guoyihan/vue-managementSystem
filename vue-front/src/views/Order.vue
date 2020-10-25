<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="filter bgc">
          <div class="title">Date</div>
          <div class="general">
            <el-date-picker
              v-model="dataRange"
              type="datetimerange"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']"
            >
            </el-date-picker>
          </div>
          <div class="general">
            <el-button type="primary" size="small" round>进行查询</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="form">
          <div class="header">
            <el-row :gutter="20">
              <el-col :span="6"><span class="name general">Name</span></el-col>
              <el-col :span="6"
                ><span class="date general">Scheduled Date</span></el-col
              >
              <el-col :span="6"
                ><span class="type general">Room Type</span></el-col
              >
              <el-col :span="6"
                ><span class="pay general">Actually Paid</span></el-col
              >
            </el-row>
            <!-- <span class="name general">Name</span>
            <span class="date general">Scheduled Date</span>
            <span class="type general">Room Type</span>
            <span class="pay general">Actually Paid</span> -->
          </div>
          <div class="body">
            <div
              class="body-item"
              v-for="(item, index) in customerList"
              :key="index"
              :class="{'bgc': index % 2 == 0}"
            >
            <el-row :gutter="20">
              <el-col :span="6"><span>{{ item.name }}</span></el-col>
              <el-col :span="6"
                ><span>{{ item.date }}</span></el-col
              >
              <el-col :span="6"
                ><span>{{ item.type }}</span></el-col
              >
              <el-col :span="6"
                ><span>{{ item.pay }}</span></el-col
              >
            </el-row>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataRange: "",
      val: "",
      customerList: [
        {
          name: "gsd",
          date: "2020-2-21 12:19",
          type: "Penthouse",
          pay: "￥2122",
        },
        {
          name: "asdas",
          date: "2020-2-21 12:19",
          type: "Diplomatic",
          pay: "￥1222",
        },
        {
          name: "yhrgs",
          date: "2020-2-21 12:19",
          type: "Penthouse",
          pay: "￥2172",
        },
        {
          name: "frqw",
          date: "2020-2-21 12:19",
          type: "Business",
          pay: "￥922",
        },
        {
          name: "gsd",
          date: "2020-2-21 12:19",
          type: "Diplomatic",
          pay: "￥2122",
        },
        {
          name: "gsd",
          date: "2020-2-21 12:19",
          type: "Business",
          pay: "￥3358",
        },
        {
          name: "gsd",
          date: "2020-2-21 12:19",
          type: "Penthouse",
          pay: "￥1894",
        },
      ],
    };
  },
  watch: {
    dataRange(val) {
      this.val = val;
    },
  },
};
</script>

<style lang="less" scpoed>
.bgc{
    background: #d3dce6;

}
.el-row {
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  .filter {
    width: 100%;
    line-height: 1;
    height: 50px;
    display: flex;
    flex-wrap: nowrap;
    padding-left: 50px;
    border-radius: 4px;
    .title {
      width: 50px;
      height: 100%;
      line-height: 50px;
      margin-right: 10px;
    }
    .general {
      height: 50px;
      align-items: center;
      line-height: 50px;
      margin-right: 30px;
    }

  }
  .form {
    width: 100%;
    line-height: 1;
    display: flex;
    flex-direction: column;
    .header {
      border-bottom: 1px solid #000;
      margin-bottom: 20px;
      height: 30px;
      line-height: 30px;
      float: left;
      text-align: left;
      .el-col {
        text-align: center;
        .general {
          height: 100%;
        }
      }
    }
    .body {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: left;
      .body-item{
        margin-bottom: 15px;
      }
      .el-col {
        text-align: center;
      }
    }
  }
}
.el-col {
  border-radius: 4px;
}
</style>