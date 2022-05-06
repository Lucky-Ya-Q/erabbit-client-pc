<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in menuList" :key="item.id">
        <router-link :to="`/category/${item.id}`">{{ item.name }}</router-link>
        <template v-if="item.children">
          <router-link
            v-for="sub in item.children"
            :key="sub.id"
            :to="`/category/sub/${sub.id}`">
            {{ sub.name }}
          </router-link>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, reactive } from 'vue'

const brand = reactive({
  id: 'brand',
  name: '品牌',
  children: [{
    id: 'brand-chilren',
    name: '品牌推荐'
  }]
})
const store = useStore()
const menuList = computed(() => {
  const list = store.state.category.list.map(item => ({
    id: item.id,
    name: item.name,
    // 防止初始化没有children的时候调用slice函数报错
    children: item.children && item.children.slice(0, 2)
  }))
  list.push(brand)
  return list
})
console.log(menuList.value)
</script>

<style scoped lang="less">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;

  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;

      &:hover {
        background: @xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
