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
          <ve-line :data="lineData"></ve-line>
        </Card>
        <Card class="chart-table">
          <p class="chart-table-title">创建的任务详情表</p>
          <el-table max-height="250"
                    border
                    :data="tableData"
                    style="width: 100%">
            <el-table-column type="index"
                             width="50">
            </el-table-column>
            <el-table-column prop="date"
                             label="创建时间">
            </el-table-column>
            <el-table-column prop="test"
                             label="任务">
            </el-table-column>
            <el-table-column prop="name"
                             label="执行者">
            </el-table-column>
          </el-table>
          <div class="chart-pagination">
            <el-pagination background
                           layout="prev, pager, next"
                           :total="1000">
            </el-pagination>
          </div>
        </Card>
        <Card class="chart-table">
          <p class="chart-table-title">完成的任务详情表</p>
          <el-table max-height="250"
                    border
                    :data="tableData"
                    style="width: 100%">
            <el-table-column type="index"
                             width="50">
            </el-table-column>
            <el-table-column prop="date"
                             label="创建时间">
            </el-table-column>
            <el-table-column prop="test"
                             label="任务">
            </el-table-column>
            <el-table-column prop="name"
                             label="执行者">
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
import VeLine from 'v-charts/lib/line.common'
export default {
  components: {
    VeLine
  },
  data () {
    return {
      ringSetting: {
        radius: [40, 100]
      },
      lineData: {
        columns: ['日期', '累计任务总数', '累计完成任务数'],
        rows: [
          { '日期': '04-01', '累计任务总数': 0, '累计完成任务数': 0 },
          { '日期': '04-02', '累计任务总数': 0, '累计完成任务数': 0 },
          { '日期': '04-03', '累计任务总数': 0, '累计完成任务数': 0 },
          { '日期': '04-04', '累计任务总数': 28, '累计完成任务数': 9 },
          { '日期': '04-05', '累计任务总数': 21, '累计完成任务数': 3 },
          { '日期': '04-06', '累计任务总数': 8, '累计完成任务数': 9 }
        ]
      },
      form: {
        name: '',
        time: ''
      },
      tableData: [
        {
          date: '今天 18:00',
          test: '在这里收集产品方案',
          name: '陈波'
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
  &-table {
    margin-bottom: 10px;
  }
}
</style>
