<template>
  <div class="user container">
    <div class="user-left">
      <Card class="user-info">
        <div class="user-info-wrap">
          <Avatar class="user-info-avatar"
                  size="large">陈波</Avatar>
          <p class="user-name">陈波</p>
        </div>
      </Card>
      <div class="user-menu">
        <div class="user-info-wrap">
          <CellGroup class="user-cell-group" @on-click="clickCell">
            <Cell class="user-cell" name="1">
              <p class="user-menu-title"
                 :class="{'active': active == 1}">个人信息</p>
            </Cell>
            <Cell class="user-cell" name="2">
              <p class="user-menu-title"
                 :class="{'active': active == 2}">账号密码</p>
            </Cell>
            <Cell class="user-cell" name="3">
              <p class="user-menu-title"
                 :class="{'active': active == 3}">微信绑定</p>
            </Cell>
            <Cell class="user-cell" name="4">
              <p class="user-menu-title"
                 :class="{'active': active == 4}">账户状态</p>
            </Cell>
          </CellGroup>
        </div>
      </div>
    </div>
    <div class="user-right">
      <div class="user-content"
           v-if="active == 1">
        <p class="user-content-title">个人信息</p>
        <Form ref="form"
                 :model="form"
                 label-position="left"
                 :label-width="60">
          <FormItem label="头像">
            <div class="user-avatar-upload">
              <Avatar class="user-info-avatar">陈波</Avatar>
              <Upload action="//jsonplaceholder.typicode.com/posts/">
                <Button type="info">更换头像</Button>
              </Upload>
            </div>
          </FormItem>
          <FormItem label="姓名">
            <Input class="form-input"
                      v-model="form.name"></Input>
          </FormItem>
          <FormItem label="电话">
            <Input class="form-input"
                      v-model="form.phone"></Input>
          </FormItem>
          <FormItem label="生日">
            <DatePicker class="form-input"
                            v-model="form.birthday"
                            type="date"
                            placeholder="选择日期">
            </DatePicker>
          </FormItem>
          <FormItem label="地址">
            <Input class="form-input"
                      v-model="form.address"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary"
                    style="margin-left: 36px;margin-right: 10px"
                       @click="onSubmit">立即创建</Button>
            <Button>取消</Button>
          </FormItem>
        </Form>
      </div>
      <div class="user-content"
           v-if="active == 2">
        <p class="user-content-title">账号密码</p>
        <Form ref="formTwo"
                 :model="form"
                 label-position="left"
                 :label-width="80">
          <FormItem label="email">
            <div class="form-wrap">
              <Input class="form-input"
                        v-model="formTwo.email"></Input>
              <Button class="form-wrap-btn">为验证</Button>
            </div>
            <Button style="margin-top:10px" class="form-wrap-btn">发送邮件</Button>
          </FormItem>
          <FormItem label="电话">
            <div class="form-wrap">
              <Input class="form-input"
                        v-model="formTwo.phone"></Input>
              <Button class="form-wrap-btn">确认绑定</Button>
            </div>
          </FormItem>
          <FormItem label="旧密码">
            <Input class="form-input"
                      type="password"
                      v-model="formTwo.password"></Input>
          </FormItem>
          <FormItem label="新密码">
            <Input type="password"
                      class="form-input"
                      v-model="formTwo.oldPassword"></Input>
          </FormItem>
          <FormItem label="确认新密码">
            <Input type="password"
                      class="form-input"
                      v-model="formTwo.repassword"></Input>
          </FormItem>
          <FormItem>
            <Button >取消</Button>
            <Button type="primary"
                       @click="onSave">保存</Button>
          </FormItem>
        </Form>
      </div>
      <div class="user-content"
           v-if="active == 3">
           <p class="user-content-title">微信绑定</p>
        <div class="flex-center flex-start">
          <i class="iconfont icon-wechat user-wechart"></i>
          <Button type="primary">绑定</Button>
        </div>
      </div>
      <div class="user-content"
           v-if="active == 4">
        <p class="user-content-title">账户状态</p>
        <div class="user-item">
          <div class="user-item-left">
            <span class="user-item-text">阿里巴巴优先公司</span>
            <Tag class="user-item-tag"
                    color="red">已过期10天</Tag>
          </div>
          <Button>退出企业</Button>
        </div>
        <div class="user-item">
          <div class="user-item-left">
            <span class="user-item-text">腾讯科技有限公司</span>
            <Tag class="user-item-tag" color="blue">剩余130天</Tag>
          </div>
          <Button>退出企业</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 1,
      form: {
        name: '',
        phone: '',
        birthday: '',
        address: ''
      },
      formTwo: {
        email: '',
        phone: '',
        password: '',
        oldPassword: '',
        rePassword: ''
      }
    }
  },
  methods: {
    onSave () {

    },
    onSubmit () {
      console.log('submit!');
    },
    clickCell (index) {
      this.active = index
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  position: relative;
  width: 980px !important;
  margin-top: 20px;
  &-avatar-upload {
    display: flex;
    align-items: center;
    .user-info-avatar {
      margin-right: 20px;
    }
  }
  &-cell {
    width: 100%;
    height: 50px;
    &:not(:last-child) {
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
    }
    &-group {
      width: 100%;
    }
  }

  &-menu {
    width: 100%;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.0470588) 0 2px 3px 0;
    &-title {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      height: 36px;
      color: grey;
      &.active {
        color: #383838;
      }
    }
  }
  &-info {
    margin-bottom: 20px;
    width: 300px;
    &-wrap {
      display: flex;
    }
    &-avatar {
      @include flex-center;
      width: 60px;
      height: 60px;
      font-size: 20px;
      font-weight: 600;
      border-radius: 50%;
      background-color: #cdd081;
    }
  }
  &-name {
    margin-left: 15px;
    font-size: 18px;
    font-weight: 600;
  }
  &-item {
    @include flex-center;
    justify-content: flex-start;
    margin-bottom: 20px;
    &-left {
      @include flex-center;
      margin-right: 30px;
      justify-content: space-between;
      width: 300px;
    }
  }
  .form-wrap {
    @include flex-center;
    justify-content: flex-start;
  }
  .form-input {
    width: 300px;
    margin-right: 30px;
  }
  .user-wechart {
    margin-right: 40px;
    font-size: 50px;
    color: #67c23a;
  }
  &-left {
    width: 300px;
    margin-right: 20px;
  }
  &-right {
    flex: 1;
  }
  &-content {
    padding: 20px;
    width: 100%;
    background-color: #fff;
    &-title {
      margin-bottom: 20px;
      font-size: 12px;
      font-weight: 600;
    }
  }
}
</style>

