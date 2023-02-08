<template>
    <div class="home">
       <div class="container">
        Searched:
        <router-link v-show="searchEl" :to="{name: 'product-view', params: {id: p.id}}" v-for="p in filteredProducts" :key="p.id"> {{ p.id }} / </router-link>
       <hr><hr><hr><hr><hr><hr><hr>
       Filtered:
        <router-link v-show="selectedProducts" :to="{name: 'product-view', params: {id: sel.id}}" v-for="sel in selectedProducts" :key="sel.id"> {{ sel.id }} / </router-link>
       </div>
        <div class="container">
            <div class="filter">
                <div class="filter-left">
                    <span>🔍</span>
                    <input
                    v-model="searchEl"
                     type="text" placeholder="Search...">
                </div>
                <div class="filter-right">
                    <label for="selected" class="icon">🔻</label>
                    <select name="" id="selected" class="select" v-model="category">
                        <option value="all" selected>All</option>
                        <option value="electronics">Electronics</option>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="women's clothing">Women's clothing</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="products" v-if="products">
                <div class="product" v-for="product in products" :key="product">
                <router-link :to="{name: 'product-view', params: {id: product.id}}">
                    <img :src="product.image" :alt="product.id">
                    <h3>{{ product.title }}</h3>
                    <h3>Category: {{ product.category }}</h3>
                    <p>Price: {{ product.price }} $</p>
                    <ul>
                        <li>Rate: {{ product.rating.rate }}</li>
                        <li>Count: {{ product.rating.count }}</li>
                    </ul>
                </router-link>
                <button @click="store.addToCart" class="btn">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {useCounterStore} from '@/stores/CounterStore.js';
const store = useCounterStore();
let products = ref([]);
let searchEl = ref('');
let category = ref('all')
async function getProducts(){
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json()
    products.value = data
}
getProducts()

let filteredProducts = computed(()=>{
    return products.value.filter(p => p.title.toLowerCase().includes(searchEl.value.toLowerCase()))
})

let selectedProducts = computed(()=>{
    if(category.value === 'all'){
        return products.value
    }else{
        return products.value.filter(p => p.category === category.value)
    }
})
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: cursive;
        list-style: none;
        text-decoration: none;
    }
    .home{
        padding-top: 150px;
    }
    .btn{
        padding: 15px 25px;
        border-radius: 20px;
        border: none;
        background-color: rgb(38, 0, 255);
        color: #fff;
    }
    .container{
        max-width: 1300px;
        margin: 0 auto;
        padding: 0 10px;
        .products{
            display: grid;
            justify-items: center;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px 15px;
            padding: 80px 0;
            .product{
                display: block;
                width: 300px;
                padding: 10px;
                border-radius: 12px;
                box-shadow: 0 0 5px 4px silver;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 8px;
                img{
                    width: 280px;
                    height: 200px;
                }
            }
        }
    }
    .filter{
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        &-left{
            padding: 10px;
            border: 2px solid silver;
            border-radius: 12px;
            width: 370px;
            display: flex;
            align-items: center;
            gap: 15px;
            span{
                font-size: 22px;
            }
            input{
                border: none;
                flex-grow: 1;
                outline: none;
                font-size: 20px;
            }
        }
        &-right{
            position: relative;
            .icon{
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 30px;
                height: 30px;
                pointer-events: none;
            }
        }
        .select{
            
            min-width: 200px;
            appearance: none;
            padding: 15px;
            border-radius: 12px;
            border: none;
            box-shadow: 0 0 4px 4px silver;
            outline: none;
            option{
                padding: 10px 0;
            }
        }
    }
</style>