<template>
  <el-dialog :visible.sync="value"
             :show-close="false"
             width="1200px"
             :fullscreen="isfull"
             class="test-dialog"
             custom-class="common-dialog">
    <div class="test-dialog-header"
         slot="title">
      <div class="test-dialog-left">
        <p class="test-title">任务详情</p>
        <div class="test-info">
          <span class="test-name">张三</span>
          <span class="test-time">创建于2019-03-24 19:55:23</span>
        </div>
        <span class="test-status">点单系统开发</span>

      </div>
      <div class="test-dialog-right">
        <div class="test-status-down">
          <span>变更状态为：</span>
          <Dropdown>
            <a href="javascript:void(0)">
              已完成
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>已完成</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <el-button type="text"
                   @click="onChange"
                   icon="el-icon-edit">启用编辑</el-button>
        <el-button type="text"
                   icon="el-icon-delete">删除任务</el-button>
        <Icon style="margin-left: 15px"
              size="24"
              @click="close"
              class="close-btn"
              type="md-close" />
      </div>
    </div>
    <div class="test">

      <div class="test-dialog">
        <div class="test-dialog-list">
          <div class="test-dialog-item">
            <div class="test-dialog-item-left">任务标题：</div>
            <div class="test-dialog-item-right">推进改革开放等工作</div>
          </div>
        </div>
        <div class="test-dialog-content">
          <div class="test-dialog-tabs">
            <el-tabs v-model="active">
              <el-tab-pane label="描述信息"
                           name="1">
                <div class="test-dialog-tabs-content">
                  <div class="__content">这里是描述内容</div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="子任务"
                           name="2">
                <div class="test-dialog-tabs-content">
                  <el-button icon="el-icon-circle-plus-outline" type="text">新建子任务</el-button>
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
                  <el-table :data="tableData"
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
                    <el-table-column prop="status"
                                     label="字段"
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

          <div class="test-dialog-info hide-line show-line">
            <el-tabs value="1">
              <el-tab-pane label="基本信息"
                           name="1">
                <div class="test-dialog-info-list">
                  <div class="test-dialog-info-item" v-if="isTeam">
                    <span class="test-dialog-info-left">
                      处理人：
                    </span>
                    <span class="test-dialog-info-right">
                      章三
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
                      优先级：
                    </span>
                    <span class="test-dialog-info-right">
                      紧急且重要
                    </span>
                  </div>
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

                  <div class="test-dialog-info-item" v-if="isTeam">
                    <span class="test-dialog-info-left">
                      抄送人：
                    </span>
                    <span class="test-dialog-info-right">
                      李四，王五
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
            <Tag>标签一</Tag>
          </div>
        </div>
        <div class="test-dialog-upload">
          <span>附件：</span>
          <div class="test-dailog-upload-input">
            <span>贵大工训原型.rar</span>
            <Icon size="18"
                  class="md-download"
                  type="md-download" />
            <!-- <Upload class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/">
              <Button size="small"
                      type="primary">点击上传</Button>
              <div slot="tip"
                   class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </Upload> -->
          </div>
        </div>
      </div>
    </div>
  </el-dialog>

</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: '1',
      isfull: false,
      tableData1: [{
        status: '新建',
        avatar: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄'
      }],
      tableData2: [{
        title: '阅读分享中的使用案例， 用teambition为新产品发布实际建立一个公示板吧！',
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
      }]
    }
  },
  computed: {
    isTeam() {
      return this.$store.state.isTeam
    }
  },
  methods: {
    onChange () {
      console.log(111)
      this.$emit('change')
    },
    close () {
      this.$emit('input', false)
    },
    handleClick () {

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
}
</script>

<style lang="scss" scoped>
.close-btn {
  margin-left: 15px;
  cursor: pointer;
}
.__content {
  height: 260px;
  overflow-y: auto;
}
.test-dialog {
  font-size: 12px;
  &-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    &-left {
      font-size: 12px;
      margin-right: 10px;
      font-weight: bold;
    }
    &-right {
      @include text-overflow;
      font-size: 12px;
      width: 70%;
    }
  }
  &-upload,
  &-tag {
    @include flex-center;
    margin-top: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    & > span {
      color: #808695;
      font-weight: bold;
    }
  }
  &-tag {
    align-items: center;
  }
  &-upload:hover {
    .md-download {
      opacity: 1;
    }
  }
  .md-download {
    opacity: 0;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }
  &-tabs {
    flex: 1;
    &-content {
      width: 100%;
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
      font-weight: bold;
      color: #303133;
      width: 80px;
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
    border-bottom: 1px solid #dcdee2;
  }
  &-left {
    @include flex-center;
    justify-content: flex-start;
  }
  &-right {
    @include flex-center;
  }
}
.test-status {
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #dcdfe6;
  &:last-child {
    border: none;
  }
  &-down {
    @include flex-center;
    margin-right: 10px;
    color: #409eff;
    a {
      color: #409eff;
    }
  }
}
.test-title {
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
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
</style>
