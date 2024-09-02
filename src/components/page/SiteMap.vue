<template>
    <main role="main" class="page-container">
      <div class="container">
        <h3>This site's sitemap</h3>
        <p v-for="link in links" :key="link.id">
          <a :href="link.url"> {{ link.name }}</a> - {{ link.description }}
        </p>
      </div>
    </main>
  </template>

<style scoped>
  h3{margin-bottom: 15px; border-bottom: 1px solid #ffffff17;}
  p{margin-bottom: 5px;}
</style>
  
  <script setup>

    const links = [
      {
        id: 1,
        "url": "/",
        "name": "Home",
        "description": "The Turner Kendall Home Page"
      },
      {
        id: 2,
        "url": "/about",
        "name": "About",
        "description": "About Turner Kendall and this site."
      },
      {
        id: 3,
        "url": "/page/more",
        "name": "More",
        "description": "Even more about me and this site.."
      },
      {
        id: 4,
        "url": "/page/link",
        "name": "Links",
        "description": "A list of links that I like."
      },
      {
        id: 5,
        "url": "/contact",
        "name": "Contact",
        "description": "A contact form aimed at my email addy."
      },
      {
        id: 6,
        "url": "/page/certs",
        "name": "Certs",
        "description": "Some Certifications I have picked up."
      },
      {
        id: 7,
        "url": "/page/rust",
        "name": "Why Rust",
        "description": "Why I am spending time writing Rust."
      },

    
    ];

  </script>
  