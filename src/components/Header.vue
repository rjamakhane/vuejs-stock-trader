<template>
  <nav class="navbar navbar-dark bg-primary  navbar-expand-lg ">
    <router-link :to="{name : 'Home'}" class="navbar-brand">Stock Trader</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link :to="{name:'Portfolio'}" activeClass="active" tag="li">
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link :to="{name:'Stocks'}" activeClass="active" tag="li">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" @click= "endDay">End Day</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Save & Load</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#"  @click="loadData">Load data</a>
              <a class="dropdown-item" href="#" @click="saveData">Save data</a>
            </div>
          </li>
        </ul>
        <strong class="navbar-text">Balance : {{funds | currency}}</strong>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    computed :{
        funds(){
            return this.$store.getters.funds;
        }
    },
    methods :{
        ...mapActions({
           randomizeStocks: 'randomizeStocks',
           fetchData : 'loadData'
        }),
        endDay(){
            this.randomizeStocks();
        },
        saveData(){
            let data = {
                funds : this.$store.getters.funds,
                stockPortfolio : this.$store.getters.stockPortfolio,
                stocks : this.$store.getters.stocks
            }

            this.$http.put('data.json',data);
        },
        loadData(){
            this.fetchData();
        }
        
    }
};
</script>

<style>
</style>