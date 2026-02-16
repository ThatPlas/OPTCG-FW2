<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

const cardID = route.params.cardID;


// Appel API de toutes les cartes d'une extension
const infosCarte = ref();
async function cardCall(cardID) {
    const requeteCoordsCarte = await axios.get(`https://raw.githubusercontent.com/buhbbl/punk-records/main/french/index/cards_by_id.json`)
    const cardQueryCoords = requeteCoordsCarte.data[cardID];
    console.log(cardQueryCoords)
    const requeteInfosCarte = await axios.get(`https://raw.githubusercontent.com/buhbbl/punk-records/main/french/cards/${cardQueryCoords.pack_id}/${cardID}.json`)
    infosCarte.value = requeteInfosCarte.data
};


    onMounted(async () => {
        await cardCall(cardID)
  })

</script>

<template>
    {{ infosCarte }}
</template>

<style scoped></style>