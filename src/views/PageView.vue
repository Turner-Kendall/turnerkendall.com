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
      <div v-if="pageRoute == 'latest'">
        <LatestPage />
      </div>
      <div v-if="pageRoute == 'map'">
        <SiteMap />
      </div>
    </section>
  </template>
  
<script setup>
  import { useRoute } from "vue-router";
  import WhyRust from "../components/page/RustPage.vue";
  import LinkPage from "../components/page/LinkPage.vue";
  import Gallery from "@/components/page/GalleryPage.vue";
  import MorePage from "../components/page/MorePage.vue"
  import SiteMap from "@/components/page/SiteMap.vue";
  import LatestPage from "@/components/page/LatestPage.vue";
  const route = useRoute();
  const pageRoute = route.params.name; 
</script>