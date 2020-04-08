<template>
  <div class="row">
    <app-stock v-for= "(s,i) in stocks" :key="i" :stock="s"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  components: {
    appStock: Stock
  },
  computed : {
      stocks(){
          return this.$store.getters.stocks;
      }
  }
};
</script>

<style>
</style>