<!--eslint-disable-->
<template>
  <div>
    <HeadPanel />

    <!--
    
    <div @click="bodyClick($event)">
      <div :class="isSearchClick ? 'hidden' : 'block'" class="w-full h-full">
        <NavSearch />
      </div>
    </div>
    -->

    <!--Cart box
       <div :class="isCartClick ? 'block' : 'hidden'">
      <div class="w-full h-full">
        <CartBox :cartClick="cartClick" />
      </div>
    </div>
    -->
   

    <div >
      <div class="w-full h-full">
        <MobileNav
         
        />
      </div>
    </div>

    <div class="">
      <div>
        <bodySt />
      </div>

      <!--flash sales-->
      <div class="flash-parent">
        <FlashProducts
          :flashSales="flashSales"
          :getId="getId"
          :showDetail="showDetail"
        />
      </div>

      <!--flash detail-->
      <div :class="ishowDetail ? 'block' : 'hidden'">
        <ProductDetail
          :flashSales="flashSales"
          :featuredProducts="featuredProducts"
          :newArrival="newArrival"
          :newArrivalData="newArrivalData"
          :featProductidx="featProductidx"
          :newArrivalidx="newArrivalidx"
          :flashid="flashid"
          :showDetail="showDetail"
          :isFeatureProduct="isFeatureProduct"
          :isFlashSales="isFlashSales"
         
        />
      </div>

      <div>
        <SecBanner />
      </div>

      <div>
        <ProductCat />
      </div>

      <div>
        <FeaturedProducts
          :featuredProducts="featuredProducts"
          :getfeatProductId="getfeatProductId"
          :showDetail="showDetail"
        />
      </div>
      <div>
        <ThirdBanner />
      </div>
      <div>
        <BrandsList :pexelPictures="pexelPictures" />
      </div>
      <div>
        <FourthBanner />
      </div>
      <div>
        <ExclusiveSales />
      </div>
      <div>
        <NewArrivals
          :newArrival="newArrival"
          :newArrivalData="newArrivalData"
          :getNewArrival="getNewArrival"
          :showDetail="showDetail"
        />
      </div>
      <div>
        <AdplayStore />
      </div>
    </div>

  
    <div>
      <CustomerCare :newArrival="newArrival" />
    </div>
    <div>
      <FooterNav />
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
/* eslint-disable */
import HeadPanel from "@/components/header.vue";

import MobileNav from "@/components/modals/mobilenav.vue";
import bodySt from "@/components/body.vue";
import FlashProducts from "@/components/products/flashsales.vue";
import ProductDetail from "@/components/products/productdetail.vue";
import SecBanner from "@/components/banners/secbanner.vue";
import ProductCat from "@/components/banners/productcategories.vue";
import FeaturedProducts from "@/components/products/featuredproduct.vue";
import ThirdBanner from "@/components/banners/thirdbanner.vue";
import FourthBanner from "@/components/banners/fourthbanner.vue";
import ExclusiveSales from "@/components/banners/newexclusive.vue";
import BrandsList from "@/components/modals/brandslist.vue";
import NewArrivals from "@/components/products/newarrival.vue";
import AdplayStore from "@/components/banners/adplaystore.vue";
import CustomerCare from "@/components/modals/customercare.vue";
import FooterNav from "@/components/modals/footernav.vue";

export default {
  name: "HomePage",
  components: {
    FooterNav,
    NewArrivals,
    FourthBanner,
    BrandsList,
    ExclusiveSales,
    ThirdBanner,
    ProductCat,
    ProductDetail,
    HeadPanel,
    
    MobileNav,
    bodySt,
    FlashProducts,
    SecBanner,
    FeaturedProducts,
    AdplayStore,
    CustomerCare,
  },
  data() {
    return {
      isChecker: false,
      isCartClick: false,
      isActive: true,
      isSearchClick: true,
      isbackgClick: true,
      flashSales: [],
      featuredProducts: [],
      pexelPictures: [],
      newArrival: [],
      newArrivalData: [],
      featProductidx: "",
      newArrivalidx: "",
      flashid: "",
      ishowDetail: false,
      isFeatureProduct: false,
      isFlashSales: true,
    };
  },
  created() {
    /*
   // console.log(this.$route.parent);
    //console.log(this.$route.matched);
    this.$route.matched.length === 1
      ? (this.isChecker = false)
      : (this.isChecker = true)
    
    console.log(this.$route.current);
    */

  
  },
  methods: {
    //...mapActions(["searchClick","cartClick","backgClick"]),
      
    //////cart//////////////////////
    bodyClick(event) {
      event.target.tagName === "DIV" ? (this.isSearchClick = true) : false;
      //console.log(event.target.tagName);
    },
    
    getId(idx) {
      this.flashid = idx;
      console.log(this.flashid);
      this.isFeatureProduct = false;
      this.isFlashSales = true;
    },
    getfeatProductId(idx) {
      this.featProductidx = idx;
      console.log(this.featProductidx);
      this.isFeatureProduct = true;
      this.isFlashSales = false;
    },
    getNewArrival(idx) {
      this.newArrivalidx = idx;
      console.log(this.newArrivalidx);
      this.isFeatureProduct = false;
      this.isFlashSales = false;
    },
    showDetail() {
      this.ishowDetail = !this.ishowDetail;
    },
    clearPage() {
      this.isChecker = !this.isChecker;
      //this.togglePages(this.isChecker);
      //this.isCartClick = !this.isCartClick;
    },
  },

  mounted() {
    this.axios
      .get("https://chawkbazar.vercel.app/api/products_flash_sale.json")
      .then((response) => {
        //console.log(response.data.productFlashSellGridTwo)
        const { productFlashSellGridTwo } = response.data;
        productFlashSellGridTwo.forEach((product) => {
          //console.log({'id': product.id, 'name': product.name,})

          this.flashSales.push({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            salePrice: product.sale_price,
            variations: product.variations,
          });
        });

        //console.log(this.flashSales);

        //this.flashSales = response.data.productFlashSellGridTwo;
      })
      .catch((error) => {
        console.log(error);
      });

    this.axios
      .get("https://chawkbazar.vercel.app/api/featured_products.json")
      .then((response) => {
        //console.log(response.data);

        response.data.forEach((product) => {
          this.featuredProducts.push({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            salePrice: product.sale_price,
            isNewArrival: product.isNewArrival,
            variations: product.variations,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });

    //xAQieOFxzstIeURana5tOZAeJHsxpxijjpjT2lYOPaXgAgUOACXhGM5p

    this.axios
      .get("https://api.pexels.com/v1/search?query=shopping&per_page=12", {
        headers: {
          Authorization:
            "xAQieOFxzstIeURana5tOZAeJHsxpxijjpjT2lYOPaXgAgUOACXhGM5p",
        },
      })
      .then((response) => {
        //console.log(response.data.photos)

        const { photos } = response.data;
        //console.log(photos);

        photos.forEach((photo) => {
          this.pexelPictures.push(photo.src.large);
        });
      })
      .catch((error) => {
        console.log(error);
      });

    this.axios
      .get("https://api.pexels.com/v1/search?query=female_models&per_page=10", {
        headers: {
          Authorization:
            "xAQieOFxzstIeURana5tOZAeJHsxpxijjpjT2lYOPaXgAgUOACXhGM5p",
        },
      })
      .then((response) => {
        //console.log(response.data.photos)

        const { photos } = response.data;
        //console.log(photos);

        photos.forEach((photo) => {
          this.newArrival.push(photo.src.large);
        });
      })
      .catch((error) => {
        console.log(error);
      });

    this.axios
      .get("https://chawkbazar.vercel.app/api/products_new_arrival.json")
      .then((response) => {
        response.data.forEach((product) => {
          this.newArrivalData.push({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            salePrice: product.sale_price,
            variations: product.variations,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<!-- eslint-disable -->
<style>
/* eslint-disable */
html,
body {
  overflow-x: hidden;
  font-size: 15px;
  position: relative;
  z-index: 1;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  height: 100%;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  width: 9px;
  height: 18px;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.9);
}

::-webkit-scrollbar-track {
  border-radius: 8px;
  background-color: rgba(245, 245, 245, 0.5);
}
.swipeOut {
  animation-name: swipeOut;
  -webkit-animation-name: swipeOut;
}

@keyframes swipeOut {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(200%);
  }
}

@-webkit-keyframes swipeOut {
  0% {
    -webkit-transform: translateX(100%);
  }

  100% {
    -webkit-transform: translateX(200%);
  }
}

.swipeInLeft {
  animation-name: swipeInLeft;
  -webkit-animation-name: swipeInLeft;
  display: block;
}

@keyframes swipeInLeft {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0px);
  }
}

@-webkit-keyframes swipeInLeft {
  0% {
    -webkit-transform: translateX(-100%);
  }

  100% {
    -webkit-transform: translateX(0px);
  }
}
.swipeInRight {
  animation-name: swipeInRight;
  -webkit-animation-name: swipeInRight;
  display: block;
}

@keyframes swipeInRight {
  0% {
    transform: translateX(200%);
  }

  100% {
    transform: translateX(0px);
  }
}

@-webkit-keyframes swipeInRight {
  0% {
    -webkit-transform: translateX(200%);
  }

  100% {
    -webkit-transform: translateX(0px);
  }
}

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
</style>
