<template>
  <div class="xtx-skeleton" :class="animated" :style="{width,height,backgroundColor}">
    <!-- 闪光效果 xtx-skeleton 伪元素 --->
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  backgroundColor: {
    type: String,
    default: '#efefef'
  },
  width: {
    type: String,
    default: '100px'
  },
  height: {
    type: String,
    default: '100px'
  },
  animated: {
    type: String,
    default: 'flash'
  }
})
</script>

<style scoped lang="less">
.xtx-skeleton {
  display: inline-block;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  vertical-align: middle;
}

// 闪光
.flash {
  &::after {
    content: "";
    position: absolute;
    animation: flash 1.5s ease 0s infinite;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%);
    transform: skewX(-45deg);
  }
}

@keyframes flash {
  0% {
    left: -100%;
  }
  100% {
    left: 150%;
  }
}

// 淡入淡出
.fade {
  animation: fade 1s linear infinite alternate;
}

@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
