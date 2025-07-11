import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/home-page/HomePage.vue";
import CartPage from "../views/cart-page/CartPage.vue";
import LoginPage from "../views/login-page/LoginPage.vue";
import RegisterPage from "../views/register-page/RegisterPage.vue";
import ProductsPage from "../views/products-page/ProductsPage.vue";
import SingleProductPage from "../views/single-product-page/SingleProductPage.vue";
import AboutPage from "../views/about-page/AboutPage.vue";
import SubscriptionPage from "../views/subscription-page/SubscriptionPage.vue";
import CheckoutPage from "../views/checkout-page/CheckoutPage.vue";
import ContactPage from "../views/contact-page/ContactPage.vue";
import PlansPage from "../components/plans-page/PlansPage.vue";
import ForgotPassword from "../views/change-password/ForgotPassword.vue";

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ContactPage
        },
        {
            path: '/cart',
            name: 'Cart',
            component: CartPage
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginPage,
        },
        {
            path: '/register',
            name: 'Register',
            component: RegisterPage
        },
        {
            path: '/products',
            name: 'Products',
            component: ProductsPage
        },
        {
            path: '/products/:productId',
            name: 'Product',
            component: SingleProductPage
        },
        {
            path: '/about',
            name: 'About',
            component: AboutPage
        },
        {
            path: '/subscription',
            name: 'Subscription',
            component: SubscriptionPage
        },
        {
            path: '/checkout',
            name: 'Checkout',
            component: CheckoutPage
        },
        {
            path: '/plans',
            name: 'Plans',
            component: PlansPage
        },
        {
            path: '/forgot-password',
            name: 'Change Password',
            component: ForgotPassword
        },
    ]
});

export default routes;