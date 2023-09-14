<template>
  <header-component />
  <div>
    <router-view />
  </div>
  <footer-component />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    "footer-component": FooterComponent,
    "header-component": HeaderComponent,
  },
};
</script>

<style>
</style>