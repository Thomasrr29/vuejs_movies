
import UniqueMovie from "@/components/unique-movie.vue";
import { createRouter, createWebHistory } from "vue-router";
import MoviesHome from "@/components/general/movies-home.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: MoviesHome,

    },
    {
        path: "/movie/:id",
        name: "unique movie",
        component: UniqueMovie 
    }
]

const router = createRouter(
   {
    history: createWebHistory(),
    routes
   }
)

export default router