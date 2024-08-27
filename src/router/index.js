import { createRouter, createWebHistory } from "vue-router";
import Pokemon from "../views/Pokemon.vue";
import Pokemones from "../views/Pokemones.vue"
import Home from "../views/Home.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name: "home",
            component: Home
        },
        {
            path:"/pokemones",
            name: "pokemones",
            component: Pokemones
        },
        {
            path: '/pokemon/:name',
            name: 'pokemon',
            component: Pokemon,
        }
    ]

})

export default router;