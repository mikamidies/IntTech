<template>
  <div class="site">
    <DesktopHeader class="whitening" />
    <MobileHeader class="mobile whited" />

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
.mobile {
  display: none;
}
.whited {
  padding: 12px 0 !important;
  background: white !important;
  border-bottom: 1px solid #ebebeb !important;
}
:deep(.blue) {
  display: none !important;
}
.whited :deep(.white) {
  display: none !important;
}
.whited :deep(.blue) {
  display: flex !important;
}
.whited :deep(.stick),
.whited :deep(.stick::after),
.whited :deep(.stick::before) {
  background: var(--black) !important;
}
.whited :deep(.ant-btn) {
  color: var(--black) !important;
}
.whited :deep(path) {
  fill: var(--black) !important;
}
.whited :deep(.menu) {
  top: 81px !important;
}
@media screen and (max-width: 768px) {
  .whitening {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
