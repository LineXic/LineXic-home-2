<template>
  <!-- 页面主容器：最小高度全屏，垂直居中布局 -->
  <div class="min-h-screen flex flex-col justify-center items-center">
    <!-- 用户头像 -->
    <img class="w-24 h-24 rounded-full mx-auto" src="@/assets/avatar.webp"/>
    
    <!-- 主标题 -->
    <h1 style="font-size: 3rem;" class="txt">LineXic</h1>
    
    <!-- 副标题（带hover效果） -->
    <p class="text-slate-500 hover:text-blue-600 text-center mb-4">一珊一珊亮晶晶</p>

    <!-- Element Plus面包屑导航 -->
    <el-breadcrumb separator="/" class="flex justify-center">
      <!-- 主页路由 -->
      <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
      
      <!-- 外部博客链接（新标签页打开） -->
      <el-breadcrumb-item>
        <a href="https://linexic.top" target="_blank" rel="noopener noreferrer">博客</a>
      </el-breadcrumb-item>

      <!-- 掘金开发者社区链接 -->
      <el-breadcrumb-item>
        <a href="https://juejin.cn/user/917459279025964" target="_blank" rel="noopener noreferrer">掘金</a>
      </el-breadcrumb-item>

      <!-- 归档 -->
      <el-breadcrumb-item>
         <a href="/archives" target="_blank" rel="noopener noreferrer">归档</a>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 装饰性图标（来自Material Design）
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
    <path fill="currentColor" d="m9 8l-.117.007A1 1 0 0 0 8 9v1.999L5.414 11A2 2 0 0 0 4 14.414L10.586 21a2 2 0 0 0 2.828 0L20 14.414a2 2 0 0 0 .434-2.18l-.068-.145A2 2 0 0 0 18.586 11L16 10.999V9a1 1 0 0 0-1-1zm6-6a1 1 0 0 1 .117 1.993L15 4H9a1 1 0 0 1-.117-1.993L9 2zm0 3a1 1 0 0 1 .117 1.993L15 7H9a1 1 0 0 1-.117-1.993L9 5z"/>
  </svg>
-->
</div>
</template>

<style scoped>
 /* 图片样式 */   
 img {     
  border: 2px solid #3498db;  
   }
</style>
