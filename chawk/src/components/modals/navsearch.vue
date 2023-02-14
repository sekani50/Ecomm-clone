<!-- eslint-disable -->
<template>
  <div
    class=" z-50 w-full bg-black bg-opacity-30 cursor-pointer fixed inset-0 h-full md:text-lg"
  >
    <div class="w-full h-full">
      <div class="flex relative top-8 w-[80%] h-12 mx-auto">
        <div class="absolute left-3 pt-4 top-0" v-html="images.input"></div>
        <input
          class="h-full md:text-lg w-full pr-4 pl-10 outline-0 outline-transparent bg-white rounded-md"
          placeholder="Search..."
          type="search"
        />
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import { assets } from "@/assets/Urls.image.js";

export default {
  name: "NavSearch",

  data() {
    return {
      images: assets,
    };
  },
  methods: {},
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */

</style>
