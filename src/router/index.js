import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductView from '@/views/products/ProductView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/product/:id',
            name: 'product-view',
            component: ProductView,
            props: true
        }
    ]
})

export default router