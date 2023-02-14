<!--eslint-disable-->
<template>
  <div
    class="w-[97%] sm:w-[95%] mx-auto text-center text-zinc-800 flex-col flex justify-center items-center p-2 sm:p-6 mb-4 space-y-7 sm:space-y-16"
  >
    <div class="leading-6 sm:leading-10">
      <p class="text-lg sm:text-xl font-semibold">Talk To A Real Person</p>
      <p class="text-sm sm:text-lg">
        Are you on the fence? Have a question? Need a recommendation?
      </p>
      <p class="text-sm sm:text-lg">
        Member Services is always here to help. Send us a message.
      </p>
    </div>
    <div>
      <img
        src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fsupport.png&w=1080&q=75"
        alt="cust"
      />
    </div>
    <div>
      <button
        class="text-white flex hover:bg-zinc-700 sm:font-semibold px-5 py-2 bg-zinc-800 sm:px-20 sm:py-4 rounded-md sm:rounded-lg"
      >
        Chat with Member Services
        <span v-html="images.chat" class="ml-3"></span>
      </button>
    </div>

    <div class="grid md:grid-cols-6 grid-cols-3 gap-2 w-full h-full">
      <div
        v-if="idx === 0 || idx <= 5"
        v-for="(pics, idx) in newArrival"
        :key="pics"
        class="h-[100px] lg:h-[220px] md:h-[180px] sm:h-[150px] rounded-sm sm:rounded-md"
      >
        <img
          :src="pics"
          class="w-full h-full object-center rounded-sm sm:rounded-md"
        />
      </div>
    </div>
    <div class="space-y-9 mt-20 flex lg:justify-between lg:flex-row justify-center items-center flex-col lg:w-full md:w-[60%] w-[95%]">
     <div class="sm:space-y-6 space-y-3">
      <p class="text-lg sm:text-xl md:text-2xl font-semibold">
        Get Expert Tips In Your Inbox
      </p>
     <p>Subscribe to our newsletter and stay updated.</p>

    
     </div>
     <div class="h-12 lg:h-14 lg:w-[40%] space-x-5">
      <input class="w-[60%] h-full text-[15px] text-black outline-none rounded-md border px-3" type="email" placeholder="Enter your email" required />
      <button
          class="text-white hover:bg-zinc-700 sm:font-semibold px-3 py-3 bg-zinc-800 sm:px-6 lg:py-4 rounded-md sm:rounded-lg"
        >
          Subscribe
        </button>
    </div>
    
 
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import { assets } from "@/assets/Urls.image.js";

export default {
  name: "CustomerCare",
  props: ["newArrival"],
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
