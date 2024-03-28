<template>
  <section id="reviews" class="screenshots-section ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="section-heading text-center">
            <h2 style="font-size: 2.4em">Đánh giá</h2>
            <p class="lead">TomoniVN luôn nhận được những đánh giá cao từ những khách hàng đã từng hợp tác.</p>
          </div>
        </div>
      </div>
      <!--start app screen carousel-->
      <div class="screen-slider-content mt-5">
        <!-- <div class="screenshot-frame"></div> -->
        <div class="screen-carousel owl-carousel owl-theme dot-indicator">
          <ReviewOfCustomerCard v-for="(info, index) in feedbacks" :key="index" :info="info" />
        </div>
      </div>
      <!--end app screen carousel-->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import fb1 from "../../public/img/fb1.png";
import fb2 from "../../public/img/fb2.png";
import fb3 from "../../public/img/fb3.png";
import fb4 from "../../public/img/fb4.png";
import fb5 from "../../public/img/fb5.png";
import ReviewOfCustomerCard from "./ReviewOfCustomerCard.vue";

export default defineComponent({
  name: "feedback-component",
  components: {
    ReviewOfCustomerCard,
  },
  data() {
    return {
      feedbacks: [fb1, fb2, fb3, fb4, fb5],
    };
  },
  mounted() {
    // const script = document.createElement("script");
    // script.src = "/js/scripts.js";
    // script.onload = () => {
    //   console.log("Script loaded successfully.");
    // };
    // document.head.appendChild(script);
  },
});
</script>

<style></style>
