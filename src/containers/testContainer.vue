<template>
  <div>
    <testTable
      :headers="headers"
      :items="items"
      :items-per-page="itemsPerPage"
      :sort-by="sortBy"
      :sort-desc="sortDesc"
      @changeItemsPerPage="changeItemsPerPage"
    >
    </testTable>
  </div>
</template>
<script>
import testTable from "@/components/testTable";
export default {
  components: {
    testTable
  },
  data() {
    return {
      itemsPerPage: 2,
      //TODO: change header based on page url
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          value: "name"
        },
        { text: "Fat (g)", value: "fat" }
      ],
      // items from api
      items: [
        {
          name: "Frozen Yogurt",
          fat: 6.0
        },
        {
          name: "Ice cream sandwich",
          fat: 9.0
        },
        {
          name: "Eclair",
          fat: 16.0
        },
        {
          name: "Cupcake",
          fat: 3.7
        }
      ],
      // control by container
      sortBy: ["name"],
      // control by container
      sortDesc: [false]
    };
  },
  methods: {
    changeItemsPerPage(num) {
      this.itemsPerPage = num;
    }
  }
};
</script>
