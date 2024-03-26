<template>
  <div class="wrap" id="mobile">
    <ApplicationModal ref="appModal" />

    <div class="container">
      <div class="left">
        <NuxtLink class="brand" to="/">
          <img src="@/assets/img/logo/brand.svg" class="white" alt="" />
          <img src="@/assets/img/logo/brand-blue.svg" class="blue" alt="" />
        </NuxtLink>
      </div>

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
        <div
          class="burger"
          @click="menuHandle = !menuHandle"
          :class="{ x: menuHandle == true }"
        >
          <div class="stick"></div>
        </div>
      </div>
    </div>

    <div class="menu" :class="{ show: menuHandle == true }">
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

      <div class="button">
        <button @click="openAppModal()">Связаться с нами</button>
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

  data() {
    return {
      menuHandle: false,
    };
  },
  watch: {
    $route() {
      this.menuHandle = false;
    },
  },

  async mounted() {
    function scrollHeader() {
      const navbar = document.getElementById("mobile");
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
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding: 20px 0;
  transition: 0.3s;
}
.scroll {
  padding: 12px 0;
  background: white;
  border-bottom: 1px solid #ebebeb;
}
.blue {
  display: none;
}
.scroll .white {
  display: none;
}
.scroll .blue {
  display: flex;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 32px;
}
.brand {
  display: flex;
}
.brand img {
  width: 165px;
  object-fit: contain;
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
.right {
  display: flex;
  align-items: center;
  gap: 32px;
}
.stick {
  width: 30px;
  height: 2px;
  background: white;
  position: relative;
  transition: 0.3s;
}
.stick::after {
  width: 30px;
  height: 2px;
  background: white;
  position: absolute;
  top: -10px;
  left: 0;
  content: "";
  transition: 0.3s;
}
.stick::before {
  width: 30px;
  height: 2px;
  background: white;
  position: absolute;
  top: 10px;
  left: 0;
  content: "";
}
.scroll .stick,
.scroll .stick::after,
.scroll .stick::before {
  background: var(--black);
}
.scroll :deep(.ant-btn) {
  color: var(--black);
}
.scroll :deep(path) {
  fill: var(--black);
}
.menu {
  padding: 24px;
  position: fixed;
  top: 96px;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 998;
  padding-bottom: 120px;
  transform: translateX(-100%);
}
.menu.show {
  transform: translateX(0);
}
.links {
  display: flex;
  flex-direction: column;
}
.links a {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 16px;
  margin-bottom: 16px;

  color: var(--Secondary-color-dark-blue, #113);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.scroll .menu {
  top: 81px;
}
.links li:last-child a {
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: 0;
}
button {
  border-radius: 4px;
  background: var(--red);
  backdrop-filter: blur(5px);
  padding: 16px 24px;
  width: 100%;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: white;
}
.x .stick {
  transform: rotate(45deg);
}
.x .stick::after {
  transform: rotate(270deg);
  top: 0;
}
.x .stick::before {
  display: none;
}
</style>
