<template>
  <SimpleKeyboard
    @onChange="onChange"
    @onKeyPress="onKeyPress"
    :input="value"
  />
</template>

<script>
import SimpleKeyboard from "./AppSimpleKeyboard.vue";

export default {
  props: {
    name: String,
  },

  emits: {
    "update:name": null,
    submit: null,
  },

  components: {
    SimpleKeyboard,
  },
  data: () => ({}),

  methods: {
    onChange(input) {
      this.$emit("update:name", input);
    },
    onKeyPress(button) {
      if (button === "{enter}") {
        this.$emit("submit");
      }
    },
    onInputChange(input) {
      this.$emit("update:name", input.target.value);
    },
  },
};
</script>

<style lang="scss"></style>
