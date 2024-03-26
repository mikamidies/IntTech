<template>
  <div class="wrap">
    <div class="container">
      <div class="border">
        <div class="cardo">
          <h1 class="title">Наши партнеры</h1>
          <div class="line"></div>
          <ol>
            <li>
              <NuxtLink to="/"> Home </NuxtLink>
            </li>
            /
            <li>
              <p>Partners</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  padding-top: 111px;
  z-index: 2;
  position: relative;
}
.border {
  border-inline: 1px solid #ebebeb;
}
.cardo {
  background: var(--black);
  color: white;
  padding: 32px;
  border-radius: 0 0 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  color: var(--White, #fff);
  text-align: center;
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%; /* 61.6px */
}
.line {
  width: 420px;
  height: 2px;
  background: var(--red);
  margin: 16px 0;
}
ol {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
ol a {
  color: #c2c2c3;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
@media screen and (max-width: 768px) {
  .cardo {
    padding: 24px;
  }
  .title {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
  }
  .line {
    width: 100%;
  }
  .wrap {
    padding-top: 80px;
  }
  ol a,
  ol p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
  }
}
</style>
