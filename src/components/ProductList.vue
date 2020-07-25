<template>
  <div class="container">
    <div class="row">
      <div class="col-12 card shadow mt-5 mb-5">
        <div class="card-body">
          <div class="card-title">
            <h3>Ürün Listesi</h3>
          </div>
          <hr />
          <table
            class="table table-striped table-hover table-bordered"
            v-if="getProducts.length > 0"
          >
            <thead>
              <th>id</th>
              <th>Ürün Adı</th>
              <th>Adet</th>
              <th>Fiyat</th>
              <th >Açıklama</th>
            </thead>

            <tbody>
              <tr  v-for="(product,index) in getProducts" >
                <td class="align-middle text-center">
                  <span class="badge badge-info">{{ product.key }} </span>
                </td>
                <td class="align-middle text-center">
                  {{ product.productName }}
                </td>
                <td class="align-middle text-center" :class="countClasses(product.count)">
                  {{  product.count }}
                </td>
                <td class="align-middle text-center">
                  {{ product.price | currency}}
                </td>
                <td class="align-middle text-center">
                  {{ product.comment}}
                </td>
                
              </tr>
            </tbody>
          </table>
          <div class="alert alert-warning" v-else>
            <strong>Henüz Burada Bir Kayıt Bulamadık</strong> <br />
            <small
              >Kayıt Eklemek için Ürün İşlemleri menüsünden
              yararlanabilirsiniz</small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed:{
    ...mapGetters(["getProducts"]),
   
    },
    methods:{
       countClasses(count){
      return{
        'btn-danger text-white' : count == 0 || count == null  ,
        'btn-success  text-white' : count > 0 
      }
    }
  }
};
</script>

<style scoped>
  #delete{
    color:red;
    cursor:pointer;
  }
</style>
