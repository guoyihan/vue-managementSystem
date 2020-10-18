<template>
  <div class="Echarts">
    <div id="main" style="width: 1100px; height: 300px"></div>
  </div>
</template>

<script>
export default {
  name: "Echarts",
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        legend: {
          data: ["this week", "last week"],
        },
        title: {
          text: "Rate",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
    
        },
        series: [
          {
            name: "this week",
            data: [560, 1122, 9234, 434, 1230, 630, 150],
            type: "line",
          },
          {
            name: "last week",
            data: [820, 7932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style>
</style>
