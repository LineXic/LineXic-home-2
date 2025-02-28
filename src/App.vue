<script lang="ts" setup>
// 引入 vue-router 中的 RouterLink 和 RouterView 组件
import { RouterLink, RouterView } from 'vue-router'
// 引入自定义的 Header 组件
import Header from './components/Header.vue'
// 引入自定义的 HelloWorld 组件
import HelloWorld from './components/HelloWorld.vue'
// 引入 Element Plus 中的 StarFilled 图标
import { StarFilled } from '@element-plus/icons-vue'
</script>

<template>
  <!-- 页眉部分 -->
  <header>
    <div class="wrapper">    
      <!-- 使用 Header 组件 -->
      <Header /> 
    </div>
  </header>

  <!-- 路由视图，用于显示匹配的路由组件 -->
  <RouterView />
</template>