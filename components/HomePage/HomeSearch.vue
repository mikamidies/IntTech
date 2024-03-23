<template>
  <div class="wrap">
    <div class="container">
      <div class="border">
        <div class="header">
          <h4 class="heading">Search imagery</h4>

          <a href="#"> Go to site <ArrowRight /></a>
        </div>

        <div class="swiper" ref="searchSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="img">
                <img src="@/assets/img/search-1.jpg" alt="" />
              </div>
              <div class="content">
                <p class="name">Kaluhui</p>
                <p class="sub">Kaluhui</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img">
                <img src="@/assets/img/search-2.jpg" alt="" />
              </div>
              <div class="content">
                <p class="name">Kaluhui</p>
                <p class="sub">Kaluhui</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img">
                <img src="@/assets/img/search-3.jpg" alt="" />
              </div>
              <div class="content">
                <p class="name">Kaluhui</p>
                <p class="sub">Kaluhui</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img">
                <img src="@/assets/img/search-4.jpg" alt="" />
              </div>
              <div class="content">
                <p class="name">Kaluhui</p>
                <p class="sub">Kaluhui</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img">
                <img src="@/assets/img/search-1.jpg" alt="" />
              </div>
              <div class="content">
                <p class="name">Kaluhui</p>
                <p class="sub">Kaluhui</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img">
                <img src="@/assets/img/search-4.jpg" alt="" />
              </div>
              <div class="content">
                <p class="name">Kaluhui</p>
                <p class="sub">Kaluhui</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img">
                <img src="@/assets/img/search-1.jpg" alt="" />
              </div>
              <div class="content">
                <p class="name">Kaluhui</p>
                <p class="sub">Kaluhui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRight from "../SvgIcons/ArrowRight.vue";
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

export default {
  components: {
    ArrowRight,
  },

  mounted() {
    new Swiper(this.$refs.searchSwiper, {
      slidesPerView: 4.5,
      spaceBetween: 24,
    });
  },
};
</script>

<style scoped>
.wrap {
  padding: 140px 0 120px 0;
  overflow: hidden;
}
.swiper {
  overflow: visible;
}
.header {
  display: flex;
  align-items: center;
  gap: 48px;
  margin-bottom: 40px;
}
.header a {
  color: var(--Blue-night, #001935);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  padding: 12px 24px;
  border-radius: 4px;
  background: var(--Apple-Grey, #f5f5f7);
  display: flex;
  align-items: center;
  gap: 12px;
}
.header a :deep(svg) {
  width: 16px;
  height: 16px;
}
.header a :deep(path) {
  fill: var(--red);
}
</style>
