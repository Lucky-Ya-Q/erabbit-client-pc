<template>
  <div class='xtx-carousel'>
    <ul class="carousel-body">
      <li class="carousel-item" v-for="(item,i) in sliders" :key="i" :class="{fade:index===i}">
        <router-link to="/">
          <img :src="item.imgUrl" alt="">
        </router-link>
      </li>
    </ul>
    <a href="javascript:void(0);" class="carousel-btn prev"><i class="iconfont icon-angle-left"></i></a>
    <a href="javascript:void(0);" class="carousel-btn next"><i class="iconfont icon-angle-right"></i></a>
    <div class="carousel-indicator">
      <span v-for="(item,i) in sliders" :key="i" :class="{active:index===i}"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
// eslint-disable-next-line no-undef
const props = defineProps({
  sliders: {
    type: Array,
    default: () => []
  },
  duration: {
    type: Number,
    default: 3000
  },
  autoPlay: {
    type: Boolean,
    default: true
  }
})
const index = ref(0)

// 自动播放
let timer = null

function autoPlayFn () {
  clearInterval(timer)
  timer = setInterval(() => {
    index.value++
    if (index.value >= props.sliders.length) {
      index.value = 0
    }
  }, props.duration)
}

watch(() => props.sliders, (newVal) => {
  // 有数据&开启自动播放，才调用自动播放函数
  if (newVal.length && props.autoPlay) {
    index.value = 0
    autoPlayFn()
  }
}, { immediate: true })
</script>

<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;

  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }

    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;

      &.fade {
        opacity: 1;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;

      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;

        ~ span {
          margin-left: 12px;
        }

        &.active {
          background: #fff;
        }
      }
    }

    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, .2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;

      &.prev {
        left: 20px;
      }

      &.next {
        right: 20px;
      }
    }
  }

  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
