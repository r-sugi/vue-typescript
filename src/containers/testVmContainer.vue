<template>
  <div>
    <BaseInput
      v-model="inputTest1"
      label="inputLabel"
      required
      placeholder="please input"
    />
    <testAttrs
      class="class-name-sample"
      color="red"
      style="font-size: 15px;"
      label="testAttrsLabel0"
      type="number"
    />
    <testAttrs2
      class="class-name-sample"
      color="red"
      style="font-size: 15px;"
      label="testAttrsLabel1"
      type="number"
    />
    <SelectBox label="selectBox1" :value="selected" :options="options" />
    <SelectBox label="selectBox2" :value="selected2" :options="options" />
  </div>
</template>
<script>
import SelectBox from "@/components/selectBox";
import TestAttrs from "@/components/testAttrs";
import TestAttrs2 from "@/components/testAttrs2";
import BaseInput from "@/components/BaseInput";
export default {
  data() {
    return {
      selected: { value: 1 },
      selected2: { value: 0 },
      options: [
        { text: "orange", value: 1 },
        { text: "banana", value: 2 },
        { text: "apple", value: 3 }
      ],
      inputTest1: "ww"
    };
  },
  components: {
    SelectBox,
    TestAttrs,
    TestAttrs2,
    BaseInput
  }
};
</script>
