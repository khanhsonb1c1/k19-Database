<template>
  <div class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="index.html"
          ><img src="../../public/images/logo.png"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="testimonial.html">Testimonial</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <div class="login_btn">
              <ul>
                <li><a href="#">Login</a></li>
                <li>
                  <a href="#"><i class="fa fa-user" aria-hidden="true"></i></a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "the-header",
  //
});
</script>

<style></style>
