<template>
  <div class="work continar">
    <Menu mode="horizontal"
          class="work-tabs"
          :active-name="active">
      <MenuItem name="1">
      我的任务
      </MenuItem>
      <MenuItem name="2">
      我发布的
      </MenuItem>
      <MenuItem name="3">
      我参与的
      </MenuItem>
      <MenuItem name="4">
      所有任务
      </MenuItem>
    </Menu>
    <div class="work-tabs-content">
      <div class="work-tabs-header">
        <Input class="search-input"
               v-model="searchValue"
               suffix="ios-search"
               placeholder="请输入内容"
               style="width: auto" />
        <div class="work-tabs-right">
          <Dropdown @on-click="clickSortCompletion">
            <a class="sort-down"
               href="javascript:void(0)">
              {{completionStatus}}
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="所有">所有</DropdownItem>
              <DropdownItem name="未开始">未开始</DropdownItem>
              <DropdownItem name="进行中">进行中</DropdownItem>
              <DropdownItem name="已完成">已完成</DropdownItem>
              <DropdownItem name="已逾期">已逾期</DropdownItem>
              <DropdownItem name="已关闭">已关闭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown @on-click="clickSortTime">
            <a class="sort-down"
               href="javascript:void(0)">
              {{timeValue}}
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="按截止时间排序">按截止时间排序</DropdownItem>
              <DropdownItem name="按开始时间排序">按开始时间排序</DropdownItem>
              <DropdownItem name="按紧急时间排序">按紧急时间排序</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div class="work-table">
        <div class="work-row"
             @click="dialogVisible = true"
             v-for="(item,index) in tableData"
             :key="index">
          <span class="status-line success"></span>
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
    </div>
  <test-dialog v-model="dialogVisible"></test-dialog>
  </div>
</template>

<script>
import testDialog from '@/components/test'
export default {
  components: {
    testDialog
  },
  data () {
    return {
      active: '1',
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
  methods: {
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
  &-row,
  &-column {
    position: relative;
    display: flex;
    align-items: center;
    color: #606266;
  }
  &-row {
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
  }
  &-row:hover {
    background-color: #f5f7fa;
    .status-line {
      width: 8px;
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
      min-height: calc(100vh - 150px);
      margin-top: 10px;
      padding: 20px;
      background-color: #fff;
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

