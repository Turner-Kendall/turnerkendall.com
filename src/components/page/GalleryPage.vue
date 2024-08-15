<template>
  <div class="gallery">
    <div v-for="photo in photos" :key="photo.img" class="gallery-item">
      <img :src="photo.img" :alt="photo.name" />
      <div class="overlay">
        <h3>{{ photo.name }}</h3>
        <p>{{ photo.description }}</p>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  const photos = [
    {
      "img": "/images/crypto-cert.webp",
      "name": "Cryptography",
      "description": "A certification from Saylor for their CS409 Cryptography Course."
    },
    {
      "img": "/images/data-science.webp",
      "name": "Data Science",
      "description": "A cert from maybe the best Udemy course I ever took - Data Science with Jose Portillo."
    },
    {
      "img": "/images/google-cloud-cert.webp",
      "name": "Google Cloud",
      "description": "I jumped at the chance to take one of the Coursera courses for free and was glad I chose the GCP class."
    },
    {
      "img": "/images/go-cert.webp",
      "name": "Go",
      "description": "I did one of those Complete Developers Guide courses for Go, a good introduction if nothing else."
    },
    {
      "img": "/images/hacker-rank-cert.webp",
      "name": "Hacker Rank",
      "description": "When I said Python inspired me again all those years ago I wasn't lying ❤️"
    },
    {
      "img": "/images/python-cv-cert.webp",
      "name": "Python Computer Vision",
      "description": "And believe it or not, these are not the only Python certs I have..."
    },
    {
      "img": "/images/python-security-cert.webp",
      "name": "Python Security",
      "description": "While I do more sec than Python these days this is the course that lit that fuse."
    },
    {
      "img": "/images/web-dev-cert.webp",
      "name": "Don't Call It a Comeback",
      "description": "This is the first class I did to see if I even still had what it took; little did I know..."
    }
  ]
</script>

<style scoped>
img {margin-top: 1rem;}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  width: 90%;
  margin: 0 auto;
}

.gallery img {
  width: 75%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.gallery img:hover {
  transform: scale(1.05);
}

p{font-size:.8rem; margin-bottom: 1.33rem;}
</style>