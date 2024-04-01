<template>
  <div class="wrap">
    <div class="stick"></div>

    <div class="container">
      <img src="@/assets/img/satellite.png" alt="" class="satellite" />

      <div class="border">
        <div class="header">
          <div class="left">
            <h4 class="heading">
              {{ $store.state.translations["main.our_partners"] }}
            </h4>
            <p class="sub">
              {{ $store.state.translations["main.part-sub"] }}
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
            <div class="swiper-slide" v-for="item in partners" :key="item.id">
              <NuxtLink :to="`/partners#${item.id}`">
                <img :src="item.image" alt="" class="pic" />
              </NuxtLink>
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

  props: ["partners"],

  mounted() {
    new Swiper(this.$refs.partnersSwiper, {
      slidesPerView: 2,
      navigation: {
        prevEl: ".partPrev",
        nextEl: ".partNext",
      },
      breakpoints: {
        768: {
          slidesPerView: 5,
        },
      },
      autoplay: {
        disableOnInteraction: false,
        delay: 3000,
      },
      loop: true,
    });
  },
};
</script>

<style scoped>
.wrap {
  overflow-x: clip;
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
  padding-left: 40px;
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
.prev :deep(path),
.next :deep(path) {
  fill: #9a999b;
}
.next:hover :deep(path),
.prev:hover :deep(path) {
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
}
.swiper-slide a {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  height: 100%;
}
.pic {
  width: 70%;
  height: 60%;
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
@media screen and (max-width: 768px) {
  .border {
    border-right: 0;
    padding-bottom: 120px;
  }
  .stick {
    display: none;
  }
  .satellite {
    display: none;
  }
  .header {
    grid-template-columns: repeat(1, 1fr);
    display: grid;
    margin-bottom: 24px;
  }
  .sub {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-top: 16px;
    padding-left: 20px;
  }
  .swiper-slide {
    height: 80px;
  }
  .buttons {
    position: absolute;
    bottom: 40px;
    right: 16px;
  }
}
</style>
