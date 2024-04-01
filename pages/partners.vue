<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.partners']" />

    <div class="stick"></div>

    <div class="container">
      <div class="items">
        <div class="grid">
          <div
            class="item"
            v-for="item in partners"
            :key="item.id"
            @click="getId(item.id)"
          >
            <div class="header">
              <div class="img">
                <img :src="item.image" alt="" />
              </div>

              <a :href="item.url" target="blank" class="link">
                {{ $store.state.translations["main.open"] }} <UpArrow />
              </a>
            </div>
            <div class="content">
              <div class="html" v-html="item.desc"></div>
            </div>
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

        <div class="logo">
          <img :src="partnersOne.image" alt="" />
        </div>

        <div class="scroller">
          <div class="iframe">
            <iframe
              ref="player"
              :src="partnersOne.video_url"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div class="html" v-html="partnersOne.desc"></div>
          <div class="video_link">
            <a :href="partnersOne.video_url" target="_blank"
              >{{ partnersOne.video_url }}
            </a>
          </div>
          <div class="link">
            <a :href="partnersOne.url" target="_blank">
              {{ partnersOne.url?.replace("https://", "")?.replace("/", "") }}
              <UpArrow />
            </a>
          </div>
          <div class="files">
            <div
              class="file"
              v-for="(file, index) in partnersOne.files"
              :key="file.id"
            >
              <a download target="_blank" :href="file.file">
                Product #{{ index + 1 }} <FileIcon />
              </a>
            </div>
          </div>
        </div>

        <div class="icon">
          <img src="@/assets/img/logo/brand-blue.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpArrow from "@/components/SvgIcons/UpArrow.vue";
import XCom from "@/components/SvgIcons/XCom.vue";
import FileIcon from "@/components/SvgIcons/FileIcon.vue";

import partnersApi from "@/api/partners";

export default {
  layout: "white",

  data() {
    return {
      modalHandle: false,
      partnersOne: {},
    };
  },

  async asyncData({ $axios, query, i18n }) {
    const partnersData = await partnersApi.getPartners($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    const partners = partnersData?.reverse();

    return {
      partners,
    };
  },

  async mounted() {
    console.log(this.$route);

    if (this.$route.hash) {
      this.getId(this.$route.hash.replace("#", ""));
    }
  },

  methods: {
    getId(id) {
      this.partnersOne = this.partners.find((item) => item.id == id);

      this.openModal();
    },

    openModal() {
      this.modalHandle = true;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.modalHandle = false;
      document.body.style.overflow = "auto";

      this.partnersOne = {};
    },
  },

  components: { XCom, UpArrow, FileIcon },
};
</script>

<style scoped>
.master {
  position: relative;
}
.items {
  padding: 88px 0 120px 0;
  border-inline: 1px solid #ebebeb;
}
.grid {
  border-top: 1px solid #ebebeb;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
.item {
  padding: 24px;
  border-bottom: 1px solid #ebebeb;
  cursor: pointer;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.header img {
  width: 150px;
  height: 75px;
  object-fit: contain;
}
.header a {
  color: var(--Pantone-2023, #bb2649);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  display: flex;
  align-items: center;
  gap: 8px;
}
.html {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
.icon {
  position: absolute;
  bottom: 0;
  right: 0;
}
.icon img {
  object-fit: contain;
  height: 250px;
  width: 490px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.1;
}
.logo img {
  width: 125px;
  height: auto;
  object-fit: contain;
  margin-bottom: 24px;
}
.iframe iframe {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 24px;
}
.video_link {
  margin: 24px 0;
}
.video_link a {
  color: var(--Agro-Blue, #3c4bdc);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  text-decoration-line: underline;
  cursor: pointer;
  word-break: break-all;
}
.modal .html {
  display: block;
}
.modal .html p {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  margin-bottom: 24px;
}
.link a {
  padding: 12px 24px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--red);
  color: var(--White, var(--White, #fff));
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  cursor: pointer;
  word-break: break-all;
}
.modal .link :deep(path) {
  stroke: white !important;
  fill: transparent !important;
}
.modal .link {
  margin-bottom: 24px;
}
.files {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.file a {
  border-radius: 4px;
  background: var(--Secondary-bg, #f5f5f7);
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--Pantone-2023, #bb2649);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  padding: 12px 24px;
  justify-content: center;
  position: relative;
  z-index: 2;
}
@media screen and (max-width: 768px) {
  .stick {
    display: none;
  }
  .items {
    padding: 64px 0;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .item {
    padding: 16px;
  }
  .img img {
    width: 125px;
    height: 64px;
  }
  .header {
    margin-bottom: 16px;
  }
  .html {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .header a {
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
  .logo img {
    margin-bottom: 16px;
    height: 40px;
    width: auto;
  }
  .iframe iframe {
    height: 190px;
    margin-bottom: 16px;
  }
  .icon {
    display: none;
  }
  .files {
    grid-template-columns: repeat(2, 1fr);
  }
  .modal .html p {
    margin-bottom: 16px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .video_link a {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
    text-decoration-line: underline;
  }
  .link a {
    width: 100%;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    justify-content: center;
  }
  .file a {
    padding: 8px 16px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
}
</style>
