<template>
  <div :class="[is_active ? 'active' : '', 'item']" @click="onClick">
    <span>{{ item.name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["item"],

  computed: {
    is_active() {
      return this.$route.query["filter[categories]"] == this.item.id ? true : false;
    },
  },

  methods: {
    onClick() {
      this.$router.push({
        query: {
          ...this.$route.query,
          "filter[categories]": this.item.id,
        },
      });
    },
    //
  },
});
</script>

<style scoped lang="scss">
.item {
  margin: 5px;
  span {
    border-radius: 12px;
    padding: 5px 15px;
    background: #2d9596;
    color: #f3f3f3;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background: #174f50;
    }
  }
}

.active span {
  background: #174f50;
}
</style>
