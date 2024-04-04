<template>
  <div class="banner_section layout_padding">
    <div class="container">
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
            <h3 class="going_text">Thời gian (7 ngày tới)</h3>
            <input type="text" :placeholder="displayDate" readonly/>
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
  data() {
    return {
      dates: {
        start: 0,
        end: 0,
      },
    };
  },
  computed: {
    
    dateNow() {
      const date =  new Date()
      const dateConvert = this.convertDay(date)
      return {
        date, dateConvert
      }
    },
    dateLastWeek() {
      let date = new Date();

      const dateConvert = this.convertDay(date.setDate(date.getDate() + 7))

      return {
        date, dateConvert
      }
    },
    displayDate() {
      return this.dateNow.dateConvert + "-" + this.dateLastWeek.dateConvert
    },
    tims() {
      return this.convertTimeStamp(this.dateNow.date)
    }
  },
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
      // const date = new Date(dateString);
      return Math.floor(dateString.getTime() / 1000);
    },

  },
});
</script>

<style scoped>
input {
  padding: 0.75em;
  border: 1px solid #2b2278 !important;
  border-radius: 5px;
  width: 100%;
  font-weight: 600;
}
</style>
