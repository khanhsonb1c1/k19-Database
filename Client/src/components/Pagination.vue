<template>
  <div class="pagination p1">
    <ul>
      <a href="#" v-if="paginate.current_page > 1" @click="changePage(paginate.current_page - 1)"><li><</li></a>
      <a
        v-for="index in last"
        v-show="getPage(index) > 0 && getPage(index) <= paginate.last_page"
        :key="index"
        :class="getPage(index) == paginate.current_page ? 'is-active' : ''"
        href="#"
        @click="changePage(getPage(index))"
        ><li>{{ getPage(index) }}</li></a
      >

      <a href="#" v-if="paginate.current_page < paginate.last_page" @click="changePage(paginate.current_page + 1)"
        ><li>></li></a
      >
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "pagination-component",
  props: {
    paginate: {
      type: Object,
      required: true,
    },
    max: {
      type: Number,
      default: 5,
    },
    num_previous: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    last() {
      return this.paginate.last_page > this.max ? this.max : this.paginate.last_page;
    },
  },
  methods: {
    getPage(index: number) {
      return index + this.paginate.current_page - this.num_previous;
    },
    changePage(page: number) {
      this.$emit("change-page", page);
    },
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
}

p,
li,
a {
  font-size: 14px;
}

.pagination {
  padding: 30px 0;
  justify-content: center;
}

.pagination ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.pagination a {
  display: inline-block;
  padding: 10px 18px;
  color: #222;
}

.p1 a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  text-align: center;
}

.p1 a.is-active {
  background-color: #2d9596;
  border-radius: 100%;
  color: #fff;
}
</style>
