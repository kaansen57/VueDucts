<template>
  <nav
    class="navbar navbar-ligth fixed-bottom"
    style="background-color:#e3f2fd"
  >
    <span class="navbar-text  mr-auto">
      <strong>Kaan ŞEN</strong>
    </span>

    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Alış Tutarı : </strong>
      <span class="badge badge-danger my-2 my-lg-0"> {{ getTradeResult.purchase | currency }}</span>
    </span>
    <span class="navbar-text  navbar-nav my-2 my-lg-0 mr-3">
      <strong>Satış Tutarı:</strong>
      <span class="badge badge-success"> {{ getTradeResult.sale | currency }} </span>
    </span>
    <span class="navbar-text navbar-nav">
      <strong>Bakiye :</strong>
      <span class="badge badge-primary">
        {{ getTradeResult.balance | currency }}
      </span>
    </span>
  </nav>
</template>

<script>
import  {mapGetters } from 'vuex';
export default {
  data() {
    return {
      
    };
  },
  computed:mapGetters(["getTradeResult"])
};
</script>
