import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Cartes from '../views/Cartes.vue'
import Decks from '../views/Decks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', name:'Accueil', component:Accueil},
    {path:'/cartes', name:'Cartes', component:Cartes},
    {path:'/decks', name:'Decks', component:Decks},
  ],
})

export default router
