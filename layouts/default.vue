<template>
  <div class="site">
    <DesktopHeader class="desktop" />
    <MobileHeader class="mobile" />

    <main>
      <nuxt />
    </main>
    <DesktopFooter />
  </div>
</template>

<script>
import DesktopHeader from "~/components/DesktopHeader.vue";
import DesktopFooter from "@/components/DesktopFooter.vue";

export default {
  components: {
    DesktopHeader,
    DesktopFooter,
  },
};
</script>

<style scoped>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
main {
  flex: 1;
}
.mobile {
  display: none;
}

@media screen and (max-width: 768px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
