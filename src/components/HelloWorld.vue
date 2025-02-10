<script setup>
// 使用 defineProps 定义组件的 props
defineProps({
  msg: {
    type: String, // props 的类型为字符串
    required: true, // 该 props 是必传的
  },
})
</script>

<template>
  <div class="greetings">
    <!-- 标题部分，使用内联样式设置字体大小为 3rem -->
    <h1 style="font-size: 3rem;" class="txt">{{msg}}</h1><br/>
  </div>
</template>

<style scoped>
/* 为 h1 标签设置样式 */
h1 {
  font-weight: 500; /* 字体粗细 */
  font-size: 2.6rem; /* 字体大小 */
  position: relative; /* 相对定位 */
  top: -10px; /* 向上偏移 10px */
}

/* 为 h3 标签设置样式 */
h3 {
  font-size: 1.2rem; /* 字体大小 */
}

/* 为 .greetings 类中的 h1 和 h3 标签设置居中样式 */
.greetings h1,
.greetings h3 {
  text-align: center; /* 文本居中 */
}

/* 媒体查询，当屏幕宽度大于等于 1024px 时生效 */
@media (min-width: 1024px) {
  /* 在大屏幕上，将 .greetings 类中的 h1 和 h3 标签的文本对齐方式改为左对齐 */
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>