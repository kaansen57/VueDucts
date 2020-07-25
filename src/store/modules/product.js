 import Vue from 'vue';
 import { router } from "../../route";
 const state = {
     productList: []
 }

 const getters = {
     getProducts( state ) {
         return state.productList;
     },
     getProduct(state) {
        return key => state.productList.filter(element =>{
            return element.key  == key;
          });
     }
 }

 const mutations = {
     updateProductList(state, product) {
         state.productList.push(product);
     }
 }
 const actions = {
     initApp({ commit }) {
        Vue.http.get("https://product-vue-5c532.firebaseio.com/products.json")
        .then((response)=>{
            let data = response.body;
            for(let key in data){
                data[key].key = key;
                commit("updateProductList", data[key]);
            }
        })
     },
     saveProduct({ dispatch, commit, state }, payload) {
         Vue.http.post("https://product-vue-5c532.firebaseio.com/products.json", payload)
             .then((response) => {
                 //ürün ekleme ve güncelleme
                 payload.key = response.body.name;
                 commit("updateProductList", payload);

                 console.log(response);
                 //bakiye satış , alım güncelleme
                 let tradeData = {
                     purchase: payload.price,
                     sale: 0,
                     count: payload.count
                 }
                 dispatch("setTradeResult", tradeData)
                 router.replace("/")
             });
         

     },
     sellProduct({ dispatch , state,commit }, payload) {
          let product = state.productList.filter(element => {
            return element.key  == payload.key;
            });

            if(product){
                let totalCount = product[0].count - payload.count;
                Vue.http.patch("https://product-vue-5c532.firebaseio.com/products/" + payload.key +".json" , 
                {count : totalCount})
                   .then((response) => {
                       product[0].count = totalCount;
                       let tradeData = {
                        purchase:0,
                        sale: product[0].price,
                        count: payload.count
                        }
                    dispatch("setTradeResult", tradeData)
                    router.replace("/")
             });
        }

     }
 }

 export default {
     state,
     getters,
     mutations,
     actions
 }