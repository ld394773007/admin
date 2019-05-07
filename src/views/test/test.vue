<template>
  <div class="test">
    <el-card class="test-list p10">
      <div class="test-title">
        <span>{{titleArr[0]}}</span>
        <Dropdown trigger="click"
                  style="margin-left: 20px">
          <a href="javascript:void(0)" class="arrow-down-btn">
            <Icon class="arrow-down" type="ios-arrow-dropdown" size="16" />
          </a>
          <DropdownMenu slot="list">
            <div class="check-group">
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTitle">显示标题</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showLevel">显示优先级</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showHandle">显示处理人</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTab">显示标签</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTime">显示开始结束时间</el-checkbox>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
      <draggable class="dragArea list-group"
                 :list="list1"
                 :clone="clone"
                 :group="{ name: 'people', pull: pullFunction }"
                 @start="start">
        <el-card class="test-item p10"
                 v-for="(i,_i) in list1"
                 :key="_i">
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
            <span>2019-03-05 17:00 - 2020-09-04 18:09</span>
          </div>
          <div class="test-tag">
            <Icon size="16"
                  type="ios-bookmark-outline" />
            <Tag class="test-tag-content">标签一</Tag>
            <Tag class="test-tag-content">标签一</Tag>
          </div>
        </el-card>
      </draggable>
    </el-card>
    <el-card class="test-list p10">
      <div class="test-title">
        <span>{{titleArr[1]}}</span>
        <Dropdown trigger="click"
                  style="margin-left: 20px">
          <a href="javascript:void(0)"  class="arrow-down-btn">
            <Icon class="arrow-down" type="ios-arrow-dropdown" size="16" />
          </a>
          <DropdownMenu slot="list">
            <div class="check-group">
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTitle">显示标题</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showLevel">显示优先级</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showHandle">显示处理人</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTab">显示标签</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTime">显示开始结束时间</el-checkbox>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
      <draggable class="dragArea list-group"
                 :list="list2"
                 :clone="clone"
                 :group="{ name: 'people', pull: pullFunction }"
                 @start="start">
        <el-card class="test-item p10"
                 v-for="(i,_i) in list2"
                 :key="_i">
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
            <span>2019-03-05 17:00 - 2020-09-04 18:09</span>
          </div>
          <div class="test-tag">
            <Icon size="16"
                  type="ios-bookmark-outline" />
            <Tag class="test-tag-content">标签一</Tag>
            <Tag class="test-tag-content">标签一</Tag>
          </div>
        </el-card>
      </draggable>
    </el-card>
    <el-card class="test-list p10">
      <div class="test-title">
        <span>{{titleArr[2]}}</span>
        <Dropdown trigger="click"
                  style="margin-left: 20px">
          <a href="javascript:void(0)"  class="arrow-down-btn">
            <Icon class="arrow-down" type="ios-arrow-dropdown" size="16" />
          </a>
          <DropdownMenu slot="list">
            <div class="check-group">
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTitle">显示标题</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showLevel">显示优先级</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showHandle">显示处理人</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTab">显示标签</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTime">显示开始结束时间</el-checkbox>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
      <draggable class="dragArea list-group"
                 :list="list3"
                 :clone="clone"
                 :group="{ name: 'people', pull: pullFunction }"
                 @start="start">
        <el-card class="test-item p10"
                 v-for="(i,_i) in list3"
                 :key="_i">
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
            <span>2019-03-05 17:00 - 2020-09-04 18:09</span>
          </div>
          <div class="test-tag">
            <Icon size="16"
                  type="ios-bookmark-outline" />
            <Tag class="test-tag-content">标签一</Tag>
            <Tag class="test-tag-content">标签一</Tag>
          </div>
        </el-card>
      </draggable>
    </el-card>
    <el-card class="test-list p10">
      <div class="test-title">
        <span>{{titleArr[3]}}</span>
        <Dropdown trigger="click"
                  style="margin-left: 20px">
          <a href="javascript:void(0)"  class="arrow-down-btn">
            <Icon class="arrow-down" type="ios-arrow-dropdown" size="16" />
          </a>
          <DropdownMenu slot="list">
            <div class="check-group">
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTitle">显示标题</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showLevel">显示优先级</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showHandle">显示处理人</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTab">显示标签</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTime">显示开始结束时间</el-checkbox>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
      <draggable class="dragArea list-group"
                 :list="list4"
                 :clone="clone"
                 :group="{ name: 'people', pull: pullFunction }"
                 @start="start">
        <el-card class="test-item p10"
                 v-for="(i,_i) in list4"
                 :key="_i">
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
            <span>2019-03-05 17:00 - 2020-09-04 18:09</span>
          </div>
          <div class="test-tag">
            <Icon size="16"
                  type="ios-bookmark-outline" />
            <Tag class="test-tag-content">标签一</Tag>
            <Tag class="test-tag-content">标签一</Tag>
          </div>
        </el-card>
      </draggable>
    </el-card>
    <el-card class="test-list p10">
      <div class="test-title">
        <span>{{titleArr[4]}}</span>
        <Dropdown trigger="click"
                  style="margin-left: 20px">
          <a href="javascript:void(0)"  class="arrow-down-btn">
            <Icon class="arrow-down" type="ios-arrow-dropdown" size="16" />
          </a>
          <DropdownMenu slot="list">
            <div class="check-group">
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTitle">显示标题</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showLevel">显示优先级</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showHandle">显示处理人</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTab">显示标签</el-checkbox>
              </div>
              <div class="check-item">
                <el-checkbox v-model="checkForm.showTime">显示开始结束时间</el-checkbox>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
      <draggable class="dragArea list-group"
                 :list="list5"
                 :group="{ name: 'people', pull: pullFunction }">
        <el-card class="test-item p10"
                 v-for="(i,_i) in list5"
                 :key="_i">
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
            <span>2019-03-05 17:00 - 2020-09-04 18:09</span>
          </div>
          <div class="test-tag">
            <Icon size="16"
                  type="ios-bookmark-outline" />
            <Tag class="test-tag-content">标签一</Tag>
            <Tag class="test-tag-content">标签一</Tag>
          </div>
        </el-card>
      </draggable>
    </el-card>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import rawDisplayer from '@/components/rawDisplayer'
let idGlobal = 8;
export default {
  name: "clone-on-control",
  display: "Clone on Control",
  instruction: "Press Ctrl to clone element from list 1",
  order: 4,
  components: {
    draggable,
    rawDisplayer
  },
  data () {
    return {
      titleArr: ['未开始/未领取', '进行中', '已完成', '已逾期', '已关闭'],
      checkForm: {
        showTitle: false,
        showLevel: false,
        showHandle: false,
        showTab: false,
        showTime: false
      },
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
  box-sizing: border-box;
  @include flex-center;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 0 5px;
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
    justify-content: flex-end;
    position: relative;
    margin-bottom: 10px;
    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
