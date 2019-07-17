<template>
  <div class="test">
    <div class="test-header">
      <div>
        <Input suffix="ios-search"
               placeholder="请输入关键词"
               style="width: auto" />
        <Select v-model="model1"
                style="width:200px">
          <Option :value="1">所有工作</Option>
          <Option :value="2">我的工作</Option>
          <Option :value="3">我创建的</Option>
        </Select>
        <Select v-model="model1"
                style="width:200px">
          <Option :value="1">优先级</Option>
          <Option :value="2">处理人</Option>
          <Option :value="3">结束时间</Option>
        </Select>
        <span>处理人</span>
        <Select v-model="value1"
                multiple
                filterable
                style="width:200px">
          <Option :value="1">章三</Option>
          <Option :value="2">李四</Option>
          <Option :value="3">王五</Option>
        </Select>
      </div>
      <div class="test-header-right">
        <a href="javascript:"
           class="plus-icon"></a>
        <Dropdown trigger="click"
                  placement="bottom-end">
          <a href="javascript:">
            <Icon type="md-settings"
                  size="22" /></a>
          <DropdownMenu slot="list">
            <div class="test-setting">
              <div class="test-setting-item">
                <span>显示字段</span>
                <Button @click="showDialog= true">设置显示字段</Button>
              </div>
              <div class="test-setting-item">
                <span>每页条数</span>
                <RadioGroup v-model="buttonSize"
                            type="button">
                  <Radio label="10">10</Radio>
                  <Radio label="20">20</Radio>
                  <Radio label="30">30</Radio>
                </RadioGroup>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>

      </div>
    </div>
    <div class="test-wrap">
      <el-card class="test-list p10">
        <div class="test-title">
          <span>{{titleArr[0]}}</span>
          <div class="test-title-right">
            <span>总400条</span>
            <Select v-model="numArr[0]"
                    style="width:70px"
                    size="small">
              <Option :value="20">20条</Option>
            </Select>
            <a href="javascript:">
              <Icon type="ios-arrow-back" /></a>
            <a href="javascript:">
              <Icon type="ios-arrow-forward" /></a>
          </div>
        </div>
        <draggable class="dragArea list-group"
                   :list="list1"
                   :clone="clone"
                   :group="{ name: 'people', pull: pullFunction }"
                   @start="start">
          <el-card class="test-item p10"
                   v-for="(i,_i) in list1"
                   :key="_i">
            <div @click="dialogVisible = true">
              <div class="test-text">
                <Icon class="test-icon"
                      size="16"
                      type="ios-flag-outline" />
                <p>Iconfont11-国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能</p>
              </div>
              <div class="test-info">
                <div class="test-info-left">
                  <Icon size="16"
                        class="test-icon"
                        type="ios-contact" />
                  <span>{{i.name}}</span>
                </div>
                <div class="test-info-right">
                  <Button type="error"
                          size="small"
                          ghost>紧急且重要</Button>
                </div>
              </div>
              <div class="test-time">
                <Icon size="16"
                      class="test-icon"
                      type="ios-clock-outline" />
                <span>19-03-05 17:00 - 20-09-04 18:09</span>
              </div>
              <div class="test-tag">
                <Icon size="16"
                      type="ios-bookmark-outline" />
                <Tag class="test-tag-content">标签一</Tag>
                <Tag class="test-tag-content">标签一</Tag>
              </div>
            </div>
          </el-card>
        </draggable>
      </el-card>
      <el-card class="test-list p10">
        <div class="test-title">
          <span>{{titleArr[1]}}</span>
          <div class="test-title-right">
            <span>总400条</span>
            <Select v-model="numArr[1]"
                    style="width:70px"
                    size="small">
              <Option :value="20">20条</Option>
            </Select>
            <a href="javascript:">
              <Icon type="ios-arrow-back" /></a>
            <a href="javascript:">
              <Icon type="ios-arrow-forward" /></a>
          </div>
        </div>
        <draggable class="dragArea list-group"
                   :list="list2"
                   :clone="clone"
                   :group="{ name: 'people', pull: pullFunction }"
                   @start="start">
          <el-card class="test-item p10"
                   v-for="(i,_i) in list2"
                   :key="_i">
            <div @click="dialogVisible = true">
              <div class="test-text">
                <Icon class="test-icon"
                      size="16"
                      type="ios-flag-outline" />
                <p>Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能</p>
              </div>
              <div class="test-info">
                <div class="test-info-left">
                  <Icon size="16"
                        class="test-icon"
                        type="ios-contact" />
                  <span>{{i.name}}</span>
                </div>
                <div class="test-info-right">
                  <Button type="error"
                          size="small"
                          ghost>紧急且重要</Button>
                </div>
              </div>
              <div class="test-time">
                <Icon size="16"
                      class="test-icon"
                      type="ios-clock-outline" />
                <span>19-03-05 17:00 - 20-09-04 18:09</span>
              </div>
              <div class="test-tag">
                <Icon size="16"
                      type="ios-bookmark-outline" />
                <Tag class="test-tag-content">标签一</Tag>
                <Tag class="test-tag-content">标签一</Tag>
              </div>
            </div>
          </el-card>
        </draggable>
      </el-card>
      <el-card class="test-list p10">
        <div class="test-title">
          <span>{{titleArr[2]}}</span>
          <div class="test-title-right">
            <span>总400条</span>
            <Select v-model="numArr[0]"
                    style="width:70px"
                    size="small">
              <Option :value="20">20条</Option>
            </Select>
            <a href="javascript:">
              <Icon type="ios-arrow-back" /></a>
            <a href="javascript:">
              <Icon type="ios-arrow-forward" /></a>
          </div>
        </div>
        <draggable class="dragArea list-group"
                   :list="list3"
                   :clone="clone"
                   :group="{ name: 'people', pull: pullFunction }"
                   @start="start">
          <el-card class="test-item p10"
                   v-for="(i,_i) in list3"
                   :key="_i">
            <div @click="dialogVisible = true">
              <div class="test-text">
                <Icon class="test-icon"
                      size="16"
                      type="ios-flag-outline" />
                <p>Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能</p>
              </div>
              <div class="test-info">
                <div class="test-info-left">
                  <Icon size="16"
                        class="test-icon"
                        type="ios-contact" />
                  <span>{{i.name}}</span>
                </div>
                <div class="test-info-right">
                  <Button type="error"
                          size="small"
                          ghost>紧急且重要</Button>
                </div>
              </div>
              <div class="test-time">
                <Icon size="16"
                      class="test-icon"
                      type="ios-clock-outline" />
                <span>19-03-05 17:00 - 20-09-04 18:09</span>
              </div>
              <div class="test-tag">
                <Icon size="16"
                      type="ios-bookmark-outline" />
                <Tag class="test-tag-content">标签一</Tag>
                <Tag class="test-tag-content">标签一</Tag>
              </div>
            </div>
          </el-card>
        </draggable>
      </el-card>
      <el-card class="test-list p10">
        <div class="test-title">
          <span>{{titleArr[3]}}</span>
          <div class="test-title-right">
            <span>总400条</span>
            <Select v-model="numArr[0]"
                    style="width:70px"
                    size="small">
              <Option :value="20">20条</Option>
            </Select>
            <a href="javascript:">
              <Icon type="ios-arrow-back" /></a>
            <a href="javascript:">
              <Icon type="ios-arrow-forward" /></a>
          </div>
        </div>
        <draggable class="dragArea list-group"
                   :list="list4"
                   :clone="clone"
                   :group="{ name: 'people', pull: pullFunction }"
                   @start="start">
          <el-card class="test-item p10"
                   v-for="(i,_i) in list4"
                   :key="_i">
            <div @click="dialogVisible = true">
              <div class="test-text">
                <Icon class="test-icon"
                      size="16"
                      type="ios-flag-outline" />
                <p>Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能</p>
              </div>
              <div class="test-info">
                <div class="test-info-left">
                  <Icon size="16"
                        class="test-icon"
                        type="ios-contact" />
                  <span>{{i.name}}</span>
                </div>
                <div class="test-info-right">
                  <Button type="error"
                          size="small"
                          ghost>紧急且重要</Button>
                </div>
              </div>
              <div class="test-time">
                <Icon size="16"
                      class="test-icon"
                      type="ios-clock-outline" />
                <span>19-03-05 17:00 - 20-09-04 18:09</span>
              </div>
              <div class="test-tag">
                <Icon size="16"
                      type="ios-bookmark-outline" />
                <Tag class="test-tag-content">标签一</Tag>
                <Tag class="test-tag-content">标签一</Tag>
              </div>
            </div>
          </el-card>
        </draggable>
      </el-card>
      <el-card class="test-list p10">
        <div class="test-title">
          <span>{{titleArr[4]}}</span>
          <div class="test-title-right">
            <span>总400条</span>
            <Select v-model="numArr[0]"
                    style="width:70px"
                    size="small">
              <Option :value="20">20条</Option>
            </Select>
            <a href="javascript:">
              <Icon type="ios-arrow-back" /></a>
            <a href="javascript:">
              <Icon type="ios-arrow-forward" /></a>
          </div>
        </div>
        <draggable class="dragArea list-group"
                   :list="list5"
                   :group="{ name: 'people', pull: pullFunction }">
          <el-card class="test-item p10"
                   v-for="(i,_i) in list5"
                   :key="_i">
            <div @click="dialogVisible = true">
              <div class="test-text">
                <Icon class="test-icon"
                      size="16"
                      type="ios-flag-outline" />
                <p>Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能</p>
              </div>
              <div class="test-info">
                <div class="test-info-left">
                  <Icon size="16"
                        class="test-icon"
                        type="ios-contact" />
                  <span>{{i.name}}</span>
                </div>
                <div class="test-info-right">
                  <Button type="error"
                          size="small"
                          ghost>紧急且重要</Button>
                </div>
              </div>
              <div class="test-time">
                <Icon size="16"
                      class="test-icon"
                      type="ios-clock-outline" />
                <span>19-03-05 17:00 - 20-09-04 18:09</span>
              </div>
              <div class="test-tag">
                <Icon size="16"
                      type="ios-bookmark-outline" />
                <Tag class="test-tag-content">标签一</Tag>
                <Tag class="test-tag-content">标签一</Tag>
              </div>
            </div>
          </el-card>
        </draggable>
      </el-card>
    </div>

    <el-dialog :visible.sync="showDialog"
               center
               width="30%">
      <div class="test-dialog">
        <p>已选字段</p>
        <div class="test-dialog-item">
          <Tag type="border">标题</Tag>
          <Tag type=""
               color="primary">优先级</Tag>
          <Tag type="border">处理人</Tag>
          <Tag type="border">标签</Tag>
          <Tag type="border">开始结束时间</Tag>
        </div>
        <p>可选字段</p>
        <Input style="width:200px"
               search
               enter-button="新建标签"
               placeholder="标签名称" />
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary"
                   @click="showDialog = false">确 定</el-button>
      </div>
    </el-dialog>
    <test-dialog v-model="dialogVisible"
                 @change="changeDialog"></test-dialog>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import rawDisplayer from '@/components/rawDisplayer'
import testDialog from '@/components/test'
let idGlobal = 8;
export default {
  name: "clone-on-control",
  display: "Clone on Control",
  instruction: "Press Ctrl to clone element from list 1",
  order: 4,
  components: {
    draggable,
    testDialog,
    rawDisplayer
  },
  data () {
    return {
      dialogVisible: false,
      showDialog: false,
      buttonSize: '20',
      model1: 1,
      value1: 1,
      titleArr: ['未开始/未领取', '进行中', '已完成', '已逾期', '已关闭'],
      checkForm: {
        showTitle: false,
        showLevel: false,
        showHandle: false,
        showTab: false,
        showTime: false
      },
      numArr: [20, 20, 20, 20, 20],
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
        { name: "Gerard", id: 5 },
        { name: "Gerard", id: 6 }
      ],
      list2: [
        { name: "hu", id: 7 },
        { name: "jin", id: 8 },
        { name: "lai", id: 9 },
        { name: "dan", id: 10 },
        { name: "li", id: 11 },
        { name: "wang", id: 12 }
      ],
      list3: [
        { name: "zhang", id: 13 },
        { name: "kong", id: 14 },
        { name: "qian", id: 15 },
        { name: "gong", id: 16 },
        { name: "mao", id: 17 },
        { name: "zhe", id: 18 }
      ],
      list4: [
        { name: "dong", id: 19 },
        { name: "xiao", id: 20 },
        { name: "tian", id: 21 },
        { name: "zhou", id: 22 },
        { name: "jie", id: 23 },
        { name: "lun", id: 24 }
      ],
      list5: [
        { name: "John", id: 25 },
        { name: "Joao", id: 26 },
        { name: "Jean", id: 27 },
        { name: "Gerard", id: 28 },
        { name: "Gerard", id: 29 },
        { name: "Gerard", id: 30 }
      ],
      controlOnStart: true
    };
  },
  methods: {
    handleOpen () {

    },
    changeDialog () {
      this.dialogVisible = false
      this.showTestPop = true
    },
    clone ({ name, id }) {
      console.log(id)
      return { name, id: id };
    },
    pullFunction () {
      return true
    },
    start (params) {
      console.log(params)
    }
  }
};
</script>
<style lang="scss" scoped>
.test {
  padding: 0 5px;
  &-dialog {
    &-item {
      margin-bottom: 15px;
    }
    p {
      margin-bottom: 8px;
    }
  }
  &-setting {
    &-item {
      padding: 10px;
      &:first-child {
        border-bottom: 1px solid #e8eaec;
      }
      & > span {
        display: block;
        color: #808695;
        margin-bottom: 12px;
      }
    }
  }
  &-header {
    @include flex-center;
    justify-content: space-between;
    margin: 0 6px;
    margin-bottom: 10px;
    padding: 5px 10px;
    background: #fff;
    border-radius: 4px;
    &-right {
      @include flex-center;
    }
    .plus-icon {
      display: block;
      margin-right: 16px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      opacity: 0.8;
      transition: opacity 0.3s;
      background: url('/static/images/circle-plus.ff3746b2.svg') no-repeat;
      background-size: 100%;
      &:hover {
        opacity: 1;
      }
    }
  }
  &-wrap {
    box-sizing: border-box;
    @include flex-center;
    align-items: flex-start;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .arrow-down {
    transform: translateY(-2px);
  }
  .check-group {
    padding: 12px;
  }
  &-item {
    margin-bottom: 10px;
    & > div {
      display: flex;
    }
  }
  &-info {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;
  }
  &-time {
    margin-bottom: 10px;
    font-size: 12px;
  }
  &-tag {
    align-items: center;
    &-content {
      margin-left: 5px;
    }
  }
  &-text {
    display: flex;
    margin-bottom: 10px;
    .test-icon {
      margin-top: 2px;
    }
    p {
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  &-icon {
    margin-right: 6px;
  }
  &-list {
    flex: 1;
    margin: 0 5px;
  }
  &-title {
    @include flex-center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 10px;
  }
}
</style>
