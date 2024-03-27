<template>
  <div class="master">
    <HomeHero />
    <HomeAbout />
    <HomeServices :services="services" />
    <HomeQuotes :quotes="quotes" />
    <HomeImagery :places="places" />
    <HomePartners :partners="partners" />
    <HomeNews :news="news" />
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
import quotesApi from "@/api/quotes";
import placesApi from "@/api/places";
import partnersApi from "@/api/partners";
import newsApi from "@/api/news";

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
    const quotes = await quotesApi.getQuotes($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });
    const places = await placesApi.getPlaces($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });
    const partners = await partnersApi.getPartners($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });
    const news = await newsApi.getNews($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    const services = servicesData.reverse();

    return {
      services,
      quotes,
      places,
      partners,
      news,
    };
  },
};
</script>

<style></style>
