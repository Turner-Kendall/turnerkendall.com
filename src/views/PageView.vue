<template>
    <section class="mt-5">
      <div v-if="pageRoute == 'rust'">
        <WhyRust />
      </div>
      <div v-if="pageRoute == 'certs'">
        <Gallery />
      </div>
      <div v-if="pageRoute == 'link'">
        <LinkPage />
      </div>
      <div v-if="pageRoute == 'more'">
        <MorePage />
      </div>
    </section>
  </template>
  
<script setup>
  import { useRoute } from "vue-router";
  import WhyRust from "../components/page/RustPage.vue";
  import LinkPage from "../components/page/LinkPage.vue";
  import Gallery from "@/components/page/GalleryPage.vue";
  import MorePage from "../components/page/MorePage.vue"
  const route = useRoute();
  const pageRoute = route.params.name; 
</script>