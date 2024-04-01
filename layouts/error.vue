<template>
  <div class="error">
    <img src="@/assets/img/error.png" class="back" alt="" />
    <img src="@/assets/img/error-mobile.png" class="back_mobile" alt="" />

    <div class="four" v-if="error.statusCode === 404">
      <img src="@/assets/img/404.png" alt="" class="num" />

      <div class="content">
        <h1 class="title">{{ $store.state.translations["main.no_page"] }}</h1>
        <p class="sub">
          {{ $store.state.translations["main.back_to"] }}
        </p>
        <div class="link">
          <NuxtLink :to="localePath(`/`)">{{
            $store.state.translations["main.home"]
          }}</NuxtLink>
        </div>
      </div>
    </div>
    <div class="five" v-else>
      <div class="content">
        <h1 class="title">Ошибка сервера</h1>
        <p class="sub">
          {{ $store.state.translations["main.back_to"] }}
        </p>
        <div class="link">
          <NuxtLink :to="localePath(`/`)">{{
            $store.state.translations["main.home"]
          }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "empty", // you can set a custom layout for the error page
};
</script>

<style scoped>
.error {
  background: var(--Black, #020105);
  height: 100vh;
  color: white;
}
.four {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.title {
  color: var(--White, var(--White, #fff));
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 57.6px */
  margin-bottom: 8px;
  position: relative;
  z-index: 2;
}
.sub {
  color: var(--Text-txt-secondary, rgba(255, 255, 255, 0.75));
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
}
.num {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 320px;
  object-fit: contain;
  z-index: 1;
}
.cotent {
  position: relative;
  z-index: 2;
}
.link {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
}
.link a {
  color: var(--White, var(--White, #fff));
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  border-radius: 4px;
  background: var(--Pantone-2023, #bb2649);
  padding: 12px 24px;
  display: inline-flex;
}
.back {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.back_mobile {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: none;
}
@media screen and (max-width: 769px) {
  .back {
    display: none;
  }
  .back_mobile {
    display: flex;
  }
  .title {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    margin-bottom: 4px;
  }
  .sub {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    max-width: 80%;
    margin: 0 auto 16px auto;
  }
  .links a {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
}
</style>
