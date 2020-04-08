<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-header">
        {{stock.name}}
        <small>(Price : {{stock.price | currency}} | Quantity : {{stock.quantity}})</small>
      </div>
      <div class="card-body">
        <div class="float-md-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model= "quantity" :class = "{danger : insufficientFunds}" />
        </div>
        <div class="float-md-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="insufficientFunds || quantity < 0 "
          >{{insufficientFunds ? 'Not Enough' : 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data: function() {
    return {
      quantity: 0
    };
  },
  computed: {
      insufficientFunds(){
          return this.quantity  > this.stock.quantity;
      }
  },
  methods: {
    sellStock() {
      let order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: Number(this.quantity)
      };
      console.log(order);
      this.$store.dispatch("sellStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 10px;
}
</style>