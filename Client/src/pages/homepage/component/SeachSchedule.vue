<template>
  <div class="banner_section layout_padding">
    <div class="container">
      <div class="taital_main">
        <div class="booking_menu">
          <ul>
            <li>
              <a href="#"
                ><span class="car_img"
                  ><i class="fa fa-car" aria-hidden="true"></i></span
                >Cab</a
              >
            </li>
            <li>
              <a href="#"
                ><span class="car_img"
                  ><i class="fa fa-bus" aria-hidden="true"></i></span
                >Bus</a
              >
            </li>
            <li>
              <a href="#"
                ><span class="car_img"
                  ><i class="fa fa-train" aria-hidden="true"></i></span
                >Trains</a
              >
            </li>
            <li>
              <a href="#"
                ><span class="car_img"
                  ><i class="fa fa-bed" aria-hidden="true"></i></span
                >Hotels</a
              >
            </li>
            <li class="active">
              <a href="#"
                ><span class="car_img"
                  ><i class="fa fa-plane" aria-hidden="true"></i></span
                >Flight</a
              >
            </li>
          </ul>
        </div>
        <div class="more_bt">
          <a href="#"
            >More<span class="arrow_icon"
              ><i class="fa fa-arrow-right" aria-hidden="true"></i></span
          ></a>
        </div>
      </div>
      <div class="address_box">
        <div class="address_box_main">
          <div class="box_right">
            <h3 class="going_text">Tuyến đường(*)</h3>
            <form>
              <div class="form-group">
                <select class="form-control" id="">
                  <option>Hair Styles</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </form>
          </div>

          <div class="box_right">
            <h3 class="going_text">Thời gian (tùy chọn)</h3>
            <div>{{ dates.start }}-{{ dates.end }}</div>
            <input-date-field @updateDate="getDate($event)" />
          </div>
        </div>
      </div>
      <div class="search_bt"><a href="#">Search</a></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputDateField from "../../../components/InputDateField.vue";

export default defineComponent({
  components: { InputDateField },
  data() {
    return {
      dates: {
        start: 0,
        end: 0,
      },
    };
  },
  computed: {},
  mounted() {
    //
  },

  watch: {},
  methods: {
    convertDay(dateString) {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    },
    convertTimeStamp(dateString) {
      const date = new Date(dateString);
      return Math.floor(date.getTime() / 1000);
    },
    getDate(e) {
      console.log(e.start);
      this.dates.start = this.convertDay(e.start);
      this.dates.end = this.convertDay(e.end);
    },
  },
});
</script>

<style></style>
