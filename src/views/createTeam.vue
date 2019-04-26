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
           src="/static/images/logo.svg"
           alt=""
           srcset="">
      <Icon class="close-icon"
            @click="$router.go(-1)"
            :size="28"
            type="md-close" />
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
            <h3>企业专业版</h3>
            <i>适用于任何规模的团队或企业</i>
            <p>企业版所有功能</p>
            <p>敏捷研发专业模板</p>
            <p>测试管理应用</p>
            <p>自定义工作</p>
            <p>任务表格视图</p>
            <p>任务自定义视图</p>
            <p>企业应用开发平台</p>
            <p>支持单点登录（AD，SAML）</p>
          </div>
        </div>
        <div class="step-btn-wrap">
          <el-button type="primary" class="step-btn" @click="dialogVisible = true">去升级</el-button>
          <el-button type="primary" class="step-btn" @click="$router.push('/home')">先试用</el-button>
        </div>
      </div>
      <a href="javascript:"
         v-if="!current"
         class="common-btn create-team-btn"
         @click="nextStep">开始创建<i class="iconfont icon-arrow-right-circle-s common-btn-icon"></i></a>
    </div>
    <Modal v-model="dialogVisible"
           footer-hide
           :styles="{top: '20px'}"
           width="800">
      <p slot="header"
         style="text-align:center;font-size:16px;">
        <span>当前企业付费状态</span>
      </p>
      <div class="level-popup">
        <p class="level-popup-title">名额使用情况</p>
        <Card>
          <div class="level-popup-card">
            <div class="level-popup-card-left">
              <i-circle :size="80"
                        :percent="80">
                <span class="demo-Circle-inner"
                      style="font-size:24px">80%</span>
              </i-circle>
            </div>
            <div class="level-popup-card-right">
              <div class="level-popup-info">
                <div class="level-popup-info-header">
                  <div class="level-popup-item">
                    <span>可用名额</span>
                    <p>10</p>
                  </div>
                  <div class="level-popup-item">
                    <span>剩余可激活成员名额</span>
                    <p>8</p>
                  </div>
                </div>

                <span>名额有效期至 2020-04-15</span>
              </div>
              <el-button @click="$router.push('/order')"
                         class="level-popup-btn"
                         plain>购买名额</el-button>
            </div>
          </div>
        </Card>
        <div class="qytq">
          <p class="level-popup-title">企业特权</p>
          <div class="qytq-icon">
            <div class="qytq-img">
              <img src="/static/images/basic-medal-active.4e09e98d.png"
                   alt="">
            </div>
            <p>企业版功能</p>
            <span>适用于任何规模的团队或企业</span>
          </div>
          <div class="qytq-list">
            <p>任务、日程、文件、分享、聊天</p>
            <p>企业和项目统计报告</p>
            <p>强大并易于配置的权限管理</p>
            <p>企业组织架构管理</p>
            <p>项目和成员甘特图</p>
            <p>自定义任务类型和字段</p>
            <p>任务工时统计</p>
            <p>项目信息表</p>
            <p>丰富的第三方应用</p>
          </div>
        </div>
      </div>
    </Modal>
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
      dialogVisible: false,
      current: 0,
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
    padding-bottom: 20px;
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
      h3 {
        font-weight: normal;
      }
      p {
        font-size: 14px;
        margin-bottom: 4px;
      }
      span,
      i {
        font-size: 12px;
        margin-bottom: 10px;
      }
      i {
        color: #a6a6a6;
      }
    }
  }
  .step-content {
    @include flex-col-center;
    width: 350px;
  }
  .logo {
    width: 120px;
  }
  .close-icon {
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
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
    padding-bottom: 30px;
    padding-top: 90px;
    box-sizing: border-box;
    height: calc(100vh - 60px);
    overflow-y: auto
  }
}
</style>
