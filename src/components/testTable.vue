<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      :sort-by="sortBy"
      :sort-desc="sortDesc"
      :mobile-breakpoint="0"
      hide-default-footer
    >
      <template v-slot:top="{ pagination }">
        現在の表示件数: {{ pagination.itemsPerPage }}件ずつ
        {{
          pagination.pageStop === 0
            ? pagination.pageStart
            : pagination.pageStart + 1
        }}-{{ pagination.pageStop }}
        <button @click="changeItemsPerPage(1)">1件ずつにする</button>
        <button @click="changeItemsPerPage(2)">2件ずつにする</button>
      </template>
      <!-- TODO: change header based on page url -->
      <template v-slot:header.name="{ header }">
        <span>{{ header.text }}</span>
      </template>
      <template v-slot:header.fat="{ header }">
        <span>{{ header.text }}</span>
      </template>
      <!-- TODO: change body based on page url -->
      <template v-slot:item.name="{ item }">
        <span>{{ item.name }}</span>
      </template>
      <template v-slot:item.fat="{ item }">
        <span>{{ item.fat }}</span>
      </template>
      <template v-slot:footer="{ props }">
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="props.pagination.pageCount"
          ></v-pagination>
        </div>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { VDataTable, VPagination } from "vuetify/lib";
export default {
  data() {
    return {
      page: 1
    };
  },
  props: {
    items: Array,
    headers: Array,
    sortBy: Array,
    sortDesc: Array,
    itemsPerPage: Number
  },
  components: {
    VDataTable,
    VPagination
  },
  methods: {
    changeItemsPerPage(num) {
      this.$emit("changeItemsPerPage", num);
    }
  }
};
</script>
