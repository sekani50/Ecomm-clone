<!--eslint-disable-->
<template>
  <div
    class="w-[97%] text-zinc-800 sm:w-[95%] mx-auto p-2 sm:p-6 sm:my-10 space-y-6 my-6"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div class="lg:col-span-2 grid lg:grid-cols-2 gap-3 space-y-3">
        <p class="font-semibold text-xl sm:text-2xl lg:text-3xl lg:col-span-2">
          Shipping Address
        </p>

        <div
          class="form-group space-y-3"
          :class="{ 'form-group--error': $v.firstname.$error }"
        >
          <label
            class="block form__label text-sm sm:text-lg text-zinc-800"
            for=""
            ><b>First Name*</b></label
          >
          <input
            @change=""
            :class="
              !$v.firstname.required && $v.firstname.$dirty
                ? 'border-red-500'
                : ''
            "
            class="block form__input input-field"
            type="text"
            name=""
            v-model.trim="firstname"
          />
        </div>

        <div
          class="form-group space-y-3"
          :class="{ 'form-group--error': $v.lastname.$error }"
        >
          <label
            class="block form__label text-sm sm:text-lg text-zinc-800"
            for=""
            ><b>Last Name*</b></label
          >
          <input
            @change=""
            class="block form__input input-field"
            :class="
              !$v.lastname.required && $v.lastname.$dirty
                ? 'border-red-500'
                : ''
            "
            type="text"
            name=""
            v-model.trim="lastname"
          />
        </div>

        <div
          class="form-group space-y-3 lg:col-span-2"
          :class="{ 'form-group--error': $v.address.$error }"
        >
          <label
            class="block form__label text-sm sm:text-lg text-zinc-800"
            for=""
            ><b>Address*</b></label
          >
          <input
            @change=""
            :class="
              !$v.address.required && $v.address.$dirty ? 'border-red-500' : ''
            "
            class="block form__input input-field"
            type="text"
            name=""
            v-model.trim="address"
          />
        </div>

        <div
          class="form-group space-y-3"
          :class="{ 'form-group--error': $v.phone.$error }"
        >
          <label
            class="block form__label text-sm sm:text-lg text-zinc-800"
            for=""
            ><b>Mobile/Phone No*</b></label
          >
          <input
            @change=""
            :class="
              !$v.phone.required && $v.phone.$dirty ? 'border-red-500' : ''
            "
            class="block form__input input-field"
            type="number"
            name=""
            v-model.trim="phone"
          />
        </div>

        <div
          class="form-group space-y-3"
          :class="{ 'form-group--error': $v.email.$error }"
        >
          <label
            class="block form__label text-sm sm:text-lg text-zinc-800"
            for=""
            ><b>Email Address*</b></label
          >
          <input
            @change=""
            :class="
              !$v.email.required && $v.email.$dirty ? 'border-red-500' : ''
            "
            class="block form__input input-field"
            type="email"
            name=""
            v-model.trim="email"
          />

          <div class="error text-sm" v-if="!$v.email.email">
            Enter a Valid Email Address.
          </div>
        </div>

        <div class="form-group space-y-3">
          <label
            class="block form__label text-sm sm:text-lg text-zinc-800"
            for=""
            ><b>City/Town</b></label
          >
          <input
            @change=""
            class="block form__input input-field"
            type="text"
            name=""
            v-model.trim="city"
          />
        </div>

        <div class="form-group space-y-3">
          <label
            class="block form__label text-sm md:text-lg text-zinc-800"
            for=""
            ><b>Postcode</b></label
          >
          <input
            @change=""
            class="block form__input input-field"
            type="text"
            name=""
            v-model.trim="postcode"
          />
        </div>

        <label class="container sm:text-lg text-sm mr-6 lg:col-span-2">
          Save this information for next time
          <input type="checkbox" @change="" />
          <span class="checkmark"></span>
        </label>

        <div class="form-group space-y-3 lg:col-span-2">
          <p class="text-sm sm:text-lg text-zinc-800">
            <b> Order Notes (Optional)</b>
          </p>
          <textarea
            @change=""
            v-model.trim="optionalremark"
            placeholder="Notes about your order e.g special note of delivery"
            class="resize-none w-full h-24 sm:h-32 outline-none border hover:border-gray-700 p-4 rounded-md"
          ></textarea>
        </div>
      </div>
      <div class="space-y-3">
        <p
          class="font-semibold text-xl sm:text-2xl lg:text-3xl col-span-2 lg:col-span-full"
        >
          Your Order
        </p>
        <div
          class="flex justify-between items-center p-3 rounded-md sm:rounded-lg bg-gray-200"
        >
          <p class="font-semibold text-sm sm:text-lg">Products</p>
          <p class="font-semibold text-sm sm:text-lg">Subtotal</p>
        </div>
        <div
          v-for="(product, index) in showProducts"
          :key="index"
          class="flex justify-between items-center py-4 border-b"
        >
          <div class="flex space-x-4 items-center">
            <div class="w-16 h-16 rounded-md border">
              <img
                class="w-full rounded-md h-full object-cover"
                :src="product.productImage"
                alt="img"
              />
            </div>
            <p class="truncate w-48">{{ product.productName }}</p>
          </div>
          <p>
            <span>&#8358;</span
            ><span>{{ product.productSalePrice.toFixed() }}</span>
          </p>
        </div>
        <div class="flex justify-between items-center py-3 border-b">
          <p class="font-semibold text-sm sm:text-lg">Subtotal</p>
          <p class="font-semibold text-sm sm:text-lg">
            <span>&#8358;</span><span>{{ updateTotal }}</span>
          </p>
        </div>
        <div class="flex justify-between items-center py-3 border-b">
          <p class="font-semibold text-sm sm:text-lg">Shipping</p>
          <p class="font-semibold text-sm sm:text-lg">free</p>
        </div>
        <div class="flex justify-between items-center py-3 border-b">
          <p class="font-semibold text-sm sm:text-lg">Total</p>
          <p class="font-semibold text-sm sm:text-lg">
            <span>&#8358;</span><span>{{ updateTotal }}</span>
          </p>
        </div>
      </div>
    </div>
    <button
      @click.prevent="submit"
      :disabled="submitStatus === 'PENDING'"
      class="text-white bg-zinc-800 hover:bg-zinc-700 font-semibold rounded-md sm:rounded-lg px-4 py-2 sm:px-6 sm:py-4"
    >
      Place Order
    </button>
    <p class="typo__p sm:text-sm text-[12px]" v-if="submitStatus === 'OK'">
      Thanks for your submission!
    </p>
    <p
      class="text-red-600 sm:text-sm text-[12px]"
      v-if="submitStatus === 'ERROR'"
    >
      Please fill your details correctly.
    </p>
    <p class="typo__p sm:text-sm text-[12px]" v-if="submitStatus === 'PENDING'">
      Sending...
    </p>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
  name: "PlaceOrder",
  mixins: [validationMixin],
  data() {
    return {
      submitStatus: null,
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postcode: "",
      optionalremark: "",
    };
  },
  validations: {
    firstname: {
      required,
    },
    lastname: {
      required,
    },
    email: {
      required,
      email,
    },
    phone: {
      required,
    },
    address: {
      required,
    },
  },
  computed: {
    ...mapGetters(["showProducts", "updateTotal"]),
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        setInterval(() => {
          this.submitStatus = "PENDING";
        }, 500);
        this.submitStatus = "OK";
      }
    },
  },
};
</script>
<!--eslint-disable-->
<style scoped>
/*eslint-disable*/
.input-field {
  @apply border-2  focus:border-gray-700 hover:border-gray-700 rounded-md focus:outline-none w-full h-10 sm:h-14 px-2;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

/* The container */
.container {
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 3px;
  border: 1px solid grey;
  background-color: #fff;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #000;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.error {
  @apply text-red-600;
}
</style>
