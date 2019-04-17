<template>
  <div class="pay">
    <div class="pay-header">
      <img class="logo"
           src="https://dn-st.teambition.net/web/release/images/teambition-logo@2x.773fd502.png"
           alt=""
           srcset="">
    </div>
    <div class="pay-body">
      <div class="pay-body-header">
        <div class="pay-body-header-left">
          <p>企业版功能</p>
        </div>
        <div class="pay-step">
          <span class="pay-step-item ">确认订单</span>
          <span class="pay-step-item active">付款</span>
          <span class="pay-step-item">填写发票</span>
        </div>
      </div>
      <div class="pay-user">
        <Avatar size="large">陈波</Avatar>
        <div class="pay-user-info">
          <p>陈波</p>
          <span>当前企业成员数为 1 人</span>
        </div>
      </div>
      <div class="pay-select">
        <p>订单详情</p>
      </div>
      <div class="pay-info">
        <div class="pay-info-item">
          <span class="pay-info-item-left">订单内容</span>
          <span>企业专业版 (陈波)</span>
        </div>
        <div class="pay-info-item">
          <span class="pay-info-item-left">金额</span>
          <span>$ 3816</span>
        </div>
        <div class="pay-info-item">
          <span class="pay-info-item-left">购买内容</span>
          <span>购买后企业可容纳 12 个成员，36 个月，到期时间为 2022年4月16日</span>
        </div>
        <div class="pay-info-item">
          <span class="pay-info-item-left">订单编号</span>
          <span>20190416232688834</span>
        </div>
        <div class="pay-info-item">
          <span class="pay-info-item-left">创建时间</span>
          <span>2019年4月16日</span>
        </div>
      </div>
      <div class="pay-select">
        <p>选择支付方式</p>
      </div>
      <div class="pay-mode">
        <div class="pay-zfb selected">
          <div class="pay-icon">
            <i class="el-icon-check"></i>
          </div>
          <img src="/static/images/timg.jpeg"
               alt="">
        </div>
      </div>
      <div class="pay-btn-wrap">
        <p><span>总计：</span>$3816</p>
        <el-button @click="$router.push('/pay')"
                   class="pay-btn"
                   type="primary">立即支付</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var validateNum = (rule, value, callback) => {
      if (value === '' && value < 10) {
        console.log(111)
        callback(new Error('最少购买 10 位名额'));
        return
      }
      callback();
    };
    return {
      xyValue: '',
      tjmValue: '',
      form: {
        numValue: 12,
      },
      rules: {
        numValue: [
          { validator: validateNum, trigger: 'change' },
        ],
      },
      current: 0,
      active: 0,
      priceValue: '人民币',
      rowData: [
        { year: 1, price: 1272 },
        { year: 2, price: 2544 },
        { year: 3, price: 3816 },
        { year: 4, price: 6362 },
      ]
    }
  },
  methods: {
    clickRow (i) {
      this.active = i
    }
  },
}
</script>

<style lang="scss" scoped>
.pay {
  padding-bottom: 10px;
  min-height: 100vh;
  color: #383838;
  background-color: #f2f2f2;

  &-zfb {
    position: relative;
    @include flex-center;
    width: 173px;
    height: 78px;
    margin-right: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    img {
      width: 80%;
    }
    &.selected {
      border-color: #03a9f4;
      .pay-icon {
        position: absolute;
        left: 0;
        top: 0;
        i {
          position: absolute;
          left: 3px;
          top: 2px;
          font-size: 20px;
          font-weight: bold;
          color: #fff;
          z-index: 10;
        }
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 0;
          border-width: 20px;
          z-index: 1;
          border-color: #03a9f4 transparent transparent #03a9f4;
          border-style: solid;
          opacity: 0.9;
        }
      }
    }
  }
  &-info {
    &-item {
      display: flex;
      align-items: center;
      margin: 4px 0;
      &-left {
        display: block;
        width: 140px;
      }
    }
  }
  &-btn {
    &-wrap {
      display: flex;
      align-items: center;
      margin-top: 40px;
      align-self: flex-end;
      p {
        @include flex-center;
        margin-right: 18px;
        font-size: 24px;
        color: #03a9f4;
        text-align: right;
        span {
          font-size: 14px;
          color: #383838;
        }
      }
    }
  }
  .price-total {
    text-align: right;
    align-self: flex-end;
    margin-top: 30px;
    font-size: 14px;
    margin-bottom: 15px;
    padding: 15px;
    border: 1px solid #03a9f4;
    border-radius: 3px;
    .price-label {
      position: relative;
      top: -3px;
      right: 6px;
    }
    .price {
      font-size: 24px;
      color: #03a9f4;
    }
    .order-member,
    .order-expire {
      min-width: 269px;
      margin-top: 10px;
    }
    p {
      color: #808080;
    }
  }
  &-xy,
  &-tjm {
    align-self: flex-end;
    a {
      color: #03a9f4;
    }
  }
  &-form {
    margin: 0 auto;
    width: 110px;
  }
  .text-center {
    text-align: center;
  }
  .table {
    margin: 0 0 15px 0;
    border-collapse: collapse;
    border-radius: 3px;
    border-style: hidden;
    box-shadow: 0 0 0 1px #ddd;
    width: 100%;
    max-width: 100%;
    &-bordered {
      border: 1px solid #ddd;
    }
    th {
      font-size: 14px;
      color: #808080;
      padding-top: 15px;
      padding-bottom: 15px;
      text-align: center;
      font-weight: normal;
      border-bottom-width: 1px;
    }
    td {
      vertical-align: middle;
      height: 70px;
      cursor: pointer;
    }
    .el-icon-check {
      display: none;
    }
    .choosed td {
      color: #03a9f4;
    }
    .choosed .el-icon-check {
      display: block;
      font-size: 18px;
      color: #03a9f4;
    }
    th,
    td {
      border: 1px solid #ddd;
    }
  }
  &-price {
    color: #808080;
  }
  &-select {
    @include flex-center;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 15px;
    padding-bottom: 4px;
    border-bottom: 2px solid #d8d8d8;
    width: 100%;
    p {
      font-size: 16px;
    }
  }
  &-user {
    @include flex-center;
    margin-top: 40px;
    &-info {
      margin-left: 10px;
      span {
        color: #808080;
      }
    }
  }
  &-step {
    position: relative;
    span {
      position: relative;
      display: inline-block;
      line-height: 20px;
      float: left;
      font-size: 12px;
      padding: 2px 20px 2px 24px;
      border-radius: 2px;
      color: #808080;
      background-color: #f3f3f3;
      margin-right: 17px;
      &:first-child::after {
        display: none !important;
      }
      &.active {
        background-color: #a9a9a9;
        color: #fff;
        &:before {
          border-left-color: #a9a9a9;
        }
        &:after {
          border-color: #a9a9a9;
          border-left-color: transparent;
        }
      }
      &::after,
      &::before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        border: 12px solid transparent;
      }
      &::after {
        left: -12px;
        border-color: #f3f3f3;
        border-left-color: transparent;
      }
      &:before {
        right: -23px;
        border-left-color: #f3f3f3;
      }
    }
  }
  &-body {
    margin: 20px auto;
    padding: 20px;
    width: 800px;
    min-height: 80vh;
    background-color: #fff;
    &-header {
      @include flex-center;
      justify-content: space-between;
      width: 100%;
      p {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  &-header {
    position: relative;
    @include flex-center;
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
  }
  &-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
