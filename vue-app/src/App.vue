<template>
  <header-component />
  <body-component />
  <footer-component />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import BodyComponent from './components/BodyComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    'body-component': BodyComponent,
    'footer-component': FooterComponent,
    'header-component': HeaderComponent
  }
};
</script>

<style>
</style>