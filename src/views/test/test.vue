<template>
  <div class="test">
    <el-card class="test-list p10"
             v-for="item in 5"
             :key="item">
      <div class="test-title">
        {{titleArr[item - 1]}}
      </div>
      <el-card class="test-item p10"
               v-for="i in 10"
               :key="i">
        <div class="test-text">
          <Icon class="test-icon"
                size="16"
                type="ios-flag-outline" />
          <p>Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能</p>
        </div>
        <div class="test-info">
          <div class="test-info-left">
            <Icon size="16"
                  class="test-icon"
                  type="ios-contact" />
            <span>欧阳志愿</span>
          </div>
          <div class="test-info-right">
            <Button type="error"
                    ghost>紧急且重要</Button>
          </div>
        </div>
        <div class="test-time">
          <Icon size="16"
                class="test-icon"
                type="ios-clock-outline" />
          <span>2019-03-05 17:00 - 2020-09-04 18:09</span>
        </div>
        <div class="test-tag">
          <Icon size="16"
                type="ios-bookmark-outline" />
          <Tag class="test-tag-content">标签一</Tag>
          <Tag class="test-tag-content">标签一</Tag>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titleArr: ['未开始/未领取', '进行中', '已完成', '已逾期', '已关闭']
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  box-sizing: border-box;
  @include flex-center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 0 5px;
  &-item {
    margin-bottom: 10px;
    & > div {
      display: flex;
    }
  }
  &-info {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;
  }
  &-time {
    margin-bottom: 10px;
    font-size: 12px;
  }
  &-tag {
    align-items: center;
    &-content {
      margin-left: 5px;
    }
  }
  &-text {
    display: flex;
    margin-bottom: 10px;
    .test-icon {
      margin-top: 2px;
    }
    p {
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  &-icon {
    margin-right: 6px;
  }
  &-list {
    flex: 1;
    margin: 0 5px;
  }
  &-title {
    @include flex-center;
    margin-bottom: 10px;
  }
}
</style>
