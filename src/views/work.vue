<template>
  <div class="work container">
    <el-tabs class="work-tabs"
             v-if="isTeam"
             v-model="active">
      <el-tab-pane label="我的任务"
                   name="1"></el-tab-pane>
      <el-tab-pane label="我发布的"
                   name="2"></el-tab-pane>
      <el-tab-pane label="我参与的"
                   name="3"></el-tab-pane>
      <el-tab-pane label="所有任务"
                   name="4"></el-tab-pane>
    </el-tabs>
    <div class="work-tabs-content">
      <div class="work-tabs-header">
        <Input class="search-input"
               v-model="searchValue"
               suffix="ios-search"
               placeholder="请输入内容"
               style="width: auto" />
        <div class="work-tabs-right">
          <Dropdown trigger="click"
                    @on-click="clickSortCompletion">
            <a class="sort-down"
               href="javascript:void(0)">
              {{completionStatus}}
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="所有"
                            :selected="completionStatus == '所有'"><span>所有 <i v-if="completionStatus == '所有'"
                     class="el-icon-check"></i></span></DropdownItem>
              <DropdownItem name="未开始"
                            :selected="completionStatus == '未开始'"><span>未开始 <i v-if="completionStatus == '未开始'"
                     class="el-icon-check"></i></span></DropdownItem>
              <DropdownItem name="进行中"
                            :selected="completionStatus == '进行中'"><span>进行中 <i v-if="completionStatus == '进行中'"
                     class="el-icon-check"></i></span></DropdownItem>
              <DropdownItem name="已完成"
                            :selected="completionStatus == '已完成'"><span>已完成 <i v-if="completionStatus == '已完成'"
                     class="el-icon-check"></i></span></DropdownItem>
              <DropdownItem name="已逾期"
                            :selected="completionStatus == '已逾期'"><span>已逾期 <i v-if="completionStatus == '已逾期'"
                     class="el-icon-check"></i></span></DropdownItem>
              <DropdownItem name="已关闭"
                            :selected="completionStatus == '已关闭'"><span>已关闭 <i v-if="completionStatus == '已关闭'"
                     class="el-icon-check"></i></span></DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown trigger="click"
                    @on-click="clickSortTime">
            <a class="sort-down"
               href="javascript:void(0)">
              {{timeValue}}
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="按截止时间排序"
                            :selected="timeValue == '按截止时间排序'"><span>按截止时间排序 <i v-if="timeValue == '按截止时间排序'"
                     class="el-icon-check"></i></span></DropdownItem>
              <DropdownItem name="按开始时间排序"
                            :selected="timeValue == '按开始时间排序'"><span>按开始时间排序<i v-if="timeValue == '按开始时间排序'"
                     class="el-icon-check"></i></span></DropdownItem>
              <DropdownItem name="按紧急时间排序"
                            :selected="timeValue == '按紧急时间排序'"><span>按紧急时间排序<i v-if="timeValue == '按紧急时间排序'"
                     class="el-icon-check"></i></span></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div class="work-table">
        <div class="work-row"
             @click="dialogVisible = true"
             v-for="(item,index) in tableData"
             :key="index">
          <span class="status-line"
                :class="{success: !index, wraning:index == 1, info: index == 2, red: index == 3, block: index == 4}"></span>
          <div class="work-column work-column-title">
            <p>{{item.title}}</p>
          </div>
          <div class="work-column">
            <p>项目名称</p>
          </div>
          <div class="work-column">
            <p>紧急重要</p>
          </div>
          <div class="work-column work-column-time">
            <p>2019-07-23 09:00截止</p>
          </div>
        </div>
      </div>
      <div class="work-pagination">
        <el-pagination background
                       layout="prev, pager, next"
                       :total="1000">
        </el-pagination>
      </div>
    </div>
    <test-dialog v-model="dialogVisible" @change="changeDialog"></test-dialog>
    <Modal width="1200px"
           title="新建任务"
           :styles="{top: '20px'}"
           v-model="showTestPop">
      <create-test></create-test>
    </Modal>
  </div>
</template>

<script>
import createTest from '@/components/createTest'
import testDialog from '@/components/test'
export default {
  components: {
    testDialog,
    createTest
  },
  data () {
    return {
      active: '1',
      showTestPop: false,
      dialogVisible: false,
      visible: false,
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      active: '1',
      activeName: '1',
      searchValue: '',
      timeValue: '按截止时间排序',
      completionStatus: '完成状态',
      tableHeight: 500,
      isfull: false,
      tableData: [{
        date: '2016-05-02',
        author: '王小虎',
        title: '阅读分享中的使用案例， 用teambition为新产品发布实际建立一个公示板吧！',
        level: '紧急且重要',
        status: '未开始'
      }, {
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      }, {
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      }, {
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      }, {
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      }, {
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      }, {
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      }, {
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      }]
    }
  },
  computed: {
    isTeam() {
      return this.$store.state.isTeam
    }
  },
  methods: {
    changeDialog() {
      this.dialogVisible = false
      this.showTestPop = true
    },
    clickSortCompletion (name) {
      this.completionStatus = name
    },
    clickSortTime (name) {
      this.timeValue = name
    },
    handleClick () {

    },
    clickTableMore (row) {
      console.log(row)
      this.dialogVisible = true
    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },

  },
  created () {
    this.tableHeight = window.innerHeight * 0.7
  }
}
</script>

<style lang="scss" scoped>
.work {
  position: relative;
  padding-top: 10px;
  &-pagination {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
  &-page
  &-row,
  &-column {
    position: relative;
    display: flex;
    align-items: center;
    color: #606266;
  }
  &-row {
    position: relative;
    display: flex;
    margin-top: 5px;
    cursor: pointer;
  }
  .search-input {
    width: 360px;
  }
  .sort-down {
    margin-left: 15px;
  }
  .status-line {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 5px;
    height: 48px;
    background-color: #409eff;
    opacity: 1;
    transition: all 0.3s;
    &.wraning {
      background-color: #e6a23c;
    }
    &.red {
      background-color: red;
    }
    &.block {
      background-color: #000;
    }
    &.info {
      background-color: #ccc;
    }
  }
  &-row:hover {
    background-color: #f5f7fa;
    .status-line {
      width: 10px;
      opacity: 0.8;
    }
  }
  &-column {
    display: flex;
    align-items: center;
    width: 100px;
    height: 48px;
    padding: 0 10px;

    &-title {
      flex: 1;
      padding-left: 30px;
    }
    &-time {
      text-align: right;
      width: 190px;
    }
    p {
      @include text-overflow;
    }
  }
  &-tabs {
    @include flex-center;
    margin: 0 auto;
    background: transparent;
    &-header {
      @include flex-center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    &-content {
      position: relative;
      box-sizing: border-box;
      min-height: calc(100vh - 140px);
      padding-bottom: 30px;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      overflow-y: auto;
      .el-icon-check {
        margin-left: 16px;
      }
    }
  }
  &-icon {
    cursor: pointer;
  }
  .add-child-btn {
    color: #409eff;
    font-size: 14px;
    i {
      margin-right: 6px;
    }
  }
  .fa-ellipsis-v,
  .fa-expand,
  .fa-times-circle {
    cursor: pointer;
    font-size: 24px;
    margin: 0 10px;
  }

  &-table {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 60px;
    bottom: 60px;
    overflow-y: auto;
    .el-icon-more {
      cursor: pointer;
    }
  }
  &-content {
    position: relative;
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
        color: #e6a23c;
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

