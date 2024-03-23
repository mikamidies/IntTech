<template>
  <div class="master">
    <HomeHero />
    <HomeAbout />
    <HomeServices />
    <HomeQuotes />
    <HomeImagery />
  </div>
</template>

<script>
import HomeHero from "@/components/HomePage/HomeHero.vue";
import HomeAbout from "@/components/HomePage/HeroAbout.vue";
import HomeServices from "~/components/HomePage/HomeServices.vue";
import HomeQuotes from "~/components/HomePage/HomeQuotes.vue";
import HomeImagery from "~/components/HomePage/HomeSearch.vue";

export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeServices,
    HomeQuotes,
    HomeImagery,
  },
};
</script>

<style></style>
