<template>
  <div>
    attribute not attach to root element except for class, style {{ $attrs }}
  </div>
</template>
<script>
export default {
  inheritAttrs: false
};
</script>
