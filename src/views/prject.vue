<template>
  <el-card class="prject continar">
    <div class="prject-header">
      <div class="prject-input">
        <div class="prject-time">
          <el-date-picker v-model="form.startTime"
                          class="prject-start-time"
                          type="date"
                          placeholder="选择开始时间">
          </el-date-picker>
          <span class="prject-time-line">-</span>
          <el-date-picker v-model="form.endTime"
                          class="prject-end-time"
                          type="date"
                          placeholder="选择结束时间">
          </el-date-picker>
        </div>
        <el-select v-model="form.level"
                   class="prject-level"
                   placeholder="优先级选择">
          <el-option label="一般"
                     value="1">
          </el-option>
          <el-option label="紧急"
                     value="2">
          </el-option>
          <el-option label="紧急且重要"
                     value="3">
          </el-option>
        </el-select>
        <el-select v-model="form.status"
                   class="prject-status"
                   placeholder="项目状态选择">
          <el-option label="未开始"
                     value="1">
          </el-option>
          <el-option label="已完成"
                     value="2">
          </el-option>
          <el-option label="已逾期"
                     value="3">
          </el-option>
        </el-select>
        <el-select v-model="form.sort"
                   class="prject-sort"
                   placeholder="排序方式">
          <el-option label="未开始"
                     value="1">
          </el-option>
          <el-option label="已完成"
                     value="2">
          </el-option>
          <el-option label="已逾期"
                     value="3">
          </el-option>
        </el-select>
        <el-input placeholder="请输入内容"
                  v-model="form.search"
                  class="prject-search">
          <el-button slot="append"
                     icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="prject-header-right">
        <i class="fa fa-list-ul"
           @click="type = !type"></i>
        <el-button type="primary">新建项目</el-button>
      </div>
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
                 v-for="item in 30"
                 :key="item">
          <div class="prject-item-header">
            <p class="prject-item-title">点点项目标题</p>
            <span class="prject-item-avatar">陈</span>
          </div>
          <div class="prject-item-img">
            <img src=""
                 class="prject-item-image">
          </div>
          <div class="prject-item-info">
            <el-tag type="danger">紧急且重要</el-tag>
            <el-tag type="success">23/60</el-tag>
            <span class="prject-item-overdue">
              15
            </span>
          </div>
          <div class="prject-item-time">
            <span>2019-03-10</span> - <span>2019-04-10</span>
          </div>
        </el-card>
      </div>
    </div>
  </el-card>
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
  &-list {
    @include flex-center;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  &-item {
    @include flex-col-center;
    margin: 0 10px;
    margin-bottom: 30px;
    width: 300px;
    &-img {
      @include flex-center;
      margin-bottom: 10px;
      width: 100%;
    }
    &-image {
      margin: 10px auto;
      width: 80px;
      height: 80px;
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
      text-overflow: ellipsis;
      white-space: nowrap;
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
    position: absolute;
    padding: 0 20px;
    left: 0;
    right: 0;
    top: 80px;
    bottom: 0;
    overflow-y: auto;
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

