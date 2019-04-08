<template>
  <el-card class="work continar">
    <div class="work-content">
      <div class="work-content-header">
        <el-tabs v-model="activeName"
                 class="work-content-tabs"
                 @tab-click="handleClick">
          <el-tab-pane label="我的任务"
                       name="1"></el-tab-pane>
          <el-tab-pane label="我发布的"
                       name="2"></el-tab-pane>
          <el-tab-pane label="我关注的"
                       name="3"></el-tab-pane>
          <el-tab-pane label="所以任务"
                       name="4"></el-tab-pane>
        </el-tabs>
        <div class="work-content-header-right">
          <i class="work-icon el-icon-circle-plus-outline"></i>
          <el-input v-model="searchValue"
                    placeholder="请输入内容">
            <el-button slot="append"
                       icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="work-content-body">
        <el-table ref="singleTable"
                  :data="tableData"
                  class="work-table"
                  :max-height="tableHeight"
                  highlight-current-row
                  style="width: 100%">
          <el-table-column type="index"
                           label="序号"
                           width="50">
          </el-table-column>
          <el-table-column property="title"
                           label="标题"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column property="date"
                           label="截止日期"
                           width="120">
          </el-table-column>
          <el-table-column property="author"
                           width="90"
                           label="发布人">
          </el-table-column>
          <el-table-column property="status"
                          width="90"
                           label="状态">
          </el-table-column>
          <el-table-column property="level"
                          width="120"
                           label="优先级">
          </el-table-column>
          <el-table-column label="操作"  width="90">
            <template slot-scope="scope">
              <i class="el-icon-more"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="work-nav">
      <span class="work-nav-title">项目总数<i>3</i></span>
      <div class="work-nav-list">
        <div class="work-nav-item">
          <div class="work-nav-item-header warning">
            未开始
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
        <div class="work-nav-item">
          <div class="work-nav-item-header brand">
            进行中
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
        <div class="work-nav-item">
          <div class="work-nav-item-header success">
            已完成
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
        <div class="work-nav-item">
          <div class="work-nav-item-header danger">
            已逾期
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
      </div>
      <span class="work-nav-title">任务总数<i>3</i></span>
      <span class="work-nav-subtitle">我的任务</span>
      <div class="work-nav-list">
        <div class="work-nav-item">
          <div class="work-nav-item-header warning">
            未开始
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
        <div class="work-nav-item">
          <div class="work-nav-item-header brand">
            进行中
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
        <div class="work-nav-item">
          <div class="work-nav-item-header success">
            已完成
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
        <div class="work-nav-item">
          <div class="work-nav-item-header danger">
            已逾期
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
      </div>
      <span class="work-nav-subtitle">我发布的</span>
      <div class="work-nav-list">
        <div class="work-nav-item">
          <div class="work-nav-item-header warning">
            未开始
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
        <div class="work-nav-item">
          <div class="work-nav-item-header brand">
            进行中
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
        <div class="work-nav-item">
          <div class="work-nav-item-header success">
            已完成
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
        <div class="work-nav-item">
          <div class="work-nav-item-header danger">
            已逾期
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
      </div>
      <span class="work-nav-subtitle">我关注的</span>
      <div class="work-nav-list">
        <div class="work-nav-item">
          <div class="work-nav-item-header warning">
            未开始
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
        <div class="work-nav-item">
          <div class="work-nav-item-header brand">
            进行中
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
        <div class="work-nav-item">
          <div class="work-nav-item-header success">
            已完成
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
        <div class="work-nav-item">
          <div class="work-nav-item-header danger">
            已逾期
          </div>
          <div class="work-nav-item-body">
            1
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      },{
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      },{
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      },{
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      },{
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      },{
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      },{
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      },{
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      }],
      activeName: '1',
      searchValue: '',
      tableHeight: 500
    }
  },
  methods: {
    handleClick () {

    }
  },
  created() {
    this.tableHeight = window.innerHeight * 0.7
  }
}
</script>

<style lang="scss" scoped>
.work {
  position: relative;
  &-table {
    .el-icon-more {
      cursor: pointer;
    }
  }
  &-content {
    box-sizing: border-box;
    position: absolute;
    padding: 10px 30px;
    padding-top: 20px;
    left: 0;
    right: 350px;
    top: 0;
    bottom: 0;
    &-header {
      position: relative;
      margin-bottom: 10px;
      &-right {
        @include flex-center;
        position: absolute;
        right: 0;
        top: -9px;
        .work-icon {
          margin-right: 10px;
          font-size: 25px;
        }
      }
    }
  }
  &-nav {
    box-sizing: border-box;
    position: absolute;
    padding: 20px;
    right: 0;
    top: 0;
    bottom: 0;
    width: 350px;
    &-title {
      display: block;
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: bold;
      i {
        vertical-align: sub;
        color: #E6A23C;
        font-size: 28px;
        margin-left: 6px;
      }
    }
    &-subtitle {
      display: block;
      margin-bottom: 10px;
      display: block;
      font-size: 14px;
    }
    &-list {
      @include flex-center;
      margin-bottom: 10px;
    }
    &-item {
      @include flex-col-center;

      flex: 1;
      margin: 0 6px;
      width: 80px;
      border-radius: 5px;
      overflow: hidden;
      &-header {
        @include flex-center;
        width: 100%;
        height: 30px;
        font-size: 12px;
        color: #fff;
        &.success {
          background-color: #67c23a;
        }
        &.warning {
          background-color: #e6a23c;
        }
        &.danger {
          background-color: #f56c6c;
        }
        &.brand {
          background-color: #409eff;
        }
      }
      &-body {
        box-sizing: border-box;
        @include flex-center;
        width: 100%;
        height: 50px;
        font-size: 24px;
        border-radius: 5px;
        border: 1px solid #ebeef5;
      }
    }
  }
}
</style>

