<!-- eslint-disable -->
<template>
  <!--navbar-->
  <div class="w-full">
    <div
      class="navpar w-[99%] h-20 sm:h-24 fixed top-0 left-0 z-30 bg-white border-b-2 shadow-[0_0_6px__rgba(0,0,0,0.5)"
    >
      <div class="hello flex justify-between items-center w-[97%] h-full mx-3">
        <div class="flex w-3/5 sm:text-[16px] lg:justify-around">
          <div class="flex">
            <img :src="images.logo" alt="chawk" />
          </div>
          <a
            href=""
            @mouseenter="isMenHover = !isMenHover"
            @mouseleave="isMenHover = !isMenHover"
            class="navs p-rotate lg:flex hidden pl-4 pr-2 relative items-center"
          >
            Men Wear
            <div class="rotate ml-1" v-html="images.showMore"></div>
            <!--navbar list-->
            <div
              :class="isMenHover ? 'hidden' : 'flex'"
              class="list swipeUp fixed sm:text-[15px] lg:w-11/12 xl:w-4/6 h-[53%] left-[9%] top-[12.2%] lg:shadow-lg shadow-gray-900/50 z-30 cursor-pointer"
            >
              <MenWears />
            </div>
          </a>
          <a
            href=""
            @mouseenter="isWomenHover = !isWomenHover"
            @mouseleave="isWomenHover = !isWomenHover"
            class="navs p-rotate relative pl-4 pr-2 lg:flex hidden items-center"
          >
            Women Wear
            <div class="rotate ml-1" v-html="images.showMore"></div>
            <!--navbar list-->
            <div
              :class="isWomenHover ? 'flex' : 'hidden'"
              class="list swipeUp fixed sm:text-[15px] lg:w-11/12 xl:w-4/6 h-[53%] left-[20%] top-[12.2%] lg:shadow-lg shadow-gray-900/50 z-30 cursor-pointer"
            >
              <WomenWears />
            </div>
          </a>

          <a href="" class="navs relative lg:flex hidden px-4 py-12 mt-1">
            Search
          </a>
          <a href="" class="navs lg:flex hidden relative px-4 py-12 mt-1">
            Shops
          </a>
          <a
            href=""
            @mouseenter="pageHover"
            @mouseleave="pageHover"
            class="navs p-rotate relative pl-4 pr-2 lg:flex hidden items-center"
          >
            Pages
            <div class="rotate ml-1" v-html="images.showMore"></div>
            <!--Other pages nav-->
            <div
              :class="isPageHover ? 'hidden' : 'flex'"
              class="list swipeUp fixed top-[12.2%] bg-gray-50 py-6 xl:w-1/6 lg:w-[20%] h-[50%] lg:shadow-lg shadow-gray-900/50 z-30 cursor-pointer"
            >
              <OtherNavs />
            </div>
          </a>
        </div>
        <div class="lg:flex hidden justify-between items-center w-[15%]">
          <div
            @click="searchClick(isSearchClick)"
            class="cursor-pointer"
            v-html="images.search"
          ></div>

          <a href="" class="sm:text-lg font-semibold text-neutral-700">
            Account
          </a>
          <!--cart-->
          <div @click="cartClick(isCartClick)" class="relative cursor-pointer">
            <div v-html="images.cart"></div>
            <div
              class="absolute px-2 py-1 -top-3 -right-4 text-[11px] rounded-full bg-black text-white"
            >
              {{ displayNumber  }}
            </div>
          
          </div>
        </div>
      </div>
    </div>
    <!--Search field-->
    <div @click="searchClick(!isSearchClick)">
      <div :class="getSearch ? 'block' : 'hidden'">
        <NavSearch />
      </div>
    </div>
    <!--cart box-->
    <div :class="getCart? 'block' : 'hidden'" >
      <div class="w-full h-full">
        <CartBox />
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import CartBox from "@/components/modals/cartbox.vue";
import NavSearch from "@/components/modals/navsearch.vue";
import { assets } from "@/assets/Urls.image.js";
import MenWears from "@/components/modals/menwears.vue";
import WomenWears from "@/components/modals/womenwears.vue";
import OtherNavs from "@/components/modals/pagesNavig.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HeadPanel",
  components: {
    MenWears,
    CartBox,
    NavSearch,
    WomenWears,
    OtherNavs,
  },

  data() {
    return {
      images: assets,
      isCartClick: false,
      isSearchClick: false,
      count:0,
      isMenHover: true,
      isWomenHover: false,
      isPageHover: true,
    };
  },
  computed: {
    ...mapGetters(["displayNumber","getCart","getSearch","getBackg"])


  },
  methods: {
    ...mapActions(["cartClick", "searchClick","backgClick"]),
    
    //hover effects
    pageHover() {
      this.isPageHover = !this.isPageHover;
    },
  },
};
</script>
<!-- eslint-disable -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* eslint-disable */

.navpar {
  font-family: "Open Sans", sans-serif;
}

.navs::after {
  content: "";
  position: absolute;
  background-color: black;
  height: 4px;
  width: 0%;
  bottom: 15px;
  left: 0;
  transition: 0.3s;
}

.navs:hover::after {
  width: 100%;
}
.p-rotate:hover .rotate {
  transform: rotate(180deg);
}

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

/** */

.mens {
  display: flex;
}
.women {
  display: flex;
}
.others {
  display: block;
}
</style>
