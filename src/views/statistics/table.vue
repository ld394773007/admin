<template>
  <div class="chart container">
    <div class="chart-header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/test/statistics' }">统计</el-breadcrumb-item>
        <el-breadcrumb-item>人均吐纳率</el-breadcrumb-item>
      </el-breadcrumb>
      <i class="close-btn el-icon-close" @click="$router.go(-1)"></i>
    </div>
    <Card class="chart-body">
      <el-table :data="tableData"
                  style="width: 100%">
          <el-table-column type="index"
                           label="排名"
                           width="50">
          </el-table-column>
          <el-table-column prop="name"
                           label="项目名称">
          </el-table-column>
          <el-table-column prop="num"
                           sortable
                           label="人均吐纳率">
          </el-table-column>
        </el-table>
    </Card>
  </div>
</template>

<script>
import VeRing from 'v-charts/lib/ring.common'
export default {
  components: {
    VeRing
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        num: '10%'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        num: '28%'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        num: '20%'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        num: '17%'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        num: '17%'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        num: '17%'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        num: '17%'
      }],
      form: {
        name: '',
        time: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  &-header {
    @include flex-center;
    justify-content: space-between;
    margin-bottom: 10px;
    .close-btn {
      font-weight: bold;
      font-size: 20px;
      cursor: pointer;
    }
  }
  &-body {
    height: calc(100vh - 120px);
  }
}
</style>
