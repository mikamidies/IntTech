<template>
  <div class="wrap">
    <div class="container">
      <div class="border">
        <div class="left">
          <a href="https://www.esri.com" target="_blank">
            <img src="@/assets/img/logo/footer_logo.png" alt="" />
          </a>
        </div>
        <div class="mid">
          <ul class="links">
            <li>
              <NuxtLink :to="localePath('/')">{{
                $store.state.translations["main.home"]
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/services')">{{
                $store.state.translations["main.services"]
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/partners')">{{
                $store.state.translations["main.partners"]
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/contacts')">{{
                $store.state.translations["main.contacts"]
              }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="right">
          <div>
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
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p>{{ $store.state.translations["main.rights"] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import InstagramIcon from "./SvgIcons/InstagramIcon.vue";
import LinkedinIcon from "./SvgIcons/LinkedinIcon.vue";
import YoutubeIcon from "./SvgIcons/YoutubeIcon.vue";
import FacebookIcon from "./SvgIcons/FacebookIcon.vue";

export default {
  components: {
    InstagramIcon,
    LinkedinIcon,
    YoutubeIcon,
    FacebookIcon,
  },
};
</script>

<style scoped>
.wrap {
  background: var(--black);
  color: white;
  padding: 40px;
}
.border {
  border-block: 1px solid var(--border);
  display: grid;
  grid-template-columns: 2.5fr 5fr 2.5fr;
  min-height: 182px;
}
.left {
  border-right: 1px solid var(--border);
  display: flex;
  align-items: center;
}
.left img {
  width: 250px;
}
.mid {
  border-right: 1px solid var(--border);
  display: flex;
  justify-content: center;
  align-items: center;
}
.right {
  align-items: center;
  display: flex;
  justify-content: flex-end;
}
.links {
  display: flex;
  align-items: center;
  gap: 40px;
}
.links a {
  color: var(--White, var(--White, #fff));
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
}
.brand img {
  width: 200px;
  object-fit: contain;
}
.sup {
  color: var(--White, var(--White, #fff));
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  margin-bottom: 8px;
  text-align: right;
}
.socs {
  display: flex;
  align-items: center;
  gap: 32px;
}
.socs a {
  display: flex;
}
.bottom p {
  color: var(--White, var(--White, #fff));
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  text-align: center;
  padding-top: 24px;
}
@media screen and (max-width: 768px) {
  .border {
    border-block: 0;
    border-inline: 1px solid var(--border);
    padding: 24px 24px 0 24px;
    grid-template-columns: repeat(1, 1fr);
  }
  .wrap {
    padding: 0;
  }
  .right {
    justify-content: flex-start;
  }
  .left img {
    width: 100px;
  }
  .links {
    gap: 24px;
    flex-wrap: wrap;
  }
  .links a {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .left,
  .mid {
    border-right: 0;
    border-bottom: 1px solid var(--border);
    padding-bottom: 16px;
    margin-bottom: 16px;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .sup {
    text-align: left;
  }
  .right {
    border-bottom: 1px solid var(--border);
    padding-bottom: 16px;
  }
  .bottom {
    border-inline: 1px solid var(--border);
    padding: 16px 24px 24px 24px;
  }
  .bottom p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    padding: 0;
    text-align: left;
  }
}
</style>
