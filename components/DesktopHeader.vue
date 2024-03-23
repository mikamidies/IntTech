<template>
  <div class="wrap">
    <div class="container">
      <div class="left">
        <NuxtLink class="brand" to="/">
          <img src="@/assets/img/logo/brand.svg" alt="" />
        </NuxtLink>
      </div>
      <div class="border">
        <ul class="links">
          <li>
            <NuxtLink to="/"> Home </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Services </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Partners </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Contacts </NuxtLink>
          </li>
        </ul>

        <div class="right">
          <div class="lang">
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item key="1"> Ru </a-menu-item>
                <a-menu-item key="2"> En </a-menu-item>
              </a-menu>
              <a-button> Ru <ChevronDown /> </a-button>
            </a-dropdown>
          </div>
          <div class="button">
            <button>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronDown from "@/components/SvgIcons/ChevronDown.vue";

export default {
  components: {
    ChevronDown,
  },
};
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding: 24px 0;
}
.container {
  display: grid;
  grid-template-columns: 184px 1fr;
  gap: 54px;
}
.border {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--border);
  padding: 0 0 0 40px;
}
.links {
  display: flex;
  align-items: center;
  gap: 40px;
}
.links a {
  color: var(--White, var(--White, #fff));
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
}
.nuxt-link-exact-active {
  opacity: 1 !important;
}
.right {
  display: flex;
  align-items: center;
  gap: 40px;
}
.button {
  color: var(--White, var(--White, #fff));
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 20px 24px;
  background: var(--red);
}
.wrap :deep(.ant-btn) {
  background: transparent;
  border: 0;
  color: var(--White, var(--White, #fff));
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
