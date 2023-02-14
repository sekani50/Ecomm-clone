<!-- eslint-disable -->
<template>
  <div
    @click.self="backgClick(isBackgClick)"
    
    class="bg-black bg-opacity-30 z-50 w-full h-full text-lg fixed top-0 right-0 cursor-pointer lg:hidden"
  >
    <div class="mobile-navs swipeInLeft h-full w-fit max-[450px]:w-full bg-white">
      <div class="flex justify-between items-center px-3 h-24">
        <img class="my-auto pl-6" :src="images.logo" alt="chawk" />
        <div @click="backgClick(isBackgClick)" v-html="images.del"></div>
      </div>
      <hr />
      <div class="p-6 w-full h-4/5 overflow-y-auto">
        <!--men-->
        <div class="men">
          <a
            @click.prevent="menClick"
            href=""
            class="flex w-full justify-between py-4 items-center"
          >
            <span> Men Wear </span>
            <div
              :class="isMenClick ? '' : 'rotate-180'"
              v-html="images.showMore"
            ></div>
          </a>

          <ul :class="isMenClick ? 'hidden' : 'block'" class="dashed">
            <li class="pl-6 py-3">
              <a href="" class=""><span class="pl-2">T-Shirts</span></a>
            </li>
            <li class="pl-6 py-3">
              <a href="" class=""><span class="pl-2">Casual Shirts</span></a>
            </li>
            <li class="pl-6 py-3">
              <a href="" class=""><span class="pl-2">Formal Shirts</span></a>
            </li>
            <li class="pl-6 py-3">
              <a href="" class=" "
                ><span class="pl-2">Blazwers & Coats</span></a
              >
            </li>
            <li class="pl-6 py-3">
              <a href="" class=" "><span class="pl-2">Suits</span></a>
            </li>
            <li class="pl-6 py-3">
              <a href="" class=" "><span class="pl-2">Jumpsuits</span></a>
            </li>
            <li class="pl-6 py-3">
              <a href="" class=" "><span class="pl-2">Jackets</span></a>
            </li>
          </ul>
        </div>

        <!--women-->
        <div class="women">
          <a
            @click.prevent="womenClick"
            href=""
            class="flex w-full py-4 justify-between items-center"
          >
            <span>Women Wear</span>
            <div
              :class="isWomenClick ? '' : 'rotate-180'"
              v-html="images.showMore"
            ></div>
          </a>
          <ul :class="isWomenClick ? 'hidden' : 'block'" class="dashed">
            <li class="pl-6 py-3">
              <a href="" class=""><span class="pl-2">Western Wear</span></a>
            </li>
            <li class="pl-6 py-3">
              <a href="" class=""><span class="pl-2">Dresses</span></a>
            </li>
            <li class="pl-6 py-3">
              <a href="" class=""><span class="pl-2">Jumpsuits</span></a>
            </li>
            <li class="pl-6 py-3">
              <a href="" class=" "
                ><span class="pl-2">Tops, T-shirts & Skirts</span></a
              >
            </li>
            <li class="pl-6 py-3">
              <a href="" class=" "><span class="pl-2">Blazers & Coats</span></a>
            </li>
            <li class="pl-6 py-3">
              <a href="" class=" "><span class="pl-2">Shrugs</span></a>
            </li>
            <li class="pl-6 py-3">
              <a href="" class=" "><span class="pl-2">Blazers</span></a>
            </li>
          </ul>
        </div>

        <a class="block py-3" href=""> Search </a>
        <a class="block py-3" href=""> Shops </a>

        <div class="">
          <a
            @click.prevent="pageClick"
            href=""
            class="flex w-full py-4 justify-between items-center"
          >
            <span>Pages</span>
            <div
              :class="isPageClick ? '' : 'rotate-180'"
              v-html="images.showMore"
            ></div>
          </a>
          <div :class="isPageClick ? 'hidden' : 'block'">
            <a
              @click.prevent="subPageClick"
              href=""
              class="flex w-full justify-between py-4 items-center"
            >
              <span> Users </span>
              <div
                :class="isSubPageClick ? '' : 'rotate-180'"
                v-html="images.showMore"
              ></div>
            </a>
            <ul :class="isSubPageClick ? 'hidden' : 'block'" class="dashed">
              <li class="pl-6 py-3">
                <a href="" class=""><span class="pl-2">My Account</span></a>
              </li>
              <li class="pl-6 py-3">
                <a href="" class=""><span class="pl-2">Sign In</span></a>
              </li>
              <li class="pl-6 py-3">
                <a href="" class=""><span class="pl-2">Sign Up</span></a>
              </li>
              <li class="pl-6 py-3">
                <a href="" class=" "
                  ><span class="pl-2">Forget Password</span></a
                >
              </li>
            </ul>
            <ul class="dashed">
              <li class="pl-6 py-3">
                <a href="" class=""><span class="pl-2">FAQ</span></a>
              </li>
              <li class="pl-6 py-3">
                <a href="" class=""><span class="pl-2">Privacy Policy</span></a>
              </li>
              <li class="pl-6 py-3">
                <a href="" class=""
                  ><span class="pl-2">Terms & Condition</span></a
                >
              </li>
              <li class="pl-6 py-3">
                <a href="" class=" "><span class="pl-2">Contact Us</span></a>
              </li>
              <li class="pl-6 py-3">
                <a href="" class=" "><span class="pl-2">Checkout</span></a>
              </li>
              <li class="pl-6 py-3">
                <a href="" class=" "><span class="pl-2">Collection</span></a>
              </li>
              <li class="pl-6 py-3">
                <a href="" class=" "><span class="pl-2">Order</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div class="w-full px-24 flex justify-around items-center">
        <a
          href="https://www.facebook.com"
          class="p-6"
          v-html="images.facebook"
        ></a>
        <a
          href="https://www.twitter.com"
          class="p-6"
          v-html="images.twitter"
        ></a>
        <a
          href="https://www.youtube.com"
          class="p-6"
          v-html="images.youtube"
        ></a>
        <a
          href="https://www.instagram.com"
          class="p-6"
          v-html="images.instagram"
        ></a>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import { assets } from "@/assets/Urls.image.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MobileTray",
  
  data() {
    return {
      images: assets,
      isMenClick: true,
      isWomenClick: true,
      isPageClick: true,
      isSubPageClick: true,
      isBackgClick: true,
    };
  },
  computed: {
    ...mapGetters(["getBackg"]),
  },
  methods: {
    ...mapActions([ "backgClick"]),
    ///////mobile tray clicks////////////
    menClick() {
      this.isMenClick = !this.isMenClick;
    },
    womenClick() {
      this.isWomenClick = !this.isWomenClick;
    },
    pageClick() {
      this.isPageClick = !this.isPageClick;
    },
    subPageClick() {
      this.isSubPageClick = !this.isSubPageClick;
    },
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
ul.dashed {
  list-style-type: none;
}
ul.dashed > li {
  text-indent: -20px;
}
ul.dashed > li:before {
  content: "–";
  text-indent: -20px;
}

.mobile-navs {
  -webkit-animation-duration: 0.4s;
  animation-duration: 0.4s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>
