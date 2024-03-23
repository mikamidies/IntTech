<template>
  <div class="master">
    <HomeHero />
    <HomeAbout />
    <HomeServices />
  </div>
</template>

<script>
import HomeHero from "@/components/HomePage/HomeHero.vue";
import HomeAbout from "@/components/HomePage/HeroAbout.vue";
import HomeServices from "~/components/HomePage/HomeServices.vue";

export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeServices,
  },
};
</script>

<style></style>
