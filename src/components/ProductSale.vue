<template>
  <div>
    <div class="loading" :style="isLoading">
    <div class="lds-ripple">
        <div></div>
        <div></div>
    </div>
    </div>
  <div class="col-5 card mx-auto shadow mt-5 mb-5">
    <div class="card-body">
      <div class="card-title">
        <h3>Ürün Çıkış</h3>
      </div>
      <hr />
      <form action="" class="form-group">
        <label for="productSelect"> Ürün Seçiniz</label>
        <select class="form-control" v-model="selectedProduct" @change="productSelected">
          <option selected disabled>Lütfen Bir Ürün Seçiniz</option>
          <option 
          v-for="product in getProducts"
           :value="product.key" 
          :disabled="product.count == 0">
            {{ product.productName }}
          </option>
        </select>

        <div class="card border border-danger mt-4 mb-4 " v-if="product!==null">
          <div class="card-title text-center mt-4">
            <span class="badge badge-info" 
              >Stok : {{ product.count }}
            </span>
            <span class="badge badge-primary" 
              >Fiyat : {{ product.price | currency}}</span
            >
          </div>
          <div class="card-body">
            <div class="col-12 border border-warning text-center p-3">
              {{ product.comment  }}
            </div>
          </div>
        </div>
        <label for="quantity">Adet</label>
        <input type="text" class="form-control" v-model="product_count" />
        <hr />
      </form>
      <button class="btn btn-info col-4" @click="save"> 
        Satış Yap!
      </button>
     </div>
    </div>
   </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default({
  data(){
    return{
      selectedProduct : null,
      product : null,
      product_count : null,
      saved : false
    }
  },
  computed:{
    ...mapGetters(["getProducts"]),
      isLoading(){
        if(this.saved){
          return{
            display:'block'
          }
        }else{
          return{
            display:'none'
          }
        }
      }
  },
  methods:{
    productSelected(){
      this.product =  this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    save(){
      this.saved = true;
      let product = {
        key : this.selectedProduct,
        count :this.product_count,
      }
      this.$store.dispatch("sellProduct", product);
    }
  },
  beforeRouteLeave(to,from,next){
      if( (this.product_count > 0 || this.selectedProduct !== null) && !this.saved ){
          if (confirm("Sayfayı terketmek üzeresiniz!")){
            next();
          }else{
        next(false);
        }
       } else{
        next();
      }
  }
})
</script>

<style>
.border-danger {
  border: dashed darkred 1px !important;
}
</style>
