<template>
    <div class="container-movies d-middle p-100">
            <CardMovie v-for="movie in listMovies" 
            :key="movie.imdbID"
            :id = "movie.imdbID"
            :title = "movie.Title"
            :poster = "movie.Poster"
            :year = "movie.Year"
            :type = "movie.Type"
            @get_id="emit_id"/>
    </div>
</template>

<script setup lang="ts">

    import CardMovie from "../card-movie.vue";
    import HTTP from "@/api/client-http"
    import { onMounted, ref, watch } from "vue";
    import type { Movie } from "./movie-model";
    import { defineProps } from 'vue';

    const props = defineProps <{
        searchedMovies: Movie[]
    }>();
    console.log("PROPS SEARCHED MOVIES", props.searchedMovies)

    let listMovies = ref<Movie[]>([])

    const getMovies = async () => {

        if(props.searchedMovies.length === 0 || props.searchedMovies.length === undefined){
            
            const response = await HTTP.get('', {
                params: {
                    s: "movies"
                }
            })

            listMovies.value = response.data.Search;

        } else {

            listMovies.value = props.searchedMovies
        }
    }

    const emit = defineEmits(['get_id'])
    const emit_id = async(id: string) => {

        emit('get_id', id)
    }

    onMounted(
    () => getMovies())

    watch(
        () => props.searchedMovies, 
        () => {
            getMovies()
        },
    )

</script>

<style scoped lang="scss">
    @import url('./_movies.scss');
</style>