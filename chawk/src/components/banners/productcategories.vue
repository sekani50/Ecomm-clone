<!-- eslint-disable -->
<template>
  <div>
    <div
      class="relative m-auto mb-6 h-fit w-[90%] space-y-5 sm:w-[95%] text-zinc-800"
    >
      <p class="font-semibold text-xl sm:text-2xl lg:text-3xl">Shop By Category</p>
      <div class="w-full h-fit bg-white overflow-hidden">
        <div
          ref="slide"
          class="hide-scroll flex space-x-4 md:space-x-6 lg:space-x-8 overflow-x-scroll"
        >
          <div
            class="rounded-md sm:rounded-lg min-w-max h-fit space-y-3 sm:space-y-5 text-center flex flex-col justify-center items-center"
            v-for="(image, index) in imageList"
            :key="index"
          >
            <div href="#"
              class="relative group lg:h-[230px] lg:w-[240px] md:h-[200px] md:w-[210px] h-[100px] w-[110px] sm:h-[150px] sm:w-[160px]"
            >
              <img
                class="w-full h-full rounded-md sm:rounded-lg object-cover"
                :src="image.cat"
              />
              <div
                class="absolute w-full h-full inset-0 rounded-md sm:rounded-lg bg-black bg-opacity-0 group-hover:bg-opacity-50"
                v-html="images.catStyle"
              ></div>
      </div>

            <p class="font-semibold text-sm md:text-lg sm:text-xl">
              {{ image.name }}
            </p>
          </div>
        </div>
      </div>
      <div class="group">
        <div
          class="absolute border rounded-full p-2 sm:p-3 -left-4 top-[40%] bg-white group-hover:border-slate-800 group-hover:bg-slate-800"
          v-html="images.navOne"
          @click="toLeft"
        ></div>
      </div>
      <div class="group">
        <div
          class="absolute border rounded-full p-2 sm:p-3 -right-4 top-[40%] bg-white group-hover:border-slate-800 group-hover:bg-slate-800"
          v-html="images.navTwo"
          @click="toRight"
        ></div>
      </div>
    </div>
    <div class="my-6 h-6"></div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import { assets, slider } from "@/assets/Urls.image.js";

export default {
  name: "ProductCat",

  data() {
    return {
      images: assets,
      imageList: slider,
      rightCount: 0,
      currentPosition: 0,
      interval: null,
      reverseImage: null,
    };
  },
  created() {
    this.reverseImage = this.imageList.reverse();
  },
  mounted() {
    const slide = this.$refs.slide;
    //let this.count = 0;
    let len = this.imageList.length;
    this.rightCount = -1;
    this.currentPosition = this.count;
    this.interval = setInterval(() => {
      slide.scrollLeft += 150;
    }, 2500);

    this.leftCount = -1;
    //unshift to beginning

    slide.onscroll = () => {
      if (slide.scrollLeft == 0) {
        this.imageList.unshift(this.reverseImage[7]);
        this.imageList.unshift(this.reverseImage[7]);
      }
    };

    ///push to the last
  
    setInterval(() => {
      //console.log(this.count)
      if (this.rightCount > len) {
          this.rightCount = 2;

          this.imageList.push(this.imageList[this.rightCount]);
        } else {
          this.rightCount++;
          this.imageList.push(this.imageList[this.rightCount]);
        } 
        /*
      if (slide.scrollLeft + slide.offsetWidth >= slide.scrollWidth) {
        //console.log(this.count)  
      }
       */
      
    }, 500);
    
   
    
  },
  methods: {
    toLeft() {
      clearInterval(this.interval);
      let slide = this.$refs.slide;
      slide.scrollBy({ left: -150, behavior: "smooth" });
      //this.imageList.unshift(this.reverseImage[0]);
      
      if (slide.scrollLeft == 0) {
        this.imageList.unshift(this.reverseImage[7]);
      }
      
    },
    toRight() {
      let slide = this.$refs.slide;

      clearInterval(this.interval);
      slide.scrollBy({ left: 150, behavior: "smooth" });
      /*
      //let this.count = 0;
      let len = this.imageList.length;
      //console.log(slide.scrollLeft + slide.offsetWidth )
      //console.log(this.currentPosition)

      //console.log(this.count)
      if (slide.scrollLeft + slide.offsetWidth >= slide.scrollWidth) {
      }
      */
    },
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
.hide-scroll::-webkit-scrollbar {
  display: none;
}
</style>
