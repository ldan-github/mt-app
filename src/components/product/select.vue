<template>
  <div class="m-product-select">
    <dl class="tab">
      <dt>
       <span class="select-title"> {{ name }}</span>
        <i class="el-icon-caret-bottom"></i>
      </dt>
      <dd>
          <dt class="select-title"> {{ name }}</dt>
          <span v-for="(item ) in list" :key="item.id">
            {{item.name}}
          </span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    list: {
      type: Array
    }
  }

}
</script>

<style></style>
