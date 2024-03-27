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

import translationsApi from "@/api/translations";

export default {
  data() {
    return {
      translations: [],
    };
  },

  async mounted() {
    try {
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Language: this.$i18n.locale,
        },
      });

      await this.$store.commit("getTranslations", translations.data);
    } catch (error) {
    } finally {
      this.loading = false;
    }
  },

  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
  },

  watch: {
    async currentLang() {
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Language: this.$i18n.locale,
        },
      });

      await this.$store.commit("getTranslations", translations.data);
    },
    $route() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },

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
