<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
      <nav id="mainMenu">
        <RouterLink to="/"><img src="@/assets/img/logo.png"></RouterLink>
        <RouterLink to="/cartes"><FontAwesomeIcon class="menuIcon" icon="fa-solid fa-square" size="xl" style="transform: scale(.8,1.1)"/>Cartes</RouterLink>
        <RouterLink to="/decks"><FontAwesomeIcon class="menuIcon" icon="fa-solid fa-box" size="xl"/>Decks</RouterLink>
      </nav>
  <RouterView />
</template>

<style>

</style>
