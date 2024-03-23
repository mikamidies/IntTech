<template>
  <div class="wrap">
    <div class="stick"></div>

    <div class="container">
      <img src="@/assets/img/satellite.png" alt="" class="satellite" />

      <div class="border">
        <div class="header">
          <div class="left">
            <h4 class="heading">Наши партнеры</h4>
            <p class="sub">
              Ваше сотрудничество с нами имеет решающее значение для нашего
              успеха. Мы стремимся работать вместе с нашими опытными и
              заслуживающими доверия партнерами, чтобы предоставить вам отличный
              сервис и еще больше укрепить наше сообщество.
            </p>
          </div>
          <div class="buttons">
            <button class="prev partPrev">
              <ChevronDown />
            </button>
            <button class="next partNext">
              <ChevronDown />
            </button>
          </div>
        </div>

        <div class="swiper" ref="partnersSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-1.svg" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-2.svg" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-3.svg" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-4.svg" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-5.svg" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-1.svg" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-2.svg" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-3.svg" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-4.svg" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-5.svg" alt="" class="pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

import ChevronDown from "@/components/SvgIcons/ChevronDown.vue";

export default {
  components: {
    ChevronDown,
  },

  mounted() {
    new Swiper(this.$refs.partnersSwiper, {
      slidesPerView: 5,
      navigation: {
        prevEl: ".partPrev",
        nextEl: ".partNext",
      },
    });
  },
};
</script>

<style scoped>
.wrap {
  position: relative;
}
.border {
  border-inline: 1px solid #ebebeb;
  padding-bottom: 120px;
}
.satellite {
  position: absolute;
  top: -120px;
  right: -24px;
}
.header {
  margin-bottom: 32px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.sub {
  color: var(--Blue-night, #001935);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */
  margin-top: 20px;
  max-width: 668px;
}
.container {
  position: relative;
}

.prev,
.next {
  border-radius: 4px;
  background: var(--Secondary-bg, #f5f5f7);
  backdrop-filter: blur(8px);
  padding: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.prev :deep(svg) {
  transform: rotate(90deg);
}
.next :deep(svg) {
  transform: rotate(270deg);
}
.prev :deep(path) {
  fill: #9a999b;
}
.next :deep(path) {
  fill: var(--red);
}
.buttons {
  display: flex;
  align-items: center;
  gap: 16px;
}
.swiper {
  border-block: 1px solid #ebebeb;
  margin-right: -1px;
}
.swiper-slide {
  height: 123px;
  border-right: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
.pic {
  width: 70%;
  height: auto;
  object-fit: contain;
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
