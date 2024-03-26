<template>
  <div class="site">
    <DesktopHeader class="whitening" />
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
.whitening {
  background: white;
  border-bottom: 1px solid #ebebeb;
}
.whitening :deep(.ant-btn) {
  color: var(--black);
}
.whitening :deep(path) {
  fill: var(--black);
}
.whitening :deep(.links a) {
  color: var(--black);
}
.whitening :deep(.white) {
  display: none;
}
.whitening :deep(.blue) {
  display: block;
}
.whitening :deep(.border) {
  border-color: #ebebeb;
}
@media screen and (max-width: 768px) {
  .whitening {
    display: none;
  }
}
</style>
