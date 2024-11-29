<template>
    <div class="container" v-if="product">
      <div class="row">
        <div class="col" >
          <div class="card h-100">
            <img :src="product.img" class="card-img-top" :alt="product.name" />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">Price: ${{ product.price }}</p>
              <p class="card-text">Category: {{ product.category }}</p>
              <p class="card-text">Description: {{ product.description }}</p>
            </div>
            <div class="card-footer">
              
              <button type="button" @click="addToCartAndRedirect" class="btn btn-outline-success">Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

import { useProductStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';  
import { useRouter, useRoute } from 'vue-router'; 

const productStore = useProductStore();
const cartStore = useCartStore();
const router = useRouter();
const route = useRoute();  


const product = productStore.findProductById(route.params.id);


const addToCartAndRedirect = () => {
  cartStore.addToCart(product.id);
  router.push('/cart');  
};



  </script>
