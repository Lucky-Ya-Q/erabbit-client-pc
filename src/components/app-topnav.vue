<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <li>
          <a href="javascript:void(0);"><i class="iconfont icon-user"></i>周杰伦</a>
        </li>
        <li><a href="javascript:void(0);">退出登录</a></li>
        <li><a href="javascript:void(0);">请先登录</a></li>
        <li><a href="javascript:void(0);">免费注册</a></li>
        <li><a href="javascript:void(0);">我的订单</a></li>
        <li><a href="javascript:void(0);">会员中心</a></li>
        <li><a href="javascript:void(0);">帮助中心</a></li>
        <li><a href="javascript:void(0);">关于我们</a></li>
        <li>
          <a href="javascript:void(0);"><i class="iconfont icon-phone"></i>手机版</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      padding: 0 15px;
      a {
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        border-left: 2px solid #666;
      }
    }
  }
}
</style>
