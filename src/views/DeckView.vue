<script setup>
import { ref, computed } from 'vue';
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();

const deckID = route.params.deckID;

const deck = ref({id:1, nom:"fils de pute alias Yamato", description:"Deck où tu tapes très fort souvent", couleur:"jaune", leader:{id:2,nom:"yamatooooo"},cartes:[{id:1,nom:"louffy", rarity:"AAA"},{id:2,nom:"louffy", rarity:"AAA"},{id:1,nom:"louffy", rarity:"AAA"},{id:1,nom:"louffy", rarity:"AAA"},{id:1,nom:"louffy", rarity:"AAA"},{id:1,nom:"louffy", rarity:"AAA"},{id:1,nom:"louffy", rarity:"AAA"},]})

const cardClick = (cardID) => {
router.push({
    name:"CarteView",
    params: {cardID},
})
}

const decktriee = computed(() => deck.value.cartes.sort((a, b) => a.id - b.id))

</script>

<template>
    <h1 id="deckTitle">Deck n°{{ deckID }} : {{ deck.nom }}</h1>
    <div class="deckOverview"><a @click="cardClick(deck.leader.id)"><img class="card" src="@/assets/img/back-leader.webp"></a><p>{{ deck.description }}</p></div>
    <div id="deckCards">
        <a v-for="carte in decktriee" :key="carte.id" @click="cardClick(carte.id)" :note="carte.id"><img class="card" src="@/assets/img/back-character.webp"></a>
    </div>
</template>

<style scoped>
#deckTitle {
    text-align: center;
}
.card img, img.card {
    height:300px;
}

.deckOverview {
    display:inline-flex;
    align-items: center;
    margin:0 20%;
}
.deckOverview > * {
    margin:15px 20px;
}
.deckOverview p {
    max-width:65ch;
}

#deckCards {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}
</style>