<template>
  <div class="wrap">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/QOLBqQGmfcc?autoplay=1&mute=1&controls=0&loop=1&rel=0&playlist=QOLBqQGmfcc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

    <div class="container">
      <h4 class="title">
        Все наши знания о земле начинались с ее изучения из космоса
      </h4>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.wrap::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
}
iframe {
  transform: scale(1.2);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
}
.title {
  color: var(--White, var(--White, #fff));
  font-size: 56px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  max-width: 730px;
  padding-left: 40px;
  border-left: 8px solid #bb2649;
  margin-left: -16px;
}
.container {
  border-inline: 1px solid var(--border);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 3;
}
</style>
