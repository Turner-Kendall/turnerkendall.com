<script setup> 
    import { RouterLink} from 'vue-router' 
</script>

<template>
   <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">More</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
</template>