<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const raretes = ["Common", "Rare", "SuperRare","SecretRare","Special", "Leader"]

// Appel API de toutes les cartes d'une extension
const listeCartes = ref();
async function extensionCall(extensionID) {
    const requeteCartes = await axios.get(`https://raw.githubusercontent.com/buhbbl/punk-records/main/french/data/${extensionID}.json`)
    listeCartes.value = requeteCartes.data;
};

// Appel API de toutes les extensions disponibles
const listeExtensions = ref()
async function extensionListCall() {
    const requeteExtensions = await axios.get("https://raw.githubusercontent.com/buhbbl/punk-records/main/french/packs.json")
    listeExtensions.value = requeteExtensions.data
};

    onMounted(async () => {
        await extensionListCall()
        await extensionCall(622302);
  })

</script>

<template>
    <div>
        <select @change="console.log('changement d\'extension'); extensionCall(extensionID)" v-model="extensionID">
            <option v-for="extension in listeExtensions" :value="extension.id">{{ extension.raw_title }}</option>
        </select>
        <select v-model="rareteFiltre">
            <option value="*" default>Tous</option>
            <option v-for="rarete in raretes" :value="rarete">{{rarete}}</option>
        </select>
    </div>
    <div id="cartesContainer">
        <div v-for="carte in listeCartes" class="cardComponent">
            <img class="cardImg" :src="carte.img_full_url" :note="carte.rarity">
        </div>
    </div>
</template>

<style>

#cartesContainer {
    display:grid;
    grid-template-columns: repeat(7, 1fr);
}

.cardImg {
  width:200px;
}
.cardComponent {
    display:block;
}
.cardComponent.visible {
    display:none;
}

</style>