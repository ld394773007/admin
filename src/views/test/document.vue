<template>
  <div ref="page"
       class="document container">
    <div class="document-header">
      <div class="document-title"> <span @click="isChild = false">文件库</span> <i v-if="isChild"
           class="iconfont el-icon-arrow-right"></i>{{isChild ? '文件' : ''}}</div>
      <div class="document-header-right">
        <el-button type="text"
                   :disabled="isAdd"
                   @click="handleClickAdd"
                   icon="el-icon-circle-plus">创建文件</el-button>
        <el-button type="text"
                   icon="el-icon-upload">上传文件</el-button>
      </div>
    </div>
    <div class="document-body">
      <div class="document-body-header"></div>
      <div class="document-table"
           :class="{hide: !isList}">
        <el-table v-if="!isChild"
                  ref="multipleTable"
                  :data="tableData"
                  style="width: 100%"
                  class="show-table"
                  @selection-change="handleSelectionChange">
          <el-table-column width="55">
            <template slot="header"
                      slot-scope="scope">
              <el-checkbox :value="checkAll"
                           @change="handleCheckAllChange"></el-checkbox>
            </template>
            <template slot-scope="scope">
              <div class="table-checkbox">
                <input type="checkbox"
                       :value="scope.row"
                       v-model="multipleSelection">
              </div>
            </template>
          </el-table-column>
          <el-table-column label="名称">
            <template slot-scope="scope">
              <Tooltip placement="top"
                       v-if="!scope.row.isAdd && !scope.row.isEdit"
                       :content="scope.row.name">
                <div class="table-name"
                     @click="rowClick">
                  <i class="iconfont icon-wenjian"></i>
                  {{scope.row.name}}
                </div>

              </Tooltip>
              <div v-else-if="scope.row.isAdd"
                   class="table-name"
                   @click="stopPropagation">
                <Input @on-enter="handleEnter"
                       v-model="value"
                       placeholder="按Enter新建文件夹" />
              </div>
              <div v-else-if="scope.row.isEdit"
                   class="table-name"
                   @click="stopPropagation">
                <Input @on-enter="handleEditEnter"
                       v-model="scope.row.name"
                       placeholder="请输入要修改的内容" />
              </div>
            </template>
            <template slot="header"
                      slot-scope="scope">
              <p v-if="!multipleSelection.length && isList"
                 class="table-title">名称</p>
              <div v-if="multipleSelection.length"
                   class="table-action">
                <span>已选择{{multipleSelection.length}}项</span>
                <el-button class="table-action-btn"
                           icon="el-icon-download"
                           type="text">下载</el-button>
                <el-button class="table-action-btn"
                           icon="el-icon-rank"
                           type="text">移动</el-button>
                <el-button class="table-action-btn"
                           icon="el-icon-tickets"
                           type="text">复制</el-button>
                <el-button class="table-action-btn"
                           icon="el-icon-delete"
                           type="text">删除</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="size"
                           label="大小"
                           width="120">
            <template slot="header"
                      slot-scope="scope">
              <p v-if="!multipleSelection.length && isList"
                 class="table-title">大小</p>
            </template>
          </el-table-column>
          <el-table-column prop="date"
                           label="更新时间"
                           width="120"
                           show-overflow-tooltip>
            <template slot="header"
                      slot-scope="scope">
              <p v-if="!multipleSelection.length && isList"
                 class="table-title">更新时间</p>
            </template>
          </el-table-column>
          <el-table-column align="center"
                           width="240">
            <template slot="header"
                      slot-scope="scope">
              <div class="table-icon-wrap">
                <i class="iconfont icon-list table-icon"
                   :class="{active: isList}"
                   @click="changeIsList"></i>
                <i class="table-icon el-icon-menu"
                   :class="{active: !isList}"
                   @click="changeIsList"></i>
              </div>
            </template>
            <template slot-scope="scope">
              <div class="show-table-action" @click="stopPropagation">
                <i class="table-action-icon el-icon-download"></i>
                <i class="table-action-icon el-icon-rank"></i>
                <i @click="handleClickEdit(scope.$index)" class="table-action-icon el-icon-edit"></i>
                <Dropdown trigger="click">
                  <i class="table-action-icon el-icon-arrow-down"></i>
                  <DropdownMenu slot="list">
                    <DropdownItem>复制文件夹链接</DropdownItem>
                    <DropdownItem>复制文件夹</DropdownItem>
                    <DropdownItem>移动回收站</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-table v-else
                  ref="multipleTable"
                  :data="tableData1"
                  style="width: 100%"
                  class="show-table"
                  @cell-click="clickTable"
                  @selection-change="handleSelectionChange">
          <el-table-column width="55">
            <template slot="header"
                      slot-scope="scope">
              <el-checkbox :value="checkAll"
                           @change="handleCheckAllChange"></el-checkbox>
            </template>
            <template slot-scope="scope">
              <div class="table-checkbox">
                <input type="checkbox"
                       :value="scope.row"
                       v-model="multipleSelection">
              </div>
            </template>
          </el-table-column>
          <el-table-column label="名称">
            <template slot-scope="scope">
              <Tooltip placement="top"
                       :content="scope.row.name">
                <div class="table-name">
                  <i class="iconfont icon-pdf"></i>
                  {{scope.row.name}}
                </div>
              </Tooltip>
            </template>
            <template slot="header"
                      slot-scope="scope">
              <p v-if="!multipleSelection.length && isList"
                 class="table-title">名称</p>
              <div v-if="multipleSelection.length"
                   class="table-action">
                <span>已选择{{multipleSelection.length}}项</span>
                <el-button class="table-action-btn"
                           icon="el-icon-download"
                           type="text">下载</el-button>
                <el-button class="table-action-btn"
                           icon="el-icon-rank"
                           type="text">移动</el-button>
                <el-button class="table-action-btn"
                           icon="el-icon-tickets"
                           type="text">复制</el-button>
                <el-button class="table-action-btn"
                           icon="el-icon-delete"
                           type="text">删除</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="size"
                           label="大小"
                           width="120">
            <template slot="header"
                      slot-scope="scope">
              <p v-if="!multipleSelection.length && isList"
                 class="table-title">大小</p>
            </template>
          </el-table-column>
          <el-table-column prop="date"
                           label="更新时间"
                           width="120"
                           show-overflow-tooltip>
            <template slot="header"
                      slot-scope="scope">
              <p v-if="!multipleSelection.length && isList"
                 class="table-title">更新时间</p>
            </template>
          </el-table-column>
          <el-table-column align="center"
                           width="240">
            <template slot="header"
                      slot-scope="scope">
              <div class="table-icon-wrap">
                <i class="iconfont icon-list table-icon"
                   :class="{active: isList}"
                   @click="changeIsList"></i>
                <i class="table-icon el-icon-menu"
                   :class="{active: !isList}"
                   @click="changeIsList"></i>
              </div>
            </template>
            <template slot-scope="scope">
              <div class="show-table-action">
                <i class="table-action-icon el-icon-download"></i>
                <i class="table-action-icon el-icon-rank"></i>
                <i class="table-action-icon el-icon-edit"></i>
                <Dropdown trigger="click">
                  <i class="table-action-icon el-icon-arrow-down"></i>
                  <DropdownMenu slot="list">
                    <DropdownItem>复制文件链接</DropdownItem>
                    <DropdownItem>复制文件</DropdownItem>
                    <DropdownItem>移动回收站</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="document-list"
           :class="{show:!isList}">
        <div class="document-item-wrap"
             v-for="(item,i) in tableData"
             :key="item.id">
          <div class="document-item"
               :class="{checked: item.isChecked}">
            <div class="document-item-checkbox"
                 @click="changeCheckbox(i)">
              <input class="document-item-input"
                     type="checkbox"
                     :value="tableData[i]"
                     v-model="multipleSelection">
              <i class="iconfont icon-checkbox"></i>
            </div>

            <div class="document-item-action">
              <span class="document-item-btn"><i class="el-icon-download"></i></span>
              <span class="document-item-btn"><i class="el-icon-arrow-down"></i></span>
            </div>
          </div>
          <div v-if="!item.isAdd" class="document-item-text">{{item.name}}</div>
          <div v-else class="document-item-text" @click="stopPropagation">
            <Input @on-enter="handleEnter"
                   v-model="value"
                   placeholder="按Enter新建文件夹" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      isList: true,
      tableData: [{
        id: 1,
        date: '2016-05-03',
        name: '文件夹',
        size: '上海市普',
        isAdd: false,
        isEdit: false
      }, {
        id: 2,
        date: '2016-05-02',
        name: '文件夹',
        size: '128kb',
        isAdd: false,
        isEdit: false
      }, {
        id: 3,
        date: '2016-05-04',
        name: '文件夹',
        size: '128kb',
        isAdd: false,
        isEdit: false
      }, {
        id: 4,
        date: '2016-05-01',
        name: '文件夹',
        size: '128kb',
        isAdd: false,
        isEdit: false
      }, {
        id: 5,
        date: '2016-05-08',
        name: '文件夹',
        size: '128kb',
        isAdd: false,
        isEdit: false
      }, {
        id: 6,
        date: '2016-05-06',
        name: '文件夹',
        size: '128kb'
      }, {
        date: '2016-05-07',
        name: '文件夹',
        size: '128kb',
        isAdd: false,
        isEdit: false
      }],
      tableData1: [{
        id: 1,
        date: '2016-05-03',
        name: '文件',
        size: '上海市普',
        isAdd: false,
        isEdit: false
      }, {
        id: 2,
        date: '2016-05-02',
        name: '文件',
        size: '128kb',
        isAdd: false,
        isEdit: false
      }, {
        id: 3,
        date: '2016-05-04',
        name: '文件',
        size: '128kb',
        isAdd: false,
        isEdit: false
      }, {
        id: 4,
        date: '2016-05-01',
        name: '文件',
        size: '128kb',
        isAdd: false,
        isEdit: false
      }, {
        id: 5,
        date: '2016-05-08',
        name: '文件',
        size: '128kb',
        isAdd: false,
        isEdit: false
      }, {
        id: 6,
        date: '2016-05-06',
        name: '文件',
        size: '128kb',
        isAdd: false,
        isEdit: false
      }, {
        date: '2016-05-07',
        name: '文件',
        size: '128kb',
        isAdd: false,
        isEdit: false
      }],
      multipleSelection: [],
      isChild: false,
      tableIndex: -1,
      isAdd: false
    }
  },
  computed: {
    checkAll () {
      console.log()
      return this.multipleSelection.length == this.tableData.length
    }
  },
  mounted () {
    this.$refs.page.addEventListener('click', this.reset)
  },
  methods: {
    reset () {
      console.log(this.tableIndex)
      if (this.tableIndex > -1 && this.isAdd) {
        this.tableIndex = -1
        this.isAdd = false
        this.tableData.shift()
      } else if(this.tableIndex > -1) {
        this.tableData[this.tableIndex].isEdit = false
      }
    },
    handleEditEnter() {
      this.reset()
    },
    handleClickEdit(i, e) {
      console.log(e)
      console.log(i)
      this.tableIndex = i
      this.tableData[i].isEdit = true
      console.log(this.tableData[i])
    },
    handleEnter (row) {
      alert('添加成功')
      this.reset()
      this.tableData.unshift({
        ...this.tableData[1],
        name: this.value,
        id: this.tableData.length + 1,
      })
    },
    handleClickAdd (e) {
      e.stopPropagation();
      this.tableIndex = 0
      this.isAdd = true
      this.tableData.unshift({
        isAdd: true
      })
    },
    stopPropagation (e) {
      e.stopPropagation()
    },
    rowClick (e) {
      this.isChild = !this.isChild
    },
    handleCheckAllChange (val) {
      this.multipleSelection = val ? this.tableData : [];
      if (this.multipleSelection.length) {
        this.multipleSelection.forEach(e => {
          this.tableData.forEach((_e, i) => {
            if (_e.id == e.id) { this.tableData[i].isChecked = !this.tableData[i].isChecked }
          })
        })
      } else {
        this.tableData.map(e => {
          e.isChecked = !e.isChecked
          return e
        })
      }

    },
    clickTable () {
      console.log(11)
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {

        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    changeIsList () {
      this.isList = !this.isList

    },
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    changeCheckbox (i, n) {
      this.tableData[i].isChecked = !this.tableData[i].isChecked
    },
    clickCkeckbox (i) {

    }
  }
}
</script>

<style lang="scss" scoped>
.document {
  background-color: #fff;
  width: 1200px;
  height: calc(100vh - 88px);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 0 20px;
  overflow: hidden;
  .show-table-action {
    opacity: 0;
    transition: opacity 0.3s;
  }
  .table-action-icon {
    margin-left: 5px;
    font-size: 18px;
    cursor: pointer;
  }
  &-list {
    margin-top: 20px;
    opacity: 0;
    overflow: hidden;
    &.show {
      transition: opacity 0.5s;
      opacity: 1;
    }
  }
  &-item {
    position: relative;

    width: 168px;
    height: 168px;
    border-radius: 3px;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid #d3d1d1;
    &-text {
      @include flex-center;
      margin-top: 8px;
      height: 30px;
    }
    &-wrap {
      float: left;
      margin: 0 8px;
      margin-bottom: 12px;
    }
    &.checked {
      border: 3px solid #409eff;
      .document-item-checkbox {
        opacity: 1 !important;
      }
    }
    cursor: pointer;
    &-checkbox {
      position: absolute;
      left: 0;
      top: 0;
      width: 24px;
      height: 24px;
      opacity: 0;
      transition: opacity 0.3s;
      i {
        position: absolute;
        left: -3.5px;
        top: -10px;
        font-size: 24px;
        color: #d3d1d1;
      }
    }
    &-input {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 999;
      opacity: 0;
      cursor: pointer;
      &:checked + i {
        color: #409eff !important;
      }
    }
    &-action {
      @include flex-center;
      position: absolute;
      left: 50%;
      bottom: 10px;
      transform: translateX(-50%);
    }
    &-btn {
      @include flex-center;
      margin: 0 5px;
      width: 24px;
      height: 24px;
      border: 1px solid #e5e5e5;
      border-radius: 50%;
      opacity: 0;
      transition: all 0.3s;
    }
    &:hover {
      .document-item-btn,
      .document-item-checkbox {
        opacity: 1;
      }
    }
  }
  &-table {
    &.hide {
      overflow: hidden;
      height: 49px;
    }
  }
  .table {
    &-checkbox {
      @include flex-center;
      justify-content: flex-start;
      height: 24px;
      input {
        width: 24px;
        height: 24px;
      }
    }
    &-action {
      display: flex;
      align-items: center;
      height: 24px;
      &-btn {
        margin-left: 8px;
        color: gray;
      }
    }
    &-icon {
      font-size: 18px;
      margin-left: 10px;
      cursor: pointer;
      &.active {
        color: #409eff;
      }
      &-wrap {
        @include flex-center;
        justify-content: center;
        margin-left: 45px;
        height: 24px;
      }
    }
  }
  .table-name {
    display: flex;
    align-items: center;
    width: 300px;
    i {
      margin-right: 10px;
      font-size: 30px;
      color: #409eff;
    }
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    border-bottom: 1px solid #e5e5e5;
  }
  &-title {
    font-size: 18px;
    font-weight: 600;
    span {
      cursor: pointer;
    }
  }
}
</style>
