<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

const decks = [
    {id:1, nom:"fils de pute alias Yamato", description:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAA LA CONNEXION", couleur:"jaune"}
]

const deckClick = (deckID) => {
router.push({
    name:"DeckView",
    params: {deckID},
})
}

</script>

<template>
    <h1>Vos decks</h1>
    <div id="decksContainer">
        <a v-for="deck in decks" @click="deckClick(deck.id)">
            <div class="deckDiv">
                <img class="cardImg" src="@/assets/img/back-character.webp">
                <span class="deckName">{{ deck.nom }}</span>
                <p class="deckDesc">{{ deck.description }}</p>
            </div>
        </a>
    </div>
</template>

<style scoped>
#decksContainer {
    display:grid;
    grid-template-columns: repeat(8,1fr);
}

a:has(div.deckDiv) {
    margin:10px;
    text-decoration: none;
    color:white;
    text-align: center;
    cursor:pointer;
}

.deckDiv {
    background-color:#313131;
    border-radius: 25px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding:25px;
}

.deckName {
    font-weight: bold;
}
.deckDesc {
    color:rgb(160, 160, 160);
}

</style>