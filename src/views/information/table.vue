<template>
  <div class="chart container">
    <!-- <div class="chart-header">
      <Breadcrumb separator=">">
        <BreadcrumbItem to="/home/information">Home</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    </div> -->
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
  margin-top: 20px;
}
</style>
