<template>
  <div>
    <div class="loading" :style="isLoading">
    <div class="lds-ripple">
        <div></div>
        <div></div>
    </div>
  </div>
  <div class="col-5 mx-auto mt-5 mb-5 card shadow">
    
  

    <div class="card-body ">
      <div class="card-title">
        <h3>Ürün Ekle</h3>
      </div>

      <hr />
      <form class="form-group">
        <label for="name">Ürün Adı</label>
        <input type="text" class="form-control"   v-model="products.productName" />
        <label for="quantity">Adet</label>
        <input type="number" class="form-control" v-model="products.count" />
        <label for="price">Fiyat</label>
        <input type="number" class="form-control" v-model="products.price" />
        <label for="text">Açıklama</label>
        <textarea
          name="aciklama"
          id=""
          cols="15"
          rows="7"
          class="form-control"
          v-model="products.comment"
        ></textarea>
        <hr />
      </form>
      <button class="btn btn-primary col-3" @click="savedProduct" :disabled="saveEnable" >Ekle!</button>
    </div>
  </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      products: {
        productName: "",
        count: null,
        price: null,
        comment: "",
      },   
      saved: false
    };
  },
  methods: {
    savedProduct() {
      this.saved = true;
      this.$store.dispatch("saveProduct",this.products);
    }
  },
  computed:{
      saveEnable(){
        if(this.products.productName.length > 0 && this.products.count > 0 && this.products.price > 0 && this.products.comment.length > 0 ){
            return false;
        }else{
          return true;
          }
      },
      isLoading(){
          if(this.saved){
            return{
              display:'block'
            } 
          } else{
             return{
               display:'none'
             }
          }
      }
  },
  beforeRouteLeave(to, from, next) {
   if((this.products.productName.length > 0 || this.products.count > 0 || this.products.price > 0 || this.products.comment.length > 0 ) && !this.saved){
         if (confirm("Sayfayı terketmek üzeresiniz!")) {
        next();
      } else {
        next(false);
      }
    }else {
      next();
    }
  }
};
</script>

<style scoped></style>
