<template>
  <div class="wrap">
    <div class="stick"></div>

    <div class="container">
      <div class="border">
        <div class="header">
          <h4 class="heading">
            {{ $store.state.translations["main.search"] }}
          </h4>

          <a target="_blank" href="https://discover.maxar.com/">
            {{ $store.state.translations["main.goto"] }} <ArrowRight
          /></a>
        </div>

        <div class="swiper slider" ref="searchSwiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in places"
              :key="item.id"
              @click="getId(item.id, index)"
            >
              <div class="img">
                <img :src="item.image" alt="" />
              </div>
              <div class="content">
                <p class="name">{{ item.title }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="modal" :class="{ show: modalHandle == true }">
          <button @click="closeModal" class="x">
            <XCom />
          </button>
          <div class="space" @click="closeModal"></div>
          <div class="body">
            <div class="top">
              <div class="swiper" ref="topSwiper">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="image in places"
                    :key="image.id"
                  >
                    <img :src="image.image" alt="" />
                    <div class="cont">
                      <h4>
                        {{ image.title }}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom" thumbsSlider="">
              <div class="swiper" ref="bottomSwiper">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="thumb in places"
                    :key="thumb.id"
                  >
                    <img :src="thumb.image" alt="" />
                  </div>
                </div>
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
import XCom from "@/components/SvgIcons/XCom.vue";

export default {
  components: {
    ArrowRight,
    XCom,
  },

  props: ["places"],

  data() {
    return {
      modalHandle: false,
      placesOne: {},
      activeSlide: 0,
    };
  },

  methods: {
    async getId(id, index) {
      this.placesOne = this.places.find((item) => item.id == id);

      this.activeSlide = index;
      await this.getSlideIndex();

      setTimeout(() => {
        this.openModal();
      }, 100);
    },

    openModal() {
      this.modalHandle = true;
      document.body.style.overflow = "hidden";
    },

    closeModal() {
      this.modalHandle = false;
      document.body.style.overflow = "auto";
    },

    getSlideIndex() {
      const swiper = new Swiper(this.$refs.bottomSwiper, {
        spaceBetween: 8,
        slidesPerView: 3.5,
        breakpoints: {
          768: {
            slidesPerView: 4.5,
            spaceBetween: 16,
          },
        },
      });

      new Swiper(this.$refs.topSwiper, {
        spaceBetween: 16,
        thumbs: {
          swiper: swiper,
        },
        initialSlide: this.activeSlide,
      });
    },
  },

  async mounted() {
    this.getSlideIndex();

    new Swiper(this.$refs.searchSwiper, {
      slidesPerView: 1.3,
      spaceBetween: 16,
      // autoplay: {
      //   disableOnInteraction: false,
      //   delay: 3000,
      // },
      breakpoints: {
        768: {
          slidesPerView: 4.5,
          spaceBetween: 24,
        },
      },
      loop: true,
    });
  },
};
</script>

<style scoped>
.wrap {
  overflow: hidden;
  position: relative;
}
.slider {
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
.slider .swiper-slide:hover img {
  transform: scale(1.1);
}
.img {
  border-radius: 16px;
  margin-bottom: 16px;
  overflow: hidden;
}
.img img {
  transition: 0.3s;
  width: 100%;
  height: 496px;
  object-fit: cover;
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
.swiper-slide {
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.3s;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}
.modal.show {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}

.x {
  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 201;
}
.x :deep(path) {
  fill: white;
}
.space {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
}
.body {
  position: relative;
  width: 60%;
  height: 90%;
  z-index: 2;
}
.modal .top {
  height: calc(80% - 24px);
  margin-bottom: 24px;
}
.modal .bottom {
  height: 20%;
}
.modal .swiper {
  height: 100%;
}

.top .swiper {
  border-radius: 32px;
  overflow: hidden;
}
.modal .swiper-slide::after {
  width: 100%;
  height: 40%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0.4990371148459384) 40%,
    rgba(0, 0, 0, 0) 80%
  );
  bottom: 0;
  left: 0;
  content: "";
  z-index: 1;
  position: absolute;
}
.modal .swiper-slide::before {
  width: 100%;
  height: 40%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0.4990371148459384) 30%,
    rgba(0, 0, 0, 0) 70%
  );
  top: 0;
  left: 0;
  content: "";
  transform: rotate(180deg);
  z-index: 1;
  position: absolute;
}
.top .swiper-slide {
  border-radius: 32px;
  overflow: hidden;
  position: relative;
}
.top img,
.bottom img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cont {
  position: absolute;
  bottom: 32px;
  left: 32px;
  z-index: 2;
}
.cont h4 {
  font-size: 32px;
  margin-bottom: 0px;
  color: white;
}

.bottom .swiper {
  border-radius: 16px;
  overflow: visible;
}
.bottom .swiper-slide {
  border-radius: 16px;
  overflow: hidden;
}

.bottom .swiper-slide-thumb-active {
  border: 2px solid var(--red);
}

@media screen and (max-width: 768px) {
  .body {
    padding: 0 16px;
    width: 100%;
    height: 80%;
    border-radius: 16px;
  }
  .x {
    top: 16px;
    right: 16px;
  }
  .border {
    padding: 64px 0 132px 0;
    border-right: 0;
  }
  .stick {
    display: none;
  }
  .header {
    margin-bottom: 24px;
  }
  .header a {
    position: absolute;
    bottom: 64px;
    width: 90%;
    justify-content: center;
  }
  .img {
    height: 387px;
    border-radius: 4px;
    margin-bottom: 8px;
  }
  .img img {
    height: 100%;
  }
  .name {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 8px;
  }
  .sub {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .top .swiper,
  .top .swiper-slide {
    border-radius: 16px;
  }
  .modal .top {
    margin-bottom: 16px;
  }
  .bottom .swiper,
  .bottom .swiper-slide {
    border-radius: 8px;
  }
  .cont {
    bottom: 24px;
    left: 24px;
  }
  .cont h4 {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
}
</style>
