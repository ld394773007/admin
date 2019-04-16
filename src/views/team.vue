<template>
  <div class="team continar">
    <div class="team-left">
      <Input suffix="ios-search"
             class="search-input"
             placeholder="请输入内容"
             style="width: auto" />
      <CellGroup @on-click="changeActive">
        <Cell name="1"
              title="所有成员">
          <i style="font-size:23px"
             class="iconfont icon-chengyuan1"
             slot="icon"></i>
        </Cell>
        <Cell name="2"
              title="未分配部门的成员">
          <i class="iconfont icon-application-for-membership"
             slot="icon"></i>
        </Cell>
        <Cell name="3"
              title="停用的成员">
          <i style="font-size:16px"
             class="iconfont icon-shanchuchengyuan"
             slot="icon"></i>
        </Cell>
      </CellGroup>
      <div class="team-btn-wrap">
        <el-button type="text"
                   icon="el-icon-circle-plus">创建部门</el-button>
        <el-button type="text"
                   icon="el-icon-sort">部门排序</el-button>
      </div>
      <el-tree :data="data2"
               node-key="id"
               @node-click="changeActive2"
               default-expand-all>
      </el-tree>
    </div>
    <div class="team-right">
      <div class="team-header">
        <h2>{{title}}</h2>
        <div class="team-header-right">
          <Dropdown trigger="click">
            <el-button type="text"
                       icon="el-icon-upload">批量更新成员信息</el-button>
            <DropdownMenu slot="list">
              <DropdownItem>下载当前成员列表（.csv）</DropdownItem>
              <DropdownItem>上传当前成员列表</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <el-button type="text"
                     icon="el-icon-circle-plus"
                     @click="modal2 = true">添加成员</el-button>
          <el-button type="text"
                     icon="el-icon-circle-plus">添加部门</el-button>
          <el-button type="text"
                     icon="el-icon-more">更多</el-button>
        </div>
      </div>
      <el-table ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                height="60vh"
                v-if="active < 4"
                class="team-table">

        <el-table-column prop="name"
                         label="姓名">
        </el-table-column>

        <el-table-column prop="department"
                         label="部门"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="role"
                         label="企业角色">
        </el-table-column>

      </el-table>
      <el-table ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                height="60vh"
                v-else
                class="team-table">
        <el-table-column label="部门成员">
          <template slot-scope="scope">
            <div class="table-name">
              <Avatar>{{scope.row.name}}</Avatar>
              <div>
                <p>{{scope.row.name}}</p>
                <span>khgjkshfbklgjvjkxcgxjl</span>
              </div>
            </div>


          </template>
        </el-table-column>

        <el-table-column prop="department"
                         label="职位"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="role"
                         label="电话">
        </el-table-column>
        <el-table-column prop="role"
                         label="操作">
        </el-table-column>
      </el-table>
      <div class="team-pagination">
        <el-pagination background
                       layout="prev, pager, next"
                       :total="1000">
        </el-pagination>
      </div>
    </div>
    <Modal v-model="modal2"
           footer-hide
           width="360"
           title="添加成员到企业">
      <div class="modal-content">
        <div class="modal-header">
          <h3>账号邀请</h3>
          <a href="javascript:"
             @click="modal = true"><i class="iconfont icon-ico"></i>通过链接邀请</a>
        </div>
        <div class="modal-center">
          <Input />
          <Divider class="modal-divider" />
          <CellGroup>
            <Cell title="Only show titles">
              <Avatar slot="icon">陈波</Avatar>
              <Button slot="extra">加入</Button>
            </Cell>
          </CellGroup>
        </div>
      </div>
    </Modal>
    <Modal v-model="modal"
           footer-hide
           width="360"
           :styles="{top: '30%'}"
           title="邀请成员">
      <div class="modal-content1"
           style="text-algin:center">
        <span class="modal-text">分享企业链接邀请成员</span>
        <span class="modal-text">有效日期：2019-03-10 11:33</span>
        <Input search
               enter-button="复制链接"
               value="http://www.baidu.com" />
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: '1',
      modal2: false,
      modal: false,
      serchValue: '',
      data2: [{
        id: 4,
        label: '市场部',
        children: [{
          id: 5,
          label: '营销组',
        }, {
          id: 6,
          label: '公关组',
        }]
      }, {
        id: 7,
        label: '技术部',
        children: [{
          id: 8,
          label: '技术组'
        }, {
          id: 9,
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
      }, {
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      }, {
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      }, {
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      }, {
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      }, {
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      }, {
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      }, {
        name: '王小虎',
        role: '拥有者',
        department: '技术部门',
        job: '副总经理',
        sex: '男',
        phone: '13009898776',
        email: 'hellokiuyy@163.com'
      }, {
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
  computed: {
    title () {
      if(this.active > 3) {
        return this.text
      }
      return this.active == '1' ? '所有成员' : this.active == '2' ? '未分配部门的成员' : '停用的成员'
    }
  },
  methods: {
    changeActive2(n) {
      this.active = n.id
      this.text = n.label
    },
    changeActive (n) {
      console.log(n)
      this.active = n
    },
    checkTreeNode (data, e) {
      console.log(data, e)
    },
    renderContent (h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button size="mini" type="text" on-click={() => this.append(data)}>Append</el-button>
            <el-button size="mini" type="text" on-click={() => this.remove(node, data)}>Delete</el-button>
          </span>
        </span>);
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {

  &-content1 {
    @include flex-col-center;
    padding-bottom: 20px;
    span {
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
  &-divider {
    margin-bottom: 10px;
  }
  &-content {
    min-height: 500px;
  }
  &-header {
    @include flex-center;
    justify-content: space-between;
    margin-bottom: 10px;
    a {
      @include flex-center;
      color: #2d8cf0;
      font-size: 12px;
      i {
        margin-right: 6px;
        font-size: 16px;
        color: #2d8cf0;
      }
    }
  }
}
.team {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .table-name {
    @include flex-center;
    & > div {
      margin-left: 10px;
      span {
        @include text-overflow;
        font-size: 12px;
      }
    }
  }
  &-btn-wrap {
    margin-left: 20px;
  }
  .search-input {
    margin-left: 20px;
    margin-bottom: 10px;
  }
  &-pagination {
    @include flex-center;
    margin-top: 30px;
    justify-content: flex-end;
  }
  &-left {
    box-sizing: border-box;
    margin-right: 20px;
    padding: 20px 0;
    width: 300px;
    background-color: #fff;
  }
  &-right {
    flex: 1;
    padding: 20px;
    background-color: #fff;
    .search-input {
      width: 300px;
    }
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

