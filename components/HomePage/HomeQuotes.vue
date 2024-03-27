<template>
  <div class="wrap">
    <div class="stick"></div>

    <div class="container">
      <div class="border">
        <div class="header">
          <h4 class="heading white">Цитаты</h4>

          <div class="buttons">
            <button class="prev">
              <ChevronDown />
            </button>
            <button class="next">
              <ChevronDown />
            </button>
          </div>
        </div>

        <div class="swiper" ref="quotesSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in quotes" :key="item.id">
              <div class="content">
                <div class="text" v-html="item.text"></div>
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

  props: ["quotes"],

  mounted() {
    new Swiper(this.$refs.quotesSwiper, {
      slidesPerView: 1,
      navigation: {
        prevEl: ".prev",
        nextEl: ".next",
      },
    });

    console.log(this.quotes);
  },
};
</script>

<style scoped>
.wrap {
  background: url(@/assets/img/quotes.jpg) center no-repeat;
  background-size: cover;
  color: white;
  position: relative;
}
.wrap::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  z-index: 1;
}
.border {
  padding: 56px 0 98px 0;
  border-inline: 1px solid var(--border);
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
}
.prev,
.next {
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.16);
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
.next :deep(path) {
  fill: var(--red);
}
.buttons {
  display: flex;
  align-items: center;
  gap: 16px;
}
.swiper {
  position: relative;
  z-index: 2;
}
.swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content {
  max-width: 800px;
  margin: 0 auto;
  padding-left: 24px;
  border-left: 4px solid var(--red);
}
.text {
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 16px;
  margin-bottom: 16px;
}
.author {
  color: var(--White, var(--White, #fff));
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  line-height: 140%; /* 28px */
}
.stick {
  width: 1px;
  height: 100%;
  background: var(--border);
  position: absolute;
  top: 0;
  left: 50%;
}
@media screen and (max-width: 768px) {
  .border {
    padding: 48px 0 120px 0;
    border-right: 0;
  }
  .stick {
    display: none;
  }
  .text {
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
  }
  .author {
    font-size: 16px;
    font-style: italic;
    font-weight: 500;
    line-height: 140%;
  }
  .buttons {
    position: absolute;
    right: 38px;
    bottom: 40px;
  }
  .header {
    position: static;
  }
  .wrap::after {
    display: none;
  }
}
</style>
