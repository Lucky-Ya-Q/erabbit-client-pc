<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <home-category></home-category>
        <!-- 轮播图 -->
        <home-banner></home-banner>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeCategory from '@/views/home/components/home-category'
import HomeBanner from '@/views/home/components/home-banner'
</script>

<style scoped lang="less">

</style>
