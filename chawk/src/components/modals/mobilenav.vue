<!-- eslint-disable -->
<template>
  <div
    class="px-8 py-6 bg-white cursor-pointer fixed bottom-0 left-0 w-[99%] z-30 lg:hidden"
  >
    <div class="flex justify-between items-center">
      <div @click="backgClick(isbackgClick)" v-html="images.menu"></div>
      <div @click="searchClick(isSearchClick)" v-html="images.search"></div>
      <a href="#" v-html="images.home"></a>
      <!--cart-->
      <div @click="cartClick(isCartClick)" class="relative cursor-pointer">
        <div v-html="images.cart"></div>
        <div
          class="absolute px-2 py-1 -top-3 -right-4 text-[11px] rounded-full bg-black text-white"
        >
        {{ displayNumber  }}
        </div>
      </div>
      <div v-html="images.head"></div>
    </div>
     <!--Search field-->
     <div @click="searchClick(!isSearchClick)">
      <div :class="getSearch ? 'block' : 'hidden'" class="w-full h-full">
        <NavSearch />
      </div>
    </div>
    <!--cart box-->
    <div :class="getCart? 'block' : 'hidden'">
      <div class="w-full h-full">
        <CartBox />
      </div>
    </div>
    <!--mobile tray-->
    <div :class="getBackg ? 'block' : 'hidden'">
      <div class="w-full h-full">
        <MobileTray/>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import MobileTray from "@/components/modals/mobiletray.vue";
import CartBox from "@/components/modals/cartbox.vue";
import NavSearch from "@/components/modals/navsearch.vue";
import { assets } from "@/assets/Urls.image.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MobileNav",
  components:{
    NavSearch,
    CartBox,
    MobileTray,
  },

  data() {
    return {
      images: assets,
      isCartClick: false,
      isSearchClick: false,
      isbackgClick: false,
    };
  },
  computed: {
    ...mapGetters(["displayNumber","getCart","getSearch","getBackg"])

  },
  methods:{
    ...mapActions(["cartClick", "searchClick","backgClick"]),
  }
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
</style>
