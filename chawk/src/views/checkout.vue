<!--eslint-disable-->
<template>
  <div>
    <div>
    <HeadPanel />

    </div>
    <div>
        <MobileNav  
        />
      </div>
    <div>
      <CustomerData />
    </div>
    <div>
      <PlaceOrder/>
    </div>
  
     
      <div class="sm:rounded-md m-auto h-fit rounded-sm w-[97%] sm:w-[95%] sm:py-20 bg-gray-100 mb-6 sm:mb-10 sm:px-6 p-4">
        <div class="space-y-9 flex lg:justify-between lg:flex-row justify-center items-center flex-col lg:w-full w-[95%]">
     <div class="sm:space-y-6 space-y-3">
      <p class="text-lg sm:text-xl md:text-2xl font-semibold">
        Get Expert Tips In Your Inbox
      </p>
     <p>Subscribe to our newsletter and stay updated.</p>

    
     </div>
     <div class="h-12 lg:h-14 lg:w-[40%] space-x-5">
      <input class="w-[60%] h-full text-[15px] text-black outline-none rounded-md border px-3" type="email" placeholder="Enter your email" required />
      <button
          class="text-white hover:bg-zinc-700 sm:font-semibold px-3 py-3 bg-zinc-800 sm:px-6 lg:py-4 rounded-md sm:rounded-lg"
        >
          Subscribe
        </button>
    </div>
    
 
    </div>
      </div>
      
      <div>
      <FooterNav />
    </div>
    
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import CustomerData from "@/components/modals/customerdata.vue";
import HeadPanel from "@/components/header.vue";
import MobileNav from "@/components/modals/mobilenav.vue";
import FooterNav from "@/components/modals/footernav.vue";
import PlaceOrder from "@/components/modals/placeorder.vue";

export default {
  name: "CheckOut",
  props:[],
  components: {
    CustomerData,
    HeadPanel,
    MobileNav,
    FooterNav,
    PlaceOrder,
  },

  data() {
    return {};
  },
  computed: {
  },
};
</script>
<!--eslint-disable-->
<style scoped>
/*eslint-disable*/
.mens {
  display: flex;
}
.women {
  display: flex;
}
.others {
  display: block;
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
