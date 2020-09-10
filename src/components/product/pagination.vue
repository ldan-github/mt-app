<template>
  <div class="m-pagination">
    <el-pagination
      :page-size="5"
      background
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ['total']
}
</script>

<style></style>
