<script setup lang="ts">

</script>
    
<template>
    <div class="w-full min-h-[80px] flex items-center justify-between border-[1px]">

        <div class="flex items-center min-h-[80px] justify-between w-full border-[1px]">
            <div class="border-[1px] flex min-h-[80px]">
                <div class="flex items-center justify-center border-[1px] p-[1rem]">
                    <router-link to="/products">Shop</router-link>
                </div>
                <div class="flex items-center justify-center border-[1px] p-[1rem]">
                    <router-link to="/contact">Contact</router-link>
                </div>
            </div>
            <div class="border-[1px] flex min-h-[80px] min-h-[80px] border-[1px]">
                <div class="flex items-center justify-center border-[1px] p-[1rem]">
                    <router-link to="/register">Sign In</router-link>
                </div>
                <div class="flex items-center justify-center border-[1px] p-[1rem]">
                    <router-link to="/cart">Cart</router-link>
                </div>
            </div>
        </div>
        
        <div class="hidden">
            <div>
                <div>Shop</div>
                <div>Contact</div>
            </div>
            <div>
                <div>Sign In</div>
                <div>Cart</div>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>