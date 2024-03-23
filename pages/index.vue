<template>
  <div class="master">
    <HomeHero />
    <HomeAbout />
  </div>
</template>

<script>
import HomeHero from "@/components/HomePage/HomeHero.vue";
import HomeAbout from "@/components/HomePage/HeroAbout.vue";

export default {
  components: {
    HomeHero,
    HomeAbout,
  },
};
</script>

<style></style>
