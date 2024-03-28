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
            <div
              class="swiper-slide"
              v-for="item in places"
              :key="item.id"
              @click="getId(item.id)"
            >
              <div class="img">
                <img :src="item.image" alt="" />
              </div>
              <div class="content">
                <p class="name">{{ item.title }}</p>
                <p class="sub">{{ item.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="modal" :class="{ show: modalHandle == true }">
          <div class="space">
            <div class="body">
              <button class="x" @click="closeModal()">
                <XCom />
              </button>

              <img :src="placesOne.image" alt="" class="cover" />
              <div class="cont">
                <h4>{{ placesOne.title }}</h4>
                <p>{{ placesOne.subtitle }}</p>
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
    };
  },

  methods: {
    getId(id) {
      this.placesOne = this.places.find((item) => item.id == id);

      this.openModal();
    },

    openModal() {
      this.modalHandle = true;
      document.body.style.overflow = "hidden";
    },

    closeModal() {
      this.modalHandle = false;
      document.body.style.overflow = "auto";
    },
  },

  mounted() {
    new Swiper(this.$refs.searchSwiper, {
      slidesPerView: 1.3,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 4.5,
          spaceBetween: 24,
        },
      },
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
.swiper-slide {
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.3s;
  z-index: 1000;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 1080px;
  border-radius: 24px;
  overflow: hidden;
  min-height: 720px;
  z-index: 100;
}
.body::after {
  width: 100%;
  height: 40%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0.4990371148459384) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  bottom: 0;
  left: 0;
  content: "";
  z-index: 100;
  position: absolute;
}
.body::before {
  width: 100%;
  height: 40%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0.4990371148459384) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  top: 0;
  left: 0;
  content: "";
  transform: rotate(180deg);
  z-index: 200;
  position: absolute;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 100;
}
.cont {
  position: relative;
  z-index: 103;
  position: absolute;
  bottom: 32px;
  left: 32px;
  color: white;
}
.cont h4 {
  font-size: 32px;
  margin-bottom: 0px;
  color: white;
}
.cont p {
  font-size: 18px;
  opacity: 0.8;
}

@media screen and (max-width: 768px) {
  .body {
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 80%;
    bottom: 0;
    top: auto;
    left: auto;
    transform: translate(0);
    border-radius: 0;
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
  .img img {
    height: 387px;
    border-radius: 4px;
    margin-bottom: 8px;
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
}
</style>
