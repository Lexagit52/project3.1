<template>
    <div class="container">
      <h2>Making an order</h2>
  
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="name" class="form-label">Full name</label>
          <input type="text" id="name" v-model="formData.name" class="form-control" required />
        </div>
        
        <div class="mb-3">
          <label for="phone" class="form-label">Phone number</label>
          <input type="tel" id="phone" v-model="formData.phone" class="form-control" required />
        </div>
        
        <div class="mb-3">
          <label for="address" class="form-label">Delivery Address</label>
          <input type="text" id="address" v-model="formData.address" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label for="payment" class="form-label">Payment method</label>
          <select id="payment" v-model="formData.payment" class="form-control" required>
            <option value="card">card</option>
            <option value="cash">Cash</option>
          </select>
        </div>
  
        <div class="mb-3">
          <label for="cardNumber" v-if="formData.payment === 'card'" class="form-label">Card number</label>
          <input v-if="formData.payment === 'card'" type="text" id="cardNumber" v-model="formData.cardNumber" class="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" />
        </div>
  
        <button type="submit" class="btn btn-primary">Place an order</button>
      </form>
  
      <h3 class="mt-4">Your products:</h3>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in cartStore.cartList" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }} $</td>
            <td>{{ product.count }}</td>
            <td>{{ product.price * product.count }} $</td>
          </tr>
        </tbody>
      </table>
      <h4>The total amount: {{ totalAmount.toFixed(2) }} $</h4>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '@/stores/cart';
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  const cartStore = useCartStore();
  const router = useRouter();
  
 
  const formData = ref({
    name: '',
    phone: '',
    address: '',
    payment: 'card',  
    cardNumber: '',
  });
  
  
const totalAmount = computed(() => cartStore.totalAmount);

  
  
  const handleSubmit = () => {
    
    
    cartStore.buy();
    
    
    router.push('/');
  };
  </script>
  