<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">ShopCars</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/cart" class="nav-link">Cart</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>


<style scoped>

.card {
  border-radius: 15px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
}

.card:hover {
  transform: translateY(-5px); 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); 
}

.card-img-top {
  border-radius: 15px 15px 0 0; 
  object-fit: cover; 
  height: 200px; 
}

.card-body {
  padding: 15px; 
}

.card-title {
  font-size: 1.2rem; 
  font-weight: bold;
  color: #333; 
}

.card-text {
  font-size: 1rem;
  color: #666; 
}

.card-footer {
  background-color: #f8f9fa; 
  border-top: 1px solid #ddd; 
}

.card-footer .btn {
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.card-footer .btn:hover {
  background-color: #ddd; 
}


@media (max-width: 768px) {
  .row-cols-md-3 {
    row-gap: 20px;
  }
}
</style>