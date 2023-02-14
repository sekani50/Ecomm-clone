<!-- eslint-disable -->
<template>
  
  <div
    @click.self="cartClick(isCartClick)"
    class="cart z-[1050] w-full bg-black bg-opacity-30  cursor-pointer text-zinc-800 fixed inset-0 h-full text-sm overflow-hidden"
  >
    <section
      class="cartb swipeInRight w-[400px] max-[450px]:w-full h-full top-0 right-0 bg-white absolute"
    >
      <!--cart header-->
      <div class="shop border-b border-gray-100 w-full h-3/12">
        <div class="flex justify-between items-center h-full w-full p-6">
          <h1 class="lg:text-3xl text-2xl font-bold">Shopping Cart</h1>
          <div @click="cartClick(isCartClick)" v-html="images.del"></div>
        </div>
      </div>
      <div
        class="order w-full text-center p-4 h-3/4 space-y-6 relative overflow-auto"
      >
        <!--orders-->
        <div
          :class="showProducts.length >= 1 ? 'hidden' : 'block'"
          class="w-[50%] h-[50%] absolute m-auto inset-0"
        >
          <div class="m-auto" v-html="images.empty"></div>
          <p class="p-6">CART IS EMPTY</p>
        </div>
        <div
          v-for="(values, index) in showProducts"
          :key="index"
          class="w-11/12 h-1/4 flex flex-col space-y-8"
        >
          <div class="w-full h-full flex gap-2">
            <div class="h-full w-fit">
              <div class="group h-full w-[120px] bg-transparent relative">
                <img
                  class="w-full h-full rounded-md object-cover"
                  :src="values.productImage"
                  alt="pic"
                />
                <div
                  class="absolute top-0 left-0 group-hover:bg-black w-full h-full rounded-md group-hover:bg-opacity-30"
                >
                  <span v-html="images.cartDel" @click="removeProduct(index)"></span>
                </div>
              </div>
            </div>

            <div
              class="h-full flex flex-col w-[80%] space-y-3.5 sm:space-y-2.5"
            >
              <p class="truncate text-lg w-full text-zinc-800">
                {{ values.productName }}
              </p>
              <p class="text-gray-300 font-thin text-lg truncate">
                Unit Price : <span>&#8358;</span
                ><span>{{ values.productUnitPrice.toFixed() }}</span>
              </p>
              <div class="flex justify-between items-center">
                <div
                  class="flex text-white font-semibold bg-zinc-800 h-12 items-center w-32 rounded-md"
                >
                  <button
                    @click="reduceMore(index)"
                    class="p-2 rounded-l-md hover:bg-zinc-700 h-full w-4/12"
                  >
                    <div class="px-2" v-html="images.minus"></div>
                  </button>
                  <button class="p-2 h-full hover:hover:bg-zinc-700 w-4/12">
                    {{ count == 0 ? values.productCount : count }}
                  </button>
                  <button
                    @click="addMore(index)"
                    class="p-2 rounded-r-md hover:hover:bg-zinc-700 h-full w-4/12"
                  >
                    <div class="px-2" v-html="images.plus"></div>
                  </button>
                </div>

                <div class="font-bold ml-3 text-lg text-zinc-800 mt-2">
                  <span>&#8358;</span
                  ><span class="">{{ values.productSalePrice.toFixed() }}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            :class="index == showProducts.length - 1 ? 'hidden' : 'block'"
            class="h-8 bg-none"
          ></div>
        </div>
      </div>
      <!--checkout-->
      <div class="btn w-full h-1/5 p-6">
        <button
          :disabled="showProducts.length < 1"
          @click="sendToOrder"
          class="mx-auto hover:hover:bg-zinc-700 bg-zinc-800 text-white px-4 py-4 text-lg rounded-md flex justify-between items-center"
        >
          <span>Proceed To Checkout</span>
          <span
            ><span class="ml-4 mr-2 border-l"></span><span>&#8358;</span
            >{{ updateTotal }}</span
          >
        </button>
      </div>
    </section>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import { assets } from "@/assets/Urls.image.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartBox",

  data() {
    return {
      images: assets,
      isCartClick: true,
      isEmpty: true,
      notEmpty: false,
      count: 0,
      price: 0,
    };
  },
  computed: {
    ...mapGetters(["showProducts", "updateTotal","getCart"]),

  },

  methods: {
    ...mapActions(["getNumOfSelectedItem", "removeAProduct", "cartClick"]),
    addMore(idx) {
      this.showProducts.forEach((val, index) => {
        if (idx == index) {
          val.productCount++;
          val.productSalePrice += val.productUnitPrice;

          this.getNumOfSelectedItem({
            index,
            count: val.productCount,
            price: val.productSalePrice,
          });

          this.count = val.productCount;

          //console.log(val.productCount);
        }
      });
    },
    reduceMore(idx) {
      this.showProducts.forEach((val, index) => {
        if (idx == index) {
          val.productCount > 1 ? val.productCount-- : (val.productCount = 1);
          val.productSalePrice -= val.productUnitPrice;
          //this.count--;
          this.getNumOfSelectedItem({
            index,
            count: val.productCount,
            price: val.productSalePrice,
          });

          this.count = val.productCount;
          //console.log(val.productCount);
        }
      });
    },
    removeProduct(idx) {
      this.removeAProduct(idx)
    },
    sendToOrder() {
      this.$router.push("/checkout");
      
    },
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
/* eslint-disable */
html,
body {
  overflow: hidden;
}
::-webkit-scrollbar {
  width: 7px;
}



.cartb {
  -webkit-animation-duration: 0.4s;
  animation-duration: 0.4s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>
