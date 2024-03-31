<template>
  <div class="banner_section layout_padding">
    <div class="container">
      <div class="taital_main">
        <div class="booking_menu">
          <ul>
            <li>
              <a href="#"
                ><span class="car_img"><i class="fa fa-car" aria-hidden="true"></i></span>Cab</a
              >
            </li>
            <li>
              <a href="#"
                ><span class="car_img"><i class="fa fa-bus" aria-hidden="true"></i></span>Bus</a
              >
            </li>
            <li>
              <a href="#"
                ><span class="car_img"><i class="fa fa-train" aria-hidden="true"></i></span>Trains</a
              >
            </li>
            <li>
              <a href="#"
                ><span class="car_img"><i class="fa fa-bed" aria-hidden="true"></i></span>Hotels</a
              >
            </li>
            <li class="active">
              <a href="#"
                ><span class="car_img"><i class="fa fa-plane" aria-hidden="true"></i></span>Flight</a
              >
            </li>
          </ul>
        </div>
        <div class="more_bt">
          <a href="#"
            >More<span class="arrow_icon"><i class="fa fa-arrow-right" aria-hidden="true"></i></span
          ></a>
        </div>
      </div>
      <div class="address_box">
        <div class="address_box_main">
          <div class="box_left">
            <h3 class="going_text">Where are you going?</h3>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" />
              <div class="input-group-append">
                <button class="btn btn-secondary airport_text" type="button">
                  <i class="fa fa-map-marker" aria-hidden="true" style="color: #9b9b9a"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="box_middle">
            <h3 class="going_text">Check-in</h3>
            <input id="datepicker" placeholder="12/12/2020" width="270" />
          </div>
          <div class="box_middle_1">
            <h3 class="going_text">Check-out</h3>
            <input id="datepicker" placeholder="12/12/2020" width="270" />
          </div>
          <div class="box_right">
            <h3 class="going_text">Rooms</h3>
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
        </div>
      </div>
      <div class="search_bt"><a href="#">Search</a></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  computed: {},
  mounted() {
    //
  },

  watch: {},
});
</script>

<style></style>
