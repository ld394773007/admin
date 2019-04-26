<template>
  <div class="pay">
    <div class="pay-header">
      <img class="logo"
           src="/static/images/logo.svg"
           alt=""
           srcset="">
    </div>
    <div class="pay-body">
      <div class="pay-body-header">
        <div class="pay-body-header-left">
          <p>企业新购</p>
        </div>
        <div class="pay-step">
          <span class="pay-step-item active">确认订单</span>
          <span class="pay-step-item">付款</span>
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
        <p>选择购买成员名额和年数</p>
        <Dropdown trigger="click"
                  style="margin-left: 20px">
          <a class="pay-price"
             href="javascript:void(0)">
            结算币种：{{priceValue}}
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem name="人民币">人民币</DropdownItem>
            <DropdownItem name="美元">美元</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th style="width: 20%;">单价</th>
            <th style="width: 20%;">成员名额</th>
            <th style="width: 20%;">年数</th>
            <th style="width: 30%;">金额</th>
            <th style="width: 10%;"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="5"
                class="td-default"><span class="priceUnit">$ 106</span> / 人 / 年</td>
            <td rowspan="5"
                class="td-default member">
              <el-form :model="form"
                       :rules="rules"
                       ref="ruleForm"
                       label-width="0"
                       class="pay-form">
                <el-form-item prop="numValue">
                  <el-input class="text-center-input"
                            v-model="form.numValue"
                            placeholder="请填写人数"></el-input>
                </el-form-item>

              </el-form>

            </td>
          </tr>
          <tr :class="{choosed: active == i}"
              v-for="(item,i) in rowData"
              :key="item.year"
              @click="clickRow(i)">
            <td class="year">{{item.year}} 年</td>
            <td class="cost-item">$ {{item.price}}</td>
            <td><span class="el-icon-check"></span></td>
          </tr>
        </tbody>
      </table>
      <div class="pay-xy">
        <el-checkbox v-model="xyValue">我已阅读并同意签署<a href="javascript:">《服务协议》</a></el-checkbox>
      </div>

      <el-checkbox class="pay-tjm"
                   v-model="tjmValue">使用推荐码</el-checkbox>
      <div class="price-total">
        <span class="price-label">总计：</span><span class="price">$3816</span>
        <p class="order-member"><span class="order-member-limit">购买后企业可容纳 12 个成员</span></p>
        <p class="order-expire">
          <span class="order-add-month">36 个月</span><span class="order-expire-date">到期时间为&nbsp;2022年4月16日</span></p>
      </div>
      <el-button @click="$router.push('/pay')" class="pay-btn" type="primary">提交订单</el-button>
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
  .logo {
    width: 120px;
  }
  &-btn {
    align-self: flex-end;
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
    .order-member, .order-expire {
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
      &.active {
        background-color: #a9a9a9;
        color: #fff;
        &::after {
          display: none;
        }
        &:before {
          border-left-color: #a9a9a9;
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
