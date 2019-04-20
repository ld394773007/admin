<template>
  <div class="prject container">
    <div class="prject-nav">
      <CellGroup>
        <Cell selected title="所有项目"
              extra="20">
          <Icon type="md-star"
                slot="icon" />
        </Cell>
        <Cell title="未开始项目">
          <Icon type="ios-clock-outline"
                slot="icon" />
        </Cell>
        <Cell title="进行中的项目"
              extra="1">
          <Icon type="logo-buffer"
                slot="icon" />
        </Cell>
        <Cell title="已完成的项目">
          <Icon type="md-copy"
                slot="icon" />
        </Cell>
        <Cell title="已逾期的项目"
              extra="1">
          <Icon type="md-calendar"
                slot="icon" />
        </Cell>
        <Cell title="已归档的项目">
          <Icon type="ios-filing"
                slot="icon" />
        </Cell>
        <Cell title="查看甘特图">
          <Icon type="ios-stats"
                slot="icon" />
        </Cell>
      </CellGroup>
    </div>
    <div class="prject-content">
      <div v-if="type"
           class="prject-table">
        <el-table :data="tableData"
                  :max-height="tableHeight"
                  style="width: 100%">
          <el-table-column prop="title"
                           label="标题">
          </el-table-column>
          <el-table-column prop="name"
                           label="负责人"
                           width="100">
          </el-table-column>
          <el-table-column prop="level"
                           label="优先级"
                           width="120">
          </el-table-column>
          <el-table-column prop="success"
                           label="已完成"
                           width="100">
          </el-table-column>
          <el-table-column prop="overdue"
                           label="已逾期"
                           width="100">
          </el-table-column>
          <el-table-column prop="test"
                           label="所有任务"
                           width="100">
          </el-table-column>

          <el-table-column prop="startTime"
                           width="120"
                           label="开始时间">
          </el-table-column>
          <el-table-column prop="endTime"
                           width="120"
                           label="截止时间">
          </el-table-column>
        </el-table>
      </div>
      <div v-else
           class="prject-list">
        <el-card class="prject-item"

                 v-for="item in 9"
                 :key="item">
          <i class="gd-text" v-if="item ==1 ">已归档</i>
          <div @click="$router.push('/home/test')">
            <div class="prject-item-header">
              <p class="prject-item-title" :class="{gd: item == 1}">点点项目标题</p>
              <span class="prject-item-avatar">陈</span>
            </div>
            <div class="prject-item-img">
              <img src=""
                   class="prject-item-image">
            </div>
            <div class="prject-item-info">
              <Tag color="red">紧急且重要</Tag>
              <Tag color="green">23/60</Tag>
              <span class="prject-item-overdue">
                15
              </span>
            </div>
            <div class="prject-item-time">
              <span>2019-03-10</span> - <span>2019-04-10</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="prject-pagination">
        <el-pagination background
                       layout="prev, pager, next"
                       :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableHeight: 500,
      type: false,
      form: {
        startTime: '',
        endTime: '',
        level: '',
        status: '',
        sort: '',
        search: ''
      },
      tableData: [{
        startTime: '2016-05-02',
        endTime: '2019-04-10',
        level: '紧急且重要',
        overdue: 15,
        success: 23,
        test: 60,
        name: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  created () {
    this.tableHeight = window.innerHeight * 0.7
  }
}
</script>

<style lang="scss" scoped>
.prject {
  position: relative;
  display: flex;
  margin-top: 20px;
  &-nav {
    margin-right: 20px;
    width: 280px;
    background-color: #fff;
  }
  .fa-chart-bar {
    font-size: 24px;
    color: #409eff;
  }
  &-pagination {
    @include flex-center;
  }
  &-list {
    overflow-y: auto;
    @include flex-center;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  &-item {
    @include flex-col-center;
    position: relative;
    margin-right: 10px;
    margin-bottom: 20px;
    width: 280px;
    overflow: hidden;
    cursor: pointer;
    & .gd-text {
      position: absolute;
      text-align: center;
      padding-top: 20px;
      width: 80px;
      left: -21px;
      top: -9px;
      font-size: 12px;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
      transform: rotate(-40deg);
    }
    &-img {
      @include flex-center;
      margin-bottom: 5px;
      width: 100%;
    }
    &-image {
      margin: 5px auto;
      width: 80px;
      height: 50px;
      background-color: #ccc;
    }
    &-header {
      @include flex-center;
      justify-content: space-between;
    }
    &-title {
      width: 200px;
      margin-right: 30px;
      overflow: hidden;
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      &.gd {
        text-indent: 36px;
      }
    }
    &-avatar {
      @include flex-center;
      width: 30px;
      height: 30px;
      font-size: 12px;
      border-radius: 50%;
      background-color: #409eff;
      color: #fff;
    }
    &-info {
      @include flex-center;
      justify-content: space-between;
    }
    &-overdue {
      @include flex-center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #f56c6c;
      font-size: 14px;
      color: #fff;
    }
    &-time {
      margin-top: 10px;
      font-size: 12px;
    }
  }
  &-header {
    @include flex-center;
    justify-content: space-between;
    &-right {
      @include flex-center;
      .fa-list-ul {
        cursor: pointer;
        margin-right: 20px;
        color: #409eff;
        font-size: 24px;
      }
    }
  }
  &-content {
    padding: 0 15px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 8px;
    flex: 1;
    background-color: #fff;
  }
  &-input,
  &-time {
    @include flex-center;
    justify-content: flex-start;
  }
  &-search {
    width: 260px;
  }
  &-time {
    margin-right: 10px;
  }
  &-time-line {
    margin: 0 8px;
  }
  &-start-time,
  &-end-time,
  &-status,
  &-level,
  &-sort {
    width: 150px;
  }
  &-status,
  &-level,
  &-sort {
    margin-right: 10px;
  }
}
</style>

