<template>
  <el-card class="team continar">
    <div class="team-left">
      <el-tree :data="data2"
               show-checkbox
               node-key="id"
               :props="defaultProps"
               @check="checkTreeNode">
      </el-tree>
    </div>
    <div class="team-right">
      <div class="team-header">
        <el-input placeholder="请输入内容"
                  v-model="serchValue"
                  class="search-input">
          <el-button slot="append"
                     icon="el-icon-search"></el-button>
        </el-input>
        <el-table ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                  height="60vh"
                  class="team-table">
          <el-table-column type="selection"
                           width="55">
          </el-table-column>
          <el-table-column prop="name"
                           label="姓名"
                           width="120">
          </el-table-column>
          <el-table-column prop="role"
                           label="企业角色"
                           width="120">
          </el-table-column>

          <el-table-column prop="department"
                           label="部门"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="job"
                           label="职位"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="sex"
                           label="性别"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="phone"
                           label="电话"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="email"
                           label="邮箱"
                           show-overflow-tooltip>
          </el-table-column>
        </el-table>
        <div class="team-pagination">
          <el-pagination background
                         layout="prev, pager, next"
                         :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      serchValue: '',
      data2: [{
        id: 1,
        label: '市场部',
        children: [{
          id: 3,
          label: '营销组',
        }, {
          id: 4,
          label: '公关组',
        }]
      }, {
        id: 2,
        label: '技术部',
        children: [{
          id: 5,
          label: '技术组'
        }, {
          id: 6,
          label: '运维组'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: [{
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      },{
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      },{
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      },{
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      },{
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      },{
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      },{
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      },{
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      },{
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      }],
      multipleSelection: []
    };
  },
  methods: {
    checkTreeNode(data, e) {
      console.log(data, e)
    }
  }
}
</script>

<style lang="scss" scoped>
.team {
  position: relative;
  &-table {
    margin-top: 30px;
  }
  &-pagination {
    @include flex-center;
    margin-top: 30px;
    justify-content: flex-end;
  }
  &-left {
    box-sizing: border-box;
    position: absolute;
    padding: 20px;
    left: 0;
    right: 300px;
    top: 0;
    bottom: 0;
    width: 300px;
    border-right: 1px solid #ebeef5;
    overflow-y: auto;
  }
  &-right {
    position: absolute;
    left: 300px;
    right: 0;
    top: 0;
    bottom: 0;

    .search-input {
      width: 300px;
    }
  }
  &-header {
    padding: 15px 20px;
  }
}
</style>

