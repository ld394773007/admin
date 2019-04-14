<template>
  <div class="pay">
    <div class="pay-cell">
      <CellGroup>
        <Cell>
          <div class="pay-cell-title">
            <span class="pay-cell-text">版本信息</span>
            <span>企业专业版</span>
          </div>
        </Cell>
        <Cell>
          <div class="pay-cell-title">
            <span class="pay-cell-text">企业ID</span>
            <span>76fdgd897fdghjsda</span>
          </div>
        </Cell>
        <Cell>
          <div class="pay-cell-title">
            <span class="pay-cell-text">成员数量</span>
            <span>1位企业成员，共10个名额</span>
          </div>
        </Cell>
        <Cell>
          <div class="pay-cell-title">
            <span class="pay-cell-text">创建时间</span>
            <span>2018-09-29</span>
          </div>
        </Cell>
        <Cell>
          <div class="pay-cell-title">
            <span class="pay-cell-text">试用到期</span>
            <span>2019-06-12</span>
          </div>
        </Cell>
        <Cell>
          <div class="pay-cell-title">
            <span class="pay-cell-text">企业状态</span>
            <span>试用中</span>
          </div>
        </Cell>
      </CellGroup>
      <a href="javascript:"
         class="sj-btn">升级</a>

    </div>
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="name"
                       label="订单名称"
                       width="180">
      </el-table-column>
      <el-table-column prop="date"
                       label="创建时间"
                       width="180">
      </el-table-column>
      <el-table-column prop="yearNum"
                       label="年数">
      </el-table-column>
      <el-table-column prop="peopleNum"
                       label="人数">
      </el-table-column>
      <el-table-column prop="price"
                       label="金额">
      </el-table-column>
      <el-table-column prop="status"
                       label="状态">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '企业专业版',
        yearNum: '2年',
        peopleNum: '10人',
        price: '¥1290',
        status: '待支付'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.pay {
  &-cell {
    width: 300px;
    &-text {
      display: inline-block;
      margin-right: 50px;
      width: 60px;
      text-align: right;
    }
  }
  .sj-btn {
    @include flex-center;
    margin: 20px 20px;
    width: 80px;
    height: 24px;
    padding: 4px 12px;
    margin-right: 12px;
    border-radius: 16px;
    color: #fff;
    font-size: 12px;
    background: linear-gradient(to bottom right, #4276ff, #32b6ff);
    box-shadow: 0 0 2px 0 rgba(36, 100, 147, 0.2);
    &:hover {
      cursor: pointer;
      box-shadow: 0 2px 8px 0 rgba(13, 119, 226, 0.3);
    }
  }
}
</style>

