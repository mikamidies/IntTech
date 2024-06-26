<template>
  <div class="wrap">
    <div class="stick"></div>

    <div class="container">
      <div class="border">
        <div class="header">
          <h4 class="heading">
            {{ $store.state.translations["main.news"] }}
          </h4>

          <div class="buttons">
            <button class="prev newsPrev">
              <ChevronDown />
            </button>
            <button class="next newsNext">
              <ChevronDown />
            </button>
          </div>
        </div>

        <div class="swiper" ref="newsSwiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="item in news"
              :key="item.id"
              @click="getId(item.id)"
            >
              <div class="img">
                <img :src="item.image" alt="" />
              </div>
              <div class="content">
                <p class="date">{{ item.created_at }}</p>
                <p class="name">
                  {{ item.title }}
                </p>
              </div>
            </div>
            <div
              class="swiper-slide"
              v-for="item in news"
              :key="item.index"
              @click="getId(item.id)"
            >
              <div class="img">
                <img :src="item.image" alt="" />
              </div>
              <div class="content">
                <p class="date">{{ item.created_at }}</p>
                <p class="name">
                  {{ item.title }}
                </p>
              </div>
            </div>
            <div
              class="swiper-slide"
              v-for="item in news"
              :key="item.count"
              @click="getId(item.id)"
            >
              <div class="img">
                <img :src="item.image" alt="" />
              </div>
              <div class="content">
                <p class="date">{{ item.created_at }}</p>
                <p class="name">
                  {{ item.title }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="modal" :class="{ show: modalHandle }">
          <div class="space" @click="closeModal()"></div>
          <div class="body">
            <button class="x" @click="closeModal()">
              <XCom />
            </button>

            <h4 class="par">
              {{ newsOne.title }}
            </h4>

            <div class="scroller">
              <div class="image">
                <img :src="newsOne.image" alt="" />
              </div>
              <div class="html" v-html="newsOne.text"></div>
            </div>

            <div class="logo">
              <img src="@/assets/img/logo/brand-blue.png" alt="" />
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
import XCom from "@/components/SvgIcons/XCom.vue";
import ChevronDown from "@/components/SvgIcons/ChevronDown.vue";

export default {
  components: {
    ChevronDown,
    XCom,
  },

  props: ["news"],

  data() {
    return {
      modalHandle: false,
      newsOne: {},
    };
  },

  methods: {
    getId(id) {
      this.newsOne = this.news.find((item) => item.id == id);

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
    new Swiper(this.$refs.newsSwiper, {
      slidesPerView: 2,
      spaceBetween: 16,
      navigation: {
        prevEl: ".newsPrev",
        nextEl: ".newsNext",
      },
      autoplay: {
        disabloOnInteraction: false,
        delay: 3000,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
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
  position: relative;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 44px;
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
.img {
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 20px;
}
.img img {
  transition: 0.3s;
  width: 100%;
  height: 318px;
  object-fit: cover;
}
.swiper-slide:hover img {
  transform: scale(1.1);
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
.swiper-slide {
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: -1;
  transition: 0.2s;
}
.modal.show {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
  z-index: 9990;
}
.space {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.48);
  z-index: 1;
}
.body {
  width: 812px;
  height: 100%;
  background: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 40px 80px;
  position: relative;
  z-index: 2;
  transition: 0.4s;
  transform: translateX(100%);
  overflow: hidden;
}
.modal.show .body {
  transform: translateX(0);
}
.x {
  position: absolute;
  top: 40px;
  right: 24px;
}
.scroller {
  overflow-y: auto;
  height: 90%;
  padding-right: 16px;
  margin-right: -16px;
}
.scroller::-webkit-scrollbar {
  width: 6px;
}
.scroller::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.scroller::-webkit-scrollbar-thumb {
  background: var(--red);
  border-radius: 4px;
}
.logo {
  position: absolute;
  bottom: 0;
  right: 0;
}
.logo img {
  object-fit: contain;
  height: 250px;
  width: 490px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.1;
}
.par {
  color: var(--Black, #020105);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
  border-left: 8px solid var(--red);
  padding-left: 16px;
  margin-bottom: 26px;
}
.image img {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 24px;
}
.html :deep(p) {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  margin-bottom: 24px;
}
.scroller {
  overflow-y: auto;
  height: 90%;
  padding-right: 16px;
  margin-right: -16px;
}
.scroller::-webkit-scrollbar {
  width: 6px;
}
.scroller::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.scroller::-webkit-scrollbar-thumb {
  background: var(--red);
  border-radius: 4px;
}
.logo {
  position: absolute;
  bottom: 0;
  right: 0;
  pointer-events: none;
}
.logo img {
  object-fit: contain;
  height: 250px;
  width: 490px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.1;
}
@media screen and (max-width: 768px) {
  .border {
    border-right: 0;
    padding-bottom: 120px;
  }
  .stick {
    display: none;
  }
  .buttons {
    position: absolute;
    bottom: 40px;
    right: 16px;
  }
  .header {
    margin-bottom: 24px;
  }
  .img img {
    height: 120px;
    border-radius: 8px;
    margin-bottom: 12px;
  }
  .date {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .name {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .modal {
    align-items: flex-end;
  }
  .body {
    height: 90%;
    padding: 24px 16px;
    transform: translateY(100%);
  }
  .par {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    padding-left: 16px;
    margin-bottom: 16px;
    border-left: 4px solid var(--red);
  }
  .x {
    top: 24px;
    right: 16px;
  }
  .x :deep(svg) {
    width: 16px;
    height: 16px;
  }
  .scroller {
    padding-right: 12px;
    margin-right: 0px;
  }
  .image img {
    height: 190px;
    margin-bottom: 16px;
  }
  .html p {
    margin-bottom: 16px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .logo {
    display: none;
  }
}
</style>
