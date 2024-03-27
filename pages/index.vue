<template>
  <div class="master">
    <HomeHero />
    <HomeAbout />
    <HomeServices :services="services" />
    <HomeQuotes />
    <HomeImagery />
    <HomePartners />
    <HomeNews />
  </div>
</template>

<script>
import HomeHero from "@/components/HomePage/HomeHero.vue";
import HomeAbout from "@/components/HomePage/HeroAbout.vue";
import HomeServices from "~/components/HomePage/HomeServices.vue";
import HomeQuotes from "~/components/HomePage/HomeQuotes.vue";
import HomeImagery from "~/components/HomePage/HomeSearch.vue";
import HomePartners from "~/components/HomePage/HomePartners.vue";
import HomeNews from "@/components/HomePage/HomeNews.vue";

import servicesApi from "@/api/services";

export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeServices,
    HomeQuotes,
    HomeImagery,
    HomePartners,
    HomeNews,
  },

  data() {
    return {};
  },

  async asyncData({ $axios, query, i18n }) {
    const servicesData = await servicesApi.getServices($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    const services = servicesData.reverse();

    return {
      services,
    };
  },
};
</script>

<style></style>
