<template>
  <div class="create-test">
    <div class="input-wrap">
      <Input v-model="value"
             placeholder="任务标题" />
    </div>
    <div class="create-test-body">
      <div class="create-test-body-left hide-line">
        <Tabs value="1"
              class="create-test-left">
          <TabPane label="描述信息"
                   name="1">
            <editor v-model="form.dec"></editor>
            <Select class="create-test-tag"
                    placeholder="请选择标签"
                    v-model="tagValue"
                    multiple>
              <Option v-for="item in tagList"
                      :value="item.value"
                      :key="item.value">{{ item.label }}</Option>
            </Select>
            <div style="width:300px">
              <Upload :default-file-list="defaultList"
                      action="//jsonplaceholder.typicode.com/posts/">
                <Button class="create-test-upload"
                        icon="ios-cloud-upload-outline">添加附件</Button>
              </Upload>
            </div>
          </TabPane>
        </Tabs>
      </div>
      <div class="create-test-body-right hide-line">
        <Tabs value="1"
              class="create-test-right">
          <TabPane label="基本信息"
                   name="1">
            <Form :model="form"
                  :label-width="80">
              <FormItem label="处理人" v-if="isTeam">
                <Select v-model="form.clr"
                        placeholder="选择处理人"
                        filterable>
                  <Option v-for="item in nameList"
                          :value="item.value"
                          :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="父任务">
                <p>推进改革开放工作</p>
              </FormItem>
              <FormItem label="优先级">
                <Select v-model="form.level">
                  <Option value="紧急且重要">紧急且重要</Option>
                  <Option value="紧急">紧急</Option>
                  <Option value="重要">重要</Option>
                  <Option value="一般">一般</Option>
                </Select>
              </FormItem>
              <FormItem label="开始时间">
                <DatePicker v-model="form.startTime"
                            type="date"
                            placeholder="选择开始时间"
                            style="width: 268px"></DatePicker>
              </FormItem>
              <FormItem label="结束时间">
                <DatePicker v-model="form.endTime"
                            type="date"
                            placeholder="选择结束时间"
                            style="width: 268px"></DatePicker>
              </FormItem>

              <FormItem label="关闭人" v-if="isTeam">
                <Select v-model="form.csr"
                        placeholder="选择关闭人"
                        multiple
                        filterable>
                  <Option v-for="item in nameList"
                          :value="item.value"
                          :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>

              <FormItem label="提醒">
                <div class="add-tx">
                  <el-button class="add-btn"
                             type="text"
                             style="padding-bottom:0;height:34px"
                             icon="el-icon-plus">添加提醒</el-button>
                  <div class="add-item">
                    <div class="add-item-text">任务结束3分钟后提醒李四</div>
                    <i class="el-icon-edit"></i>
                    <i class="el-icon-close"></i>
                  </div>
                </div>
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
import editor from '@/components/editor'
export default {
  components: {
    editor
  },
  data () {
    return {
      model1: '1',
      value: '',
      defaultList: [
        {
          name: 'img1.jpg',
          url: 'http://www.xxx.com/img1.jpg'
        },
        {
          name: 'img2.jpg',
          url: 'http://www.xxx.com/img2.jpg'
        }
      ]
      , tagList: [
        {
          value: '1',
          label: '标签一'
        },
        {
          value: '2',
          label: '标签二'
        },
        {
          value: '3',
          label: '标签三'
        }
      ],
      nameList: [
        {
          value: 'lisi',
          label: '李四'
        },
        {
          value: 'wangwu',
          label: '王五'
        },
        {
          value: 'lisan',
          label: '李三'
        }
      ],
      tagValue: [],
      form: {
        dec: '',
        level: '紧急且重要',
        clr: '',
        csr: [],
        select: 'beijing'
      }
    }
  },
  computed: {
    isTeam() {
      return this.$store.state.isTeam
    }
  }
}
</script>

<style lang="scss" scoped>
.create-test {
  &-tag {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .input-wrap {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }
  .add-btn {
    padding-top: 0;
  }
  .add-item {
    @include flex-center;
    justify-content: flex-start;
    &-text {
      margin-right: 10px;
    }
    i {
      margin-left: 10px;
      font-size: 16px;
    }
  }

  &-right {
    overflow: initial;
  }
  &-body {
    display: flex;
    padding-bottom: 50px;
    &-left {
      flex: 1;
    }
    &-right {
      margin-left: 20px;
      width: 350px;
    }
  }
}
</style>

