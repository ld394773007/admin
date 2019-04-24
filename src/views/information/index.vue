<template>
  <div class="information container">
    <Card class="item"
          title="任务按执行者分布">
      <router-link to="/home/ring"
                   slot="extra">
        <Icon size="20"
              type="ios-expand" />
      </router-link>
      <div class="content">
        <ve-ring :data="ringData"
                 :settings="ringSetting"></ve-ring>
      </div>
    </Card>
    <Card class="item"
          title="期间完成任务">
      <router-link to="/home/histogram"
                   slot="extra">
        <Icon size="20"
              type="ios-expand" />
      </router-link>
      <div class="content">
        <vue-histogram :data="histogramData"></vue-histogram>
      </div>
    </Card>
    <Card class="item"
          title="概览报表">
      <router-link to="/home/gk"
                   slot="extra">
        <Icon size="20"
              type="ios-expand" />
      </router-link>
      <div class="content gk">
        <div class="gk-item">
          <span>任务总数</span>
          <p>10</p>
          <Progress :percent="100"
                    stroke-color="#409EFF"
                    hide-info />
        </div>
        <div class="gk-item">
          <span>已完成</span>
          <p>1</p>
          <Progress stroke-color="#19be6b"
                    :percent="10"
                    hide-info />
        </div>
        <div class="gk-item">
          <span>未完成</span>
          <p>9</p>
          <Progress :percent="90"
                    stroke-color="#F56C6C"
                    hide-info />
        </div>
        <div class="gk-item">
          <span>已逾期</span>
          <p>0</p>
          <Progress :percent="0"
                    stroke-color="#F56C6C"
                    hide-info />
        </div>
        <div class="gk-item">
          <span>按时完成</span>
          <p>7</p>
          <Progress :percent="0"
                    stroke-color="#19be6b"
                    hide-info />
        </div>
        <div class="gk-item">
          <span>今日到期</span>
          <p>0</p>
          <Progress :percent="0"
                    stroke-color="#F56C6C"
                    hide-info />
        </div>
        <div class="gk-item">
          <span>逾期完成</span>
          <p>7</p>
          <Progress :percent="0"
                    stroke-color="#F56C6C"
                    hide-info />
        </div>
      </div>
    </Card>
    <Card class="item"
          title="任务燃尽图">
      <router-link to="/home/line"
                   slot="extra">
        <Icon size="20"
              type="ios-expand" />
      </router-link>
      <div>
        <ve-line :data="lineData"></ve-line>
      </div>
    </Card>
    <Card class="item"
          title="人均吐纳率">
      <router-link to="/home/table"
                   slot="extra">
        <Icon size="20"
              type="ios-expand" />
      </router-link>
      <div class="content">
        <el-table :data="tableData"
                  style="width: 100%">
          <el-table-column type="index"
                           width="50">
          </el-table-column>
          <el-table-column prop="name"
                           label="项目名称">
          </el-table-column>
          <el-table-column prop="num"
                           label="人均吐纳率">
          </el-table-column>
        </el-table>
      </div>
    </Card>
    <Card class="item"
          title="项目进度">
      <router-link to="/home/progress"
                   slot="extra">
        <Icon size="20"
              type="ios-expand" />
      </router-link>
      <div class="content">
        <el-table :data="tableData1"
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
      </div>
    </Card>

  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
import VeRing from 'v-charts/lib/ring.common'
import VueHistogram from 'v-charts/lib/histogram.common'
export default {
  components: {
    VeRing,
    VeLine,
    VueHistogram
  },
  data () {
    return {
      ringSetting: {
        radius: [40, 100]
      },
      ringData: {
        columns: ['名称', '任务'],
        rows: [
          { '名称': '陈波', '任务': 2 },
          { '名称': '待领取', '任务': 10 },
        ]
      },
      lineData: {
        columns: ['日期', '任务', '任务2'],
        rows: [
          { '日期': '04-01', '任务': 9, '任务2': 9 },
          { '日期': '04-02', '任务': 12, '任务2': 19 },
          { '日期': '04-03', '任务': 4, '任务2': 29 },
          { '日期': '04-04', '任务': 28, '任务2': 9 },
          { '日期': '04-05', '任务': 21, '任务2': 3 },
          { '日期': '04-06', '任务': 8, '任务2': 9 }
        ]
      },
      histogramData: {
        columns: ['名称', '期间完成任务'],
        rows: [
          { '名称': '陈波', '期间完成任务': 2 },
          { '名称': '待领取', '期间完成任务': 10 }
        ]
      },
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
      tableData1: [{
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
      }]
    }
  }

}
</script>

<style lang="scss" scoped>
.information {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  .item {
    margin: 0 20px;
    margin-bottom: 20px;
    width: 560px;
  }
  .gk {
    display: flex;
    flex-wrap: wrap;
    &-item {
      margin-top: 40px;
      margin-left: 4%;
      width: 20%;
      font-size: 12px;
      p {
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
}
</style>
