import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', () => {
    const categories = ref([
        'BMW',
        'Mersedess',
        'Audi',
    ]);
    const selectedCategory = ref('');
    
    return {
        categories,
        selectedCategory,
    };
});