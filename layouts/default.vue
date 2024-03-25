<template>
  <div class="site">
    <DesktopHeader />
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

<style></style>
