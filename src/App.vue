<script setup>
import { RouterView } from 'vue-router'
import HomeIntro from './components/HomeIntro.vue'
import MainNav from './components/MainNav.vue';
</script>

<template>
  
  <header>
    <div class="header-logo">
      <img alt="Turner Kendall" class="logo" src="/logo.webp" width="200" height="200" />
    </div>
    <div class="wrapper">
      <HomeIntro />
      <MainNav />
    </div>
  </header>

  <RouterView />

</template>

<style>
  .header-logo{
    margin-left: 2rem;
  }
</style>