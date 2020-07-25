<template>
  <nav
    class="navbar  navbar-expand navbar-dark"
    style="background-color: #ea9085"
  >
    <router-link tag="a" class="navbar-brand" :to="productlist">
      Ürün Listesi
    </router-link>
    <div class=" collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-link"
            :to="addproduct"
            active-class="active"
            exact
          >
            Ürün Ekle
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-link"
            :to="productsale"
            active-class="active"
          >
            Ürün Çıkış
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      productlist: {
        name: "productlist"
      },
      addproduct: {
        name: "addproduct"
      },
      productsale: {
        name: "productsale"
      }
    };
  }
};
</script>

<style></style>
