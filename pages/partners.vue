<template>
  <div class="master">
    <SiteTop />

    <div class="stick"></div>

    <div class="container">
      <div class="items">
        <div class="grid">
          <div class="item">
            <div class="header">
              <div class="img">
                <img src="@/assets/img/logo/part-1.svg" alt="" />
              </div>

              <a href="#" class="link"> Перейти <UpArrow /> </a>
            </div>
            <div class="content">
              <div class="html">
                MAXAR (США) - ведущая компания, управляющая крупнейшей
                группировкой спутников сверхвысокого разрешения на околоземной
                орбите, обеспечивающая обширный охват спутниковыми снимками
                высокого разрешения и предлагающая инновационные решения для
                дистанционного зондирования
              </div>
            </div>
          </div>
          <div class="item">
            <div class="header">
              <div class="img">
                <img src="@/assets/img/logo/part-2.svg" alt="" />
              </div>

              <a href="#" class="link"> Перейти <UpArrow /> </a>
            </div>
            <div class="content">
              <div class="html">
                MAXAR (США) - ведущая компания, управляющая крупнейшей
                группировкой спутников сверхвысокого разрешения на околоземной
                орбите, обеспечивающая обширный охват спутниковыми снимками
                высокого разрешения и предлагающая инновационные решения для
                дистанционного зондирования
              </div>
            </div>
          </div>
          <div class="item">
            <div class="header">
              <div class="img">
                <img src="@/assets/img/logo/part-3.svg" alt="" />
              </div>

              <a href="#" class="link"> Перейти <UpArrow /> </a>
            </div>
            <div class="content">
              <div class="html">
                MAXAR (США) - ведущая компания, управляющая крупнейшей
                группировкой спутников сверхвысокого разрешения на околоземной
                орбите, обеспечивающая обширный охват спутниковыми снимками
                высокого разрешения и предлагающая инновационные решения для
                дистанционного зондирования
              </div>
            </div>
          </div>
          <div class="item">
            <div class="header">
              <div class="img">
                <img src="@/assets/img/logo/part-4.svg" alt="" />
              </div>

              <a href="#" class="link"> Перейти <UpArrow /> </a>
            </div>
            <div class="content">
              <div class="html">
                MAXAR (США) - ведущая компания, управляющая крупнейшей
                группировкой спутников сверхвысокого разрешения на околоземной
                орбите, обеспечивающая обширный охват спутниковыми снимками
                высокого разрешения и предлагающая инновационные решения для
                дистанционного зондирования
              </div>
            </div>
          </div>
          <div class="item">
            <div class="header">
              <div class="img">
                <img src="@/assets/img/logo/part-5.svg" alt="" />
              </div>

              <a href="#" class="link"> Перейти <UpArrow /> </a>
            </div>
            <div class="content">
              <div class="html">
                MAXAR (США) - ведущая компания, управляющая крупнейшей
                группировкой спутников сверхвысокого разрешения на околоземной
                орбите, обеспечивающая обширный охват спутниковыми снимками
                высокого разрешения и предлагающая инновационные решения для
                дистанционного зондирования
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpArrow from "@/components/SvgIcons/UpArrow.vue";

export default {
  layout: "white",

  components: { UpArrow },
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
}
</style>
