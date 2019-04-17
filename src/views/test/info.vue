<template>
  <div class="info continar">
    <Form :model="form"
          class="info-form"
          :label-width="100">
      <FormItem label="项目名称">
        <Input class="info-input" v-model="form.name"
               placeholder="请输入项目名称"></Input>
      </FormItem>
      <FormItem label="项目优先级">
        <Select class="info-input" v-model="form.level">
          <Option value="4">紧急且重要</Option>
          <Option value="3">紧急</Option>
          <Option value="2">重要</Option>
          <Option value="1">一般</Option>
        </Select>
      </FormItem>
      <FormItem label="开始结束时间">
        <Row>
          <Col span="10">
          <DatePicker type="date"
                      placeholder="请选择开始时间"
                      v-model="form.startTime"></DatePicker>
          </Col>
          <Col span="2"
               style="text-align: center">-</Col>
          <Col span="11">
          <TimePicker type="time"
                      placeholder="请选择结束时间"
                      v-model="form.endTime"></TimePicker>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="项目归属">
        <div class="project-gs">
          <Avatar class="project-gs-avatar">陈波</Avatar>
          <span class="project-gs-name">陈波</span>
          <Button>移交项目</Button>
        </div>
      </FormItem>
      <FormItem label="项目简介">
        <editor v-model="form.dec"></editor>
        <div class="info-remove">
          <Button type="error" ghost>删除项目</Button>
          <span>注意：项目一旦删除，不可恢复，请确认操作！</span>
        </div>
      </FormItem>

      <FormItem>

        <Button class="info-button" style="margin-right: 8px">取消</Button>
        <Button class="info-button" type="primary">保存</Button>
      </FormItem>
    </Form>
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
      form: {
        name: '',
        level: '',
        startTime: '',
        enTime: '',
        gs: [],
        dec: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  width: 960px;
  background-color: #fff;
  &-button {
    width: 80px;
  }
  &-remove {
    margin-top: 20px;
    span {
      margin-left: 10px;
    }
  }
  &-input {
    width: 300px;
  }
  &-form {
    margin: 30px auto;
    margin-bottom: 40px;
    width: 500px;
  }
  .project-gs {
    display: flex;
    align-items: center;
    &-avatar {
      background: #2d8cf0;
    }
    &-name {
      margin-left: 10px;
      margin-right: 30px;
    }
  }
}
</style>

