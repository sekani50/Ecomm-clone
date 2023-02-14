<!--eslint-disable-->
<template>
  <div
    class="w-full h-full bg-black text-zinc-800 fixed inset-0 bg-opacity-50 z-40 overflow-hidden"
    @click.self="closeDetail"
  >
    <div
      v-if="isFlashSales"
      class="w-10/12 sm:w-3/4 lg:w-[1010px] h-4/5 fixed inset-0 m-auto overflow-auto transform transition duration-300 ease-in-out bg-white rounded-lg"
    >
      <div v-for="(name, index) in flashSales" :key="index">
        <div v-if="index == flashid">
          <div class="grid lg:grid-cols-2 lg:gap-8 gap-4">
            <div class="lg:h-[700px]">
              <img
                :src="flashImages[index].image"
                alt="flash"
                class="sm:w-[450px] lg:w-full m-auto lg:m-0 w-full object-fill h-full rounded-tl-lg"
              />
            </div>
            <div
              class="sm:px-6 px-4 lg:px-6 pt-3 sm:pt-6 sm:space-y-8 space-y-5"
            >
              <div class="text-xl sm:text-2xl font-bold">{{ name.name }}</div>
              <div
                class="text-[15px] text-zinc-700 sm:text-lg leading-8 sm:leading-10 font-thin tex"
              >
                {{ name.description }}
              </div>
              <div class="flex flex-row">
                <div class="text-lg sm:text-2xl font-bold">
                  {{ (name.salePrice * 500) | currency("₦") }}
                </div>
                <div
                  class="text-lg sm:text-2xl text-gray-300 line-through ml-6"
                >
                  {{ (name.price * 500) | currency("₦") }}
                </div>
              </div>

              <div class="text-lg sm:text-xl font-semibold space-y-3">
                <p>Size</p>

                <div class="flex flex-row space-x-3">
                  <div
                    v-for="(value, index) in name.variations"
                    :key="value.value"
                    v-if="index < 4"
                    @click="selectSize(index)"
                  >
                    <div
                      :class="
                        isSelectSize == true && sizeId == index
                          ? 'ring-zinc-800'
                          : 'ring-gray-200'
                      "
                      class="sm:border-2 border ring-1 hover:border-zinc-800 text-sm w-10 py-2 px-3 sm:w-12 sm:px-4 sm:py-3 rounded-md"
                    >
                      {{ value.value }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="cursor-pointer text-lg sm:text-xl font-semibold space-y-3"
              >
                <p>Color</p>
                <div class="flex">
                  <div
                    v-for="(meta, index) in name.variations"
                    :key="index"
                    v-if="index > 3 && index < 8"
                    @click="selectColor(index)"
                  >
                    <div
                      :class="
                        isSelectColor == true && colorId == index
                          ? 'ring-zinc-800'
                          : 'ring-gray-200'
                      "
                      class="w-8 sm:w-10 sm:h-10 h-8 rounded-sm mr-5 ring-1 focus:ring-zinc-800 ring-offset-4 hover:ring-zinc-800"
                      :style="{ 'background-color': meta.meta }"
                    ></div>
                  </div>
                </div>
              </div>

              <div
                class="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-6 sm:pt-0 py-6"
              >
                <div
                  class="sm:col-span-1 flex border text-zinc-800 font-semibold bg-white h-10 sm:h-14 items-center rounded-sm sm:rounded-md"
                >
                  <button
                    @click="count++"
                    class="p-2 flex justify-center items-center hover:text-white rounded-l-md hover:bg-zinc-800 h-full w-4/12"
                  >
                    <div v-html="images.plus"></div>
                  </button>
                  <button class="p-2 border-l border-r h-full w-5/12">
                    {{ count }}
                  </button>
                  <button
                    @click="count > 1 ? count-- : count == 1"
                    class="p-2 flex justify-center items-center rounded-r-md hover:text-white hover:hover:bg-zinc-800 h-full w-4/12"
                  >
                    <div v-html="images.minus"></div>
                  </button>
                </div>

                <button
                  @click="sendToCart(flashid)"
                  :class="
                    isSelectColor && isSelectSize ? 'not-disable' : 'disable'
                  "
                  :disabled="!isSelectColor && !isSelectSize"
                  class="text-white sm:col-span-2 sm:font-semibold px-8 py-2 sm:px-20 sm:py-4 rounded-md sm:rounded-lg"
                >
                  Add to Cart
                </button>
                <button
                  @click="showCart"
                  v-if="isSubmitted"
                  class="col-span-2 sm:col-span-3 sm:font-semibold px-5 py-2 hover:bg-gray-100 bg-gray-200 sm:px-20 sm:py-4 rounded-md sm:rounded-lg"
                >
                  View Cart
                </button>
                <button
                  class="col-span-2 sm:col-span-3 text-white sm:font-semibold px-5 py-2 bg-zinc-800 sm:px-20 sm:py-4 rounded-md sm:rounded-lg"
                >
                  Show Cart Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--featured product-->
    <div
      v-else-if="isFeatureProduct"
      class="w-10/12 sm:w-3/4 lg:w-[1010px] h-4/5 fixed inset-0 m-auto overflow-auto transform transition duration-300 ease-in-out bg-white rounded-lg"
    >
      <div v-for="(name, index) in featuredProducts" :key="index">
        <div v-if="index == featProductidx">
          <div class="grid lg:grid-cols-2 lg:gap-8 gap-4">
            <div class="lg:h-[700px]">
              <img
                :src="featuredImages[featProductidx].image"
                alt="flash"
                class="sm:w-[450px] lg:w-full m-auto lg:m-0 w-full object-fill h-full rounded-tl-lg"
              />
            </div>
            <div
              class="sm:px-6 px-4 lg:px-6 pt-3 sm:pt-6 sm:space-y-8 space-y-5"
            >
              <div class="text-xl sm:text-2xl font-bold">{{ name.name }}</div>
              <div
                class="text-[15px] text-zinc-700 sm:text-lg leading-8 sm:leading-10 font-thin tex"
              >
                {{ name.description }}
              </div>
              <div class="flex flex-row">
                <div class="text-lg sm:text-2xl font-bold">
                  {{ (name.salePrice * 500) | currency("₦") }}
                </div>
                <div
                  class="text-lg sm:text-2xl text-gray-300 line-through ml-6"
                >
                  {{ (name.price * 500) | currency("₦") }}
                </div>
              </div>

              <div class="text-lg sm:text-xl font-semibold space-y-3">
                <p>Size</p>

                <div class="flex flex-row space-x-3">
                  <div
                    v-for="(value, index) in name.variations"
                    :key="index"
                    v-if="index < 4"
                    @click="selectSize(index)"
                  >
                    <div
                      :class="
                        isSelectSize == true && sizeId == index
                          ? 'ring-zinc-800'
                          : 'ring-gray-200'
                      "
                      class="sm:border-2 border ring-1 hover:border-zinc-800 text-sm w-10 py-2 px-3 sm:w-12 sm:px-4 sm:py-3 rounded-md"
                    >
                      {{ value.value }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="cursor-pointer text-lg sm:text-xl font-semibold space-y-3"
              >
                <p>Color</p>
                <div class="flex">
                  <div
                    v-for="(meta, index) in name.variations"
                    :key="index"
                    v-if="index > 3 && index < 8"
                    @click="selectColor(index)"
                  >
                    <div
                      :class="
                        isSelectColor == true && colorId == index
                          ? 'ring-zinc-800'
                          : 'ring-gray-200'
                      "
                      class="w-8 sm:w-10 sm:h-10 h-8 rounded-sm mr-5 ring-1 focus:ring-zinc-800 ring-offset-4 hover:ring-zinc-800"
                      :style="{ 'background-color': meta.meta }"
                    ></div>
                  </div>
                </div>
              </div>

              <div
                class="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-6 sm:pt-0 py-6"
              >
                <div
                  class="sm:col-span-1 flex border text-zinc-800 font-semibold bg-white h-10 sm:h-14 items-center rounded-sm sm:rounded-md"
                >
                  <button
                    @click="count++"
                    class="p-2 flex justify-center items-center hover:text-white rounded-l-md hover:bg-zinc-800 h-full w-4/12"
                  >
                    <div v-html="images.plus"></div>
                  </button>
                  <button class="p-2 border-l border-r h-full w-5/12">
                    {{ count }}
                  </button>
                  <button
                    @click="count > 1 ? count-- : count == 1"
                    class="p-2 flex justify-center items-center rounded-r-md hover:text-white hover:hover:bg-zinc-800 h-full w-4/12"
                  >
                    <div v-html="images.minus"></div>
                  </button>
                </div>

                <button
                  @click="sendToCart(featProductidx)"
                  :class="
                    isSelectColor && isSelectSize ? 'not-disable' : 'disable'
                  "
                  :disabled="!isSelectColor && !isSelectSize"
                  class="text-white sm:col-span-2 sm:font-semibold px-8 py-2 sm:px-20 sm:py-4 rounded-md sm:rounded-lg"
                >
                  Add to Cart
                </button>
                <button
                  @click="showCart"
                  v-if="isSubmitted"
                  class="col-span-2 sm:col-span-3 sm:font-semibold px-5 py-2 hover:bg-gray-100 bg-gray-200 sm:px-20 sm:py-4 rounded-md sm:rounded-lg"
                >
                  View Cart
                </button>
                <button
                  class="col-span-2 sm:col-span-3 text-white sm:font-semibold px-5 py-2 bg-zinc-800 sm:px-20 sm:py-4 rounded-md sm:rounded-lg"
                >
                  Show Cart Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--new arrivals-->
    <div
      v-else
      class="w-10/12 sm:w-3/4 lg:w-[1010px] h-4/5 fixed inset-0 m-auto overflow-auto transform transition duration-300 ease-in-out bg-white rounded-lg"
    >
      <div v-for="(name, index) in newArrivalData" :key="index">
        <div v-if="index == newArrivalidx">
          <div class="grid lg:grid-cols-2 lg:gap-8 gap-4">
            <div class="lg:h-[700px]">
              <img
                :src="newArrival[newArrivalidx]"
                alt="flash"
                class="sm:w-[450px] lg:w-full m-auto lg:m-0 w-full object-fill h-full rounded-tl-lg"
              />
            </div>
            <div
              class="sm:px-6 px-4 lg:px-6 pt-3 sm:pt-6 sm:space-y-8 space-y-5"
            >
              <div class="text-xl sm:text-2xl font-bold">{{ name.name }}</div>
              <div
                class="text-[15px] text-zinc-700 sm:text-lg leading-8 sm:leading-10 font-thin tex"
              >
                {{ name.description }}
              </div>
              <div class="flex flex-row">
                <div class="text-lg sm:text-2xl font-bold">
                  {{ (name.salePrice * 500) | currency("₦") }}
                </div>
                <div
                  class="text-lg sm:text-2xl text-gray-300 line-through ml-6"
                >
                  {{ (name.price * 500) | currency("₦") }}
                </div>
              </div>

              <div class="text-lg sm:text-xl font-semibold space-y-3">
                <p>Size</p>

                <div class="flex flex-row space-x-3">
                  <div
                    v-for="(value, index) in name.variations"
                    :key="index"
                    v-if="index < 4"
                    @click="selectSize(index)"
                  >
                    <div
                      :class="
                        isSelectSize == true && sizeId == index
                          ? 'ring-zinc-800'
                          : 'ring-gray-200'
                      "
                      class="sm:border-2 border ring-1 hover:border-zinc-800 text-sm w-10 py-2 px-3 sm:w-12 sm:px-4 sm:py-3 rounded-md"
                    >
                      {{ value.value }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="cursor-pointer text-lg sm:text-xl font-semibold space-y-3"
              >
                <p>Color</p>
                <div class="flex">
                  <div
                    v-for="(meta, index) in name.variations"
                    :key="meta.meta"
                    v-if="index > 3 && index < 8"
                    @click="selectColor(index)"
                  >
                    <div
                      :class="
                        isSelectColor == true && colorId == index
                          ? 'ring-zinc-800'
                          : 'ring-gray-200'
                      "
                      class="w-8 sm:w-10 sm:h-10 h-8 rounded-sm mr-5 ring-1 focus:ring-zinc-800 ring-offset-4 hover:ring-zinc-800"
                      :style="{ 'background-color': meta.meta }"
                    ></div>
                  </div>
                </div>
              </div>

              <div
                class="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-6 sm:pt-0 py-6"
              >
                <div
                  class="sm:col-span-1 flex border text-zinc-800 font-semibold bg-white h-10 sm:h-14 items-center rounded-sm sm:rounded-md"
                >
                  <button
                    @click="count++"
                    class="p-2 flex justify-center items-center hover:text-white rounded-l-md hover:bg-zinc-800 h-full w-4/12"
                  >
                    <div v-html="images.plus"></div>
                  </button>
                  <button class="p-2 border-l border-r h-full w-5/12">
                    {{ count }}
                  </button>
                  <button
                    @click="count > 1 ? count-- : count == 1"
                    class="p-2 flex justify-center items-center rounded-r-md hover:text-white hover:hover:bg-zinc-800 h-full w-4/12"
                  >
                    <div v-html="images.minus"></div>
                  </button>
                </div>

                <button
                  @click="sendToCart(newArrivalidx)"
                  :class="
                    isSelectColor && isSelectSize ? 'not-disable' : 'disable'
                  "
                  :disabled="!isSelectColor && !isSelectSize"
                  class="text-white sm:col-span-2 sm:font-semibold px-8 py-2 sm:px-20 sm:py-4 rounded-md sm:rounded-lg"
                >
                  Add to Cart
                </button>
                <button
                  @click="showCart"
                  v-if="isSubmitted"
                  class="col-span-2 sm:col-span-3 sm:font-semibold px-5 py-2 hover:bg-gray-100 bg-gray-200 sm:px-20 sm:py-4 rounded-md sm:rounded-lg"
                >
                  View Cart
                </button>

                <button
                  class="col-span-2 sm:col-span-3 text-white sm:font-semibold px-5 py-2 bg-zinc-800 sm:px-20 sm:py-4 rounded-md sm:rounded-lg"
                >
                  Show Cart Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
import {
  assets,
  featuredImages,
  flashSalesImage,
} from "@/assets/Urls.image.js";
import { mapActions } from "vuex";

export default {
  name: "ProductDetail",
  props: [
    "flashSales",
    "flashid",
    "showDetail",
    "featuredProducts",
    "newArrival",
    "newArrivalData",
    "newArrivalidx",
    "featProductidx",
    "isFeatureProduct",
    "isFlashSales",
  ],

  data() {
    return {
      flashImages: flashSalesImage,
      featuredImages: featuredImages,

      images: assets,
      isSubmitted: false,
      isSelectColor: false,
      isSelectSize: false,
      isCartClick: false,
      colorId: 0,
      sizeId: 0,
      count: 1,
      productName: "",
      productPrice: "",
      productSalePrice: "",
      productImage: "",
      productCount: 1,
      total: 0,
      productInfo: {},
    };
  },

  methods: {
    ...mapActions(["getProductInfo", "getProductCount", "cartClick"]),
    selectColor(id) {
      this.isSelectColor = true;
      this.colorId = id;
    },
    selectSize(id) {
      this.isSelectSize = true;
      this.sizeId = id;
    },
    closeDetail() {
      this.showDetail();
      this.isSelectColor = false;
      this.isSelectSize = false;
      this.colorId = 0;
      this.sizeId = 0;
      this.count = 1;
      this.isSubmitted = false;
      this.isSelectColor = false;
      this.isSelectSize = false;
    },
    showCart() {
      this.cartClick(this.isCartClick);
      this.showDetail();
      this.colorId = 0;
      this.sizeId = 0;
      this.isSubmitted = false;
      this.isSelectColor = false;
      this.isSelectSize = false;
      this.count = 1;
    },
    sendToCart(idx) {
      this.isSubmitted = true;
      if (this.isFlashSales) {
        this.flashSales.forEach((name, id) => {
          if (id == idx) {
            this.productInfo.productName = name.name;
            this.productInfo.productSalePrice =
              name.salePrice * 500 * this.count;
            this.productInfo.productPrice = name.price * 500 * this.count;
            this.productInfo.productCount = this.count;
            this.productInfo.productUnitPrice = name.salePrice * 500;
          }
        });

        this.flashImages.forEach((image, id) => {
          if (id == idx) {
            this.productInfo.productImage = image.image;
          }
        });
      } else if (this.isFeatureProduct) {
        this.featuredProducts.forEach((name, id) => {
          if (id == idx) {
            this.productInfo.productName = name.name;
            this.productInfo.productSalePrice =
              name.salePrice * 500 * this.count;
            this.productInfo.productCount = this.count;
            this.productInfo.productUnitPrice = name.salePrice * 500;
            this.productInfo.productPrice = name.price * 500 * this.count;
          }
        });

        this.featuredImages.forEach((image, id) => {
          if (id == idx) {
            this.productInfo.productImage = image.image;
          }
        });
      } else {
        this.newArrivalData.forEach((name, id) => {
          if (id == idx) {
            this.productInfo.productName = name.name;
            this.productInfo.productSalePrice =
              name.salePrice * 500 * this.count;
            this.productInfo.productPrice = name.price * 500 * this.count;
            this.productInfo.productCount = this.count;
            this.productInfo.productUnitPrice = name.salePrice * 500;
          }
        });

        this.newArrival.forEach((image, id) => {
          if (id == idx) {
            this.productInfo.productImage = image;
          }
        });
      }
      this.getProductInfo(this.productInfo);
      //console.log(this.productInfo);

      this.getProductCount(this.count);
      this.productInfo = {};
      //console.log(this.productInfo)
    },
  },
};
</script>
<!--eslint-disable-->
<style scoped>
/*eslint-disable*/

.disable {
  @apply bg-gray-200;
}
.not-disable {
  @apply bg-zinc-800 hover:bg-zinc-700;
}
</style>
