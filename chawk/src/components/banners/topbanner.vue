<!-- eslint-disable -->
<template>
  <div class="w-full px-3">
    <div class="grid grid-cols-2 sm:grid-cols-9 gap-2 lg:gap-4">
      <a href="#" class="bod relative w-full col-span-2 sm:col-span-5 group">
        <img class="w-full h-full oject-cover" :src="images.bannerOne" />
        <div class="sec wave"></div>
      </a>
      <a href="#" class="relative sm:col-span-2 group">
        <img class="w-full h-full oject-cover" :src="images.bannerTwo" />
        <div class="sec wave"></div>
      </a>
      <a href="#" class="relative sm:col-span-2 group">
        <img class="w-full h-full oject-cover" :src="images.bannerThree" />
        <div class="sec wave"></div>
      </a>
      <a href="#" class="relative sm:col-span-2 group">
        <img class="w-full h-full oject-cover" :src="images.bannerFour" />
        <div class="sec wave"></div>
      </a>
      <a href="#" class="relative sm:col-span-2 group">
        <img class="w-full h-full oject-cover" :src="images.bannerFive" />
        <div class="sec wave"></div>
      </a>
      <a href="#" class="relative col-span-2 sm:col-span-5 group">
        <img class="w-full h-full oject-cover" :src="images.bannerSix" />
        <div class="sec wave"></div>
      </a>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import { assets } from "@/assets/Urls.image.js";

export default {
  name: "TopBanner",
  data() {
    return {
      images: assets,
    };
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
.wave {
  @apply absolute w-full bg-opacity-0 h-full top-0 left-0 duration-500 bg-white -skew-x-12 group-hover:bg-opacity-70 transform group-hover:translate-x-[150%];
}
</style>
