<template>

<div>
  <app-header></app-header>

<transition name="slide" mode="out-in">
<router-view></router-view>
</transition>
 
 <app-footer></app-footer>
 </div>

</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  data () {
    return {
          productList:{
            path:"/productlist"
            },
          productSale:{
            path:"/productsale"
          },
          addProduct:"/addproduct"
    }
  },
  components:{
    appHeader : Header,
    appFooter: Footer
  },
  created(){
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("initApp");
  }
}
</script>

<style>

  .slide-enter{
      opacity: 0;
  }
  .slide-enter-active{
      animation: slide-in .5s ease-out forwards;
      transition: opacity .5s;
  }
  .slide-leave{

  }
  .slide-leave-active{
      animation: slide-out .5s ease-out forwards;
      transition : opacity .5s;
      opacity: 0;
  }

@keyframes slide-in{
  from{
    tranform : translateY(20deg);
  }
  to{
      transform : translateY(0);
  }
}
@keyframes slide-out{
    from{
      transform : translateY(0);
    }
    to{
        transform: translateY(20deg);
    }
}
</style>
