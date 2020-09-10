<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="m-crumbs">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{ $store.state.position.name }}</el-breadcrumb-item>
    <el-breadcrumb-item>{{ $route.params.name }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {

}
</script>
