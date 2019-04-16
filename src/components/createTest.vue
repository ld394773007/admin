<template>
  <div class="create-test">
    <div class="create-test-header">

    </div>
    <div class="create-test-body">
      <div class="create-test-body-left">
        <Tabs value="1"
              class="create-test-left">
          <TabPane label="描述信息"
                   name="1">
            <editor v-model="form.dec"></editor>
            <Select class="create-test-tag"
                    v-model="tagValue"
                    multiple>
              <Option v-for="item in tagList"
                      :value="item.value"
                      :key="item.value">{{ item.label }}</Option>
            </Select>
            <Upload :default-file-list="defaultList"
                    action="//jsonplaceholder.typicode.com/posts/">
              <Button class="create-test-upload"
                      icon="ios-cloud-upload-outline">添加附件</Button>
            </Upload>
          </TabPane>
        </Tabs>
      </div>
      <div class="create-test-body-right">
        <Tabs value="1"
              class="create-test-right">
          <TabPane label="基本信息"
                   name="1">
            <Form :model="form"
                  :label-width="80">
              <FormItem label="父任务">
                <Select v-model="form.select">
                  <Option value="beijing">推进改革开放工作</Option>
                </Select>
              </FormItem>
              <FormItem label="处理人">
                <Select v-model="form.clr"
                        filterable>
                  <Option v-for="item in nameList"
                          :value="item.value"
                          :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="抄送人">
                <Select v-model="form.csr"
                        multiple
                        filterable>
                  <Option v-for="item in nameList"
                          :value="item.value"
                          :key="item.value">{{ item.label }}</Option>
                </Select>
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
              <FormItem label="提醒">
                <div class="add-tx">
                  <el-button class="add-btn"
                             type="text"
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
  }
}
</script>

<style lang="scss" scoped>
.create-test {
  &-tag {
    margin-top: 20px;
    margin-bottom: 20px;
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

