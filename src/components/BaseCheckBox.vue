<template>
  <input :checked="checked" type="checkbox" @change="onChange($event)" />
</template>
<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    // これによって、 `value` プロパティを別の目的で利用することを許可します
    value: null,
    // `value` の代わりとなるプロパティとして `checked` を使います
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange($e) {
      this.$emit("change", $e.target.checked);
    }
  }
};
</script>
