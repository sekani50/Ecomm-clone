<!--eslint-disable-->
<template>
  <div class="w-[97%] sm:w-[95%] mx-auto p-2 sm:p-6 mb-4 space-y-5">
    <p class="font-semibold text-xl sm:text-2xl lg:text-3xl">Top Brands</p>
    <div class="w-full h-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
      <a href="#" v-for="(pics, idx) in pexelPictures" :key="pics" class="group sm:rounded-lg rounded-md relative h-[160px] sm:h-[250px]">
        <div class="h-full w-full overflow-hidden sm:rounded-lg rounded-md ">
          
          <img class="transform group-hover:scale-150 duration-500 group-hover:rotate-12 h-full w-full object-center sm:rounded-lg rounded-md" alt="brands" :src="pics" />

        

          <div class="h-full w-full sm:rounded-lg rounded-md absolute inset-0 bg-black bg-opacity-60">
            <img
            :src="logos[idx]"

            class=" h-[40%] w-[50%] absolute inset-0 m-auto"
          />
          </div>
         
        </div>
      </a>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import { brands } from "@/assets/Urls.image.js";
export default {
  name: "BrandsList",
  props: ["pexelPictures"],
  data() {
    return {
      logos: brands,
    };
  },
  mounted() {
    console.log(this.pexelPictures);

  },
  methods: {

  }
};
</script>
<!--eslint-disable-->


<style scoped>
/*eslint-disable*/
</style>
