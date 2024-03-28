<template>
  <section id="supplier" class="hero-section hero-section-2 ptb-100" style="background: #354154 !important">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9 col-md-8">
          <div class="section-heading text-center mb-5">
            <!-- <h4 style="color: #06b5e4 !important; font-size: 1.5em;">Đối tác</h4> -->
            <p class="lead" style="color: #ffffff !important; font-weight: 500; margin-bottom: 10px">Đối tác</p>
            <img src="../../public/img/kumano-logo.png" alt="" height="50" />
            <p class="lead" style="color: #ffffff !important">KUMANO-Thương hiệu mỹ phẩm hàng đầu Nhật Bản.</p>
            <p style="color: #ffffff !important">
              Được thành lập từ năm 1953, Kumano là thương hiệu lâu đời trong việc sản xuất và phát triển các sản phẩm
              chăm sóc da chất lượng cao.
            </p>
            <p style="color: #ffffff !important">
              Được gắn liền với vùng Kumano, nổi tiếng với truyền thống làm bàn chải trang điểm từ thế kỷ 19, KUMANO
              không chỉ chú trọng vào việc sử dụng các nguyên liệu tự nhiên và công nghệ tiên tiến, mà còn là biểu tượng
              của sự tôn trọng đối với văn hóa và bảo tồn môi trường.
            </p>
            <p style="color: #ffffff !important">
              Với sứ mệnh mang đến làn da khỏe mạnh và rạng rỡ cho mọi phụ nữ trên toàn thế giới, KUMANO luôn cam kết
              đem đến những sản phẩm chất lượng và an toàn nhất cho người tiêu dùng.
            </p>
            <a
              href="http://www.kumanoyushi.co.jp/"
              target="_blank"
              class="btn"
              style="
                border: 3px solid #06b5e4;
                font-weight: 600;
                padding: 1rem 2rem 1rem 2rem;
                color: #ffffff;
                background-color: #44546b;
              "
              >Tìm hiểu thêm</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="promo-section ptb-100 about" style="background-color: #f3f3f3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9 col-md-8">
          <div class="section-heading text-center mb-5">
            <p class="lead" style="margin-bottom: 10px">Đối tác</p>
            <img src="../../public/img/orihiro-logo.png" alt="" height="50" />
            <p class="lead">ORIHIRO-Công ty hàng đầu tại Nhật Bản trong lĩnh vực chăm sóc sức khỏe và dinh dưỡng.</p>
            <p>
              Với hơn 40 năm kinh nghiệm, ORIHIRO đã khẳng định được vị thế của mình trên thị trường và nhận được sự tin
              tưởng từ hàng triệu khách hàng trên toàn thế giới.
            </p>
            <p>
              Nổi tiếng với việc cung cấp các sản phẩm chất lượng, an toàn và hiệu quả, đồng thời sử dụng nguyên liệu tự
              nhiên và công nghệ tiên tiến trong quy trình sản xuất.
            </p>
            <p>
              ORIHIRO không chỉ tập trung vào việc phát triển sản phẩm mà còn chú trọng vào việc xây dựng một môi trường
              làm việc tích cực và đảm bảo hài lòng của khách hàng.
            </p>
            <a
              href="https://health.orihiro.com/"
              target="_blank"
              class="btn"
              style="
                border: 3px solid #334da1;
                font-weight: 600;
                padding: 1rem 2rem 1rem 2rem;
                color: #ffffff;
                background-color: #334da1;
              "
              >Tìm hiểu thêm</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    star: {
      type: Number,
      default: 5,
    },
  },
});
</script>

<style scoped></style>
