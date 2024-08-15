<script setup>
import WelcomeItem from './WelcomeItem.vue'
import IconSkills from './icons/IconSkills.vue'
import NinjaIcon from './icons/IconNinja.vue'
import PreviousIcon from './icons/IconPreviously.vue'
import ExperienceIcon from './icons/IconExperience.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon> <NinjaIcon /> </template>
    <template #heading>Who is (James) Turner Kendall?</template>

    You might know me as <a href="https://tripkendall.com" target="_blank" rel="noopener">Trip Kendall</a>, <a href="https://x.com/tr1pwyr">@tr1pwyr</a>, James, or even 
    <a href="http://web.archive.org/web/20120212150556/http://imjtk.com/">JTk</a>.  Hey I've been around a while.  Right now
    I am writing Rust and it is an entirely new experience. 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon> <PreviousIcon /> </template>
    <template #heading>Previously</template>

   <ul>
    <li>AtMorph — Senior Developer</li>
    <li>D2 Interactive — COO</li>
    <li>eWebCorp - CTO </li>
    <li>Kaboodle Inc. - Lead Developer</li>
   </ul>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon> <IconSkills /> </template>
    <template #heading>Skills</template>

    I write code and manage dev stacks and servers. 
    I like VSCode, Git, Rust, and Jet Brain Mono. I also code in Python, Javascript, and Go. 
    I have experience with multiple databases and a plethora of frameworks.
    I love learning new technologies, techniques, and tools; I strive to continually level up. 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon> <ExperienceIcon /> </template>
    <template #heading>Experience</template>

    I Co-founded what became the biggest web dev company in the state, created Nikki Haley's website when she ran for governor, and delivered literally dozens
    of custom solutions as an indy dev... <a href="/about">-></a>
  </WelcomeItem>

</template>
