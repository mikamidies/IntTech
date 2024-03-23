<template>
  <div class="wrap">
    <div class="stick"></div>

    <div class="container">
      <div class="border">
        <h4 class="heading">Наши сервисы</h4>
        <div class="items">
          <div class="item">
            <NuxtLink to="/">
              <div class="content">
                <p class="num">1</p>
                <p class="name">Spatial data</p>
              </div>

              <div class="hidden">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
                  ullam, cumque voluptate delectus temporibus error illum
                  obcaecati dicta cupiditate officiis amet natus minima earum
                  enim possimus rerum consectetur libero adipisci! Amet,
                  consectetur!
                </p>
                <p class="link">Подробнее <ArrowRight /></p>
              </div>
            </NuxtLink>
            <img src="@/assets/img/serv-1.jpg" alt="" class="pic" />
          </div>

          <div class="item">
            <NuxtLink to="/">
              <div class="content">
                <p class="num">2</p>
                <p class="name">Ready solutions</p>
              </div>

              <div class="hidden">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
                  ullam, cumque voluptate delectus temporibus error illum
                  obcaecati dicta cupiditate officiis amet natus minima earum
                  enim possimus rerum consectetur libero adipisci! Amet,
                  consectetur!
                </p>
                <p class="link">Подробнее <ArrowRight /></p>
              </div>
            </NuxtLink>
            <img src="@/assets/img/serv-2.jpg" alt="" class="pic" />
          </div>

          <div class="item">
            <NuxtLink to="/">
              <div class="content">
                <p class="num">3</p>
                <p class="name">Processing and Service</p>
              </div>

              <div class="hidden">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
                  ullam, cumque voluptate delectus temporibus error illum
                  obcaecati dicta cupiditate officiis amet natus minima earum
                  enim possimus rerum consectetur libero adipisci! Amet,
                  consectetur!
                </p>
                <p class="link">Подробнее <ArrowRight /></p>
              </div>
            </NuxtLink>
            <img src="@/assets/img/serv-3.jpg" alt="" class="pic" />
          </div>

          <div class="item">
            <NuxtLink to="/">
              <div class="content">
                <p class="num">4</p>
                <p class="name">Software</p>
              </div>

              <div class="hidden">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
                  ullam, cumque voluptate delectus temporibus error illum
                  obcaecati dicta cupiditate officiis amet natus minima earum
                  enim possimus rerum consectetur libero adipisci! Amet,
                  consectetur!
                </p>
                <p class="link">Подробнее <ArrowRight /></p>
              </div>
            </NuxtLink>
            <img src="@/assets/img/serv-1.jpg" alt="" class="pic" />
          </div>

          <div class="item">
            <NuxtLink to="/">
              <div class="content">
                <p class="num">5</p>
                <p class="name">Equipment and devices</p>
              </div>

              <div class="hidden">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
                  ullam, cumque voluptate delectus temporibus error illum
                  obcaecati dicta cupiditate officiis amet natus minima earum
                  enim possimus rerum consectetur libero adipisci! Amet,
                  consectetur!
                </p>
                <p class="link">Подробнее <ArrowRight /></p>
              </div>
            </NuxtLink>
            <img src="@/assets/img/serv-1.jpg" alt="" class="pic" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRight from "@/components/SvgIcons/ArrowRight.vue";

export default {
  components: {
    ArrowRight,
  },
};
</script>

<style scoped>
.wrap {
  position: relative;
}
.border {
  padding: 88px 0 104px 0;
  border-inline: 1px solid #ebebeb;
}
.items {
  padding-top: 44px;
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
}
.item {
  height: 576px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  width: 20%;
  transition: 1s;
}
.item:hover {
  width: 40%;
}
.item::after {
  background: linear-gradient(
    0deg,
    rgba(29, 0, 7, 0.8) 0%,
    rgba(29, 0, 7, 0.8) 100%
  );
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.pic {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
}
.content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 24px;
  z-index: 3;
  height: 122px;
}
.num {
  color: var(--White, var(--White, #fff));
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 38.4px */
  margin-bottom: 24px;
}
.name {
  color: var(--White, var(--White, #fff));
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  text-transform: uppercase;
}
.stick {
  width: 1px;
  height: 100%;
  background: #ebebeb;
  position: absolute;
  top: 0;
  left: 50%;
}
.item a {
  display: flex;
  height: 100%;
  position: relative;
  z-index: 5;
}
.hidden {
  bottom: 24px;
  left: 24px;
  position: absolute;
  max-width: 90%;
  transition: 1s;
  transform: translateY(120%);
}
.item:hover .hidden {
  transform: translateY(0);
}
.hidden p {
  color: var(--White, var(--White, #fff));
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 16px;
}
.link {
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0 !important;
}
</style>
