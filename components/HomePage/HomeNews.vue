<template>
  <div class="wrap">
    <div class="stick"></div>

    <div class="container">
      <div class="border">
        <div class="header">
          <h4 class="heading">Новости</h4>

          <div class="buttons">
            <button class="prev partPrev">
              <ChevronDown />
            </button>
            <button class="next partNext">
              <ChevronDown />
            </button>
          </div>
        </div>

        <div class="swiper" ref="newsSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="img">
                <img src="@/assets/img/post.png" alt="" />
              </div>
              <div class="content">
                <p class="date">20 марта 2024</p>
                <p class="name">
                  Легкий ветер шептал секреты сквозь шелестящие листья, неся
                  запах соснов ...
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img">
                <img src="@/assets/img/post.png" alt="" />
              </div>
              <div class="content">
                <p class="date">20 марта 2024</p>
                <p class="name">
                  Легкий ветер шептал секреты сквозь шелестящие листья, неся
                  запах соснов ...
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img">
                <img src="@/assets/img/post.png" alt="" />
              </div>
              <div class="content">
                <p class="date">20 марта 2024</p>
                <p class="name">
                  Легкий ветер шептал секреты сквозь шелестящие листья, неся
                  запах соснов ...
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img">
                <img src="@/assets/img/post.png" alt="" />
              </div>
              <div class="content">
                <p class="date">20 марта 2024</p>
                <p class="name">
                  Легкий ветер шептал секреты сквозь шелестящие листья, неся
                  запах соснов ...
                </p>
              </div>
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
    new Swiper(this.$refs.newsSwiper, {
      slidesPerView: 3,
      spaceBetween: 24,
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
.stick {
  width: 1px;
  height: 100%;
  background: #ebebeb;
  position: absolute;
  top: 0;
  left: 50%;
}
.border {
  border-inline: 1px solid #ebebeb;
  padding: 0 0 97px 0;
}
.img img {
  width: 100%;
  height: 318px;
  border-radius: 16px;
  object-fit: cover;
  margin-bottom: 20px;
}
.date {
  color: var(--Meta-grey, #667b8c);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  margin-bottom: 8px;
}
.name {
  color: var(--Blue-night, #001935);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
