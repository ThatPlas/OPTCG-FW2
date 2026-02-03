<script setup>

const cartes = [
    {nom: "Loufy", couleur: "Rouge", puissance:5000, rarete:'SR'},
    {nom: "Sans jean", couleur: "Rouge", puissance:5000, rarete:'R'},
    {nom: "Robin", couleur: "Rouge", puissance:5000, rarete:'SSR'},
    {nom: "Boku wa Doctaaa", couleur: "Rouge", puissance:5000, rarete:'TR'},
    {nom: "Zoro", couleur: "Rouge", puissance:5000, rarete:'L'},
]

</script>

<template>
    <div id="cartesContainer">
        <div v-for="carte in cartes">
            <img v-if="carte.rarete == 'L'" class="cardImg" src="@/assets/img/back-leader.webp">
            <img v-else class="cardImg" src="@/assets/img/back-character.webp"><br>
            {{ carte.nom }}
        </div>
    </div>
</template>

<style>

#cartesContainer {
    display:grid;
    grid-template-columns: repeat(5, 1fr);
}

.cardImg {
  width:200px;
}

</style>