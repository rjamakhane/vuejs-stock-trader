<template>
  <div class="home">
    <h1>Welcome to Stock trading </h1>
    <h4>You can trade here with listed stocks</h4>
    <h4>Your Funds : {{funds | currency}} </h4>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  },
  computed :{
      funds(){
        console.log(this.$store);
        return this.$store.getters.funds;
      }
  }
}
</script>
