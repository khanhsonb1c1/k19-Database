<template>
  <DatePicker
    class="date_"
    v-model="date"
    :model-config="modelConfig"
    :isRange="true"
    :locale="locale"
    :popover="{ visibility: 'click' }"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // props: {
  //   filter_date: {
  //     type: Object,
  //     required: false,
  //   },
  // },
  data() {
    return {
      locale: {
        id: "vi",
      },
      modelConfig: {
        type: "number",
      },
      date: new Date(),
    };
  },
  watch: {
    date(filter_date) {
      const triggerDate = JSON.parse(JSON.stringify(filter_date));
      this.$emit("updateDate", triggerDate);
    },
  },
});
</script>
<style scoped>
.calendar {
  position: relative;
}
.date_ {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
