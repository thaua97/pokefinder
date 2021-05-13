<template>
  <header class="pf-toolbar">
    <img class="pf-toolbar__logo" alt="Vue logo" src="../assets/logo.png" />
    <router-link v-if="checkHome" class="pf-btn" :to="back">
      voltar
    </router-link>
  </header>
</template>

<script>
export default {
  name: "toolbar",
  props: {
    back: {
      type: String,
      default: "/",
    },
  },
  computed: {
    checkHome() {
      return this.$route.name !== "Home";
    },
  },
};
</script>
