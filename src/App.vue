<template>
  <div id="app" class="container">
    <app-header ></app-header>
    <div class="row content">
      <div class="col-sm-12">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks');
  },
};
</script>
<style lang="scss">
body{
  padding: 30px;
}
.content{
  margin-top:10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
