<template>
  <div class="wrap">
    <ApplicationModal ref="appModal" />

    <img src="@/assets/img/about.jpg" class="img" alt="" />

    <div class="container">
      <div class="border">
        <div class="grid">
          <div class="left">
            <h4 class="heading white">
              {{ $store.state.translations["main.brand"] }}
            </h4>
            <div class="pad">
              <p class="sub">
                {{ $store.state.translations["main.about-1"] }}
              </p>
              <p class="txt">
                {{ $store.state.translations["main.about-2"] }}
              </p>
              <button @click="openAppModal()">
                {{ $store.state.translations["main.contact_us"] }}
              </button>
            </div>
          </div>
          <div class="right">
            <div class="items">
              <div class="item">
                <p class="num">{{ $store.state.translations["main.num-1"] }}</p>
                <p class="value">
                  {{ $store.state.translations["main.value-1"] }}
                </p>
              </div>
              <div class="item">
                <p class="num">{{ $store.state.translations["main.num-2"] }}</p>
                <p class="value">
                  {{ $store.state.translations["main.value-2"] }}
                </p>
              </div>
              <div class="item">
                <p class="num">{{ $store.state.translations["main.num-3"] }}</p>
                <p class="value">
                  {{ $store.state.translations["main.value-3"] }}
                </p>
              </div>
              <div class="item">
                <p class="num">{{ $store.state.translations["main.num-4"] }}</p>
                <p class="value">
                  {{ $store.state.translations["main.value-4"] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openAppModal() {
      this.$refs.appModal.openModal();
    },

    closeAppModal() {
      this.$refs.appModal.closeModal();
    },
  },
};
</script>

<style scoped>
.wrap {
  background: var(--black);
  position: relative;
}
.container {
  color: white;
  position: relative;
  z-index: 2;
}
.border {
  border-inline: 1px solid var(--border);
  border-top: 1px solid var(--border);
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.left {
  border-right: 1px solid var(--border);
  padding: 108px 56px 116px 0;
}
.right {
  padding: 108px 0 116px 56px;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 70%;
  height: 100%;
  row-gap: 40px;
  column-gap: 72px;
}
.heading {
  margin-bottom: 20px;
}
.sub {
  color: var(--White, var(--White, #fff));
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */
  margin-bottom: 28px;
}
.txt {
  color: var(--White, var(--White, #fff));
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  margin-bottom: 40px;
}
.pad {
  padding-left: 40px;
}
button {
  border-radius: 4px;
  background: var(--red);
  backdrop-filter: blur(5px);
  padding: 12px 24px;
}
.num {
  margin-bottom: 4px;
  color: var(--red);
  font-size: 88px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 96.8px */
}
.value {
  color: var(--White, var(--White, #fff));
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  white-space: nowrap;
}
.img {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  object-fit: contain;
}
@media screen and (max-width: 768px) {
  .wrap {
    overflow: hidden;
  }
  .border {
    border-right: 0;
    margin-right: -16px;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .left {
    padding: 48px 0;
    border-right: 0;
  }
  .right {
    padding: 40px 20px;
    border-top: 1px solid var(--border);
  }
  .items {
    gap: 16px;
  }
  .num {
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .pad {
    padding: 0 36px 0 20px;
  }
  .sub {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .txt {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .value {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .img {
    height: 200px;
    object-fit: cover;
    right: -32px;
    opacity: 0.7;
  }
  button {
    width: 100%;
  }
}
</style>
