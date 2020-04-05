<template>
  <div>
    <label>複数チェックボックス</label>
    <input
      type="checkbox"
      name="sample4"
      v-for="idx in 5"
      :key="idx"
      :value="idx"
      v-model="inputData"
    />
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  model: {
    prop: "propData",
    event: "change"
  },
  props: {
    propData: Array
  },
  computed: {
    inputData: {
      get() {
        return this.propData;
      },
      set(value) {
        this.$emit("change", value);
      }
    }
  }
});
</script>

<style scoped>
.ml-1 {
  margin-left: 0.1rem;
}
</style>
