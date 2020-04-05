<template>
  <div>
    <label>Sample3&nbsp;</label>
    <input type="text" v-model="inputData1" />
    <input type="text" v-model="inputData2" class="ml-1" />
  </div>
</template>

<script>
export default {
  props: {
    foo: String,
    bar: String
  },
  computed: {
    inputData1: {
      get() {
        return this.foo;
      },
      set(value) {
        this.$emit("update:foo", value);
      }
    },
    inputData2: {
      get() {
        return this.bar;
      },
      set(value) {
        this.$emit("update:bar", value);
      }
    }
  }
};
</script>

<style scoped>
.ml-1 {
  margin-left: 0.1rem;
}
</style>
