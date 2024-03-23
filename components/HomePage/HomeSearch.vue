<template>
  <div class="wrap">
    <div class="stick"></div>

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
  overflow: hidden;
  position: relative;
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
.img img {
  width: 100%;
  height: 496px;
  border-radius: 16px;
  object-fit: cover;
  margin-bottom: 16px;
}
.name {
  color: var(--Black, #020105);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 31.2px */
  margin-bottom: 16px;
}
.sub {
  color: var(--grey-80, #353437);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
}
.border {
  border-inline: 1px solid #ebebeb;
  padding: 140px 0 120px 0;
}

.stick {
  width: 1px;
  height: 100%;
  background: #ebebeb;
  position: absolute;
  top: 0;
  left: 50%;
}
</style>
