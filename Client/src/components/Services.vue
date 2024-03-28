<template>
  <section id="services" class="promo-section ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-8">
          <div class="section-heading text-center mb-5">
            <h2 style="font-size: 2.4em">Dịch vụ</h2>
            <p class="lead">TomoniVN luôn cam kết mang đến quý khách hàng những dịch vụ tốt nhất.</p>
          </div>
        </div>
      </div>
      <div class="row equal">
        <div class="col-md-3 col-lg-3" v-for="(item, index) in services" :key="index">
          <div
            class="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100"
            :style="item.bg"
          >
            <div class="circle-icon mb-3">
              <img width="40" height="40" :src="item.img" alt="in-transit" />
            </div>
            <h5>{{ item.name }}</h5>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "services-component",
  data() {
    return {
      services: [
        {
          name: "Giao hàng",
          description: "Giao ngay trong ngày tại Đà Nẵng, 2-3 ngày trên toàn quốc.",
          img: "https://img.icons8.com/officel/40/in-transit.png",
          bg: "",
        },
        {
          name: "Đóng gói",
          description: "Đảm bảo quy cách thùng và chống đổ, vỡ hàng hoá.",
          img: "https://img.icons8.com/office/40/new-product.png",
          bg: "background-color: #f8f8f8",
        },
        {
          name: "Tra cứu",
          description: "Tra cứu sản phẩm chính hãng nhanh chóng, thuận tiện.",
          img: "https://img.icons8.com/cotton/40/qr-code--v1.png",
          bg: "",
        },
        {
          name: "Thanh toán",
          description: "Hỗ trợ nhiều hình thức thanh toán hiện đại, tiện lợi.",
          img: "https://img.icons8.com/ultraviolet/40/bank-card-back-side.png",
          bg: "background-color: #f8f8f8",
        },
      ],
    };
  },
});
</script>

<style scoped>
.circle-icon img {
  width: unset !important;
}
</style>
