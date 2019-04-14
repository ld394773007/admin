<template>
  <div class="reset">
    <div class="reset-content"
         v-if="!isEmail && !isPhone">
      <img class="logo"
           src="/static/images/创建企业_团队/u116.png">
      <el-form :model="resetForm"
               label-width="0">
        <el-form-item>
          <el-input class="reset-input"
                    placeholder="你的手机号或者邮箱"
                    clearable
                    @focus="bindFocus"
                    v-model="resetForm.account"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <err-message :value="message"></err-message>
          <a href="javascript:"
             class="common-btn reset-btn"
             @click="submitForm('resetForm')">重置密码<i class="iconfont icon-arrow-right-circle-s common-btn-icon"></i></a>
        </el-form-item>
      </el-form>
    </div>
    <div class="reset-content"
         v-else-if="isPhone && !isSend">
      <img class="logo"
           src="/static/images/创建企业_团队/u116.png">
      <el-form :model="resetForm"
               label-width="0">
        <el-form-item>
          <div class="phone-input">
            <el-input @focus="bindFocus"
                      class="reset-input"
                      v-model="resetForm.account"></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <err-message :value="message"></err-message>
          <a href="javascript:"
             class="common-btn reset-btn"
             @click="sendCode">获取短信验证码<i class="iconfont icon-arrow-right-circle-s common-btn-icon"></i></a>
        </el-form-item>
      </el-form>
      <div class="wechat-login">
        <a href="javascript:"
           class="common-btn plan"
           @click="register('ruleForm2')">使用其他账号<i class="iconfont icon-arrow-right-circle-s common-btn-icon"></i></a>
      </div>
    </div>
    <div class="reset-content"
         v-else-if="isPhone && isSend">
      <img class="logo"
           src="/static/images/创建企业_团队/u116.png">
      <el-form :model="resetForm"
               label-width="0">
        <el-form-item>
          <el-input class="reset-input"
                    clearable
                    v-model="resetForm.account"
                    disabled></el-input>
        </el-form-item>
        <el-form-item>
          <div class="phone-input">
            <el-input class="reset-input"
                      @focus="bindFocus"
                      v-model="resetForm.code"></el-input>
            <el-button type="text"
                       class="phone-input-btn"
                       :disabled="!!downTime">重新获取{{downTime ? '(' + downTime + ')' : '' }}</el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <el-input class="reset-input"
                    clearable
                    show-password
                    @focus="bindFocus"
                    type="password"
                    placeholder="新密码"
                    v-model="resetForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="reset-input"
                    clearable
                    show-password
                    @focus="bindFocus"
                    type="password"
                    placeholder="确认新密码"
                    v-model="resetForm.repassword"></el-input>
        </el-form-item>
        <el-form-item>
          <err-message :value="message1"></err-message>
          <a href="javascript:"
             class="common-btn reset-btn"
             @click="resetSubmit">重置密码<i class="iconfont icon-arrow-right-circle-s common-btn-icon"></i></a>
        </el-form-item>
      </el-form>
      <div class="wechat-login">
        <a href="javascript:"
           class="common-btn plan"
           @click="register('ruleForm2')">使用其他账号<i class="iconfont icon-arrow-right-circle-s common-btn-icon"></i></a>
      </div>
    </div>
    <div class="reset-content"
         v-else>
      <img class="logo"
           src="/static/images/创建企业_团队/u116.png">
      <div class="reset-success">
        <span class="reset-text">重置密码邮件已发送至邮箱</span>
        <span class="reset-text">{{resetForm.email}}, 有效期为24小时</span>
        <a href="javascript:"
           class="common-btn reset-btn"
           @click="goToEmail">前往邮箱<i class="iconfont icon-arrow-right-circle-s common-btn-icon"></i></a>
        <el-button type="primary"
                   plain
                   class="reset-btn"
                   @click="againSend">重发密码至邮箱</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import errMessage from '@/components/errMessage'
import { checkMobile, checkEmail } from '@/utils'

export default {
  components: {
    errMessage
  },
  data () {
    return {
      isSend: false,
      isPhone: false,
      message: '',
      message1: '',
      isEmail: false,
      countryValue: '1',
      countryCode: '',
      downTime: 0,
      resetForm: {
        account: '13699011543',
        code: '',
        password: '',
        repassword: ''
      },
      timer: null
    }
  },
  methods: {
    sendCode () {
      console.log(11)
      this.isSend = true
      this.downTime = 60

      this.timer = setInterval(() => {
        console.log(111)
        if (this.downTime == 1) {
          clearInterval(this.timer)
          this.timer = null
          this.downTime = 0
        } else {
          this.downTime -= 1
        }
      }, 1000);
    },
    resetSubmit () {
      let { code, account, password, repassword } = this.resetForm
      if (code == '') {
        this.message1 = '请填写验证码'
      } else if (password == '') {
        this.message1 = '请填写密码'
      } else if (password.length < 6) {
        this.message1 = '密码过短'
      } else if (repassword == '') {
        this.message1 = '请确认密码'
      } else if (repassword != password) {
        this.message1 = '两次密码不相同'
      } else {
        alert('reset success')
      }
    },
    submitForm (formName) {
      let { account } = this.resetForm
      if (checkMobile(account) || checkEmail(account)) {
        if (checkMobile(account)) {
          this.isPhone = true
        } else {
          this.isEmail = true
        }
      } else {
        this.message = '请输入正确的手机号码或邮箱'
      }
    },
    againSend () {

    },
    goToEmail () {
      window.location = 'http://' + this.getEmailUrl()
    },
    bindFocus () {
      this.message = ''
      this.message1 = ''
    },
    getEmailUrl () {
      let $t = this.resetForm.email.split('@')[1];
      $t = $t.toLowerCase();
      if ($t == '163.com') {
        return 'mail.163.com';
      } else if ($t == 'vip.163.com') {
        return 'vip.163.com';
      } else if ($t == '126.com') {
        return 'mail.126.com';
      } else if ($t == 'qq.com' || $t == 'vip.qq.com' || $t == 'foxmail.com') {
        return 'mail.qq.com';
      } else if ($t == 'gmail.com') {
        return 'mail.google.com';
      } else if ($t == 'sohu.com') {
        return 'mail.sohu.com';
      } else if ($t == 'tom.com') {
        return 'mail.tom.com';
      } else if ($t == 'vip.sina.com') {
        return 'vip.sina.com';
      } else if ($t == 'sina.com.cn' || $t == 'sina.com') {
        return 'mail.sina.com.cn';
      } else if ($t == 'tom.com') {
        return 'mail.tom.com';
      } else if ($t == 'yahoo.com.cn' || $t == 'yahoo.cn') {
        return 'mail.cn.yahoo.com';
      } else if ($t == 'tom.com') {
        return 'mail.tom.com';
      } else if ($t == 'yeah.net') {
        return 'www.yeah.net';
      } else if ($t == '21cn.com') {
        return 'mail.21cn.com';
      } else if ($t == 'hotmail.com') {
        return 'www.hotmail.com';
      } else if ($t == 'sogou.com') {
        return 'mail.sogou.com';
      } else if ($t == '188.com') {
        return 'www.188.com';
      } else if ($t == '139.com') {
        return 'mail.10086.cn';
      } else if ($t == '189.cn') {
        return 'webmail15.189.cn/webmail';
      } else if ($t == 'wo.com.cn') {
        return 'mail.wo.com.cn/smsmail';
      } else if ($t == '139.com') {
        return 'mail.10086.cn';
      } else {
        return '';
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.reset {
  .phone-input {
    position: relative;
    &-item {
      margin-bottom: 0;
    }
    &-btn {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &-success {
    @include flex-col-center;
    width: 300px;
  }
  &-form-item {
    margin-bottom: 0;
  }
  &-text {
    font-size: 16px;
    color: #909399;
  }
  &-content {
    position: relative;
    @include flex-col-center;
    position: absolute;
    left: 50%;
    top: 15%;
    transform: translate(-50%, 0);
  }
  .register {
    margin-top: 10px;
    font-size: 12px;
    color: #909399;
    &-btn {
      color: rgba($color: #409eff, $alpha: 0.8);
    }
  }
  .reset-password {
    position: absolute;
    right: 0;
    top: 200px;
    color: #909399;
  }
  .logo {
    margin-bottom: 30px;
  }
  &-input {
    width: 300px;
  }
  &-btn {
    margin-left: 0;
    width: 100%;
  }
  .wechat-btn,
  .wechat-reset {
    width: 100%;
  }
  .wechat-reset {
    @include flex-col-center;
    padding-top: 20px;
    border-top: 1px #dcdfe6 solid;
  }
  .wechat-btn {
    background-color: #fff;
    color: #67c23a;
  }
}
</style>
