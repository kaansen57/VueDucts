import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductList from "./components/ProductList.vue";
import AddProduct from "./components/AddProduct.vue";
import ProductSale from "./components/ProductSale.vue";

Vue.use(VueRouter);

 const routes = [{
        path: "/",
        name: "productlist",
        component: ProductList
    },
    {
        path: "/addproduct",
        component: AddProduct,
        name: "addproduct"
    },
    {
        path: "/productsale",
        component: ProductSale,
        name: "productsale"
    },
    {
        path: "*",
        redirect: "/"
    }
];

export const router = new VueRouter({
    routes,
    mode: "history"
});