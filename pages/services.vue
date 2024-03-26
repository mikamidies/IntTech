<template>
  <div class="master">
    <SiteTop />

    <div class="stick"></div>

    <div class="container">
      <div class="border">
        <div class="item">
          <h4 class="name">Satelite Data</h4>
          <div class="images">
            <div class="image" @click="openModal()">
              <img src="@/assets/img/inner-1.jpg" alt="" class="pic" />
              <div class="content">
                <p class="par">Archive data</p>
                <div class="icon">
                  <ArrowRight />
                </div>
              </div>
            </div>
            <div class="image">
              <img src="@/assets/img/inner-2.jpg" alt="" class="pic" />
              <div class="content">
                <p class="par">Archive data</p>
                <div class="icon">
                  <ArrowRight />
                </div>
              </div>
            </div>
            <div class="image">
              <img src="@/assets/img/inner-3.jpg" alt="" class="pic" />
              <div class="content">
                <p class="par">Archive data</p>
                <div class="icon">
                  <ArrowRight />
                </div>
              </div>
            </div>
            <div class="image">
              <img src="@/assets/img/inner-4.jpg" alt="" class="pic" />
              <div class="content">
                <p class="par">Archive data</p>
                <div class="icon">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="item">
          <h4 class="name">Ready solutions</h4>
          <div class="images">
            <div class="image">
              <img src="@/assets/img/inner-1.jpg" alt="" class="pic" />
              <div class="content">
                <p class="par">Archive data</p>
                <div class="icon">
                  <ArrowRight />
                </div>
              </div>
            </div>
            <div class="image">
              <img src="@/assets/img/inner-2.jpg" alt="" class="pic" />
              <div class="content">
                <p class="par">Archive data</p>
                <div class="icon">
                  <ArrowRight />
                </div>
              </div>
            </div>
            <div class="image">
              <img src="@/assets/img/inner-3.jpg" alt="" class="pic" />
              <div class="content">
                <p class="par">Archive data</p>
                <div class="icon">
                  <ArrowRight />
                </div>
              </div>
            </div>
            <div class="image">
              <img src="@/assets/img/inner-4.jpg" alt="" class="pic" />
              <div class="content">
                <p class="par">Archive data</p>
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
        <h2>Archive data</h2>
        <button class="x" @click="closeModal()">
          <XCom />
        </button>

        <div class="scroller">
          <div class="piece">
            <div class="poster">
              <img src="@/assets/img/inner-1.jpg" alt="" />
            </div>
            <div class="text">
              <h4>Planet lab (США) - ведущий поставщик спутниковых данных</h4>
              <p>
                Planet lab (США) - ведущий поставщик спутниковых данных для
                получения изображений Земли и геопространственной аналитики,
                предлагающий инновационные решения для мониторинга и анализа
                земной поверхности.Planet lab (США) - ведущий поставщик
                спутниковых данных для получения изображений Земли и
                геопространственной аналитики, предлагающий инновационные
                решения для мониторинга и анализа земной поверхности.
              </p>
            </div>
          </div>

          <div class="piece">
            <div class="poster">
              <img src="@/assets/img/inner-1.jpg" alt="" />
            </div>
            <div class="text">
              <h4>Planet lab (США) - ведущий поставщик спутниковых данных</h4>
              <p>
                Planet lab (США) - ведущий поставщик спутниковых данных для
                получения изображений Земли и геопространственной аналитики,
                предлагающий инновационные решения для мониторинга и анализа
                земной поверхности.Planet lab (США) - ведущий поставщик
                спутниковых данных для получения изображений Земли и
                геопространственной аналитики, предлагающий инновационные
                решения для мониторинга и анализа земной поверхности.
              </p>
            </div>
          </div>

          <div class="piece">
            <div class="poster">
              <img src="@/assets/img/inner-1.jpg" alt="" />
            </div>
            <div class="text">
              <h4>Planet lab (США) - ведущий поставщик спутниковых данных</h4>
              <p>
                Planet lab (США) - ведущий поставщик спутниковых данных для
                получения изображений Земли и геопространственной аналитики,
                предлагающий инновационные решения для мониторинга и анализа
                земной поверхности.Planet lab (США) - ведущий поставщик
                спутниковых данных для получения изображений Земли и
                геопространственной аналитики, предлагающий инновационные
                решения для мониторинга и анализа земной поверхности.
              </p>
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
import ArrowRight from "~/components/SvgIcons/ArrowRight.vue";
import XCom from "@/components/SvgIcons/XCom.vue";

export default {
  layout: "white",

  data() {
    return {
      modalHandle: false,
    };
  },

  methods: {
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
  padding: 88px 0 120px 0;
  border-inline: 1px solid #ebebeb;
  display: flex;
  flex-direction: column;
  gap: 80px;
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
  overflow-y: auto;
  height: 95%;
  padding-right: 16px;
  margin-right: -16px;
  padding-bottom: 80px;
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
.text p {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
}
</style>
