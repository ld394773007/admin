<template>
  <div class="reset">
    <div class="reset-content"
         v-if="!isSuccess">
      <img class="logo"
           src="/static/images/创建企业_团队/u116.png">
      <el-form :model="resetForm"
               status-icon
               :rules="rules"
               ref="resetForm"
               label-width="0"
               class="demo-ruleForm">
        <el-form-item prop="email">
          <el-input class="reset-input"
                    placeholder="你的邮箱"
                    clearable
                    v-model="resetForm.email"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <a href="javascript:"
             class="common-btn"
             @click="submitForm('resetForm')">重置密码<i class="fas fa-arrow-alt-circle-right common-btn-icon"></i></a>
        </el-form-item>
      </el-form>
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
             @click="goToEmail">前往邮箱<i class="fas fa-arrow-alt-circle-right common-btn-icon"></i></a>
        <el-button type="primary"
                   plain
                   class="reset-btn"
                   @click="againSend">重发密码至邮箱</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { checkMobile, checkEmail } from '@/utils'

export default {
  data () {
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入你的邮箱'));
      } else {
        if (!checkEmail(value)) {
          callback(new Error('请输入正确的者邮箱'));
        }
        callback();
      }
    };
    return {
      isSuccess: false,
      resetForm: {
        email: '',
      },
      rules: {
        email: [
          { validator: validateEmail, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isSuccess = true
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    againSend() {

    },
    goToEmail() {
      window.location = 'http://' + this.getEmailUrl()
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
  &-success {
    @include flex-col-center;
    width: 300px;
    .reset-btn {
      margin-top: 20px;
    }
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
    margin-top: 10px;
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
