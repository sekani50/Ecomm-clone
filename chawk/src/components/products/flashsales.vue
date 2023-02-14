<!--eslint-disable-->
<template>
  <div class="w-[97%] sm:w-[95%] mx-auto p-2 sm:p-6">
    <div class="my-20 border-2 p-4 sm:p-12 rounded-xl">
      <div class="flex justify-between items-center pb-4 sm:pb-12">
        <P class="font-semibold text-xl sm:text-2xl lg:text-3xl">Flash Sales</P>

        <div class="grid grid-cols-4 sm:gap-4 gap-0">
          <div class="flex flex-col space-y-1">
            <div
              class="bg-zinc-800 text-white rounded-md m-auto sm:text-lg px-3 py-2 sm:px-4 sm:py-3"
            >
              {{ days }}
            </div>
            <div class="uppercase m-auto text-sm">Days</div>
          </div>
          <div class="flex flex-col space-y-1">
            <div
              class="bg-zinc-800 text-white rounded-md m-auto sm:text-lg px-3 py-2 sm:px-4 sm:py-3"
            >
              {{ hours }}
            </div>
            <div class="uppercase m-auto text-sm">Hours</div>
          </div>
          <div class="flex flex-col space-y-1">
            <div
              class="bg-zinc-800 text-white rounded-md m-auto sm:text-lg px-3 py-2 sm:px-4 sm:py-3"
            >
              {{ minutes }}
            </div>
            <div class="uppercase m-auto text-sm">Min</div>
          </div>
          <div class="flex flex-col space-y-1">
            <div
              class="bg-zinc-800 text-white rounded-md m-auto sm:text-lg px-3 py-2 sm:px-4 sm:py-3"
            >
              {{ seconds }}
            </div>
            <div class="uppercase m-auto text-sm">Sec</div>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 text-zinc-800"
      >
        <div v-for="(name, index) in flashSales" :key="index" class="group">
          <div
            @click="displayDetail(index)"
            class="rounded-lg group-hover:shadow-lg cursor-pointer"
          >
            <div
              class="w-full h-[160px] sm:h-[350px] overflow-hidden rounded-t-lg"
            >
              <img
                :src="flashImages[index].image"
                alt="flash"
                class="w-full h-full rounded-t-lg transform duration-200 group-hover:scale-105"
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
    
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import { flashSalesImage } from "@/assets/Urls.image.js";
import { mapGetters } from "vuex";

export default {
  name: "FlashProducts",
  props: ["flashSales", "getId", , "showDetail"],

  data() {
    return {
      flashImages: flashSalesImage,
      hours: "",
      minutes: "",
      seconds: "",
      days: "",
      future: new Date("March 5, 2023 15:37:25").getTime(),
     
    };
  },
  computed: {
    ...mapGetters(["showProducts"]),
  },
  created() {
    setInterval(() => {
      let currentTime = new Date().getTime();
      let timeleft = this.future - currentTime;

      this.days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      if (this.minutes < 10) {
        this.minutes = "0" + this.minutes;
      }
      if (this.seconds < 10) {
        this.seconds = "0" + this.seconds;
      }
      if (this.days < 10) {
        this.days = "0" + this.days;
      }
      if (this.hours < 10) {
        this.hours = "0" + this.hours;[]
      }
    }, 1000);
  },
  methods: {
    displayDetail(idx) {
      this.getId(idx);
      this.showDetail();

   

      

    },
   
  },
};
</script>
<!--eslint-disable-->
<style scoped>
/*eslint-disable*/
</style>
