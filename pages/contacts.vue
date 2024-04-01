<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.contacts']" />

    <div class="stick"></div>

    <div class="container">
      <div class="border">
        <div class="top">
          <div class="item">
            <p class="sup">{{ $store.state.translations["main.email"] }}</p>
            <a
              class="value"
              :href="$store.state.translations[`main.email_val`]"
            >
              {{ $store.state.translations[`main.email_val`] }}
            </a>
          </div>
          <div class="item">
            <p class="sup">
              {{ $store.state.translations["main.our_number"] }}
            </p>
            <a
              class="value"
              :href="`tel:${$store.state.translations['main.num_val']}`"
            >
              {{ $store.state.translations[`main.num_val`] }}
            </a>
          </div>
          <div class="item">
            <p class="sup">{{ $store.state.translations["main.socials"] }}</p>
            <ul class="socs">
              <li>
                <a
                  :href="$store.state.translations[`main.you_val`]"
                  target="_blank"
                >
                  <YoutubeIcon />
                </a>
              </li>
              <li>
                <a
                  :href="$store.state.translations[`main.face_val`]"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  :href="$store.state.translations[`main.inst_val`]"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  :href="$store.state.translations[`main.link_val`]"
                  target="_blank"
                >
                  <LinkedinIcon />
                </a>
              </li>
              <li>
                <a
                  :href="$store.state.translations[`main.tel_val`]"
                  target="_blank"
                >
                  <TelegramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.7530369643664!2d69.29056607643777!3d41.33598329918157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef594e57c7adb%3A0xf2edaecd4ef2682!2sOOO%20%22INT%20TECH%22!5e0!3m2!1sru!2s!4v1711358933165!5m2!1sru!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div class="content">
            <p>{{ $store.state.translations["main.address"] }}</p>
            <h4>
              {{ $store.state.translations[`main.add_val`] }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InstagramIcon from "@/components/SvgIcons/InstagramIcon.vue";
import LinkedinIcon from "@/components/SvgIcons/LinkedinIcon.vue";
import YoutubeIcon from "@/components/SvgIcons/YoutubeIcon.vue";
import FacebookIcon from "@/components/SvgIcons/FacebookIcon.vue";
import TelegramIcon from "@/components/SvgIcons/TelegramIcon.vue";

export default {
  layout: "white",

  components: {
    InstagramIcon,
    LinkedinIcon,
    YoutubeIcon,
    FacebookIcon,
    TelegramIcon,
  },
};
</script>

<style scoped>
.master {
  position: relative;
}
.stick {
  width: 1px;
  height: 100%;
  background: #ebebeb;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
}
.border {
  padding: 88px 0 120px 0;
  border-inline: 1px solid #ebebeb;
  display: flex;
  flex-direction: column;
  gap: 80px;
}
.top {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-block: 1px solid #ebebeb;
  min-height: 125px;
}
.item {
  position: relative;
  z-index: 2;
  border-left: 8px solid var(--red);
  padding-left: 24px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}
.sup {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  margin-bottom: 12px;
}
.value {
  color: var(--Blue-night, #001935);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 38.4px */
}
.socs {
  display: flex;
  align-items: center;
  gap: 32px;
}
.socs a {
  display: flex;
}
.iframe {
  position: relative;
}
.iframe iframe {
  width: 100%;
  height: 566px;
  position: relative;
  z-index: 2;
}
.content {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  padding: 24px 40px;
  position: absolute;
  bottom: 72px;
  right: 0;
  z-index: 2;
}
.content p {
  color: var(--White, var(--White, #fff));
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  margin-bottom: 4px;
}
.content h4 {
  color: var(--White, var(--White, #fff));
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  max-width: 576px;
}
.socs :deep(path) {
  fill: #001935;
}
@media screen and (max-width: 768px) {
  .stick {
    display: none;
  }
  .border {
    padding: 64px 0;
  }
  .top {
    grid-template-columns: repeat(1, 1fr);
  }
  .item {
    padding: 16px;
    border-width: 4px;
    gap: 12px;
  }
  .sup {
    margin-bottom: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .value {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }
  .content h4 {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .content p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .content {
    padding: 16px 24px;
    max-width: 90%;
  }
}
</style>
