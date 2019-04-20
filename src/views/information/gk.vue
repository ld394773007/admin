<template>
  <div class="chart container">
    <!-- <div class="chart-header">
      <Breadcrumb separator=">">
        <BreadcrumbItem to="/home/information">Home</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    </div> -->
    <div class="chart-body">
      <div class="chart-left">
        <Card class="chart-content">
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
        <Card class="chart-table">
          <p class="chart-table-title">已完成</p>
          <el-table max-height="250"
                    :data="tableData"
                    border
                    style="width: 100%">
            <el-table-column type="index"
                             width="50">
            </el-table-column>
            <el-table-column prop="date"
                             label="完成时间">
            </el-table-column>
            <el-table-column prop="test"
                             label="任务">
            </el-table-column>
            <el-table-column prop="name"
                             label="执行者">
            </el-table-column>
            <el-table-column prop="testGroup"
                             label="任务分组">
            </el-table-column>
            <el-table-column prop="list"
                             label="列表">
            </el-table-column>
            <el-table-column prop="complete"
                             label="完成情况">
            </el-table-column>
            <el-table-column prop="status"
                             label="任务状态">
            </el-table-column>
          </el-table>
          <div class="chart-pagination">
            <el-pagination background
                           layout="prev, pager, next"
                           :total="1000">
            </el-pagination>
          </div>
        </Card>
      </div>
      <Card class="chart-right">
        <p slot="title">
          <Icon type="logo-buffer" />
          数据设置
        </p>
        <div class="chart-right-content">
          <span class="chart-right-text">筛选</span>
          <Form :model="form"
                label-position="top">
            <FormItem label="时间范围">
              <Select placeholder="请选择时间范围"
                      v-model="form.time">
                <Option value="1">过去七天</Option>
                <Option value="2">过去一个月</Option>
                <Option value="3">过去三个月</Option>
                <Option value="4">自定义</Option>
              </Select>
            </FormItem>
            <FormItem label="执行者">
              <Select placeholder="请选择执行者"
                      v-model="form.name"
                      filterable>
                <Option v-for="item in 10"
                        :value="item"
                        :key="item">执行者{{ item }}</Option>
              </Select>
            </FormItem>

          </Form>
        </div>
      </Card>
    </div>
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
      ringSetting: {
        radius: [40, 100]
      },
      ringData: {
        columns: ['name', 'test'],
        rows: [
          { name: '陈波', test: 2 },
          { name: '待领取', test: 10 },
        ]
      },
      form: {
        name: '',
        time: ''
      },
      tableData: [
        {
          name: '陈波',
          date: '2019-04-19',
          test: '已通过设计',
          testGroup: '任务',
          list: '默认列表',
          complete: '已完成',
          status: '待开发'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  margin-top: 20px;
  &-table-title {
    text-align: center;
    margin-bottom: 10px;
  }
  &-body {
    display: flex;
    align-items: flex-start;
  }
  &-pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  &-content {
    height: 380px;
    margin-bottom: 10px;
    overflow: hidden;
  }
  &-left {
    flex: 1;
  }
  &-right {
    margin-left: 20px;
    width: 300px;
    &-text {
      display: block;
      margin-bottom: 20px;
    }
  }
  &-select {
    position: relative;
    width: 100%;
    i {
      position: absolute;
      right: 0;
    }
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
