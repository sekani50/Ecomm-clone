<!--eslint-disable-->
<template>
  <div
    class="w-[97%] sm:w-[95%] mx-auto p-2 sm:p-6 text-zinc-800 space-y-5 mb-4"
  >
    <p class="font-semibold text-xl sm:text-2xl lg:text-3xl">Featured Products</p>
    <div class="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
      <div
        v-if="index >= 0 && index <= 4"
        :class="index == 0 ? 'span' : 'col-span-1'"
        class="bg-gray-100 p-3 sm:p-6 group rounded-md cursor-pointer"
        v-for="(product, index) in featuredProducts"
        :key="index"
      >
        <div class="relative" @click="displayDetail(index)">
          <div 
         
          class="overflow-hidden">
            <img
              class="m-auto h-full transform duration-200 group-hover:scale-105"
              :src="featImages[index].image"
            />
          </div>
          <div
            v-if="product.price"
            class="text-[12px] sm:text-[15px] absolute top-3 left-3 p-2 bg-black text-white rounded-md sm:rounded-lg"
          >
            {{
              `${(100 - (product.salePrice / product.price) * 100).toFixed()}%`
            }}
          </div>
          <div class="sm:space-y-3 space-y-1"
          :class="index == 0 ? 'lg:mt-32' : ''"
          >
            
            <p class="text-[15px] sm:text-lg font-semibold">
              {{ product.name }}
            </p>
            <p class="text-sm sm:text-lg truncate">{{ product.description }}</p>
            <p class="text-[15px] sm:text-lg font-semibold">
              {{ (product.salePrice * 500) | currency("₦") }}
            </p>
            <p class="line-through text-gray-300" v-if="product.price">
              {{ (product.price * 500) | currency("₦") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import { featuredImages } from "@/assets/Urls.image.js";

export default {
  name: "FeaturedProducts",
  props: ["featuredProducts", "showDetail", "getfeatProductId"],

  data() {
    return {
      featImages: featuredImages,
    };
  },
  created() {},
  methods: {
    displayDetail(idx) {
      this.getfeatProductId(idx);
      this.showDetail();
    },
  },
};
</script>
<!--eslint-disable-->
<style scoped>
/*eslint-disable*/

.span {
  @apply lg:row-span-2 col-span-2 row-span-2;
}
</style>
