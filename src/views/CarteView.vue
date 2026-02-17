<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

const cardID = route.params.cardID;


// Appel API de toutes les cartes d'une extension
const infosCarte = ref({effect:'', img_full_url: '', trigger:''});
async function cardCall(cardID) {
    const requeteCoordsCarte = await axios.get(`https://raw.githubusercontent.com/buhbbl/punk-records/main/french/index/cards_by_id.json`)
    const cardQueryCoords = requeteCoordsCarte.data[cardID];
    const requeteInfosCarte = await axios.get(`https://raw.githubusercontent.com/buhbbl/punk-records/main/french/cards/${cardQueryCoords.pack_id}/${cardID}.json`)
    infosCarte.value = requeteInfosCarte.data
    console.log(infosCarte.value)
};


    onMounted(async () => {
        await cardCall(cardID)
  })

function replaceLabels(oldString) {
    let newString = oldString
    if(oldString != null) {
        // Main labels
        newString = newString.replace("[Principale]","<span class='label mainLabel'>Principale</span>")
        newString = newString.replace("[Jouée]","<span class='label mainLabel'>Jouée</span>")
        newString = newString.replace("[En attaquant]","<span class='label mainLabel'>En attaquant</span>")

        // Warning labels
        newString = newString.replace("[Contre] ", "<span class='label warningLabel'><i class='counter'></i>Contre</span>")

        //Attribute labels
        newString = newString.replace("[Bloqueur] ", "<span class='label attributeLabel'>Bloqueur</span>")
        newString = newString.replace("[Initiative]","<span class='label attributeLabel'>Initiative</span>")

        // Exceptions
        newString = newString.replace("[Déclenchement] ", "<span class='label triggerLabel'>Déclenchement</span>")
        newString = newString.replace("[Une fois par tour] ", "<span class='label oncePerTurnLabel'>Une fois par tour</span>")
        newString = newString.replace("&nbsp;", " ")
    }
    return newString
}

const formattedName = computed(() => replaceLabels(infosCarte.value.name))
const formattedEffect = computed(() => replaceLabels(infosCarte.value.effect))
const formattedTrigger = computed(() => replaceLabels(infosCarte.value.trigger))

</script>

<template>
    <div id="mainInfos">
        <img class="card" :src="infosCarte.img_full_url">
        <div id="textInfos">
            <h1>{{ formattedName }}</h1>
            <h2 class="floatingText top right" style="top:-40px">{{ infosCarte.power }}</h2>
            <h2 class="floatingText top left" style="top:-40px">{{ infosCarte.cost }}</h2>
            <p id="types" class="label"><span v-for="type in infosCarte.types">{{ type }} <span v-if="type != infosCarte.types[infosCarte.types.length-1]"> / </span> </span></p>
            <p v-html="formattedEffect"></p>
            <p v-html="formattedTrigger" v-if="infosCarte.trigger != ''"></p>
        </div>
    </div>
</template>

<style scoped>
#mainInfos {
    display:flex;
    /* align-items: center; */
    justify-content: space-around;
    padding:20px;
}
#mainInfos h1 {
    text-align:center;
}
#mainInfos p {
    margin:5px 0;
}

#textInfos {
    padding:5px;
}
#textInfos #types {
    background-color:lightgray;
    color:slategray;
    width:fit-content;
    margin:0 auto 5px auto;
}

.card {
    height:500px;
}
</style>