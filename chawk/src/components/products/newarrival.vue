<!--eslint-disable-->
<template>
  <div class="w-[97%] sm:w-[95%] mx-auto p-2 sm:p-6 space-y-5 mb-4">
    <P class="font-semibold text-xl sm:text-2xl lg:text-3xl">New Arrivals</P>

    <div
      class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-[70px] text-zinc-800"
    >
      <div v-for="(name, index) in newArrivalData" :key="index" class="group">
        <div
          @click="displayDetail(index)"
          class="rounded-lg group-hover:shadow-xl cursor-pointer duration-300 transform group-hover:-translate-y-2"
        >
          <div
            class="w-full h-[160px] sm:h-[350px] overflow-hidden rounded-t-lg"
          >
            <img
              :src="newArrival[index]"
              alt="new"
              class="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div class="sm:space-y-4 space-y-2 p-2 sm:p-6">
            <p
              class="font-semibold text-[15px] sm:text-xl sm:pr-[10%] truncate"
            >
              {{ name.name }}
            </p>
            <p class="text-sm sm:text-lg font-thin truncate sm:pr-[10%]">
              {{ name.description }}
            </p>
            <p>
              <span class="font-semibold text-[15px] sm:text-xl">{{
                (name.salePrice * 500) | currency("₦")
              }}</span>
              <span v-if="name.price" class="text-gray-300 line-through ml-6">
                {{ (name.price * 500) | currency("₦") }}</span
              >
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

export default {
  name: "NewArrivals",
  props: ["newArrivalData", "getNewArrival", "showDetail", "newArrival"],

  data() {
    return {
     
    };
  },

  methods: {
    displayDetail(idx) {
      this.getNewArrival(idx);
      this.showDetail();

    
    },
    
  },
};
</script>
<!--eslint-disable-->
<style scoped>
/*eslint-disable*/
</style>
