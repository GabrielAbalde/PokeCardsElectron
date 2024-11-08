import { createRouter, createWebHashHistory } from "vue-router";
import Pokemon from "../views/Pokemon.vue";
import Pokemones from "../views/Pokemones.vue"
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
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
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound,
        },
    ]

})

export default router;