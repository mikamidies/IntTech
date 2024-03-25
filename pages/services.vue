<template>
  <div class="master">
    <SiteTop />

    <div class="stick"></div>

    <div class="container">
      <div class="border">
        <div class="item">
          <h4 class="name">Satelite Data</h4>
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
  </div>
</template>

<script>
import ArrowRight from "~/components/SvgIcons/ArrowRight.vue";

export default {
  layout: "white",

  components: {
    ArrowRight,
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
</style>
