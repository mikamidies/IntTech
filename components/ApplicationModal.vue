<template>
  <div class="wrapper" :class="{ show: modalHandle == true }">
    <div class="space" @click="closeModal()"></div>
    <div class="body">
      <div class="header">
        <h4 class="heading">
          {{ $store.state.translations["main.contact_us"] }}
        </h4>

        <button class="x" @click="closeModal()">
          <XCom />
        </button>
      </div>
      <form @submit.prevent="onSubmit">
        <input
          type="text"
          :placeholder="$store.state.translations[`main.name`]"
          required
          v-model="name"
        />
        <input
          type="number"
          :placeholder="$store.state.translations[`main.number`]"
          required
          v-model="number"
        />
        <textarea
          :placeholder="$store.state.translations[`main.message`]"
          v-model="message"
        ></textarea>

        <div class="flexer">
          <div class="check">
            <input type="checkbox" id="check" required />
            <label for="check">
              {{ $store.state.translations["main.label"] }}
              <a href="#">{{ $store.state.translations["main.label_link"] }}</a>
            </label>
          </div>

          <button type="submit">
            {{ $store.state.translations["main.send"] }} <UpArrow />
          </button>
        </div>
      </form>

      <div class="logo">
        <img src="../assets/img/logo/brand-blue.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import XCom from "./SvgIcons/XCom.vue";
import UpArrow from "./SvgIcons/UpArrow.vue";

import formApi from "@/api/form";

export default {
  data() {
    return {
      modalHandle: false,
      number: "",
      name: "",
      message: "",
    };
  },

  components: {
    XCom,
    UpArrow,
  },

  methods: {
    async onSubmit() {
      const formData = {
        name: this.name,
        number: this.number,
        message: this.message,
      };

      const res = await formApi.sendForm(formData);

      if (res && res.status === 201) {
        this.$notification["success"]({
          message: "Succesfully sent!",
        });
      } else {
        this.$notification["error"]({
          message: "Error!",
        });
      }

      this.name = "";
      this.number = "";
      this.message - "";

      this.closeModal();
    },

    openModal() {
      this.modalHandle = true;
      document.body.style.overflow = "hidden";
    },

    closeModal() {
      this.modalHandle = false;
      document.body.style.overflow = "auto";
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: -1;
  transition: 0.2s;
}
.wrapper.show {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
  z-index: 999;
}
.space {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.48);
  z-index: 1;
}
.body {
  width: 812px;
  height: 100%;
  background: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 40px 80px;
  position: relative;
  z-index: 2;
  transition: 0.4s;
  transform: translateX(100%);
}
.wrapper.show .body {
  transform: translateX(0);
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
form {
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  gap: 32px;
}
textarea {
  border: 0;
  width: 100%;
  resize: none;
  min-height: 212px;
}
textarea:focus {
  outline: none;
}
input,
textarea {
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  border-bottom: 1px solid #c2c2c3;
  padding: 12px 0;
}
input::placeholder,
textarea::placeholder {
  color: var(--grey-64, #5d5d5f);
}
.check {
  display: flex;
  align-items: center;
  gap: 8px;
}
.check label {
  color: var(--grey-64, #5d5d5f);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  max-width: 400px;
  display: block;
}
.check a {
  color: var(--red);
}
.flexer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flexer button {
  padding: 12px 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--red);
  color: var(--White, var(--White, #fff));
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
}
.flexer :deep(path) {
  stroke: white !important;
  fill: transparent !important;
}
.logo {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.logo img {
  width: 490px;
  object-fit: contain;
  opacity: 0.15;
}
.x {
  position: absolute;
  top: 40px;
  right: 24px;
}
@media screen and (max-width: 768px) {
  .wrapper {
    align-items: flex-end;
  }
  .body {
    padding: 24px 16px;
    min-height: 60%;
    height: auto;
    transform: translateY(100%);
  }
  .logo {
    display: none;
  }
  .flexer {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
  .flexer button {
    justify-content: center;
    width: 100%;
  }
  .x {
    top: 24px;
    right: 16px;
  }
  .heading {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    padding-left: 12px;
  }
  input,
  textarea {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    padding: 12px 0;
  }
  form {
    gap: 8px;
    margin-top: 24px;
  }
  textarea {
    min-height: 120px;
  }
  .check label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .check {
    align-items: flex-start;
  }
  .check input {
    height: 24px;
  }
}
</style>
