import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '@/views/Accueil.vue'
import Cartes from '@/views/Cartes.vue'
import CarteView from '@/views/CarteView.vue'
import Decks from '@/views/Decks.vue'
import DeckView from '@/views/DeckView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', name:'Accueil', component:Accueil},
    {path:'/cartes', name:'Cartes', component:Cartes},
    {path:'/carte/:cardID', name:'CarteView', component:CarteView},
    {path:'/decks', name:'Decks', component:Decks},
    {path:'/deck/:deckID', name:'DeckView', component:DeckView},
  ],
})

export default router
