<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav id="mainMenu">

        <RouterLink to="/"><img src="@/assets/img/logo.png"></RouterLink>
        <RouterLink to="/cartes">Cartes</RouterLink>
        <RouterLink to="/decks">Decks</RouterLink>
      </nav>
  <RouterView />
</template>

<style>

</style>
