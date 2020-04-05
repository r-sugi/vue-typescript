<template>
  <div>
    <p>
      <BaseCheckBox v-model="checkBoxTest1" />
    </p>
    <p>
      <BaseCheckBoxes v-model="baseCheckBoxes" />
    </p>
    <BaseInput
      v-model="inputTest1"
      label="inputLabel"
      required
      placeholder="please input"
    />
    <BaseInputsSync :foo.sync="sample31" :bar.sync="sample32" />
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
    <SelectBox2 v-model="selected3" />
  </div>
</template>
<script>
import SelectBox from "@/components/selectBox";
import SelectBox2 from "@/components/SelectBox2";
import TestAttrs from "@/components/testAttrs";
import TestAttrs2 from "@/components/testAttrs2";
import BaseInput from "@/components/BaseInput";
import BaseCheckBox from "@/components/BaseCheckBox";
import BaseCheckBoxes from "@/components/BaseCheckBoxes";
import BaseInputsSync from "@/components/BaseInputsSync";
export default {
  data() {
    return {
      baseCheckBoxes: [],
      checkBoxTest1: true,
      selected: { value: 1 },
      selected2: { value: 0 },
      selected3: 4,
      options: [
        { text: "orange", value: 1 },
        { text: "banana", value: 2 },
        { text: "apple", value: 3 }
      ],
      inputTest1: "ww",
      sample31: "hoge",
      sample32: "foo"
    };
  },
  components: {
    SelectBox,
    SelectBox2,
    TestAttrs,
    TestAttrs2,
    BaseInput,
    BaseCheckBox,
    BaseCheckBoxes,
    BaseInputsSync
  }
};
</script>
