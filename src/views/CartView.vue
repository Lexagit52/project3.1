<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Count</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in cartStore.cartList" :key="product.id">
          <th scope="row">{{ index + 1 }}</th>
          <td><img :src="product.img" style="width: 150px;" class="rounded mx-auto d-block" alt="..."></td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <input type="number" class="form-control" :value="product.count" @input="updateCount(product.id, $event.target.value)" >
          </td>
          <td>
           
            <button type="button" @click="removeProduct(product.id)" class="btn btn-outline-danger">Delete</button>
            
            <button type="button" class="btn btn-success me-2" @click="$router.push(`/detail/${product.id}`)">Detail</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="row">
      <div class="col text-end">
        <h2>Total: ${{ cartStore.totalAmount.toFixed(2) }}</h2>
        <button type="button" class="btn btn-outline-success mt-3" @click="goToCheckout">
          <i class="bi bi-bag-check"></i> Buy </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const router = useRouter();


const updateCount = (productId, newCount) => {
  if (newCount < 1) return; 
  cartStore.updateCountCartById(productId, parseInt(newCount));
};


const removeProduct = (productId) => {
  const index = cartStore.findIndexProductCartById(productId);
  if (index !== -1) {
    const count = cartStore.carts[index].count;
    if (count > 1) {
      cartStore.updateCountCartById(productId, count - 1);
    } else {
      cartStore.carts.splice(index, 1);
    }
  }
};


const goToCheckout = () => {
  router.push('/checkout');
};
</script>
