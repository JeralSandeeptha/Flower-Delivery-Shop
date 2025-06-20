<script setup lang="ts">
import Header from '../header/Header.vue';
import Paragraph from '../paragraph/Paragraph.vue';
</script>

<template>
    <div class="w-full">
        <div class="w-full min-h-[75vh] max-md:min-h-[85vh] grid grid-cols-2 max-md:grid-cols-1">
            <div class="bgImage1"></div>
            <div class="p-16 max-sm:p-8 max-xs:p-5 border-[1px] flex flex-col gap-[1rem]">
                <Header 
                    title="Expertly Crafted Bouquets"
                />
                <Paragraph 
                    description="At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection."
                />
            </div>
        </div>
        <div class="w-full min-h-[75vh] max-md:min-h-[85vh] grid grid-cols-2 max-md:grid-cols-1">
            <div class="p-16 max-sm:p-8 max-xs:p-5 border-[1px] flex flex-col gap-[1rem]">
                <Header 
                    title="Bouquets, Gifts & Ambiance"
                />
                <Paragraph 
                    description="In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv."
                />
            </div>
            <div class="bgImage2"></div>
        </div>
        <div class="w-full min-h-[75vh] max-md:min-h-[85vh] grid grid-cols-2 max-md:grid-cols-1">
            <div class="bgImage3"></div>
            <div class="p-16 max-sm:p-8 max-xs:p-5 border-[1px] flex flex-col gap-[1rem]">
                <Header 
                    title="Making Every Day Special"
                />
                <Paragraph 
                    description="Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the highest quality flowers, exceptional customer service, and a seamless online experience that will make you feel confident and satisfied with your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful bouquets and gifts."
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.bgImage1 {
    background-image: url('/public/images/about-one.png');
}
.bgImage2 {
    background-image: url('/public/images/about-two.png');
}
.bgImage3 {
    background-image: url('/public/images/about-three.png');
}
</style>