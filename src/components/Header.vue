<template>
    <div class="min-h-screen flex flex-col justify-center items-center">
    <img class="w-24 h-24 rounded-full mx-auto" src="@/assets/avatar.webp"/>
<br/>
    <HelloWorld msg="LineXic"/>  
    <p class="text-slate-500 hover:text-blue-600 text-center mb-4">一珊一珊亮晶晶</p>
      <el-breadcrumb separator="/" class="flex justify-center">
      <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="https://linexic.top" target="_blank" rel="noopener noreferrer">博客</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="https://juejin.cn/user/917459279025964" target="_blank" rel="noopener noreferrer">掘金</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="https://github.com/LineXic" target="_blank" rel="noopener noreferrer">Github</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>