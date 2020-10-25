<template>
  <div>
    <el-row class="sort">
      <el-col :span="24">
        <div class="content bg-purple">
          <div class="item w50">
            <div class="title w50">Type:</div>
            <div
              class="text w50 selected"
              v-for="(item, index) in sortList"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
          <div class="item w50">
            <div class="title w50">Status:</div>
            <div
              class="text w50"
              v-for="(item, index) in statusList"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div></el-col
      >
    </el-row>
    <el-row class="detail">
      <el-col :span="24">
        <div class="container">
          <div class="tip">
            <div class="item">
              <div class="color Schedeuled"></div>
              <div class="status">Schedeuled</div>
            </div>
            <div class="item">
              <div class="color Evacuate"></div>
              <div class="status">Evacuate</div>
            </div>
            <div class="item">
              <div class="color Checked"></div>
              <div class="status">Checked</div>
            </div>
            <div class="item">
              <div class="color Free"></div>
              <div class="status">Free</div>
            </div>
          </div>
          <div class="showRooms">
            <div
              class="situation"
              v-for="(item, index) in roomsList"
              :key="index"
            >
              <div class="situation-floors">{{ item.Floor }}</div>
              <div class="situation-rooms">
                <div class="room" :class="i.status" v-for="(i, k) in item.rooms" :key="k">
                  <div class="type" >{{ i.type }}</div>
                  <div class="nums">{{ i.nums }}</div>
                </div>
              </div>
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
      sortList: ["All", "Penthouse", "Diplomatic", "Business"],
      statusList: ["All", "Schedeuled", "Evacuate", "Checked", "Free"],
      roomsList: [
        {
          Floor: "1F",
          rooms: [
            { type: "Penthouse", nums: "A-101", status: "Schedeuled" },
            { type: "Diplomatic", nums: "A-102", status: "Free" },
            { type: "Diplomatic", nums: "A-103", status: "Evacuate" },
            { type: "Penthouse", nums: "A-104", status: "Checked"},
            { type: "Business", nums: "A-105", status: "Evacuate" },
            { type: "Penthouse", nums: "A-106", status: "Schedeuled" },
            { type: "Business", nums: "A-107", status: "Evacuate" },
            { type: "Diplomatic", nums: "A-108", status: "Checked" },
          ],
        },
        {
          Floor: "2F",
          rooms: [
            { type: "Penthouse", nums: "A-201", status: "Evacuate" },
            { type: "Diplomatic", nums: "A-202" , status: "Schedeuled"},
            { type: "Diplomatic", nums: "A-203", status: "Free" },
            { type: "Penthouse", nums: "A-204", status: "Checked" },
            { type: "Business", nums: "A-205", status: "Free" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.bg-purple {
  background: #d3dce6;
}
.Schedeuled {
  background-color: #3d434d;
}
.Evacuate {
  background-color: #b8987a;
}
.Checked {
  background-color: #4b9785;
}
.Free {
  background-color: #4074a1;
}

.w50 {
  width: 100px;
}
.el-col {
  border-radius: 4px;
}
.el-row {
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
  .content {
    border-radius: 4px;
    min-height: 36px;
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 40px;
      line-height: 1;
      margin: 5px 10px;
      align-items: center;
      .text {
        margin: 0 10px;
      }
      .selected {
        // background-color: #409EFF;
        background-color: #ecf5ff;

        border-radius: 10px;
      }
    }
  }
  .container {
    border-radius: 4px;
    min-height: 36px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    .tip {
      height: 40px;
      display: flex;
      flex-wrap: nowrap;
      float: right;
      flex-direction: row-reverse;
      .item {
        width: 100px;
        margin-left: 10px;
        height: 40px;
        line-height: 40px;
        display: flex;
        flex-wrap: nowrap;
        font-size: 10px;
        align-items: center;
        .color {
          height: 20px;
          width: 20px;
          border-radius: 4px;
          margin-right: 5px;
        }
      }
    }
    .showRooms {
      width: 100%;
      line-height: 1;
      .situation {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        .situation-floors {
          width: 100%;
          text-align: left;
          font-size: 30px;
          font-weight: 500;
          margin-bottom: 10px;
          padding-left: 20px;
        }
        .situation-rooms {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .room {
            width: 225px;
            height: 100px;
            margin: 20px;
            color: #fff;
            border-radius: 10px;
            .type {
              width: 100%;
              height: 40px;
              text-align-last: left;
              font-size: 20px;
              padding: 10px 0 0 10px;
              font-weight: lighter;
            }
            .nums {
              width: 100%;
              height: 60px;
              font-size: 40px;
              line-height: 60px;
              text-align: left;
              padding: 0 10px 0 10px;
            }
          }
        }
      }
    }
  }
}
</style>