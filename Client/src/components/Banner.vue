<template>
  <section class="hero-section hero-section-2 ptb-100">
    <div class="circles">
      <div class="point animated-point-1"></div>
      <div class="point animated-point-2"></div>
      <div class="point animated-point-3"></div>
      <div class="point animated-point-4"></div>
      <div class="point animated-point-5"></div>
      <div class="point animated-point-6"></div>
      <div class="point animated-point-7"></div>
      <div class="point animated-point-8"></div>
      <div class="point animated-point-9"></div>
    </div>
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md-6 col-lg-6">
          <div class="hero-content-left ptb-100 text-white">
            <h1 class="text-white" style="color: #06b5e4 !important">TOMONIVN</h1>
            <p class="lead" style="color: #44546b !important">
              TomoniVN là công ty hàng đầu trong lĩnh vực bán lẻ sản phẩm nội địa Nhật Bản tại Việt Nam.
            </p>

            <div class="download-btn mt-5">
              <router-link to="/#about" class="btn google-play-btn mr-3"> Tìm hiểu thêm</router-link>
              <!-- <a href="#" class="btn app-store-btn"><span class="ti-apple"></span> App Store</a> -->
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-5">
          <div class="hero-animation-img">
            <img class="img-fluid d-block animation-one" src="/public/img/banner-1.png" alt="animation image" />
            <!-- <img
              class="img-fluid d-none d-lg-block animation-two"
              src="img/hero-animation-01.svg"
              alt="animation image"
              width="120"
            /> -->
            <img
              class="img-fluid d-none d-lg-block animation-three"
              src="../../public/img/hero-animation-02.svg"
              alt="animation image"
              width="120"
            />
            <img
              class="img-fluid d-none d-lg-block animation-four"
              src="../../public/img/hero-animation-03.svg"
              alt="animation image"
              width="230"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "banner-component",
});
</script>

<style lang="scss" scoped></style>
