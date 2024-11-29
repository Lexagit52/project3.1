<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-5">
        <select class="form-select" aria-label="Default select example" v-model="categoryStore.selectedCategory">
          <option value="">All cars</option>
          <option v-for="category in categoryStore.categories" :value="category" :key="category">{{ category }}</option>
        </select>
      </div>
      <div class="col-md-5">
        <input type="text" class="form-control" v-model="productStore.searchQuery" placeholder="Search by name..." />
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-warning" @click="resetFilters">Reset</button>
      </div>
    </div>

    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
        <div class="col" v-for="product in productStore.filteredProducts" :key="product.id">
          <div class="card h-100">
            <img :src="product.img" class="card-img-top" :alt="product.name" />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">Price: ${{ product.price }}</p>
              <p class="card-text">Category: {{ product.category }}</p>
              <p class="card-text">Description: {{ product.description }}</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-success me-2" @click="$router.push(`/detail/${product.id}`)">Detail</button>
              <button type="button" @click="cartStore.addToCart(product.id)" class="btn btn-outline-success">Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useCategoryStore } from '@/stores/category';
import { useProductStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';

import { ref, computed } from 'vue';


const productStore = useProductStore();
const categoryStore = useCategoryStore();

const category = ref(null);
const searchText = ref('');
const products = computed(() => productStore.products);
const cartStore = useCartStore();



const filteredProducts = computed(() => {
  let result = productStore.products;
  if (categoryStore.selectedCategory) {
    result = result.filter((product) => product.category === categoryStore.selectedCategory);
  }
  if (productStore.searchQuery) {
    result = result.filter((product) =>
      product.name.toLowerCase().includes(productStore.searchQuery.toLowerCase())
    );
  }
  return result;
});


const resetFilters = () => {
  category.value = null;
  searchText.value = '';
};
</script>
