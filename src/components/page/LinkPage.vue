<template>
    <main role="main" class="page-container">
      <div class="container">
        <h3>Some Links I Like:</h3>
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
        "url": "https://app.addy.io",
        "name": "Addy",
        "description": "Protect your real email address using email aliases."
      },
      {
        id: 2,
        "url": "https://rumble.com/",
        "name": "Rumble",
        "description": "On a mission to protect a free and open internet."
      },
      {
        id: 3,
        "url": "https://www.zerotier.com/",
        "name": "ZeroTier",
        "description": "Connect devices on a single network you control."
      },
      {
        id: 4,
        "url": "https://www.cloudflare.com/",
        "name": "Cloudflare",
        "description": "Processesing the web's traffic."
      },
      {
        id: 5,
        "url": "https://www.namecheap.com/",
        "name": "Namecheap",
        "description": "Domain Name and hosting services."
      },
      {
        id: 6,
        "url": "https://www.github.com/",
        "name": "Github",
        "description": "I've used other Git soluitions and they're fine."
      },
      {
        id: 7,
        "url": "https://crates.io/",
        "name": "Crates.io",
        "description": "The Rust community’s crate registry"
      },
      {
        id: 8,
        "url": "https://www.jetbrains.com/lp/mono/",
        "name": "JetBrains Mono",
        "description": "A typeface for developers."
      },
      {
        id: 9,
        "url": "https://thewhyfiles.com/",
        "name": "The Why Files",
        "description": "Mysteries, myths, and legends."
      },
      {
        id: 10,
        "url": "https://www.vultr.com/",
        "name": "Vultr Cloud",
        "description": "Global, automated cloud infrastructure."
      },
      {
        id: 11,
        "url": "https://openguild.wtf",
        "name": "Open Guild",
        "description": "An open Web 3.0 community elevating Polkadot."
      },
      {
        id: 12,
        "url": "https://dioxuslabs.com/",
        "name": "Dioxus",
        "description": "A Rust library for building apps."
      },
      {
        id: 13,
        "url": "https://web3forms.com/",
        "name": "Web3Forms",
        "description": "Contact Forms for Modern Websites"
      }
    ];

  </script>
  