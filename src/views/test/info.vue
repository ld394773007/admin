<template>
  <div class="info container">
    <Form :model="form"
          class="info-form focus-form"
          :label-width="100">
      <FormItem label="项目名称">
        <Input class="info-input"
               v-model="form.name"
               placeholder="请输入项目名称"></Input>
      </FormItem>
      <FormItem label="项目优先级">
        <el-select class="info-input info-select"
                placeholder="请输入项目优先级"
                v-model="form.level">
          <el-option value="4" label="紧急且重要"></el-option>
          <el-option value="3" label="紧急"></el-option>
          <el-option value="2" label="重要"></el-option>
          <el-option value="1" label="一般"></el-option>
        </el-select>
      </FormItem>
      <FormItem label="开始结束时间">
        <div class="from-time">
          <DatePicker class="info-input " type="daterange" placement="bottom-start" placeholder="请选择开始结束时间"></DatePicker>
        </div>
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
          <Button type="error"
                  ghost>删除项目</Button>
          <span>注意：项目一旦删除，不可恢复，请确认操作！</span>
        </div>
      </FormItem>

      <FormItem>

        <div class="form-btn">
          <Button class="info-button"
                  style="margin-right: 8px">取消</Button>
          <Button class="info-button"
                  type="primary">保存</Button>
        </div>
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
  display: flex;
  justify-content: center;
  padding-top: 1px;
  padding-bottom: 1px;
  width: 1200px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  min-height: calc(100vh - 88px);
  margin-bottom: 20px;
  background-color: #fff;
  .form-btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
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
    width: 510px;
  }
  &-form {
    margin: 30px 50px;
    margin-right: 130px;
    margin-bottom: 40px;
    width: 610px;
    &-time {
      @include flex-center;
    }
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

