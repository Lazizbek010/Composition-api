<template>
    <div>
        <div class="container">
            <div class="about">
                <div class="about-left">
                    <img :src="product.image" alt="">
                </div>
                <div class="about-right">
                    <h1>{{ product.title }}</h1>
                    <h3>{{ product.category }}</h3>
                    <p>{{ product.description }}</p>
                    <p>{{ product.price }}</p>
                    <ul>
                        <!-- <li>{{ product.rating.rate }}</li> -->
                        <!-- <li>{{ product.rating.count }}</li> -->
                    </ul>
                    <router-link class="back" :to="{name: 'home'}">Back</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
const product = ref({})
const { id } = defineProps(['id'])
async function getProduct() {
    const res = await fetch('https://fakestoreapi.com/products/' + id);
    const data = await res.json();
    product.value = data
}
getProduct()
</script>

<style lang="scss">
.about{
    display: flex;
    gap: 40px;
    box-shadow: 0 0 20px 20px silver;
    padding: 100px 30px;
    margin-top: 160px;
    border-radius: 40px;
    &-left{
        width: 60%;
        img{
            width: 80%;
            height: 350px;
            object-fit: container;
        }
    }
    &-right{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .back{
        padding: 20px 30px;
        border-radius: 20px;
        background-color: rgb(0, 34, 255);
        color: #fff;
        font-size: 18px;
        width: 120px;
    }
}
</style>