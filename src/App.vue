<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Turner Kendall" class="logo" src="/logo.webp" width="240" height="240" />
    <div class="wrapper">

      <HelloWorld />
     
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">More</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
    
  </header>

  <RouterView />
</template>
