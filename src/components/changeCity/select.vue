<template>
  <div
    :class="['choose-wrap']"
    @click.stop="showWrapper"
    v-document-click="documentClick"
  >
    <div :class="['choose', disabled ? 'disabled' : '']">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div class="mt-content" :class="{ active: showWrapperActive }">
        <h2>{{ title }}</h2>
        <div :class="['wrapper', { city: title === '城市' }]">
          <div class="col" v-for="(items, index) in listGroup" :key="index">
            <span
              class="mt-item"
              :class="{ active: city.name == value }"
              v-for="(city, index) in items"
              :key="index"
              @click="changeValue(city)"
            >
              {{ city.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    list: {
      type: Array
    },
    title: {
      type: String
    },
    value: {
      type: String
    },
    showWrapperActive: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  computed: {
    // startList () {
    //   return this.list.slice(0, 12)
    // },
    // midList () {
    //   return this.list.slice(12, 24)
    // },
    // endList () {
    //   return this.list.slice(24)
    // },
    listGroup () {
      // let start = this.list.slice(0, 12),
      //   mid = this.list.slice(12, 24),
      //   end = this.list.slice(24);
      //   console.log(start,mid);
      // return {
      //   start,
      //   mid,
      //   end,
      // };
      let colList = []
      let col = Math.ceil(this.list.length / 12)

      for (let i = 0; i < col; i++) {
        colList.push(this.list.slice(i * 12, i * 12 + 12))
      }
      return colList
    }
  },
  methods: {
    showWrapper () {
      if (!this.disabled) {
        this.$emit('change_active', true)
      }
    },
    documentClick () {
      this.$emit('change_active', false)
    },
    changeValue (item) {
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="scss"></style>
