<template>
  <div class="chart container">
    <div class="chart-header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/test/statistics' }">统计</el-breadcrumb-item>
        <el-breadcrumb-item>项目进度</el-breadcrumb-item>
      </el-breadcrumb>
      <i class="close-btn el-icon-close" @click="$router.go(-1)"></i>
    </div>
    <Card class="chart-body">
      <div class="chart-body-header">
        <span class="success">完成数</span>
        <span>总数</span>
      </div>
      <el-table :data="tableData"
                  style="width: 100%">
          <el-table-column prop="name"
                           width="180"
                           label="项目名称">
          </el-table-column>
          <el-table-column label="进度（工作项：个）">
            <template slot-scope="scope">
              <div>
                <Progress stroke-color="#19be6b"
                          class="information-progress"
                          :percent="scope.row.num">
                  <span>{{scope.row.num }}%({{scope.row.num}}/100)</span>
                </Progress>
              </div>
            </template>
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
        num: 10
      }, {
        date: '2016-05-04',
        name: '王小虎',
        num: 28
      }, {
        date: '2016-05-01',
        name: '王小虎',
        num: 20
      }, {
        date: '2016-05-03',
        name: '王小虎',
        num: 17
      }, {
        date: '2016-05-03',
        name: '王小虎',
        num: 30
      }, {
        date: '2016-05-03',
        name: '王小虎',
        num: 80
      }, {
        date: '2016-05-03',
        name: '王小虎',
        num: 40
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
    min-height: calc(100vh - 120px);
  }
  &-body-header {
    display: flex;
    justify-content: flex-end;
    span {
      position: relative;
      margin-left: 40px;
      &::before {
        content: '';
        position: absolute;
        left: -16px;
        top: 50%;
        margin-top: -4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #dcdee2;
      }
      &.success::before {
        background: #19be6b;
      }
    }
  }
}
</style>
