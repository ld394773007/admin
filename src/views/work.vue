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
          <el-table-column label="操作"
                           width="90">
            <template slot-scope="scope">
              <i class="el-icon-more"
                 @click="clickTableMore(scope.row)"></i>
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
    <el-dialog :visible.sync="dialogVisible"
               :show-close="false"
               width="90%"
               top="2%"
               :fullscreen="isfull"
               custom-class="common-dialog">
      <div class="test-dialog-header"
           slot="title">
        <div class="test-dialog-left">
          <el-tag class="test-tag">任务</el-tag>
          <div class="test-info">
            <span class="test-name">张三</span>
            <span class="test-time">创建于2019-03-24 19:55:23</span>
          </div>
          <span>任务推广计划</span>
        </div>
        <div class="test-dialog-right">
          <el-button type="primary"
                     class="test-dialog-save">保存任务</el-button>
          <el-popover placement="bottom"
                      trigger="manual"
                      v-model="visible">
            <i class="fas fa-ellipsis-v"
               slot="reference"
               @click="visible = !visible"></i>
            <div class="test-dialog-action">
              <el-button plain>编辑</el-button>
              <el-button type="danger">删除</el-button>
            </div>
          </el-popover>
          <i class="fas fa-expand"
             @click="clickFull"></i>
          <i class="far fa-times-circle" @click="dialogVisible = !dialogVisible"></i>
        </div>
      </div>
      <div class="test-dialog">
        <div class="test-dialog-title">
          <p>这里是标题</p>
        </div>
        <div class="test-dialog-content">
          <div class="test-dialog-tabs">
            <el-tabs v-model="active"
                     @tab-click="handleClick">
              <el-tab-pane label="描述信息"
                           name="1">
                <div class="test-dialog-tabs-content">
                  这里是描述内容
                </div>
              </el-tab-pane>
              <el-tab-pane label="子工作"
                           name="2">
                <div class="test-dialog-tabs-content">
                  <div class="add-child-btn"><i class="el-icon-circle-plus-outline"></i>新建子项目</div>
                  <el-table :data="tableData1"
                            max-height="400"
                            style="width: 100%">
                    <el-table-column type="index"
                                     width="50">
                    </el-table-column>
                    <el-table-column prop="title"
                                     label="标题">
                    </el-table-column>
                    <el-table-column prop="status"
                                     label="状态"
                                     width="120">
                    </el-table-column>
                    <el-table-column prop="avatar"
                                     label="处理人"
                                     width="120">
                    </el-table-column>
                  </el-table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="操作历史"
                           name="3">
                <div class="test-dialog-tabs-content">
                  <el-table :data="tableData2"
                            max-height="400"
                            style="width: 100%">
                    <el-table-column type="index"
                                     width="50">
                    </el-table-column>
                    <el-table-column prop="date"
                                     label="操作时间">
                    </el-table-column>
                    <el-table-column prop="name"
                                     label="操作人"
                                     width="120">
                    </el-table-column>
                    <el-table-column prop="type"
                                     label="操作类型"
                                     width="120">
                    </el-table-column>
                    <el-table-column prop="status"
                                     label="操作状态"
                                     width="120">
                    </el-table-column>
                    <el-table-column prop="before"
                                     label="操作前"
                                     width="120">
                    </el-table-column>
                    <el-table-column prop="after"
                                     label="操作后"
                                     width="120">
                    </el-table-column>
                  </el-table>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>

          <div class="test-dialog-info">
            <el-tabs value="1"
                     @tab-click="handleClick">
              <el-tab-pane label="基本信息"
                           name="1">
                <div class="test-dialog-info-list">
                  <div class="test-dialog-info-item">
                    <span class="test-dialog-info-left">
                      开始时间：
                    </span>
                    <span class="test-dialog-info-right">
                      2019-03-23 19:00:00
                    </span>
                  </div>

                  <div class="test-dialog-info-item">
                    <span class="test-dialog-info-left">
                      结束时间：
                    </span>
                    <span class="test-dialog-info-right">
                      2019-03-23 19:00:00
                    </span>
                  </div>
                  <div class="test-dialog-info-item">
                    <span class="test-dialog-info-left">
                      处理人：
                    </span>
                    <span class="test-dialog-info-right">
                      章三
                    </span>
                  </div>
                  <div class="test-dialog-info-item">
                    <span class="test-dialog-info-left">
                      优先级：
                    </span>
                    <span class="test-dialog-info-right">
                      紧急且重要
                    </span>
                  </div>
                  <div class="test-dialog-info-item">
                    <span class="test-dialog-info-left">
                      抄送人：
                    </span>
                    <span class="test-dialog-info-right">
                      李四，王五
                    </span>
                  </div>
                  <div class="test-dialog-info-item">
                    <span class="test-dialog-info-left">
                      父任务：
                    </span>
                    <span class="test-dialog-info-right">
                      推进改革开放工作
                    </span>
                  </div>
                  <div class="test-dialog-info-item">
                    <span class="test-dialog-info-left">
                      提醒：
                    </span>
                    <div class="test-dialog-info-right">
                      <span class="test-dialog-info-span">任务开始前10分钟提醒章三，李四</span>
                      <span class="test-dialog-info-span">任务开始前20分钟提醒章五</span>
                      <span class="test-dialog-info-span">任务开始前30分钟提醒章三，李四</span>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>

          </div>
        </div>
        <div class="test-dialog-tag">
          <span>标签：</span>
          <div class="test-dailog-tag-list">
            <el-tag>标签一</el-tag>
          </div>
        </div>
        <div class="test-dialog-upload">
          <span>附件：</span>
          <div class="test-dailog-upload-input">
            <el-upload class="upload-demo"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       :on-preview="handlePreview"
                       :on-remove="handleRemove"
                       :before-remove="beforeRemove"
                       multiple
                       :limit="3"
                       :on-exceed="handleExceed"
                       :file-list="fileList">
              <el-button size="small"
                         type="primary">点击上传</el-button>
              <div slot="tip"
                   class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
        </div>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      visible: false,
      tableData1: [{
        status: '新建',
        avatar: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄'
      }],
      tableData2: [{
        status: '状态',
        name: '王小虎',
        date: '2016-05-02',
        type: '修改',
        before: '已解决',
        after: '测试中'
      }],
      tableData: [{
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
      }, {
        date: '2016-05-02',
        author: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄',
        level: '紧急且重要',
        status: '未开始'
      }],
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      active: '1',
      activeName: '1',
      searchValue: '',
      tableHeight: 500,
      isfull: false
    }
  },
  methods: {
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
    clickFull () {
      if (this.isfull) {
        this.isfull = false
        this.outFull()
      } else {
        this.isfull = true
        this.onFull()
      }
    },
    onFull () {
      var el = document.documentElement;
      var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
        el.mozRequestFullScreen || el.msRequestFullScreen;
      if (rfs) { //typeof rfs != "undefined" && rfs
        rfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    },
    outFull () {
      var el = document;
      var cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
        el.mozCancelFullScreen || el.exitFullScreen;
      if (cfs) { //typeof cfs != "undefined" && cfs
        cfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    }
  },
  created () {
    this.tableHeight = window.innerHeight * 0.7
  }
}
</script>

<style lang="scss" scoped>
.work {
  position: relative;
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
  .test-dialog {
    &-upload,
    &-tag {
      @include flex-center;
      margin-top: 20px;
      justify-content: flex-start;
      align-items: flex-start;
    }
    &-content {
      @include flex-center;
      align-items: flex-start;
    }
    &-tabs {
      flex: 1;
      &-content {
      }
    }
    &-info {
      margin-left: 20px;
      width: 360px;
      &-item {
        margin-bottom: 10px;
        display: flex;
      }
      &-left {
        width: 80px;
        text-align: right;
      }
      &-right,
      &-span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &-right {
        flex: 1;
      }
      &-span {
        display: block;
        margin-bottom: 5px;
        width: 100%;
      }
    }
    &-title {
      margin-bottom: 20px;
      padding: 12px 0;
      border-bottom: 1px #dcdfe6 solid;
    }
    &-save {
      margin-right: 40px;
    }
    &-header {
      @include flex-center;
      justify-content: space-between;
    }
    &-left {
      @include flex-center;
      justify-content: flex-start;
    }
    &-right {
      @include flex-center;
    }
  }
  .test-tag {
    margin-right: 10px;
  }
  .test-info {
    margin-right: 10px;
    padding: 0 10px;
    border-left: 1px solid #dcdfe6;
    border-right: 1px solid #dcdfe6;
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

