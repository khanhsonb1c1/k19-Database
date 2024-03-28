<template>
  <div class="row">
    <div class="col-lg-4 col-12">
      <div class="single-block give-review">
        <h4>{{ star }}<i class="lni lni-star-filled ms-2" style="color: #ffa000"></i> (Tất cả)</h4>
        <ul>
          <li>
            <span>5 Sao</span>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star-filled"></i>
          </li>
          <li>
            <span>4 Sao</span>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star"></i>
          </li>
          <li>
            <span>3 Sao</span>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star"></i>
            <i class="lni lni-star"></i>
          </li>
          <li>
            <span>2 Sao</span>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star"></i>
            <i class="lni lni-star"></i>
            <i class="lni lni-star"></i>
          </li>
          <li>
            <span>1 Sao</span>
            <i class="lni lni-star-filled"></i>
            <i class="lni lni-star"></i>
            <i class="lni lni-star"></i>
            <i class="lni lni-star"></i>
            <i class="lni lni-star"></i>
          </li>
        </ul>

      </div>
    </div>
    <div class="col-lg-8 col-12">
      <div class="single-block">
        <div class="reviews">
 
          <span v-if="!reviews?.length">Chưa có đánh giá</span>
          <!-- Start Single Review -->
          <!-- <Comment v-for="(review, index) in reviews" :key="index" :review="review" :language="language" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {  },

  props: {
    reviews: {
      type: Array<any>,
      default: {} as Array<any>,
    },
    star: {
      type: Number,
      default: 5,
    },
    product_id: {
      type: String,
      default: "",
    },
    is_leave_review: {
      type: Boolean,
      default: true,
    },
    language: {
      type: String,
      default: "ja",
      required: false,
    },
  },

  computed: {
   
  },
});
</script>
