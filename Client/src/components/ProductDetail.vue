<template>
  <section class="promo-section ptb-100 gray-bg">
    <div class="container pl-0">
      <bread-crumb :target="target_breadcrump" />
    </div>

    <div class="container white-bg">
      <div class="row equal mt-3">
        <div class="col-lg-6">
          <div class="product-images">
            <main id="gallery">
              <div class="main-img position-relative">
                <i class="fa-solid fa-angle-left" @click="handleNextOrPreviousImage(0)"></i>

                <img class="" :src="detail?.image_url || 'https://via.placeholder.com/1000x670'" id="current" alt="#" />
                <i class="fa-solid fa-angle-right" @click="handleNextOrPreviousImage(1)"></i>
              </div>

              <div class="images scroll-x scroll-hidden">
                <img
                  v-for="(img, index) in detail?.images"
                  :key="index"
                  :src="img.url || 'https://via.placeholder.com/1000x670'"
                  class="img"
                  alt="#"
                  @click="handleClick"
                />
              </div>
            </main>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="product-content">
            <div class="option">
              <p>Nhà cung cấp: <span>IKOM</span></p>
            </div>

            <div class="name">
              <h3>{{ detail?.name }}</h3>
            </div>

            <div class="reviews">
              <!-- <span>{{ detail?.star || 5 }} </span> -->
              <star />
              <div class="dot"></div>
              <span> {{ detail?.reviews_count }} </span>
              <p class="text-primary">Đánh giá</p>
            </div>

            <div class="price-box">
              <text-money-inital :amount="detail?.initial_price" class="mr-2" :to_vnd="true" v-if="detail?.discount" />
              <text-money :amount="price" :to_vnd="true" />
            </div>

            <div class="info row mt-4">
              <div class="col-lg-4"><p>Danh mục:</p></div>
              <div class="col-lg-8">
                <span>{{ categories || "..." }} </span>
              </div>
            </div>
            <div class="info row">
              <div class="col-lg-4"><p>Xuất sứ:</p></div>
              <div class="col-lg-8">
                <span> {{ detail?.origin?.name || "..." }} </span>
              </div>
            </div>
            <div class="info row">
              <div class="col-lg-4"><p>Quy cách:</p></div>
              <div class="col-lg-8">
                <span> {{ specification }} </span>
              </div>
            </div>
            <slot name="check_info"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="container white-bg" v-if="detail?.description">
      <div class="row equal mt-3">
        <div class="col-lg-12">
          <div class="description" v-html="detail?.description"></div>
        </div>
      </div>
    </div>
    <div class="container white-bg">
      <!-- <ProductReview /> -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { productStore } from "@/stores/productStore";
import Star from "@/components/Star.vue";
import TextMoney from "@/components/TextMoney.vue";
import TextMoneyInital from "@/components/TextMoneyInital.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import { getPriceOfSupplier } from "@/hooks/useGetPriceOfSupplier";
// import ProductReview from "./ProductReview.vue";

export default defineComponent({
  name: "product-detail-component",
  components: { Star, TextMoney, TextMoneyInital, BreadCrumb },
  props: {
    detail: {
      type: {} as any,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    id() {
      return String(this.$route.params.id);
    },

    ...mapState(productStore, ["fetching"]),

    specification() {
      return `${this.detail?.length} x ${this.detail?.width} x ${this.detail?.height} (cm)`;
    },

    categories() {
      const categories = this.detail?.categories?.map((i: { name: string }) => i.name) || [];
      return categories.join(", ");
    },
    target_breadcrump() {
      return this.detail?.categories?.length ? this.detail?.categories[0].name : this.detail?.name;
    },
    price() {
      const price_by_supplier = getPriceOfSupplier(this.detail.suppliers);
      return price_by_supplier ? price_by_supplier : this.detail.price;
    },
  },

  methods: {
    handleClick() {
      const current = document.getElementById("current") as any;
      const opacity = 0.6;
      const imgs = document.querySelectorAll(".img");
      imgs.forEach((img: any) => {
        img.addEventListener("click", (e: any) => {
          //reset opacity
          imgs.forEach((img: any) => {
            img.style.opacity = 1;
          });
          current.src = e.target.src;
          e.target.style.opacity = opacity;
        });
      });
    },
    handleNextOrPreviousImage(action: number) {
      // action == 1 : next img
      // action == 0 : previous img
      const imgs = document.querySelectorAll(".img");
      const current = document.getElementById("current") as HTMLImageElement;

      if (current && imgs.length > 0) {
        const currentIndex = Array.from(imgs).findIndex((img: any) => img.currentSrc == current.src);

        let nextIndex = 0;
        if (action == 1) {
          nextIndex = currentIndex < imgs.length - 1 ? currentIndex + 1 : 0;
        }
        if (action == 0) {
          nextIndex = currentIndex == 0 ? imgs.length - 1 : currentIndex - 1;
        }
        const nextImage = imgs[nextIndex] as HTMLImageElement;
        current.src = nextImage.src;
      }
    },
  },
});
</script>

<style scoped lang="scss">
.gray-bg {
  background: #edf0f3;
}
.white-bg {
  background: #ffff;
  border-radius: 0.75em;
}
.product-images {
  padding: 2em;
  img {
    width: 100%;
    cursor: pointer;
    // border: 1px solid #eee;
    border-radius: 4px;
    overflow: hidden;
    padding: 8px;
    object-fit: contain;
  }

  .images {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1em 1em;
    margin-top: 1em;
    display: flex;

    img {
      width: 20%;
      overflow: unset;
      object-fit: contain;
      border: 1px solid #eee;
    }

    // @media #{$xs} {
    //   grid-template-columns: repeat(3, 1fr);
    // }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 0.5s ease-in 1 forwards;
  }

  .main-img {
    text-align: center;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-height: 100%;
    }
    // @media #{$md,$xs} {
    //   height: 350px;
    // }
    .current-img {
      width: auto;
      max-width: 100%;
      max-height: 100%;
    }

    .fa-solid {
      font-size: 1.5em;
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        color: #b10813;
      }
    }
    .fa-angle-left {
      position: absolute;
      top: 50%;
      left: 10px;
    }
    .fa-angle-right {
      position: absolute;
      top: 50%;
      right: 10px;
    }
  }
}
.scroll-hidden ::-webkit-scrollbar {
  height: 0;
  width: 0;
}

.scroll-x {
  overflow-x: auto;

  &.scroll-hidden {
    padding-right: 10px;
    &::-webkit-scrollbar {
      height: 0px !important;
      width: 0 !important;
    }
  }

  &.scroll-tiny::-webkit-scrollbar {
    height: 1px !important;
    width: 0px !important;
  }
}

.description {
  overflow: hidden;
}
@media screen and (max-width: 767px) {
  .container {
    border-radius: 0;
  }
  .promo-section {
    margin-top: 20px;
  }
}
</style>
