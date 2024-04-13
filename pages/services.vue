<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.services']" />

    <div class="stick"></div>

    <div class="container">
      <div class="border">
        <div class="item" v-for="item in services" :key="item.id" :id="item.id">
          <h4 class="name">{{ item.title }}</h4>
          <div class="images">
            <div
              class="image"
              v-for="service in item.services"
              :key="service.id"
              @click="getId(item.id)"
            >
              <img :src="service.image" alt="" class="pic" />
              <div class="content">
                <p class="par">{{ service.title }}</p>
                <div class="icon">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" :class="{ show: modalHandle }">
      <div class="space" @click="closeModal()"></div>
      <div class="body">
        <h2>{{ servicesOne.title }}</h2>
        <button class="x" @click="closeModal()">
          <XCom />
        </button>

        <div class="scroller" :class="{ auto: modalHandle }">
          <div
            class="piece"
            v-for="piece in servicesOne.services"
            :key="piece.id"
          >
            <div class="poster">
              <img :src="piece.image" alt="" />
            </div>
            <div class="text">
              <h4>{{ piece.title }}</h4>
              <div class="slot" v-html="piece.desc"></div>
            </div>
          </div>
        </div>

        <div class="icon">
          <img src="@/assets/img/logo/brand-blue.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRight from "~/components/SvgIcons/ArrowRight.vue";
import XCom from "@/components/SvgIcons/XCom.vue";
import servicesApi from "@/api/services";

export default {
  layout: "white",

  data() {
    return {
      modalHandle: false,
      servicesOne: {},
    };
  },

  async asyncData({ $axios, query, i18n }) {
    const servicesData = await servicesApi.getServices($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    const services = servicesData?.reverse();

    return {
      services,
    };
  },

  methods: {
    getId(id) {
      this.servicesOne = this.services.find((item) => item.id == id);

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

  components: {
    ArrowRight,
    XCom,
  },
};
</script>

<style scoped>
.master {
  position: relative;
}
.stick {
  width: 1px;
  height: 100%;
  background: #ebebeb;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
}
.border {
  padding: 0 0 120px 0;
  border-inline: 1px solid #ebebeb;
  display: flex;
  flex-direction: column;
}
.item {
  padding-top: 120px;
  margin-top: -40px;
}
.name {
  color: var(--Blue-night, #001935);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 38.4px */
  margin-bottom: 40px;
  padding-left: 16px;
  border-left: 8px solid var(--red);
}
.images {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  z-index: 2;
  position: relative;
}
.image {
  height: 240px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.image::after {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 43.15%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
}
.pic {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 16px;
}
.icon {
  display: flex;
  justify-content: flex-end;
}
.icon :deep(svg) {
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);
}
.par {
  overflow: hidden;
  color: var(--White, var(--White, #fff));
  text-overflow: ellipsis;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
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
  width: 1332px;
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
  overflow-y: hidden;
  height: auto;
  padding-right: 16px;
  margin-right: -16px;
  padding-bottom: 80px;
}
.auto {
  overflow-y: auto;
  height: 95%;
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
.icon {
  position: absolute;
  bottom: 0;
  right: 0;
  display: none;
}
.icon img {
  object-fit: contain;
  height: 250px;
  width: 490px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.1;
}
.modal h2 {
  overflow: hidden;
  color: var(--Black, #020105);
  text-overflow: ellipsis;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 38.4px */
  padding-left: 8px;
  border-left: 4px solid var(--red);
  margin-bottom: 40px;
}
.piece {
  display: grid;
  grid-template-columns: 470px 1fr;
  gap: 24px;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid #ebebeb;
}
.piece:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: 0;
}
.poster img {
  width: 100%;
  height: 266px;
  object-fit: cover;
  border-radius: 8px;
}
.text h4 {
  color: var(--Black, #020105);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
  margin-bottom: 16px;
}
.slot :deep(p) {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
}
@media screen and (max-width: 768px) {
  .stick {
    display: none;
  }
  .border {
    padding: 40px 0 64px 0;
    gap: 40px;
  }
  .name {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    padding-left: 12px;
    margin-bottom: 16px;
    border-width: 4px;
  }
  .images {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
  .image {
    height: 155px;
  }
  .par {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .content {
    padding: 10px;
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
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    padding-left: 8px;
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
  .piece {
    gap: 8px;
    grid-template-columns: repeat(1, 1fr);
  }
  .poster img {
    height: 190px;
    border-radius: 8px;
  }
  .text h4 {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 8px;
  }
  .text p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .modal h2 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 16px;
  }
  .item {
    padding-top: 90px;
    margin-top: -90px;
  }
}
</style>
