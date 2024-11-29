import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: 'BMW M5 competition',
      img: 'https://steamuserimages-a.akamaihd.net/ugc/1829033806571764401/8FEB040EBE4208BA1C5D7B6D29FE828FE994138C/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
      price: 19000,
      description: 'Main features Engine: petrol, 4.4 liters Power: 625 horsepower Torque: 750 Nm Transmission: automatic, 8-speed Drive: all-wheel drive Acceleration to 100 km/h: 3.3 seconds Maximum speed: 250 km/h Fuel consumption in mixed cycle: 10.8 liters per 100 kilometers',
      publish_at: '23.11.2023',
      category: 'BMW',
    },
    {
      id: 2,
      name: 'Mercedes cls 63 amg',
      img: 'https://i.pinimg.com/originals/07/b6/a4/07b6a40bdafc0a6f282fcdd7e5db41dc.jpg',
      price: 16500,
      description: 'This is a four-door coupe with pronounced athletic proportions and an individual exterior and interior design. 4 Power unit: 5.5-liter gasoline engine with two turbines, which has a power of 525 hp, and a maximum torque of 700 Nm.',
      publish_at: '12.10.2021',
      category: 'Mersedess',
    },
    {
      id: 3,
      name: 'Audi RS5',
      img: 'https://avatars.mds.yandex.net/i?id=bdeabc28207ce61d34a595e99f1e9fc5_l-5649169-images-thumbs&n=13',
      price: 18500,
      description: 'The Audi RS5 is a Gran Turismo class sports car produced by the Audi Sport GmbH division on the Audi A5 platform. Engine: 4.2 l. V8 (2010-2016) or 2.9 l. V6 (from 2018).',
      publish_at: '13.03.2020',
      category: 'Audi',
    },
  ]);

  const selectedCategory = ref('');
  const searchQuery = ref('');
  
  const findProductById = (id) => {
    return products.value.find((product) => product.id == id);
  };
  

  const filteredProducts = computed(() => {
    return products.value.filter((product) => {
      const matchesCategory = !selectedCategory.value || product.category === selectedCategory.value;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  });

  return {
    products,
    selectedCategory,
    searchQuery,
    filteredProducts, 
    findProductById,
  };
});

