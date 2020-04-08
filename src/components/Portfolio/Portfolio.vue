<template>
  <div class="row">
    <app-stock v-for= "(s,i) in stocks" :key="i" :stock="s"></app-stock>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Stock from "./Stock";
export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    appStock: Stock
  }
};
</script>

<style>
</style>