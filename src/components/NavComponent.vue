<template>
    <div class="nav">
        <div class="container">
            <div class="navbar">
                <div class="logo">LOGO</div>
                <div class="nav-menu">
                    <ul class="nav-list">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/about">About</router-link>
                        </li>
                    </ul>
                    <div class="cart">
                        🛒
                        <div class="count">
                            <h1>{{ store.cart}}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useCounterStore} from '@/stores/CounterStore.js'
import { ref } from 'vue';
const store = useCounterStore();
const num = ref(0);
</script>

<style lang="scss">
    .nav{
        padding: 20px 0px;
        box-shadow: 0 4px 15px silver;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        backdrop-filter: blur(10px);
        .navbar{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo{
                font-size: 45px;
                text-decoration: underline;
            }
            .nav-menu{
                display: flex;
                gap: 40px;
                align-items: center;
                .nav-list{
                    display: flex;
                    gap: 20px;
                    a{
                        text-decoration: none;
                        font-size: 20px;
                        color: blue;
                        font-weight: 800;
                    }
                }
                .cart{
                    position: relative;
                    font-size: 40px;
                    .count{
                        position: absolute;
                        top: -2px;
                        right: -2px;
                        border-radius: 50%;
                        background-color: red;
                        width: 28px;
                        height: 28px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #000;
                        h1{
                            font-size: 17px;
                        }
                    }
                }
            }
        }
    }
</style>