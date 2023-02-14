<!-- eslint-disable -->
<template>
  <div class="others w-full h-full">
    <div class="leading-10 w-full text-[17px]">
      <a
        href=""
        @mouseenter="userHover"
        @mouseleave="userHover"
        class="text-gray-500 relative hover:bg-gray-300 rounded block lg:min-w-max"
      >
        <div class="w-full flex justify-between items-center">
          <span class="pl-4">Users</span>
          <div class="rotate-[270deg] mr-2" v-html="images.showMore"></div>
        </div>

        <div
          :class="isUserHover ? 'hidden' : 'block'"
          class="list swipeUp bg-gray-50 left-[-100%] absolute top-[20%] py-8 leading-10 w-[100%] lg:shadow-lg shadow-gray-900/50"
        >
          <!--Account Nav-->
          <a
            href=""
            class="text-gray-500 hover:bg-gray-300 rounded block lg:min-w-max"
            ><span class="pl-4">My Account</span></a
          >
          <a
            href=""
            class="text-gray-500 hover:bg-gray-300 rounded block lg:min-w-max"
            ><span class="pl-4">Sign In</span></a
          >

          <a
            href=""
            class="text-gray-500 hover:bg-gray-300 rounded block lg:min-w-max"
            ><span class="pl-4">Sign Up</span></a
          >
          <a
            href=""
            class="text-gray-500 hover:bg-gray-300 rounded block lg:min-w-max"
            ><span class="pl-4">Forget Password</span></a
          >
        </div>
      </a>
      <a
        href=""
        class="text-gray-500 hover:bg-gray-300 rounded block lg:min-w-max"
        ><span class="pl-4">FAQ</span></a
      >
      <a
        href=""
        class="text-gray-500 hover:bg-gray-300 rounded block lg:min-w-max"
        ><span class="pl-4">Privacy Policy</span></a
      >

      <a
        href=""
        class="text-gray-500 hover:bg-gray-300 rounded block lg:min-w-max"
        ><span class="pl-4">Terms & Condition</span></a
      >

      <a
        href=""
        class="text-gray-500 hover:bg-gray-300 rounded block lg:min-w-max"
        ><span class="pl-4">Contact Us</span></a
      >
      <a
        href=""
        class="text-gray-500 hover:bg-gray-300 rounded block lg:min-w-max"
        ><span class="pl-4">Collection</span></a
      >
      <a
        href=""
        class="text-gray-500 hover:bg-gray-300 rounded block lg:min-w-max"
        ><span class="pl-4">Category</span></a
      >
      <a
        href=""
        class="text-gray-500 hover:bg-gray-300 rounded block lg:min-w-max"
        ><span class="pl-4">Order</span></a
      >
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import { assets } from "@/assets/Urls.image.js";

export default {
  name: "OtherNavs",

  data() {
    return {
      images: assets,
      isUserHover: true,
    };
  },

  methods: {
    userHover() {
      this.isUserHover = !this.isUserHover;
    },
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
.list {
  -webkit-animation-duration: 0.8s;
  animation-duration: 0.8s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.swipeUp {
  animation-name: swipeUp;
  -webkit-animation-name: swipeUp;
}

@keyframes swipeUp {
  0% {
    transform: translateY(5%);
  }

  100% {
    transform: translateY(0px);
  }
}

@-webkit-keyframes swipeUp {
  0% {
    -webkit-transform: translateY(5%);
  }

  100% {
    -webkit-transform: translateY(0px);
  }
}

.others {
  display: none;
}
</style>
