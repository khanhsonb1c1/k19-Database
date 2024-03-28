<template>
  <div class="modal-component" v-if="is_show">
    <div class="modal-main shadow-lg rounded">
      <div class="modal-title">
        <h4 class="text-uppercase">{{ alert.title }}</h4>
      </div>
      <img
        width="48"
        height="48"
        src="https://img.icons8.com/color/54/confetti.png"
        alt="confetti"
        v-if="alert.status"
      />
      <img width="48" height="48" src="https://img.icons8.com/color/48/break--v4.png" alt="break--v4" v-else />
      <div class="modal-body">
        <span>{{ alert.message }}</span>
        <p>{{ alert.sub_message }}</p>
      </div>
      <div class="modal-btns">
        <div class="btn w-100 btn-danger rounded" @click="onClose">Đóng</div>
      </div>
    </div>
    <div class="modal-background" @click="onClose"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["alert"],
  data() {
    return {
      is_show: true,
    };
  },

  methods: {
    onClose() {
      this.is_show = false;
    },
  },
});
</script>

<style scoped lang="scss">
.modal-component {
  color: black;
  text-align: center;
  .modal-main {
    z-index: 1000;
    transition: 0.3s;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    padding: 1em;
    max-width: 90%;
    background: white;
  }
}

.modal-background {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: #9c9c9c63;
  z-index: 999;
}

p {
  font-size: 0.9em;
  margin-top: 1em;
}
</style>
