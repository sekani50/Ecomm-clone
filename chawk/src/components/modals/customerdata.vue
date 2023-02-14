<!--eslint-disable-->
<template>
  <div class="w-[99.4%] mt-16  sm:mt-24">
    <div class="w-full h-[150px] sm:h-[200px] md:h-[300px] relative ">
        <img class="h-full w-full object-cover" src="@/assets/hanger.jpg"  alt="cloth" />
        <div class="absolute inset-0 w-full h-full bg-black bg-opacity-50">
          <div class="h-fit w-fit absolute inset-0 m-auto space-y-4 text-center">
            <p class="satisfy text-white font-semibold text-lg sm:text-2xl lg:text-3xl">explore</p>
          <p class="text-white font-semibold text-xl sm:text-3xl lg:text-4xl">Checkout</p>
          </div>
          
        </div>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */

export default {
  name: "CustomerData",

  data() {
    return {};
  },
};
</script>
<!--eslint-disable-->
<style scoped>
/*eslint-disable*/
.satisfy {
  font-family:Satisfy,cursive;
}
</style>
