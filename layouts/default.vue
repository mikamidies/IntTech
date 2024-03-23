<template>
  <div class="site">
    <DesktopHeader />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import DesktopHeader from "~/components/DesktopHeader.vue";

export default {
  components: {
    DesktopHeader,
  },
};
</script>

<style></style>
