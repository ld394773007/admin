<template>
  <div class="wiki">

    <div class="wiki-left">
      <div class="wiki-left-header">
        <Input suffix="ios-search"
               placeholder="请输入关键字"
               style="width: 150px;margin-right:10px;" />
        <Button type="primary"
                @click="showAdd = true">创建词条</Button>
      </div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="所有Wiki"
                     name="1">
          <el-tree :data="treeList"
                   node-key="id">
            <div class="custom-tree-node"
                 slot-scope="{ node, data }">
              <span>{{ node.label }}</span>
              <div class="custom-tree-icon">
                <Dropdown slot="extra">
                  <Icon type="md-more"
                        class="more-icon" />
                  <DropdownMenu slot="list">
                    <DropdownItem> <span @click="showAdd = true">创建子词条</span></DropdownItem>
                    <DropdownItem>分享</DropdownItem>
                    <DropdownItem>删除</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </el-tree>
        </el-tab-pane>
        <el-tab-pane label="我的收藏"
                     name="2">

        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="wiki-right">
      <div class="wiki-right-header">
        <h4>标题</h4>
        <div class="wiki-right-action">
          <el-button class="wiki-action-btn"
                     icon="el-icon-edit"
                     @click="$router.push('/home/addWiki')"
                     type="text">编辑</el-button>
          <el-button class="wiki-action-btn"
                     :icon="isStar ? 'el-icon-star-on' : 'el-icon-star-off'"
                     @click="isStar = !isStar"
                     type="text">{{isStar ? '取消收藏' : '收藏'}}</el-button>
          <Dropdown placement="bottom"
                    trigger="click">
            <el-button class="wiki-action-btn"
                       icon="ivu-icon ivu-icon-md-more"
                       type="text">更多</el-button>
            <DropdownMenu slot="list">
              <CellGroup>
                <Cell title="分享">
                  <i class="el-icon-share"
                     slot="icon"></i>
                </Cell>
                <Cell title="删除">
                  <i class="el-icon-delete"
                     slot="icon"></i>
                </Cell>
              </CellGroup>
            </DropdownMenu>
          </Dropdown>

        </div>
      </div>
      <div class="wiki-right-text">
        <span>xuniyionghu 创建于 2019-04-03 14:45:15</span>
        <i></i>
        <span>编辑(1)</span>
        <i></i>
        <span>浏览(23)</span>
        <i></i>
        <span>评论(2)</span>
      </div>
      <div class="wiki-html">
        <p>dsadsadasd</p>
      </div>
      <Divider />
      <div class="wiki-form">
        <div class="wiki-form-item">
          <label>标签</label>
          <div class="wiki-form-content wiki-form-tag">
            <Tag>标签一</Tag>
            <Tag>标签二</Tag>
          </div>
        </div>
        <div class="wiki-form-item" v-if="isTeam">
          <div class="wiki-form-content">
            <label>评论</label>
            <at-ta :members="members"
                   @insert="insert"
                   name-key="name">
              <textarea v-model="comment"
                        placeholder="@通知他人，按Ctrl+Enter快速添加讨论"
                        class="wiki-form-editor"></textarea>
            </at-ta>
            <div class="wiki-form-editor-btn">
              <span>您最多还可以输入 {{num}}个字符</span>
              <Button type="info">添加</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="comment-list" v-if="isTeam">
        <div class="comment-item">
          <div class="comment-item-header">
            <p>李四</p><span>2019-04-18 10:10:27</span>
          </div>
          <div class="comment-item-text">
            dsdsadas
          </div>
        </div>
        <div class="comment-item">
          <div class="comment-item-header">
            <p>李四</p><span>2019-04-18 10:10:27</span>
          </div>
          <div class="comment-item-text">
            dsdsadas
          </div>
        </div>
        <div class="comment-item">
          <div class="comment-item-header">
            <p>李四</p><span>2019-04-18 10:10:27</span>
          </div>
          <div class="comment-item-text">
            dsdsadas
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="showAdd" footer-hide  width="1200px" :styles="{top: '10px'}" title="创建词条">
        <add-wiki></add-wiki>
    </Modal>
  </div>
</template>

<script>
import AtTa from '@/components/At/AtTextarea'
import editor from '@/components/editor'
import addWiki from './addWiki'
export default {
  components: {
    editor,
    AtTa,
    addWiki
  },
  data () {
    return {
      showAdd: false,
      value: '',
      value1: [],
      value2: [],
      isStar: false,
      comment: '',
      activeName: "1",
      treeList: [
        {
          id: 1,
          label: '标题',
          children: [
            {
              id: 2,
              label: '标题2'
            }
          ]
        },
        {
          id: 3,
          label: '标题3'
        }
      ],
      peopleList: [
        {
          id: 1,
          name: '张三'
        },
        {
          id: 2,
          name: '李四'
        },
        {
          id: 3,
          name: '王五'
        }
      ],
      tagList: [
        {
          id: 1,
          name: '标签1'
        },
        {
          id: 2,
          name: '标签2'
        },
        {
          id: 3,
          name: '标签3'
        }
      ],
      members: [{
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'myrtie.green'
      }, {
        avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
        name: '椿木'
      }]
    }
  },
  computed: {
    isTeam() {
      return this.$store.state.isTeam
    },
    num () {
      console.log(this.comment)
      return 500 - this.comment.length
    },
    selectPerson () {
      let arr = []
      this.value2.forEach(e => {
        this.tagList.forEach(_e => {
          if (e == _e.id) {
            arr.push(_e.name)
          }
        })
      })
      return arr.join(',')
    }
  },
  methods: {
    clickDown (name) {
      this.$router.push('/home' + name)
    },
    insert (e) {
      console.log(e)
    },
    focus () {
      console.log(11)
    },
    openChangeTag (t) {
      console.log(t)
      this.TagOpen = t
    },
    clickIcon (e) {
      console.log(e)

    },
    maxTagPlaceholder (num) {
      return 'more ' + num;
    }
  },
  mounted () {
    console.log()
  }
}
</script>

<style lang="scss" scoped>
.wiki {
  display: flex;
  margin: 20px auto;
  width: 1200px;
  border-radius: 5px;
  .custom-tree {
    &-node {
      @include flex-center;
      justify-content: space-between;
      width: 90%;
    }
  }
  .comment {
    &-item {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      &-header {
        @include flex-center;
        justify-content: flex-start;
        font-size: 14px;
        color: #959eb2;
        line-height: 24px;
        p {
          color: #293040;
          font-size: 12px;
          margin-right: 10px;
          font-weight: 700;
        }
      }
      &-text {
        font-size: 13px;
        line-height: 18px;
        padding: 6px 0;
        background-color: #f5f5f5;
        border-radius: 1px;
        text-indent: 36px;
      }
    }
  }
  &-form {

    &-content {
      display: flex;
      flex-direction: column;
    }
    &-tag {
      flex-direction:initial;
    }
    &-item {
      @include flex-center;
      justify-content: flex-start;
      margin-bottom: 20px;
      label {
        width: 80px;
        font-size: 12px;
        font-weight: bold;
      }
    }
    &-editor {
      margin-top: 10px;
      width: 800px;
      height: 100px;
      padding: 4px 8px;
      border-radius: 5px;
      outline: none !important;
      resize: none;
      border: 1px solid #ccc;
      font-size: 14px;
      color: #959eb2;
      letter-spacing: 0;
      &-btn {
        align-self: flex-end;
        span {
          margin-right: 10px;
          font-weight: 600;
        }
      }
    }
  }
  &-html {
    height: 100px;
  }
  &-action-btn {
    color: #333;
    .ivu-icon {
      font-size: 18px;
    }
  }
  .more-icon {
    font-size: 18px;
    font-weight: bold;
    opacity: 0;
  }
  &-left {
    margin-right: 10px;
    padding: 10px;
    width: 280px;
    border-radius: 5px;
    background-color: #fff;
  }
  &-right {
    flex: 1;
    box-sizing: border-box;
    padding: 10px 30px;
    border-radius: 5px;
    min-height: calc(100vh - 88px);
    background-color: #fff;
    &-text {
      @include flex-center;
      justify-content: flex-start;
      margin-bottom: 30px;
      font-size: 12px;
      color: #5e6678;
      span {
        display: block;
      }
      i {
        display: block;
        width: 1px;
        height: 20px;
        background: #e3e5e9;
        margin: 3px 10px 0 5px;
      }
    }
    &-header {
      @include flex-center;
      justify-content: space-between;
    }
  }
}
</style>
