<template>
  <label
    class="radio cursor-pointer flex flex-row items-start"
    :title="title.replace(/<\/?[^>]+(>|$)/g, '')"
  >
    <div
      style="
        min-height: 34px;
        max-height: 34px;
        min-width: 24px;
        max-width: 24px;
        overflow: visible;
      "
    >
      <input type="radio" :id="id" :checked="checked" @click="changeData" />
    </div>
    <span class="opacity-60 pt-2 truncate" v-html="title"></span>
  </label>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    value: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    changeData(e) {
      if (e) this.$emit("input", !this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.flex{
  display: flex;
  cursor: pointer;
  flex-direction: row;
  width: auto;
  align-items: flex-start;
  justify-content: flex-start;
}
input {
  height: 0;
  width: 0;
  overflow: visible;
  position: relative;
  margin-right: 33px;
  &:before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    max-width: 20px;
    max-height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: 50%;
    transform: translate(0, -40%);
    cursor: pointer;
  }
  &:after {
    opacity: 0.2;
    top: 0;
    left: 10%;
    background-color: #0072B1;
    // background-image: url("/radio.svg");
    background-size: 0%;
    background-repeat: no-repeat;
    background-position: 50%;
    transform: translate(10%, -40%) scale(0);
    transition: 0.3s;
  }
  &::before {
    background-color: #ffffff;
    border: 2px solid #0072B1;
    // box-shadow: inset 0px 0px 0px 0px #0066ff;
    transition: 0.3s;
  }
  &:hover {
    &:after {
      transform: translate(10%, -40%) scale(0.6);
      opacity: 0.5;
      background-size: 40%;
      border-color: #0072B1;
    }
  }
  &:checked {
    &:after {
      opacity: 1;
      background-size: 50%;
      transform: translate(10%, -40%) scale(0.8);
      border-color: #0072B1;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    }
    &::before {
      // box-shadow: inset 0px 0px 0px 15px #0066ff;
    }
  }
}
</style>

<style lang="scss">
.radio {
  & * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
