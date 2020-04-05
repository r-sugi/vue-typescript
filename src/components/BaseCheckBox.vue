<template>
  <label
    >単一チェックボックス
    <input @input="onChange" :checked="checked" type="checkbox" />
  </label>
</template>
<script>
export default {
  model: {
    prop: "checked",
    event: "input"
  },
  props: {
    value: null,
    checked: Boolean
  },
  methods: {
    onChange($e) {
      this.$emit("input", $e.target.checked);
    }
  }
};
</script>
