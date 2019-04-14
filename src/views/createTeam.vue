<template>
  <div class="create-team">
    <div class="create-team-header">
      <div class="back-btn"
           v-if="current"
           @click="current -= 1">
        <Icon type="ios-arrow-back"
              size="20" />
        返回
      </div>
      <img class="logo"
           src="https://dn-st.teambition.net/web/release/images/teambition-logo@2x.773fd502.png"
           alt=""
           srcset="">
    </div>
    <div class="create-team-body">
      <div class="create-team-step">
        <Steps :current="current">
          <Step></Step>
          <Step></Step>
          <Step></Step>
          <Step></Step>
        </Steps>
      </div>
      <div class="step-content"
           v-if="!current">
        <img src="https://dn-st.teambition.net/web/release/images/organization.5a82f38e.svg">
        <h1 class="create-team-title">输入团队或组织名称</h1>
        <p class="create-team-subtitle">10 人以下免费使用</p>
        <el-input class="create-team-input"
                  placeholder="请输入企业名"
                  v-model="form.name"></el-input>
        <div class="create-team-select">
          <div class="create-team-select-left">
            <span>使用规模</span>
            <Tooltip content="准备邀请进产品一起协作的团队成员数"
                     placement="top">
              <Icon color="#3da8f5"
                    :size="18"
                    type="ios-alert-outline" />
            </Tooltip>

          </div>
          <el-select v-model="form.num"
                     class="claer-border"
                     placeholder="请选择">
            <el-option label="1~10人"
                       value="1">
            </el-option>
          </el-select>
        </div>
      </div>
      <div v-else-if="current == 1"
           class="step-content">
        <img src="https://dn-st.teambition.net/web/release/images/organization.5a82f38e.svg">
        <h1 class="create-team-title">输入团队或组织名称</h1>
        <p class="create-team-subtitle">如需帮助，请拨打400-060-5578</p>
        <el-input class="create-team-input"
                  placeholder="请输入企业名"
                  v-model="form.name"></el-input>
        <div class="common-phone">
          <div class="common-phone-left">
            <el-select v-model="form.country"
                       class="common-phone-select"
                       placeholder="请选择">
              <el-option label="中国"
                         value="1"></el-option>
              <el-option label="美国"
                         value="2"></el-option>
              <el-option label="日本"
                         value="3"></el-option>
            </el-select>
          </div>
          <div class="common-phone-right">
            <span class="span-edit area-plus">+</span>
            <input class="country-code"
                   type="text"
                   placeholder="国家码"
                   v-model="form.code"
                   autocomplete="off"
                   style="width: 48px;">
            <input type="text"
                   placeholder="请输入手机号"
                   v-model="form.phone"
                   class="common-phone-input ">
          </div>
        </div>
        <a href="javascript:"
           class="common-btn send-code-btn"
           @click="nextStep">获取验证码<i class="iconfont icon-arrow-right-circle-s common-btn-icon"></i></a>
      </div>
      <div class="step-content" v-else-if="current == 2">
        <h1 class="create-team-title">验证码已发送成功</h1>
        <p class="create-team-subtitle">已发送至 {{form.phone}}</p>
        <code-input @success="nextStep"></code-input>
        <el-button type="text">重新发送 47 秒</el-button>
      </div>
      <div v-else-if="current == 3"
           class="step-content">
        <h1 class="create-team-title">选择使用版本</h1>
        <div class="edition-item">
          <div class="edition-item-header">
            <img src="/static/images/basic.1a03bd6a.svg">
          </div>
          <div class="edition-item-content">
            <p>企业版</p>
            <span>10人一下免费使用</span>
            <i>适用于任何规模的团队或企业</i>
          </div>
        </div>
        <div class="step-btn-wrap">
          <el-button type="primary" class="step-btn">去升级</el-button>
          <el-button type="primary" class="step-btn">先试用</el-button>
        </div>
      </div>
      <a href="javascript:"
         v-if="!current"
         class="common-btn create-team-btn"
         @click="nextStep">开始创建<i class="iconfont icon-arrow-right-circle-s common-btn-icon"></i></a>
    </div>
  </div>
</template>

<script>
import codeInput from '@/components/codeInput'
export default {
  components: {
    codeInput
  },
  data () {
    return {
      current: 3,
      form: {
        name: 'dsada',
        num: '1',
        country: '1',
        code: '86',
        phone: '13699011567'
      }
    }
  },
  methods: {
    create () {
      this.current = 1
    },
    nextStep () {
      this.current += 1
      this.$emit('next-step')
    }
  }
}
</script>

<style lang="scss" scoped>
.create-team {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  .step-btn {
    margin: 0 20px;
    &-wrap {
      margin-top: 30px;
    }
  }
  .send-code-btn {
    margin-top: 20px;
  }
  .back-btn {
    position: absolute;
    left: 20px;
    font-size: 16px;
    color: #383838;
    cursor: pointer;
  }
  .edition-item {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 260px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: bottom;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: -webkit-transform 0.2s ease;
    transition: transform 0.2s ease;
    transition: transform 0.2s ease, -webkit-transform 0.2s ease;
    &:hover {
      cursor: pointer;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    &-content {
      @include flex-col-center;
      color: #383838;
      line-height: 20px;

      p {
        font-size: 16px;
        margin-bottom: 4px;
      }
      span,
      i {
        font-size: 12px;
        margin-bottom: 4px;
      }
      i {
        color: #a6a6a6;
      }
    }
  }
  .step-content {
    @include flex-col-center;
  }
  .logo {
    width: 92px;
  }
  .close-icon {
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
  }
  &-btn {
    margin-top: 20px;
    width: 350px;
  }
  &-title {
    margin-top: 28px;
    margin-bottom: 8px;
    color: #383838;
  }
  &-subtitle {
    margin-bottom: 32px;
    font-size: 14px;
    color: #a6a6a6;
  }
  &-input {
    margin-bottom: 20px;
    width: 350px;
  }
  &-select {
    display: flex;
    align-items: center;
    width: 350px;
    height: 48px;
    border: 1px solid #dcdfe6;
    &-left {
      padding-left: 16px;
      margin-right: 5px;
      border-right: 1px solid #e5e5e5;
      flex: 1;
    }
    .claer-border {
      width: 230px;
    }
  }
  &-step {
    position: absolute;
    left: 50%;
    top: 30px;
    width: 560px;
    transform: translateX(-40%);
  }
  &-header {
    position: relative;
    @include flex-center;
    height: 60px;
    border-bottom: 1px solid #e5e5e5;
  }
  &-body {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 90px;
  }
}
</style>
