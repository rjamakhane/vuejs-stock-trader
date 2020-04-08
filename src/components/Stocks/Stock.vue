<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-header">
        {{stock.name}}
        <small>(Price : {{stock.price | currency}})</small>
      </div>
      <div class="card-body">
        <div class="float-md-left">
          <input 
          type="number" 
          class="form-control" 
          placeholder="Quantity"
          v-model= "quantity"
          :class = "{danger : insufficientFunds}"
           />
        </div>
        <div class="float-md-right">
          <button 
          class="btn btn-success" 
          @click= "buyStock"
          :disabled = "insufficientFunds || quantity <= 0 "
          >{{insufficientFunds ? 'No enough Funds' :'Buy'}}</button>
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
          quantity : 0
      }
  },
  computed: {
      funds(){
          return this.$store.getters.funds;
      },
      insufficientFunds(){
          return this.quantity * this.stock.price > this.funds;
      }
  },
  methods : {
      buyStock(){
          let order = {
              id: this.stock.id,
              price : this.stock.price,
              quantity : Number(this.quantity)
          }
          console.log(order);
          this.$store.dispatch('buyStock',order);
          this.quantity = 0;
      }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 10px;
}
.danger {
    border : 1px solid #f00;
}
</style>