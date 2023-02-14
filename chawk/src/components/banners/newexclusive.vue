<!--eslint-disable-->
<template>
  <div class="w-[97%] sm:w-[95%] flex mx-auto p-2 sm:p-6 my-4 text-zinc-800">
    <div class="bg-gray-100 relative w-[50%] rounded-tl-md rounded-bl-md">
      <img
        class="rounded-tl-md rounded-bl-md z-40"
        src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fwomen.png&w=1200&q=75"
        alt="female"
      />

      <div
        class="tracking-widest absolute z-0 text-black text-lg md:text-xl lg:text-3xl text-opacity-5 top-6 sm:top-10 right-6 sm:right-12 font-medium"
      >
        NEW YEAR
      </div>
      <div
        class="absolute text-black z-0 text-opacity-5 text-[95px] md:text-[120px] lg:text-[200px] font-bold top-8 sm:top-12 right-6 sm:right-2 space-x-8 sm:space-x-5"
      >
        <span>2</span><span>0</span>
      </div>
      <div
        class="absolute p-2 md:p-4 lg:p-6 sm:text-[15px] lg:text-xl bg-white bottom-7 md:bottom-12 lg:bottom-9 right-6 rounded-md sm:rounded-lg sm:uppercase"
      >
        #Women Exclusive
      </div>
    </div>

    <div class="bg-gray-200 relative w-[50%] rounded-tr-md rounded-br-md">
      <img
        class="rounded-tr-md rounded-br-md z-40"
        src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fmen.png&w=1200&q=75"
        alt="male"
      />

      <div
        class="tracking-widest absolute z-0 text-black text-lg md:text-xl lg:text-3xl text-opacity-5 top-6 sm:top-10 left-6 sm:left-6 font-medium"
      >
        EXCLUSIVE
      </div>
      <div
        class="absolute text-black z-0 text-opacity-5 text-[95px] md:text-[120px] lg:text-[200px] font-bold top-8 sm:top-12 left-6 sm:left-2 space-x-8 sm:space-x-5"
      >
        <span>2</span><span>3</span>
      </div>
      <div
        class="absolute p-2 md:p-4 lg:p-6 sm:text-[15px] lg:text-xl bg-white bottom-7 md:bottom-12 lg:bottom-9 left-6 rounded-md sm:rounded-lg sm:uppercase"
      >
        #Men Exclusive
      </div>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import { assets } from "@/assets/Urls.image.js";

export default {
  name: "ExclusiveSales",
  data() {
    return {
      images: assets,
    };
  },
};
</script>
<!--eslint-disable-->
<style scoped>
/*eslint-disable*/
</style>
