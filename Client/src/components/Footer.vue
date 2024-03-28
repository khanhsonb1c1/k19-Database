<template>
  <!--footer section start-->
  <footer class="footer-section">
    <!--footer top start-->
    <div class="footer-top pt-100 background-img-2" style="background: #354154">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
            <div class="footer-nav-wrap text-white text-center">
              <img src="../../public/img/logo-sm.png" alt="footer logo" width="60" class="img-fluid mb-3" />
              <p>công ty TNHH Tomoni VN</p>

              <div class="social-list-wrap">
                <ul class="social-list list-inline list-unstyled">
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="Facebook"><span class="ti-facebook"></span></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="Twitter"><span class="ti-twitter"></span></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="Instagram"><span class="ti-skype"></span></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" target="_blank" title="printerst"><span class="ti-linkedin"></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-8 col-12">
            <div class="row">
              <div class="col-sm-6 col-md-4 col-lg-6 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                <div class="footer-nav-wrap text-white">
                  <h5 class="mb-3 text-white">Giới thiệu</h5>
                  <ul class="list-unstyled">
                    <li class="mb-2" v-for="(item, index) in menu" :key="index">
                      <router-link :to="item.path">{{ item.name }}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-6">
                <div class="footer-nav-wrap text-white">
                  <h5 class="mb-3 text-white">Địa chỉ</h5>
                  <ul class="list-unstyled support-list">
                    <li class="mb-2 d-flex align-items-center">
                      <span class="ti-location-pin mr-2"></span>
                      15 Bùi Kỷ, Cẩm Lệ, Đà Nẵng.
                    </li>
                    <li class="mb-2 d-flex align-items-center">
                      <span class="ti-mobile mr-2"></span> <a href="tel:+61283766284">1900.2149</a>
                    </li>
                    <li class="mb-2 d-flex align-items-center">
                      <span class="ti-email mr-2"></span><a href="mailto:mail@example.com"> info@tomonivn.com</a>
                    </li>
                    <!-- <li class="mb-2 d-flex align-items-center">
                      <span class="ti-world mr-2"></span><a href="#"> www.eazee.com.ng</a>
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--footer bottom copyright start-->
      <div class="footer-bottom border-gray-light mt-5 py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-7">
              <div class="copyright-wrap small-text">
                <p class="mb-0 text-white">© Design by Tomonivn</p>
              </div>
            </div>
            <!-- <div class="col-md-6 col-lg-5">
              <div class="terms-policy-wrap text-lg-right text-md-right text-left">
                <ul class="list-inline">
                  <li class="list-inline-item"><a class="small-text" href="#">Terms</a></li>
                  <li class="list-inline-item"><a class="small-text" href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <!--footer bottom copyright end-->
    </div>
    <!--footer top end-->
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "footer-component",
  data() {
    return {
      menu: [
        {
          name: "Trang chủ",
          path: "/",
        },
        {
          name: "Dịch vụ",
          path: "/#services",
        },
        {
          name: "Giới thiệu",
          path: "/#about",
        },
        // {
        //   name: "Đánh giá",
        //   path: "/#reviews",
        // },
        {
          name: "Liên hệ",
          path: "/#contact",
        },
      ],
    };
  },
});
</script>

<style></style>
