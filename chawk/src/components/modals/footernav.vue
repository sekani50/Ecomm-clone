<!--eslint-disable-->
<template>
  <div>
    <div class="border w-full border-l-0 border-r-0 text-zinc-800">
    <div
      class="w-[97%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 sm:w-[95%] mx-auto py-8 px-2 sm:py-20 sm:px-6 mb-4"
    >
      <div class="space-y-2 sm:space-y-4">
        <a href="" class="block font-semibold text-lg sm:text-xl tracking-wide"
          >Social</a
        >
        <a
          href=""
          class="flex items-center justify-start space-x-2 text-sm sm:text-[16px] text-gray-500  tracking-wide"
        >
          <span v-html="images.instagram"></span>

          <span class="text-gray-500">Instagram</span>
        </a>
        <a
          href=""
          class="flex items-center justify-start space-x-2 text-sm sm:text-[16px] text-gray-500 tracking-wide"
        >
          <span v-html="images.twitter"></span>
          <span class="text-gray-500">twitter</span></a
        >
        <a
          href=""
          class="flex items-center justify-start space-x-2 text-sm sm:text-[16px] text-gray-500 tracking-wide"
        >
          <span v-html="images.facebook"></span>
          <span class="text-gray-500">Facebook</span></a
        >
        <a
          href=""
          class="flex items-center justify-start space-x-2 text-sm sm:text-[16px] text-gray-500 tracking-wide"
        >
          <span v-html="images.youtube"></span
          ><span class="text-gray-500">YouTube</span></a
        >
      </div>

      <div class="space-y-2 sm:space-y-4">
        <a href="" class="block font-semibold text-lg sm:text-xl tracking-wide"
          >Contact</a
        >
        <a href="" class="block text-sm md:text-[16px] tracking-wide text-gray-500">Contact Us</a>
        <a href="" class="block text-sm md:text-[16px]  tracking-wide text-gray-500">yourexample@email.com</a>
        <a href="" class="block text-sm md:text-[16px]  tracking-wide text-gray-500">example@email.com</a>
        <a href="" class="block text-sm md:text-[16px] tracking-wide text-gray-500"
          >Call us: +1 234 567-8900</a
        >
      </div>

      <div class="space-y-2 sm:space-y-4">
        <a href="" class="block font-semibold text-lg sm:text-xl tracking-wide"
          >About</a
        >
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">Support Center</a>
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">Customer Support</a>
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">Copyright</a>
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">About Us</a>
      </div>

      <div class="space-y-2 sm:space-y-4">
        <a href="" class="block font-semibold text-lg sm:text-xl tracking-wide"
          >Customer Care</a
        >
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">FAQ & Helps</a>
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">Shipping & Delivery</a>
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">Return & Exchanges</a>
      </div>

      <div class="space-y-2 sm:space-y-4">
        <a href="" class="block font-semibold text-lg sm:text-xl tracking-wide"
          >Our Information</a
        >
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">Privacy policy update</a>
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">Terms & conditions</a>
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">Return Policy</a>
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">Site Map</a>
      </div>

      <div class="space-y-2 sm:space-y-4">
        <a href="" class="block font-semibold text-lg sm:text-xl tracking-wide"
          >Top Categories</a
        >
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">Men's Wear</a>
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">Women's Wear</a>
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">Sport's Wear</a>
        <a href="" class="block text-sm md:text-[16px] text-gray-500 tracking-wide">Kid's Wear</a>
      </div>
    </div>
  </div>
  <div class="flex justify-center md:justify-between items-center py-3 sm:px-6 sm:py-6">
    <div class="text-zinc-500 text-sm md:text-[16px]">
      Copyright © {{ year }} <span class="font-semibold text-zinc-800">Idris Mohammed</span>  All rights reserved
    </div>
    <div class="hidden lg:flex space-x-5">
      <a href=""> <img :src="images.master" alt="pay" /></a>
     
      <a href=""> <img :src="images.paypal" alt="pay" /></a>
      <a href=""> <img :src="images.visa" alt="pay" /></a>
      <a href=""><img class="h-6 " src="@/assets/fluter.png" alt="pay" /></a>
     
     
    </div>
  </div>
  <div class="h-20 lg:h-0"></div>
  </div>
 
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import { assets } from "@/assets/Urls.image.js";

export default {
  name: "FooterNav",
  data() {
    return {
      images: assets,
      year:"",
    };
  },
  created() {
    this.year = new Date().getFullYear();

  },
};
</script>
<!--eslint-disable-->
<style scoped>
/*eslint-disable*/
</style>
