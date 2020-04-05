<template>
  <div>
    <label>Sample5&nbsp;</label>
    <select v-model="inputData">
      <option v-for="idx in 5" :key="idx" :value="idx">{{ idx }}</option>
    </select>
  </div>
</template>

<script>
export default {
  model: {
    prop: "propData",
    event: "change"
  },
  props: {
    propData: Number
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
};
</script>

<style scoped>
.ml-1 {
  margin-left: 0.1rem;
}
</style>
