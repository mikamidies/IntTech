<template>
  <div class="wrap" id="navbar">
    <div class="container">
      <div class="left">
        <NuxtLink class="brand white" to="/">
          <img src="@/assets/img/logo/brand.svg" alt="" />
        </NuxtLink>
        <NuxtLink class="brand blue" to="/">
          <img src="@/assets/img/logo/brand-blue.svg" alt="" />
        </NuxtLink>
      </div>
      <div class="border">
        <ul class="links">
          <li>
            <NuxtLink to="/"> Home </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services"> Services </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/partners"> Partners </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contacts"> Contacts </NuxtLink>
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
          <div class="button" @click="openAppModal()">
            <button>Contact us</button>
          </div>
        </div>
      </div>
    </div>

    <ApplicationModal ref="appModal" />
  </div>
</template>

<script>
import ChevronDown from "@/components/SvgIcons/ChevronDown.vue";

export default {
  components: {
    ChevronDown,
  },

  async mounted() {
    function scrollHeader() {
      const navbar = document.getElementById("navbar");
      if (this.scrollY >= 50) {
        navbar.classList.add("scroll");
      } else {
        navbar.classList.remove("scroll");
      }
    }
    window.addEventListener("scroll", scrollHeader);
  },

  methods: {
    openAppModal() {
      this.$refs.appModal.openModal();
    },

    closeAppModal() {
      this.$refs.appModal.closeModal();
    },
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
  transition: 0.3s;
}
.scroll {
  background: white;
  padding: 12px 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.container {
  display: grid;
  grid-template-columns: 184px 1fr;
  gap: 54px;
  padding-left: 40px;
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
  margin: -1px;
  cursor: pointer;
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
  padding: 0;
  transition: 0s;
}
.brand img {
  width: 172px;
  height: 100%;
  object-fit: contain;
}
.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.blue {
  display: none;
}
.scroll :deep(.ant-btn) {
  color: var(--black);
}
.scroll :deep(path) {
  fill: var(--black);
}
.scroll .links a {
  color: var(--black);
}
.scroll .white {
  display: none;
}
.scroll .blue {
  display: block;
}
.scroll .border {
  border-color: #ebebeb;
}
</style>
